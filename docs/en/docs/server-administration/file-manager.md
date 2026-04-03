# 文件管理器（后台）

## 如何启用或禁用后台文件管理器

全新安装默认启用后台文件管理器。

启用或更新文件管理器：

```bash
v-add-sys-filemanager
```

禁用文件管理器：

```bash
v-delete-sys-filemanager
```

## 文件管理器提示 “Unknown Error”

通常是因为你在 `/etc/ssh/sshd_config` 删除或修改了 `Subsystem sftp /usr/lib/openssh/sftp-server`，导致安装脚本无法更新为 `Subsystem sftp internal-sftp`。

简要修复：在 `/etc/ssh/sshd_config` 添加 `Subsystem sftp internal-sftp`。

详细说明：安装脚本 `./install/hst-install-{distro}.sh` 会修改 `/etc/ssh/sshd_config`。例如 Debian 的变更：

```bash
# HestiaCP Changes to the default /etc/ssh/sshd_config in Debian 10 Buster

# Forced default yes
PasswordAuthentication yes

# Changed from default 2m to 1m
LoginGraceTime 1m

# Changed from default /usr/lib/openssh/sftp-server to internal-sftp
Subsystem sftp internal-sftp

# Changed from default yes
DebianBanner no
```

将其他参数还原为默认、并设置 `PasswordAuthentication no` 也无法复现该错误，因此基本可确定问题出在 `Subsystem sftp internal-sftp`。

如需进一步排查，可查看 Hestia Nginx 日志：

```bash
tail -f -s0.1 /var/log/hestia/nginx-error.log
```

## 修改了 SSH 端口后无法使用文件管理器

SSH 端口会缓存于 PHP 会话中。退出并重新登录以重置会话即可恢复。
