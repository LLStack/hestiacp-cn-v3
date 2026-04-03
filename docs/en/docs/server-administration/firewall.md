# 防火墙

::: warning
每次编辑或更新防火墙后，若规则不是通过 Hestia 与其自定义脚本添加的，Hestia 将清空当前 iptables。
:::

## 如何放行/封禁端口或 IP？

1. 点击右上角 <i class="fas fa-fw fa-cog"><span class="visually-hidden">Server</span></i> 进入服务器设置。
2. 点击 **<i class="fas fa-fw fa-shield-alt"></i> 防火墙**。
3. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增规则**。
4. 选择动作（允许/拒绝等）。
5. 选择协议。
6. 填写端口（`0` 代表所有端口）。
7. 设置作用 IP（`0.0.0.0/0` 代表全部）或选择一个 IPSet。
8. 可选：填写备注。
9. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

也可使用命令行 [v-add-firewall-rule](../reference/cli#v-add-firewall-rule)。

## 如何配置 IPSet 黑白名单？

IPSet 是大规模 IP/网段集合，可用于黑白名单。

1. 进入服务器设置。
2. 点击 **<i class="fas fa-fw fa-shield-alt"></i> 防火墙**。
3. 点击 **<i class="fas fa-fw fa-list"></i> 管理 IP 列表**。
4. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增 IP 列表**。
5. 填写名称。
6. 选择数据源（以下其一）：
   - URL：`http://ipverse.net/ipblocks/data/countries/nl.zone`
   - 脚本（需 `chmod 755`）：`/usr/local/hestia/install/deb/firewall/ipset/blacklist.sh`
   - 文件：`file:/location/of/file`
   - 也可使用 Hestia 内置来源。
7. 选择 IP 版本（v4 或 v6）。
8. 选择是否自动更新。
9. 点击 **<i class="fas fa-fw fa-save"></i> 保存**。

## 如何自定义 iptables 规则？

::: danger
该功能偏高级，操作前请确认理解相关影响。
:::

通过脚本自定义规则/链/标志：脚本路径 `/usr/local/hestia/data/firewall/custom.sh`。

1. 创建脚本：`touch /usr/local/hestia/data/firewall/custom.sh`
2. 赋予执行权限：`chmod +x /usr/local/hestia/data/firewall/custom.sh`
3. 编辑脚本，添加你的规则。
4. 测试确认可用。
5. 使之持久化：`v-update-firewall`

提示：在持久化前，如误操作被锁出，重启服务器可恢复。

示例：

```bash
#!/bin/bash

IPTABLES="$(command -v iptables)"

$IPTABLES -N YOURCHAIN
$IPTABLES -F YOURCHAIN
$IPTABLES -I YOURCHAIN -s 0.0.0.0/0 -j RETURN
$IPTABLES -I INPUT -p TCP -m multiport --dports 1:65535 -j YOURCHAIN
```

## IPSet 不生效？

IPSet 至少需要包含 10 个 IP 或网段。

## 能将多个来源合并吗？

可以，示例脚本：

```bash
#!/bin/bash

BEL=(
	"https://raw.githubusercontent.com/ipverse/rir-ip/master/country/be/ipv4-aggregated.txt"
	"https://raw.githubusercontent.com/ipverse/rir-ip/master/country/nl/ipv4-aggregated.txt"
	"https://raw.githubusercontent.com/ipverse/rir-ip/master/country/lu/ipv4-aggregated.txt"
)

IP_BEL_TMP=$(mktemp)
for i in "${BEL[@]}"; do
	IP_TMP=$(mktemp)
	((HTTP_RC = $(curl -L --connect-timeout 10 --max-time 10 -o "$IP_TMP" -s -w "%{http_code}" "$i")))
	if ((HTTP_RC == 200 || HTTP_RC == 302 || HTTP_RC == 0)); then
		command grep -Po '^(?:\d{1,3}\.){3}\d{1,3}(?:/\d{1,2})?' "$IP_TMP" | sed -r 's/^0*([0-9]+)\.0*([0-9]+)\.0*([0-9]+)\.0*([0-9]+)$/\1.\2.\3.\4/' >> "$IP_BEL_TMP"
	elif ((HTTP_RC == 503)); then
		echo >&2 -e "\nUnavailable (${HTTP_RC}): $i"
	else
		echo >&2 -e "\nWarning: curl returned HTTP response code $HTTP_RC for URL $i"
	fi
	rm -f "$IP_TMP"
done

sed -r -e '/^(0\.0\.0\.0|10\.|127\.|172\.1[6-9]\.|172\.2[0-9]\.|172\.3[0-1]\.|192\.168\.|22[4-9]\.|23[0-9]\.)/d' "$IP_BEL_TMP" | sort -n | sort -mu
rm -f "$IP_BEL_TMP"
```
