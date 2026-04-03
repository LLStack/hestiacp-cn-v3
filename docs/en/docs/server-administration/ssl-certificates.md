# SSL 证书

## 为控制面板启用 Let’s Encrypt

请确保服务器主机名已正确解析到服务器 IP，并在系统中正确设置了主机名。

执行以下命令可更改主机名并为控制面板申请 Let’s Encrypt 证书：

```bash
v-change-sys-hostname host.domain.tld
v-add-letsencrypt-host
```

## 常见 Let’s Encrypt 错误

::: info
由于实现演进，报错信息可能发生变化，以下列表会逐步补充。
:::

| Error         | Message                                                                        |
| ------------- | ------------------------------------------------------------------------------ |
| `rateLimited` | 触发了频率限制。请在 [https://crt.sh](https://crt.sh) 查看该域已签发证书数量。 |

### Let’s Encrypt validation status 400

申请证书时可能出现：

```bash
Error: Let’s Encrypt validation status 400. Details: Unable to update challenge :: authorisation must be pending
```

可能原因：

1. Cloudflare 代理已开启，且 **SSL/TLS** 设为 **Full (strict)**。
2. Nginx 或 Apache 未正确重载。
3. DNS 中启用了 IPv6（可暂时关闭）。
4. 所用模板存在问题。

目前可前往 `/var/log/hestia/` 查看 `LE-{user}-{domain}.log` 以定位问题。查找 **Step 5** 段落并查看 JSON 返回，访问其中的 URL 可获得更详细的错误原因。

### 其他调试建议

可使用 [Let’s Debug](https://letsdebug.net)：

1. 输入域名
2. 选择 HTTP-01
3. 运行测试

完成后会显示错误或成功提示及更多细节。

## Let’s Encrypt 与 Cloudflare 代理能同时使用吗？

可以，但需按如下步骤：

1. 先关闭该域名的 Cloudflare 代理（仅 DNS）。
2. 等待至少 5 分钟以便 DNS 缓存失效。
3. 在面板或 CLI 中申请证书。
4. 重新开启代理。
5. 在 **SSL/TLS** 中切换为 **Full (strict)**。

## 可以使用 Cloudflare Origin CA 证书吗？

1. 按[指引](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca#1-create-an-origin-ca-certificate) 生成 Origin CA 证书；
2. 将证书与私钥填入 “编辑网站域名” 的 SSL 区域；
3. 在 “证书颁发机构/中间证书” 中填入[该根证书](https://developers.cloudflare.com/ssl/static/origin_ca_rsa_root.pem)；
4. 在 Cloudflare 的 **SSL/TLS** 中切换为 **Full (strict)**。
