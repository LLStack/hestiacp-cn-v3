# 自定义与扩展

::: warning
目前仅支持通过 CSS 修改界面布局。你可以修改 HTML 与模板文件，但它们在升级时会被覆盖。请务必[使用钩子](#在升级前后执行命令)在升级后还原自定义内容。
:::

## 新增主题

在 `/usr/local/hestia/web/css/themes/custom/my_theme.css` 创建自定义主题，例如：

```css
.page-login,
.page-reset {
	height: auto;
	padding-top: 10%;
	background: rgb(231, 102, 194) !important;
	background: radial-gradient(circle, rgba(231, 102, 197, 1), rgba(174, 43, 177, 1)) !important;
}
```

## 自定义默认主题

对默认主题的直接改动会在升级时被覆盖。请将自定义样式上传到 `/usr/local/hestia/web/css/custom`，支持 `.css` 或 `.min.css`。

注意：基础主题 `default.css` 总会被加载，其他默认与自定义主题会覆盖其中规则。

## 自定义 “域名未找到” 页面

相关页面位于 `/var/www/html/index.html`，可通过下列命令编辑：

```bash
nano /var/www/html/index.html
```

## 自定义默认站点骨架（skeleton）

新建域名时复制的默认目录结构位于 `/usr/local/hestia/data/templates/web/skel/public_html`。

## 在升级前后执行命令

自 1.4.6 起支持安装前/后钩子，可用于：

- 在升级前后临时关闭/开启演示模式。
- 还原自定义的 skeleton 页面。

钩子文件路径：

- `/etc/hestiacp/hooks/pre_install.sh`
- `/etc/hestiacp/hooks/post_install.sh`

::: tip
不要忘记赋予可执行权限：`chmod +x /etc/hestiacp/hooks/[file].sh`。
:::

示例（在 pre_install 中关闭演示模式）：

```bash /etc/hestiacp/hooks/pre_install.sh
#!/bin/bash
sed -i "s|^DEMO_MODE=.*'|DEMO_MODE='no'|g" $HESTIA/conf/hestia.conf
```

::: warning
如果使用了自定义错误文档，升级后需要重建所有网站！
:::
