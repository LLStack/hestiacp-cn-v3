# REST API

Hestia 的 REST API 覆盖面板核心能力（我们内部用于 DNS 集群同步与 WHMCS 集成等）。你可用它创建用户、域名、数据库，甚至构建替代的 Web 界面。

参见[API 参考](../reference/api) 获取 PHP 代码示例；也可使用任意语言调用 API。

自 v1.6.0 起，我们引入了更灵活的 API 体系，允许非管理员用户按权限执行特定命令。

## 无法连接 API？

自 v1.4.0 起，为增强安全性，远程主机需先在服务器设置中加入 “允许访问 API 的 IP”。多个地址用换行分隔。要跳过 IP 过滤，可清空列表并写入 `allow-all`。

## 能禁用 API 吗？

可以。可在服务器设置中禁用 API（API 文件将被移除，连接被忽略）。注意禁用后部分功能不可用。

## 密码 vs API key vs 访问密钥（Access Keys）

### 访问密钥（Access Keys）

- 绑定到特定用户。
- 可精确限制权限（如仅 `v-purge-nginx-cache`）。
- 可禁用其他登录方式，仅允许用访问密钥调用 API。
- 可限制仅 admin 可用，或开放给所有用户。

### 密码（Deprecated）

- 仅应由 admin 使用。
- 更改 admin 密码需在所有使用处更新。
- 可执行所有命令。

### API key（Deprecated）

- 仅应由 admin 使用。
- 更改 admin 密码无影响。
- 可执行所有命令。

## 配置 Access/Secret Key 认证

在面板中创建访问密钥，见[账户 > API 访问密钥](../user-guide/account#api-access-keys)。

::: tip
也可用命令创建。若需管理员权限，请在初始 admin 用户下创建：
:::

```bash
v-add-access-key 'admin' 'profile' test json
```

若需允许所有命令：

```bash
v-add-access-key 'admin' '*' test json
```

### 自定义 API Key Profile

在 `/usr/local/hestia/data/api/` 新建文件，内容示例：

```bash
ROLE='admin'
COMMANDS='v-list-web-domains,v-add-web-domain,v-list-web-domain'
```

- ROLE：`user` 或 `admin`
- COMMANDS：逗号分隔的命令列表

若第三方已支持 `ACCESS_KEY:SECRET_KEY` 形式，可直接用新格式替代旧 API key。

## 旧式 API key（不推荐）

::: warning
已被访问密钥方式取代，强烈建议使用更安全的新方法。
:::

仍需生成可运行：`v-generate-api-key`。

## 返回码

| 值  | 名称          | 说明                   |
| --- | ------------- | ---------------------- |
| 0   | OK            | 成功                   |
| 1   | E_ARGS        | 参数不足               |
| 2   | E_INVALID     | 对象或参数无效         |
| 3   | E_NOTEXIST    | 对象不存在             |
| 4   | E_EXISTS      | 对象已存在             |
| 5   | E_SUSPENDED   | 对象已被暂停           |
| 6   | E_UNSUSPENDED | 对象已取消暂停         |
| 7   | E_INUSE       | 对象正被使用，无法删除 |
| 8   | E_LIMIT       | 受套餐限制，无法创建   |
| 9   | E_PASSWORD    | 密码错误/无效          |
| 10  | E_FORBIDEN    | 当前用户无权访问该对象 |
| 11  | E_DISABLED    | 子系统被禁用           |
| 12  | E_PARSING     | 配置损坏               |
| 13  | E_DISK        | 磁盘空间不足           |
| 14  | E_LA          | 服务器负载过高         |
| 15  | E_CONNECT     | 连接失败，主机不可达   |
| 16  | E_FTP         | FTP 服务器无响应       |
| 17  | E_DB          | 数据库服务器无响应     |
| 18  | E_RDD         | RRDtool 更新失败       |
| 19  | E_UPDATE      | 更新失败               |
| 20  | E_RESTART     | 服务重启失败           |
