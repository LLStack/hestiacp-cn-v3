# 账户

要访问账户设置，点击右上角的 <i class="fas fa-lg fa-fw fa-user-circle"><span class="visually-hidden">user</span></i> 按钮。

## 安全

### 密码

密码要求如下：

- 至少 8 个字符，建议 14 个或以上。
- 至少包含 1 个数字。
- 至少包含 1 个大写字母和 1 个小写字母。

如果你想生成强密码，可以使用 [1Password 的密码生成器](https://1password.com/password-generator/)。

### 双重认证（2FA）

1. 在账户设置中，勾选 **启用双重认证**。
2. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存** 按钮。
3. 使用认证应用扫描二维码。
4. 将你的 **账户恢复代码** 保存在安全的地方，以防丢失认证器访问权限。

::: details 需要 2FA 应用？
如果你还没有验证器应用，以下是一些推荐：

- iCloud 钥匙串 — [Windows](https://9to5mac.com/2022/07/25/icloud-passwords-windows-2fa-code/)、[macOS](https://9to5mac.com/2021/11/16/use-safari-password-manager-and-2fa-autofill/)、[iOS](https://9to5mac.com/2022/03/07/use-ios-15-2fa-code-generator-plus-autofill-iphone/)
- [Tofu Authenticator](https://www.tofuauth.com/) — 开源，仅 iOS
- [Aegis Authenticator](https://getaegis.app/) — 开源，仅 Android
- [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DAndroid)
- [Microsoft Authenticator](https://www.microsoft.com/en-ca/security/mobile-authenticator-app)
- [1Password](https://1password.com/) — 付费密码管理器
- [Bitwarden](https://bitwarden.com/) — 密码管理器；2FA 仅在高级版
- [Vaultwarden](https://docs.cloudron.io/apps/vaultwarden)（AGPL，[自托管](https://hub.docker.com/r/vaultwarden/server)），可配合 [Bitwarden](https://linuxiac.com/how-to-install-vaultwarden-password-manager-with-docker) 客户端
- [FreeOTP+](https://github.com/helloworld1/FreeOTPPlus) — 开源，仅 Android（[F-Droid](https://f-droid.org/en/packages/org.liberty.android.freeotpplus/)）

:::

### 登录限制

Hestia 提供以下选项帮助你保护账户安全：

- 禁用该账户的登录。
- 将你的 IP 地址加入白名单，仅允许该 IP 登录账户。

### 安全日志

安全日志包含多种信息，例如：网站域变更、API 访问、备份创建等。点击 **<i class="fas fa-fw fa-history"></i> 日志** 按钮查看。

### 登录历史

在安全日志页面，点击 **<i class="fas fa-fw fa-binoculars"></i> 登录历史** 按钮查看登录记录。记录包含登录时间、IP 地址与所使用浏览器的 User-Agent。

## SSH 密钥

点击 **<i class="fas fa-fw fa-key"></i> 管理 SSH 密钥** 按钮查看已安装的密钥。

### 添加 SSH 密钥

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 添加 SSH 密钥** 按钮。
2. 将你的公钥粘贴到文本区域。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存** 按钮。

### 删除 SSH 密钥

1. 将鼠标悬停在要删除的 SSH 密钥上。
2. 点击 SSH ID 右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">delete</span></i> 图标。

::: details 需要生成密钥？
如果你还没有 SSH 密钥，可以通过以下方式生成：

- Windows：使用 [Putty](https://www.ssh.com/academy/ssh/putty/windows/puttygen#running-puttygen)
- macOS 或 Linux：使用 `ssh-keygen`

你也可以使用应用管理密钥：

- [1Password](https://developer.1password.com/docs/ssh/manage-keys/)
- [Termius](https://www.termius.com/)

:::

## API 访问密钥

::: info
该选项对普通用户默认禁用。需要管理员在服务器设置中启用。
:::

点击 **<i class="fas fa-fw fa-key"></i> 访问密钥** 按钮查看密钥。访问密钥用于 API 鉴权，以替代用户名和密码。

### 创建访问密钥

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增访问密钥** 按钮。
2. 选择你希望启用的权限集。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存** 按钮。
4. 复制访问密钥与密钥秘钥。请务必安全保存秘钥，因为在关闭页面后将**无法**再次查看。

### 删除访问密钥

1. 将鼠标悬停在要删除的访问密钥上。
2. 点击访问密钥右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">delete</span></i> 图标。
