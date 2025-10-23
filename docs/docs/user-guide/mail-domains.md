# 邮件域

要管理邮件域，请进入 **邮件 <i class="fas fa-fw fa-mail-bulk"></i>** 选项卡。

## 新增邮件域

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增邮件域**。
2. 输入域名。
3. 选择需要的选项。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 编辑邮件域

1. 将鼠标悬停在要编辑的域名上。
2. 点击右侧 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
3. 编辑字段。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 暂停邮件域

1. 将鼠标悬停在要暂停的域名上。
2. 点击右侧 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击右侧 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除邮件域

1. 将鼠标悬停在要删除的域名上。
2. 点击右侧 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。将删除该邮件域及其下的**所有**邮箱账户。

## 邮件域配置

### Webmail 客户端

当前支持 Roundcube 与 SnappyMail（可选安装）。也可禁用 Webmail 访问。

### 捕获所有邮件（Catch‑all）

为不存在的收件人接收邮件的邮箱地址。

### 发送限速（Rate limit）

::: info
此选项仅对 admin 用户可见。
:::

设置单个账户每小时可发送邮件的上限。

### 垃圾邮件过滤器

::: info
该选项并非总是可用。
:::

为该域启用 SpamAssassin。

### 杀毒

::: info
该选项并非总是可用。
:::

为该域启用 ClamAV。

### DKIM

为该域启用 DKIM。

### SSL

1. 勾选 **为该域启用 SSL**。
2. 勾选 **使用 Let’s Encrypt 获取 SSL 证书** 以使用 Let’s Encrypt。
3. 按需启用 **自动 HTTPS 重定向** 或 **HTTP 严格传输安全（HSTS）**。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

如需使用自有证书，可将证书内容粘贴到文本框。

如启用 Let’s Encrypt 遇到问题，请参阅[SSL 证书](../server-administration/ssl-certificates)。

### SMTP 中继

允许用户为该域配置与服务器默认不同的 SMTP 中继，或绕过默认 Exim 路由，以提升投递率。

1. 勾选 **SMTP Relay**，将出现表单。
2. 输入你的中继服务商提供的信息。

### 获取 DNS 记录

若不在 Hestia 中托管 DNS，但仍要使用其邮件服务，点击 <i class="fas fa-atlas"><span class="visually-hidden">DNS</span></i> 图标以查看需要添加到 DNS 服务商的记录。

### Webmail 访问

默认启用 SSL 时，可通过 `https://webmail.domain.tld` 或 `https://mail.domain.tld` 访问；否则使用 `http://`。

## 为域新增邮箱账户

1. 点击该邮件域。
2. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增邮箱账户**。
3. 输入账户名（不含 `@domain.tld` 部分）与密码。
4. 可选：填写一个邮箱以接收登录信息。
5. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

如有需要，可修改右侧的 **高级选项**。页面右侧还展示了通过 SMTP、IMAP、POP3 的连接方式。

## 编辑邮箱账户

1. 将鼠标悬停在要编辑的账户上。
2. 点击账户右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
3. 编辑字段。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 暂停邮箱账户

1. 将鼠标悬停在要暂停的账户上。
2. 点击账户右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击账户右侧的 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除邮箱账户

1. 将鼠标悬停在要删除的账户上。
2. 点击账户右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 邮箱账户配置

### 配额（Quota）

账户允许使用的最大空间，包括邮件、联系人等。

### 别名（Aliases）

添加别名以将邮件重定向到主账户。仅输入用户名，例如 `alice`。

### 丢弃所有邮件

所有入站邮件均不转发且直接删除。

### 不存储转发邮件

开启后，所有已转发邮件将被删除。

### 自动回复

配置自动回复。

### 转发邮件

将所有入站邮件转发到指定邮箱地址。

::: warning
许多垃圾邮件过滤器默认会将转发邮件标记为垃圾邮件！
:::

### 发送限速（Rate limit）

设置该账户每小时可发送的邮件量上限。
