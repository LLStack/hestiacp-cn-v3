# 数据库与 phpMyAdmin 单点登录（SSO）

## 配置远程数据库主机

1. 假设远程数据库服务器已就绪。
2. 在 Hestia 服务器上执行（`mysql` 可替换为 `postgresql`）：

```bash
v-add-database-host mysql new-server.com root password
```

验证是否添加成功：

```bash
v-list-database-hosts
```

## 为什么不能使用 `http://ip/phpmyadmin/`

出于安全考虑已禁用。请使用 `https://host.domain.tld/phpmyadmin/`。

## 创建 phpMyAdmin 的 root 凭据

将 `myrootusername` 与 `myrootusername_password` 替换为你期望的值：

```bash
mysql -uroot
```

```sql
CREATE USER 'myrootusername'@'localhost' IDENTIFIED BY 'myrootusername_password';
GRANT ALL PRIVILEGES ON *.* TO 'myrootusername'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
QUIT;
```

## 如何允许 `http://ip/phpmyadmin/`

### Apache2

```bash
nano /etc/apache2/conf.d/ip.conf

# 在两个 </VirtualHost> 闭合标签之前加入
IncludeOptional /etc/apache2/conf.d/*.inc

# 重启 apache2
systemctl restart apache2

# 或在 /etc/apache2.conf 中添加
IncludeOptional /etc/apache2/conf.d/*.inc
```

### Nginx

```bash
nano /etc/nginx/conf.d/ip.conf

# 将以下内容
location /phpmyadmin/ {
  alias /var/www/document_errors/;
  return 404;
}
location /phppgadmin/ {
  alias /var/www/document_errors/;
  return 404;
}

# 替换为
include     /etc/nginx/conf.d/phpmyadmin.inc*;
include     /etc/nginx/conf.d/phppgadmin.inc*;
```

## 远程连接数据库

默认防火墙禁用了 3306 出站。先在[防火墙](./firewall)中放行 3306，然后编辑 `/etc/mysql/mariadb.conf.d/50-server.cnf`：

```bash
nano /etc/mysql/mariadb.conf.d/50-server.cnf

# 任选其一
bind-address = 0.0.0.0
bind-address = "your.server.ip.address"
```

## phpMyAdmin 单点登录（SSO）

注意：仅对单个数据库提供 SSO。数据库列表上的主 “PhpMyAdmin” 按钮仍使用现有凭据。

### 无法启用 phpMyAdmin SSO

确认 API 已启用并可用。SSO 通过 Hestia API 工作。

### 点击 SSO 按钮后跳转到 phpMyAdmin 登录页

自动登录可能受限。请查看 `/var/log/{webserver}/domains/{hostname.domain.tld.error.log`，常见错误与修复：

- `Unable to connect over API, please check API connection`
  1. 确认已启用 API。
  2. 将服务器公网 IP 加入“服务器设置”中的允许 API IP。
- `Access denied: There is a security token mismatch`
  1. 关闭再开启 phpMyAdmin SSO，以刷新密钥。
  2. 若处于防火墙/代理后，请暂时禁用后重试。
- `Link has expired`
  1. 刷新数据库页面后重试。

## 远程数据库

可在远程服务器上托管 MySQL 或 PostgreSQL。添加远程主机：

```bash
v-add-database-host TYPE HOST DBUSER DBPASS [MAX_DB] [CHARSETS] [TPL] [PORT]
```

示例：

```bash
v-add-database-host mysql db.hestiacp.com root mypassword 500
```

如需在 host 服务器上部署 phpMyAdmin 以连接远程数据库，可复制 `/etc/phpmyadmin/conf.d` 中的 `01-localhost` 并修改：

```php
$cfg["Servers"][$i]["host"] = "localhost";
$cfg["Servers"][$i]["port"] = "3306";
$cfg["Servers"][$i]["pmadb"] = "phpmyadmin";
$cfg["Servers"][$i]["controluser"] = "pma";
$cfg["Servers"][$i]["controlpass"] = "random password";
$cfg["Servers"][$i]["bookmarktable"] = "pma__bookmark";
```

请确保创建了 phpmyadmin 用户与数据库。脚本示例参见：`/usr/local/hestia/install/deb/phpmyadmin/pma.sh`
