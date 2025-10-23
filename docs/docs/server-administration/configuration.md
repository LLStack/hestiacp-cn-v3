# 服务器配置

## 无法登录

安装依赖时我们使用 Composer。当前无法在 hestia-php 下运行它，故通过 `/usr/bin/php` 执行。请确保主 PHP 版本允许 `proc_open`。后续会考虑在 hestia-php 下支持 Composer 安装。

## 配置文件参考

建议先阅读各组件官方文档：

- Nginx：[官方文档](https://nginx.org/en/docs/)
- Apache2：[官方文档](http://httpd.apache.org/docs/2.4/)
- PHP-FPM：[官方文档](https://www.php.net/manual/en/install.fpm.configuration.php)

也可访问[社区论坛](https://forum.hestiacp.com)。

## Hestia 能放在 Cloudflare 代理后吗？

Cloudflare 仅代理有限端口（见其[端口列表](https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/)）。Hestia 默认端口 8083 不在其中。可将端口改为 Cloudflare 支持的，如：

```bash
v-change-sys-port 2083
```

也可以关闭 Cloudflare 的代理功能。

## 如何从 RRD 图表中移除未用的网卡端口？

```bash
nano /usr/local/hestia/conf/hestia.conf
```

新增：

```bash
RRD_IFACE_EXCLUDE='lo'
```

按需以逗号分隔追加更多端口，然后：

```bash
rm /usr/local/hestia/web/rrd/net/*
systemctl restart hestia
```

## “强制子域所有权” 策略是什么？

在 Hestia <= 1.3.5 与 Vesta 中，用户可以创建属于其他用户主域的子域，如 Bob 可创建 `bob.alice.com`（主域 `alice.com` 属于 Alice）。这存在安全风险，因此新增了控制该行为的策略，默认启用。

你可以针对特定用户与域调整策略，例如某测试域：

```bash
# 启用
v-add-web-domain-allow-users user domain.tld
# 禁用
v-delete-web-domain-allow-users user domain.tld
```

## 能限制对 `admin` 账户的访问吗？

自 1.3 起可将管理员权限授予其他用户；自 1.4 起，系统管理员可限制对主“系统管理员”账户的访问以提升安全性。

## 服务器 IP 变更后需要做什么？

运行以下命令重建所有配置：

```bash
v-update-sys-ip
```

## Unable to bind address（端口绑定失败）

少数情况下网络服务启动慢于 Nginx/Apache，导致其无法绑定到 IP。可先查看服务状态：

```bash
systemctl status nginx
# 或
systemctl status httpd
```

临时解决：允许绑定到不存在的本地地址：

```bash
sysctl -w net.ipv4.ip_nonlocal_bind=1
```

## 无法用 Zabbix 监控进程

默认出于安全考虑，用户不能监控其他用户的进程。若使用 Zabbix，可编辑 `/etc/fstab` 并重启或重新挂载 `/proc`：

```bash
proc /proc proc defaults,hidepid=2,gid=zabbix 0 0
```

## 错误 24：打开的文件过多

若 Nginx 报类似错误：

```bash
open() "/var/log/apache2/domains/domain.tld.error.log" failed (24: Too many open files)
```

请提高进程文件句柄限制。示例：

```bash
# /etc/systemd/system/nginx.service.d/override.conf
[Service]
LimitNOFILE=65536
```

并在 Nginx 配置中设置（需小于等于上面值）：

```bash
# /etc/nginx/nginx.conf
worker_rlimit_nofile 16384
```

然后：

```bash
systemctl daemon-reload
systemctl restart nginx
```

可通过查看 `/proc/<nginx-pid>/limits` 核实新限制。
