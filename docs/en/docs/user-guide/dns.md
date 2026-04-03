# DNS

要管理 DNS 区域与记录，请进入 **DNS <i class="fas fa-fw fa-atlas"></i>** 选项卡。

## 新增 DNS 区域

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增 DNS 区域**。
2. 在 **域名** 输入框填写域名。
   - 选择合适的区域模板。
   - 若域名需要不同的名称服务器，可在 **高级选项** 中修改。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 编辑 DNS 区域

1. 将鼠标悬停在要编辑的区域上。
2. 点击区域域名右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
3. 按需修改。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 查看 DNSSEC 公钥

1. 将鼠标悬停在要查看 DNSSEC 的区域上。
2. 点击区域域名右侧的 <i class="fas fa-fw fa-key"><span class="visually-hidden">DNSSEC</span></i> 图标。

## 暂停 DNS 区域

1. 将鼠标悬停在要暂停的区域上。
2. 点击区域域名右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击区域域名右侧的 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除 DNS 区域

1. 将鼠标悬停在要删除的区域上。
2. 点击区域域名右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 区域配置说明

### IP 地址

根域使用的 IP 地址。

### 模板

- **default**：标准模板，适用于大多数场景。
- **default-nomail**：标准模板但不托管邮件。
- **gmail**：邮件服务商是 Google Workspace 时使用。
- **office365**：邮件服务商是 Microsoft 365（Exchange）时使用。
- **zoho**：邮件服务商是 Zoho 时使用。
- **child-ns**：当该域将作为名称服务器使用时。

### 到期日期

此日期仅作提醒，Hestia 不使用该字段。

### SOA

SOA（起始授权）记录包含关于区域的管理信息。

### TTL

默认生存时间。TTL 越短，变更传播越快，但对服务器的请求更多。若即将修改 IP，可将 TTL 暂时调整为 300 秒（5 分钟）。

### DNSSEC

启用 DNSSEC 以提升安全性。但启用前需要在域名注册商处进行相应设置。详情参见 [DNS 集群](../server-administration/dns)。

## 在区域中新增 DNS 记录

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增记录**。
2. 填写表单。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 编辑 DNS 记录

1. 点击记录本身或悬停时出现的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
2. 按需修改。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 暂停 DNS 记录

1. 将鼠标悬停在要暂停的记录上。
2. 点击记录域名右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击记录域名右侧的 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除 DNS 记录

1. 将鼠标悬停在要删除的记录上。
2. 点击记录域名右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## DNS 记录字段说明

### 记录名（Record）

记录名：`record`.domain.tld。根域使用 `@`。

### 类型（Type）

支持以下类型：A、AAAA、CAA、CNAME、DNSKEY、IPSECKEY、KEY、MX、NS、PTR、SPF、SRV、TLSA、TXT。

### IP 或值

记录对应的 IP 或取值。

### 优先级

记录优先级，仅 MX 记录使用。

### TTL

默认生存时间。TTL 越短，变更传播越快，但对服务器的请求更多。若即将修改 IP，可将 TTL 暂时调整为 300 秒（5 分钟）。
