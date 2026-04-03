# DNS 集群与 DNSSEC

::: info
自 1.7.0 起支持 DNSSEC。DNSSEC 需要 主->从（Master -> Slave）架构；若现有是 主<->主（Master <-> Master），则不支持。且 DNSSEC 需要 Ubuntu 22.04 或 Debian 11 及以上。
:::

## 在 Hestia 上托管域名的 DNS

前置条件：

- 将域名的名称服务器（NS）指向你的 Hestia 服务器。
- 大多数注册商要求至少 2 个 DNS 服务器。
- 名称服务器通常需注册为 Glue 记录。
- NS 生效可能需要最多 24 小时。

步骤：

1. 在 Hestia 主节点上使用 **child-ns** 模板[创建 DNS 区域](../user-guide/dns#adding-a-dns-zone)。
2. 在注册商面板中，将该域的 NS 设置为 Hestia 服务器。

若需最小化 DNS 停机，或在多台服务器间自动同步 DNS 区域，可搭建 DNS 集群。

若你需要 DNSSEC，必须使用 主->从；若希望任意一台都能新增区域并双向同步，可使用 主<->主。

::: tip
新部署从节点后，请先确认主机名可解析且 SSL 证书有效。
:::

## DNS 集群搭建

主节点负责创建区域，从节点通过 API 接收。Hestia 支持 主<->主 或 主->从。主<->主 时，每个主同时也是从。

在每个从节点上，需要一个独立用户用于接收区域，并赋予 “Sync DNS User” 或 `dns-cluster` 角色。

::: info
自 1.6.0 起支持 API 访问密钥（Access Key + Secret Key）认证，强烈建议替代旧的用户名/密码方式。

如仍需使用旧 API（admin+密码），请在服务器设置中启用 “Enable legacy API”。
:::

### 主<->主（默认）使用 Hestia API

::: warning
此方案不支持 DNSSEC！
:::

1. 在每台 Hestia 上创建一个用于同步的“从”用户，用户名建议为 `dns-cluster` 或赋予 `dns-cluster` 角色。
2. 启用远端 DNS：

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'accesskey:secretkey' '' 'api' 'username'
```

（不推荐）使用 admin+password：

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'admin' 'strongpassword' 'api' 'username'
```

可链式搭建 主->从 或 主<->主<->主，链路数量不受限。

### 主->从 使用 Hestia API

::: info
局域网地址同步不可用（见[问题](https://github.com/hestiacp/hestiacp/issues/4295)），请使用公网 IP。
:::

准备从节点：

1. 在“服务器设置 -> 安全”中，将主节点 IP 加入 “Allowed IP addresses for API”。
2. 启用管理员（或全部用户）的 API 访问。
3. 在 admin 用户下创建 API Access Key，至少包含 `sync-dns-cluster` 权限。
4. 创建一个用于接收同步的用户：
   - 设置邮箱（通用地址即可）
   - 角色为 `dns-cluster`
   - 如非普通用户，勾选 “不允许登录控制面板”
   - 多从节点时，每台从的用户需唯一
5. 编辑 `/usr/local/hestia/conf/hestia.conf`，将 `DNS_CLUSTER_SYSTEM='hestia'` 改为 `DNS_CLUSTER_SYSTEM='hestia-zone'`。
6. 编辑 `/etc/bind/named.conf.options` 并重启 bind9：

   ```bash
   # 原
   allow-recursion { 127.0.0.1; ::1; };
   # 改为
   allow-recursion { 127.0.0.1; ::1; your.master.ip.address; };
   # 新增
   allow-notify{ your.master.ip.address; };
   ```

准备主节点：

1. 在主节点同样将 `DNS_CLUSTER_SYSTEM` 改为 `hestia-zone`。
2. 编辑 `/etc/bind/named.conf.options` 并重启 bind9：

   ```bash
   # 原
   allow-transfer { "none"; };
   # 改为（单从）
   allow-transfer { your.slave.ip.address; };
   # 多从
   allow-transfer { first.slave.ip.address; second.slave.ip.address; };
   # 多从时还可
   also-notify { second.slave.ip.address; };
   ```

3. 在主节点为每台从执行：

   ```bash
   v-add-remote-dns-host <slave host> <port> '<accesskey>:<secretkey>' '' 'api' '<slave user>'
   ```

   或旧 API（不推荐）：

   ```bash
   v-add-remote-dns-host slave.yourhost.com 8083 'admin' 'strongpassword' 'api' 'user-name'
   ```

4. 在从节点以 `dns-user` 列出区域 `v-list-dns-domains dns-user`，或登录其面板检查同步结果。

### 将现有 主<->主 转为 主->从

1. 主与从均将 `DNS_CLUSTER_SYSTEM` 改为 `hestia-zone`。
2. 主节点 `named.conf.options` 中将 `allow-transfer` 设置为从节点 IP（或多从），必要时添加 `also-notify`；
3. 从节点 `named.conf.options` 中放行来自主的递归与 notify；
4. 执行 `v-sync-dns-cluster` 同步。

## 启用 DNSSEC

::: warning
主<->主 模式下无法使用 DNSSEC。
:::

在域名设置中勾选 DNSSEC 并保存。要查看公钥，在 DNS 域列表点击 <i class="fas fas-key"></i>。

根据注册商支持，可能需要录入 DNSKEY 或 DS 记录。注册商保存公钥后，DNSSEC 即生效。

::: danger
删除或禁用 Hestia 中的私钥会导致域名不可访问。
:::

## 常见问题与排错

### 能按用户划分接收的 DNS 区域吗？

可以，在命令末尾提供用户名：

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'access_key:secret_key' '' '' 'username'
```

或（旧 API）：

```bash
v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd '' 'username'
```

### 无法添加远端 DNS 主机

报错示例：

```bash
/usr/local/hestia/func/remote.sh: line 43: return: Error:: numeric argument required
Error: api connection to slave.domain.tld failed
```

默认非本地 IP 禁止访问 API。请在从节点“服务器设置 -> 安全 -> 允许访问 API 的 IP”中加入主节点公网 IP 并保存。
