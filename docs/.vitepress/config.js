import { defineConfig } from 'vitepress';
import { version } from '../../package.json';

export default defineConfig({
	title: 'Hestia 控制面板',
	description: '开源的 Web 服务器控制面板。',

	lastUpdated: false,
	cleanUrls: false,

	head: [
		['link', { rel: 'icon', sizes: 'any', href: '/favicon.ico' }],
		['link', { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/logo.svg' }],
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['meta', { name: 'theme-color', content: '#b7236a' }],
	],

	locales: {
		root: {
			label: '简体中文',
			lang: 'zh-CN',
			themeConfig: {
				nav: navZh(),
				sidebar: { '/docs/': sidebarDocsZh() },
				footer: {
					message: '以 GPLv3 许可证发布。',
					copyright: 'Copyright © 2019-至今 Hestia 控制面板',
				},
			},
		},
		en: {
			label: 'English',
			lang: 'en',
			title: 'Hestia Control Panel',
			description: 'Open-source web server control panel.',
			themeConfig: {
				nav: navEn(),
				sidebar: { '/en/docs/': sidebarDocsEn() },
				footer: {
					message: 'Released under the GPLv3 License.',
					copyright: 'Copyright © 2019-present Hestia Control Panel',
				},
			},
		},
	},

	themeConfig: {
		logo: '/logo.svg',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/hestiacp/hestiacp' },
			{ icon: 'twitter', link: 'https://twitter.com/HestiaPanel' },
			{ icon: 'facebook', link: 'https://www.facebook.com/hestiacp' },
		],

		outline: [2, 3],

		algolia: {
			appId: 'V04P0P5D2R',
			apiKey: '7a90a3ac7f9313f174c50b0f301f7ec6',
			indexName: 'hestia_cp',
		},
	},
});

/** @returns {import('vitepress').DefaultTheme.NavItem[]} */
function navZh() {
	return [
		{ text: '功能', link: '/features' },
		{ text: '安装', link: '/install' },
		{ text: '文档', link: '/docs/introduction/getting-started', activeMatch: '/docs/' },
		{ text: '演示', link: 'https://demo.hestiacp.com:8083/' },
		{ text: '论坛', link: 'https://forum.hestiacp.com/' },
		{ text: '捐赠', link: '/donate' },
		{ text: '友情链接', link: '/links' },
		{
			text: `v${version}`,
			items: [
				{ text: '更新日志', link: 'https://github.com/hestiacp/hestiacp/blob/main/CHANGELOG.md' },
				{
					text: '参与贡献',
					link: 'https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md',
				},
				{ text: '安全策略', link: 'https://github.com/hestiacp/hestiacp/blob/main/SECURITY.md' },
			],
		},
	];
}

/** @returns {import('vitepress').DefaultTheme.NavItem[]} */
function navEn() {
	return [
		{ text: 'Features', link: '/en/features' },
		{ text: 'Install', link: '/en/install' },
		{ text: 'Docs', link: '/en/docs/introduction/getting-started', activeMatch: '/en/docs/' },
		{ text: 'Demo', link: 'https://demo.hestiacp.com:8083/' },
		{ text: 'Forum', link: 'https://forum.hestiacp.com/' },
		{ text: 'Donate', link: '/en/donate' },
		{ text: 'Links', link: '/en/links' },
		{
			text: `v${version}`,
			items: [
				{ text: 'Changelog', link: 'https://github.com/hestiacp/hestiacp/blob/main/CHANGELOG.md' },
				{
					text: 'Contributing',
					link: 'https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md',
				},
				{ text: 'Security', link: 'https://github.com/hestiacp/hestiacp/blob/main/SECURITY.md' },
			],
		},
	];
}

/** @returns {import('vitepress').DefaultTheme.SidebarItem[]} */
function sidebarDocsZh() {
	return [
		{
			text: '介绍',
			collapsed: false,
			items: [
				{ text: '快速开始', link: '/docs/introduction/getting-started' },
				{ text: '最佳实践', link: '/docs/introduction/best-practices' },
			],
		},
		{
			text: '用户指南',
			collapsed: false,
			items: [
				{ text: '账户', link: '/docs/user-guide/account' },
				{ text: '备份', link: '/docs/user-guide/backups' },
				{ text: '定时任务', link: '/docs/user-guide/cron-jobs' },
				{ text: '数据库', link: '/docs/user-guide/databases' },
				{ text: 'DNS', link: '/docs/user-guide/dns' },
				{ text: '文件管理器', link: '/docs/user-guide/file-manager' },
				{ text: '邮件域', link: '/docs/user-guide/mail-domains' },
				{ text: '通知', link: '/docs/user-guide/notifications' },
				{ text: '套餐', link: '/docs/user-guide/packages' },
				{ text: '统计', link: '/docs/user-guide/statistics' },
				{ text: '用户', link: '/docs/user-guide/users' },
				{ text: '网站域名', link: '/docs/user-guide/web-domains' },
			],
		},
		{
			text: '服务器管理',
			collapsed: false,
			items: [
				{ text: '备份与恢复', link: '/docs/server-administration/backup-restore' },
				{ text: '配置', link: '/docs/server-administration/configuration' },
				{ text: '定制', link: '/docs/server-administration/customisation' },
				{ text: '数据库与 phpMyAdmin', link: '/docs/server-administration/databases' },
				{ text: 'DNS 集群与 DNSSEC', link: '/docs/server-administration/dns' },
				{ text: '邮件', link: '/docs/server-administration/email' },
				{ text: '文件管理器', link: '/docs/server-administration/file-manager' },
				{ text: '防火墙', link: '/docs/server-administration/firewall' },
				{ text: '系统升级', link: '/docs/server-administration/os-upgrades' },
				{ text: 'REST API', link: '/docs/server-administration/rest-api' },
				{ text: 'SSL 证书', link: '/docs/server-administration/ssl-certificates' },
				{ text: 'Web 模板与缓存', link: '/docs/server-administration/web-templates' },
				{ text: '故障排查', link: '/docs/server-administration/troubleshooting' },
			],
		},
		{
			text: '参与贡献',
			collapsed: false,
			items: [
				{ text: '构建软件包', link: '/docs/contributing/building' },
				{ text: '开发', link: '/docs/contributing/development' },
				{ text: '文档', link: '/docs/contributing/documentation' },
				{ text: '快速安装应用', link: '/docs/contributing/quick-install-app' },
				{ text: '测试', link: '/docs/contributing/testing' },
				{ text: '翻译', link: '/docs/contributing/translations' },
			],
		},
		{
			text: '社区',
			collapsed: false,
			items: [
				{ text: 'Hestia Nginx 缓存', link: '/docs/community/hestia-nginx-cache' },
				{ text: 'Hestia 的 Ioncube 安装器', link: '/docs/community/ioncube-hestia-installer' },
				{ text: '安装脚本生成器', link: '/docs/community/install-script-generator' },
			],
		},
		{
			text: '参考',
			collapsed: false,
			items: [
				{ text: 'API', link: '/docs/reference/api' },
				{ text: 'CLI', link: '/docs/reference/cli' },
			],
		},
	];
}

/** @returns {import('vitepress').DefaultTheme.SidebarItem[]} */
function sidebarDocsEn() {
	return [
		{
			text: 'Introduction',
			collapsed: false,
			items: [
				{ text: 'Getting Started', link: '/en/docs/introduction/getting-started' },
				{ text: 'Best Practices', link: '/en/docs/introduction/best-practices' },
			],
		},
		{
			text: 'User Guide',
			collapsed: false,
			items: [
				{ text: 'Account', link: '/en/docs/user-guide/account' },
				{ text: 'Backups', link: '/en/docs/user-guide/backups' },
				{ text: 'Cron Jobs', link: '/en/docs/user-guide/cron-jobs' },
				{ text: 'Databases', link: '/en/docs/user-guide/databases' },
				{ text: 'DNS', link: '/en/docs/user-guide/dns' },
				{ text: 'File Manager', link: '/en/docs/user-guide/file-manager' },
				{ text: 'Mail Domains', link: '/en/docs/user-guide/mail-domains' },
				{ text: 'Notifications', link: '/en/docs/user-guide/notifications' },
				{ text: 'Packages', link: '/en/docs/user-guide/packages' },
				{ text: 'Statistics', link: '/en/docs/user-guide/statistics' },
				{ text: 'Users', link: '/en/docs/user-guide/users' },
				{ text: 'Web Domains', link: '/en/docs/user-guide/web-domains' },
			],
		},
		{
			text: 'Server Administration',
			collapsed: false,
			items: [
				{ text: 'Backup & Restore', link: '/en/docs/server-administration/backup-restore' },
				{ text: 'Configuration', link: '/en/docs/server-administration/configuration' },
				{ text: 'Customisation', link: '/en/docs/server-administration/customisation' },
				{ text: 'Databases & phpMyAdmin', link: '/en/docs/server-administration/databases' },
				{ text: 'DNS Cluster & DNSSEC', link: '/en/docs/server-administration/dns' },
				{ text: 'Email', link: '/en/docs/server-administration/email' },
				{ text: 'File Manager', link: '/en/docs/server-administration/file-manager' },
				{ text: 'Firewall', link: '/en/docs/server-administration/firewall' },
				{ text: 'OS Upgrades', link: '/en/docs/server-administration/os-upgrades' },
				{ text: 'REST API', link: '/en/docs/server-administration/rest-api' },
				{ text: 'SSL Certificates', link: '/en/docs/server-administration/ssl-certificates' },
				{ text: 'Web Templates & Cache', link: '/en/docs/server-administration/web-templates' },
				{ text: 'Troubleshooting', link: '/en/docs/server-administration/troubleshooting' },
			],
		},
		{
			text: 'Contributing',
			collapsed: false,
			items: [
				{ text: 'Building', link: '/en/docs/contributing/building' },
				{ text: 'Development', link: '/en/docs/contributing/development' },
				{ text: 'Documentation', link: '/en/docs/contributing/documentation' },
				{ text: 'Quick Install App', link: '/en/docs/contributing/quick-install-app' },
				{ text: 'Testing', link: '/en/docs/contributing/testing' },
				{ text: 'Translations', link: '/en/docs/contributing/translations' },
			],
		},
		{
			text: 'Community',
			collapsed: false,
			items: [
				{ text: 'Hestia Nginx Cache', link: '/en/docs/community/hestia-nginx-cache' },
				{ text: 'Ioncube Installer for Hestia', link: '/en/docs/community/ioncube-hestia-installer' },
				{ text: 'Install Script Generator', link: '/en/docs/community/install-script-generator' },
			],
		},
		{
			text: 'Reference',
			collapsed: false,
			items: [
				{ text: 'API', link: '/en/docs/reference/api' },
				{ text: 'CLI', link: '/en/docs/reference/cli' },
			],
		},
	];
}
