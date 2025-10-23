# 网站域名

要管理网站域名，请进入 **网站 <i class="fas fa-fw fa-globe-americas"></i>** 选项卡。

## 新增网站域名

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增网站域名**。
2. 在 **域名** 输入框填写域名。
   - 若希望在 Hestia 中管理该域名的 DNS，勾选 **创建 DNS 区域**。
   - 若要为该域启用邮件，勾选 **为此域启用邮件**。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 安装应用

1. 点击域名，或点击悬停时出现的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
2. 点击右上角 **<i class="fas fa-fw fa-magic"></i> 快速安装应用**。
3. 选择要安装的应用并点击 **设置**。
4. 填写相关字段。若应用需要数据库，可选择自动创建或使用已有数据库。
5. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

::: warning
根据应用不同，安装可能需要 30 秒或更久。请勿刷新或关闭标签页！
:::

## 编辑网站域名

1. 点击域名，或点击悬停时出现的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。
2. 按需修改。各项说明见下文。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 查看访问与错误日志

1. 将鼠标悬停在要查看日志的域名上。
2. 点击 <i class="fas fa-fw fa-binoculars"><span class="visually-hidden">日志</span></i> 图标。
3. 页面顶部可切换为下载日志或查看错误日志。

## 暂停网站域名

1. 将鼠标悬停在要暂停的域名上。
2. 点击右侧 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。

## 删除网站域名

1. 将鼠标悬停在要删除的域名上。
2. 点击右侧 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。将删除**网站域名及其关联的 FTP 账户**。

## 网站域配置

### 启用统计

1. 在 **网站统计** 下拉框选择 **awstats**。
2. 按需设置用户名与密码。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。
4. 访问 `https://domain.tld/vstats/` 查看统计。

### 管理重定向

1. 勾选 **启用域名重定向**。
2. 选择方案。当选择 **重定向到自定义域名或网址** 时，可选择 HTTP 状态码（默认 301）。

::: warning
若你的域名是包含特殊字符的[国际化域名（IDN）](https://en.wikipedia.org/wiki/Internationalized_domain_name)，即便选择了 `www.domain.tld` 或 `domain.tld`，也会被转换为 [punycode](https://en.wikipedia.org/wiki/Punycode) 并自动切换为 **重定向到自定义域名或网址**。
:::

### 启用 SSL

1. 勾选 **为该域启用 SSL**。
2. 勾选 **使用 Let’s Encrypt 获取 SSL 证书** 以使用 Let’s Encrypt。
3. 按需启用 **自动 HTTPS 重定向** 或 **HTTP 严格传输安全（HSTS）**。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

如需使用自有证书，可将证书内容粘贴到文本框。

如启用 Let’s Encrypt 遇到问题，请参阅[SSL 证书](../server-administration/ssl-certificates)。

### 切换 PHP 版本

::: info
该选项可能不可用，取决于服务器设置。如需帮助请联系管理员。
:::

1. 在 **后端模板**（Backend Template）中选择所需 PHP 版本。

### 使用自定义文档根目录

1. 勾选 **自定义文档根目录**。
2. 选择要指向的域名。
3. 选择路径。例如 `/public/` 将指向 `/home/user/web/domain.tld/public_html/public/`。

### 附加 FTP 账户

1. 勾选 **附加 FTP 账户**。
2. 输入用户名与密码（或生成）。用户名会自动加上 `user_` 前缀。
3. 输入账户可访问的路径。
4. 可选：填写一个邮箱以接收登录信息。

新增更多 FTP 账户：点击 **新增 FTP 账户**，完成后点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

删除 FTP 账户：点击其名称右侧的 **DELETE**，然后点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

修改密码：更新密码字段后，点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

### 反向代理模板（Proxy templates）

::: info
是否可用取决于服务器配置。
:::

- **default**：通用模板，适用于多数场景。
- **caching**：启用代理缓存，适用于静态内容较多的站点，例如博客或新闻站点。
- **hosting**：类似 default。

任何自定义模板也会出现在此处。

::: tip
名称以 `caching-` 开头的自定义模板将启用 **<i class="fas fa-fw fa-trash"></i> 清空 Nginx 缓存** 按钮。确保存在与 `caching-my-template` 对应的 `.sh` 文件，内容至少包含[此示例](https://github.com/hestiacp/hestiacp/blob/main/install/deb/templates/web/nginx/caching.sh)。
:::

### Web 模板

当服务器运行 Apache2 与 Nginx 时，**default** 模板通常即可。

仅运行 Nginx 时，请选择与你使用的应用相匹配的模板。

### 管理 Nginx 缓存

启用 Nginx 缓存（FastCGI 或缓存模板）时，可通过 **<i class="fas fa-fw fa-trash"></i> 清空 Nginx 缓存** 按钮清理缓存。

仅使用 Nginx 时，可通过 **启用 FastCGI 缓存** 复选框启用 FastCGI 缓存。勾选后可设置缓存有效时长。
