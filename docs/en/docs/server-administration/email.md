# 邮件与邮件服务器

## 将内部通知改为通过 SMTP 发送

默认 Hestia（通知、找回密码、更新日志等）通过内部邮件发送。如需使用外部 SMTP 账户，执行：

```bash
bash /usr/local/hestia/install/upgrade/manual/configure-server-smtp.sh
```

按提示填写：主机、端口（25/465/587 等）、加密（STARTTLS 等）、用户名、密码与发件邮箱地址。

## 无法发送邮件

先检查 25 端口出站是否被运营商封锁：

```bash
telnet ASPMX.L.GOOGLE.COM 25
```

若连接失败，可：

1. 联系服务商开放 25 端口出站。
2. 在“编辑邮件域”或“系统设置”中配置 SMTP 中继（Relay），如：
   - [Amazon SES](https://aws.amazon.com/ses/)
   - [SMTP2GO](https://www.smtp2go.com)
   - [Brevo](https://www.brevo.com/)

## 什么是 SMTP 中继，如何设置？

SMTP 中继用于将服务器发出的邮件转交至第三方服务投递，避免因 IP 信誉差或服务商限制导致进垃圾箱/投递失败。注册中继服务，按指引配置 DNS 后，将提供的账户填入“全局 SMTP”或“编辑邮件域 -> SMTP relay”。

## 无法接收邮件

请核对 DNS 记录是否正确。若使用 Cloudflare，请关闭 `mail.domain.tld` 的代理（仅 DNS）。完成后可用 [MXToolBox](https://mxtoolbox.com/MXLookup.aspx) 检查。

## Spamhaus 拒收（zen.spamhaus.org）

参考流程（简要）：

1. 注册 [Spamhaus DQS](https://www.spamhaus.com/free-trial/sign-up-for-a-free-data-query-service-account/) 并验证邮箱；
2. 记录你的 Query Key（如 `HereYourQueryKey.zen.dq.spamhaus.net`）；
3. 在 `/etc/exim4/dnsbl.conf` 中用它替换 `zen.spamhaus.org`；
4. 在 `/etc/exim4/exim4.conf.template` 调整 `message` 文本以避免泄露 Query Key；
5. `systemctl restart exim4`。

## 禁用 Exim 的内部域查询（internal lookup）

当使用 SMTP 中继或外部托管邮箱（如 Gmail）且本机仍启用 DKIM 时，需禁用内部查询：

```bash
nano /etc/exim4/exim4.conf.template
```

将：

```bash
domains = !+local_domains
```

改为：

```bash
domains = *
```

## 安装 SnappyMail

```bash
v-add-sys-snappymail
```

### SnappyMail 后台登录

根目录有 `.snappymail` 包含后台用户名与密码：

```bash
Username: admin_f0e5a5aa
Password: D0ung4naLOptuaa
Secret key: admin_f0e5a5aa
```

访问 `https://webmail.domain.tld/?admin_f0e5a5aa` 登录。用后请删除该文件。

## Cloudflare 代理能用于邮件吗？

不能。请关闭 `mail.domain.tld` 的代理（仅 DNS）。Hestia 作为邮件服务器的建议记录：

- A 记录：`mail` 指向服务器 IP
- A 记录：`webmail` 指向服务器 IP
- MX 记录：`@` 指向 `mail.domain.tld`
- SPF：`@` -> `v=spf1 a mx ip4:your ip; ~all`
- TXT：`_domainkey` -> `t=y; o=~;`
- TXT：`mail._domainkey` -> `t=y; o=~DKIM key;`
- TXT：`_dmarc` -> `v=DMARC1; p=quarantine; sp=quarantine; adkim=s; aspf=s;`

DKIM 与 SPF 可在“邮件域”列表查看（见[文档](../user-guide/mail-domains#get-dns-records)）。

## 邮件进垃圾箱

请确认已设置 RDNS、SPF 与 DKIM。若仍失败，可能 IP 被列入黑名单。可尝试解除，或直接使用 SMTP 中继（如 Amazon SES）。

## 启用 ManageSieve

安装 Hestia 时加上 `--sieve` 参数；已安装的系统可运行 `/usr/local/hestia/install/upgrade/manual/install_sieve.sh`。

### 允许外部客户端访问 ManageSieve

在防火墙中开放 4190 端口（见[防火墙文档](./firewall)）。

### SnappyMail 启用 ManageSieve

编辑 `/etc/snappymail/data/_data_/_default_/domains/default.json`，将 `Sieve.enabled` 改为 `true`，并确认端口 4190 等设置。

## Oracle Cloud + SMTP Relay（PLAIN 登录）

在 `/etc/exim4/exim4.conf.template` 中将 `smtp_relay_login` 的 `public_name` 由 `LOGIN` 改为 `PLAIN`，并把 `client_send` 按 Oracle 需求改为以 `^` 分隔：

```bash
public_name = PLAIN
hide client_send = ^SMTP_RELAY_USER^SMTP_RELAY_PASS
```

更多细节见[论坛主题](https://forum.hestiacp.com/t/oracle-cloud-email-as-relay-doesnt-works/11304/19?)。

## 邮件钩子（hooks）

部分中继服务需要提前在账户中登记域名。可通过 `v-add-mail-domain` / `v-delete-mail-domain` 的扩展脚本自动化处理：

创建 `$HESTIA/data/extensions/v-add-mail-domain.sh` 与 `$HESTIA/data/extensions/v-delete-mail-domain.sh`，示例参见 Proxmox Mail Gateway 的集成脚本（[GitHub PR](https://github.com/hestiacp/hestiacp/pull/4365)）。
