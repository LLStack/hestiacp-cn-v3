# 快速开始

本节将帮助你在服务器上安装 Hestia。如果你已经安装了 Hestia，只是想查看安装选项，可以直接跳过此页。

::: warning
安装程序必须以 **root** 身份运行，可以直接在终端执行，或通过 SSH 远程执行。否则安装将不会继续。
:::

## 系统要求

::: warning
为保证稳定性与正确性，Hestia 必须安装在全新安装的操作系统之上。
如需更多灵活性，请参见下方“自定义安装”。
:::

|              | 最低配置                                   | 推荐配置                         |
| ------------ | ------------------------------------------ | -------------------------------- |
| **CPU**      | 1 核，64 位                                | 4 核                             |
| **内存**     | 1 GB（不安装 SpamAssassin 与 ClamAV）      | 4 GB                             |
| **磁盘**     | 10 GB HDD                                  | 40 GB SSD                        |
| **操作系统** | Debian 11 或 12<br>Ubuntu 22.04、24.04 LTS | 最新 Debian <br> 最新 Ubuntu LTS |

::: warning
Hestia 仅支持 AMD64 / x86_64 与 ARM64 / aarch64 架构，并需要 64 位操作系统！
当前不支持 i386 或 ARM7 架构处理器。
:::

### 支持的操作系统

- Debian 11 或 12
- Ubuntu 22.04 或 24.04

::: warning
Hestia 不支持非 LTS 版本的操作系统。例如若安装在 Ubuntu 23.10，将不提供官方支持。
:::

## 常规安装

交互式安装程序将安装 Hestia 的默认软件配置。

### 步骤 1：下载

下载最新版本的安装脚本：

```bash
wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
```

如果因 SSL 校验错误导致下载失败，请确保系统已安装 ca-certificates 软件包，可使用以下命令进行安装：

```bash
apt-get update && apt-get install ca-certificates
```

### 步骤 2：执行

开始安装时，运行脚本并按照屏幕提示进行：

```bash
bash hst-install.sh
```

安装完成后，你将收到安装时填写邮箱的欢迎邮件（如适用），并在屏幕上看到登录访问服务器的说明。

## 自定义安装

如果你希望自定义要安装的软件，或进行无人值守安装，请使用自定义安装方式。

查看可用选项列表：

```bash
bash hst-install.sh -h
```

### 安装选项列表

::: tip
更简单的方式是使用[安装脚本生成器](/install)来选择安装选项。
:::

要选择安装的软件，可向安装脚本传入参数。完整选项如下：

```bash
-a, --apache Install Apache [yes | no] default: yes
-w, --phpfpm Install PHP-FPM [yes | no] default: yes
-o, --multiphp Install MultiPHP [yes | no] default: no
-v, --vsftpd Install VSFTPD [yes | no] default: yes
-j, --proftpd Install ProFTPD [yes | no] default: no
-k, --named Install BIND [yes | no] default: yes
-m, --mysql Install MariaDB [yes | no] default: yes
-M, --mysql8 Install MySQL 8 [yes | no] default: no
-g, --postgresql Install PostgreSQL [yes | no] default: no
-x, --exim Install Exim [yes | no] default: yes
-z, --dovecot Install Dovecot [yes | no] default: yes
-Z, --sieve Install Sieve [yes | no] default: no
-c, --clamav Install ClamAV [yes | no] default: yes
-t, --spamassassin Install SpamAssassin [yes | no] default: yes
-i, --iptables Install iptables [yes | no] default: yes
-b, --fail2ban Install Fail2Ban [yes | no] default: yes
-q, --quota Filesystem Quota [yes | no] default: no
-W, --webterminal Web Terminal [yes | no] default: no
-d, --api Activate API [yes | no] default: yes
-r, --port Change Backend Port default: 8083
-l, --lang Default language default: en
-y, --interactive Interactive install [yes | no] default: yes
-s, --hostname Set hostname
-e, --email Set admin email
-u, --username Set admin user
-p, --password Set admin password
-D, --with-debs Path to Hestia debs
-f, --force Force installation
-h, --help Print this help
```

::: tip
--multiphp（多 PHP）选项也可接受用逗号分隔的 PHP 版本列表。例如：--multiphp 8.3,8.4 将安装 PHP 8.3 与 PHP 8.4
:::

#### 示例

```bash
bash hst-install.sh \
	--interactive no \
	--hostname host.domain.tld \
	--email email@domain.tld \
	--password p4ssw0rd \
	--lang fr \
	--apache no \
	--named no \
	--clamav no \
	--spamassassin no \
	--multiphp '8.2,8.3,8.4'
```

上述命令将以法语安装 Hestia，并包含以下软件：

- Nginx Web 服务器
- PHP-FPM 应用服务器（PHP 版本 8.2、8.3 与 8.4）
- MariaDB 数据库服务器
- iptables 防火墙 + Fail2Ban 入侵防护
- Vsftpd FTP 服务器
- Exim 邮件服务器
- Dovecot POP3/IMAP 服务器

## 接下来做什么？

至此，你应已在服务器上完成 Hestia 的安装。现在可以创建新用户，随后你（或他们）即可在服务器上添加新网站。

访问控制面板：转到 `https://host.domain.tld:8083` 或 `http://your.public.ip.address:8083`
