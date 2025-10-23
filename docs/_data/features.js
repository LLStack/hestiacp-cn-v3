/** @typedef {{ text: string, items?: { text: string }[] }} FeatureListItem */

/** @type {FeatureListItem[]} */
export const users = [
	{ text: '支持 SFTP 与 SSH chroot 隔离' },
	{ text: '管理面板支持双重认证（2FA）' },
	{ text: '通过 SFTP 与 SSH 使用 SSH 密钥登录' },
];

/** @type {FeatureListItem[]} */
export const webDomains = [
	{ text: 'Nginx + PHP-FPM 支持 Nginx FastCGI 缓存' },
	{ text: 'Nginx + Apache2 支持 Nginx 代理缓存' },
	{ text: '网站域可按域配置 TLS 证书' },
	{ text: 'Web/邮件/DNS 支持多 IP' },
	{ text: '支持 PHP 5.6 至 8.3（默认 PHP 8.2）' },
	{
		text: '一键安装应用（通过 CLI 或管理面板）',
		items: [
			{ text: 'WordPress' },
			{ text: 'Dokuwiki' },
			{ text: 'Drupal' },
			{ text: 'Grav' },
			{ text: 'Laravel' },
			{ text: 'MediaWiki' },
			{ text: 'NextCloud' },
			{ text: 'OpenCart' },
			{ text: 'Prestashop' },
			{ text: 'Symphony' },
			{ text: 'Joomla' },
		],
	},
];

/** @type {FeatureListItem[]} */
export const mail = [
	{ text: '入站与出站邮件服务（Exim 4、Dovecot、Webmail）按域配置 TLS 证书' },
	{ text: '当服务商屏蔽 25 端口时，可为 Exim 配置 SMTP 中继' },
	{ text: '可按用户或邮箱账户设置速率限制' },
	{ text: '邮件域支持 Let’s Encrypt 证书' },
	{ text: '内置最新版 Roundcube' },
	{ text: '可选安装 SnappyMail' },
];

/** @type {FeatureListItem[]} */
export const dns = [
	{ text: '创建你自己的名称服务器' },
	{ text: '轻松搭建 DNS 集群' },
	{ text: '支持域名启用 DNSSEC' },
];

/** @type {FeatureListItem[]} */
export const databases = [
	{ text: '支持 MariaDB 10.2 → 10.11（默认 10.11）' },
	{ text: '支持 MySQL 8' },
	{ text: '支持 PostgreSQL' },
	{ text: '内置最新版 phpMyAdmin 与 phpPgAdmin' },
];

/** @type {FeatureListItem[]} */
export const serverAdmin = [
	{
		text: "通过 SFTP、FTP 或 Rclone 进行自动备份，支持 50+ <a href='https://rclone.org/overview/'>云存储服务商</a>",
	},
];
