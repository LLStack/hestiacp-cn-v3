/** @typedef {{ text: string, items?: { text: string }[] }} FeatureListItem */

/** @type {FeatureListItem[]} */
export const users = [
	{ text: 'SFTP and SSH chroot isolation support' },
	{ text: 'Two-factor authentication (2FA) for the admin panel' },
	{ text: 'SSH key login via SFTP and SSH' },
];

/** @type {FeatureListItem[]} */
export const webDomains = [
	{ text: 'Nginx + PHP-FPM with Nginx FastCGI cache' },
	{ text: 'Nginx + Apache2 with Nginx proxy cache' },
	{ text: 'Per-domain TLS certificate configuration' },
	{ text: 'Multi-IP support for Web/Mail/DNS' },
	{ text: 'PHP 5.6 to 8.3 support (default PHP 8.2)' },
	{
		text: 'One-click app installation (via CLI or admin panel)',
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
	{ text: 'Inbound & outbound mail (Exim 4, Dovecot, Webmail) with per-domain TLS certificates' },
	{ text: 'SMTP relay for Exim when port 25 is blocked' },
	{ text: 'Rate limiting per user or mailbox account' },
	{ text: "Let's Encrypt certificates for mail domains" },
	{ text: 'Latest Roundcube included' },
	{ text: 'Optional SnappyMail installation' },
];

/** @type {FeatureListItem[]} */
export const dns = [
	{ text: 'Create your own name servers' },
	{ text: 'Easily set up DNS clusters' },
	{ text: 'DNSSEC support for domains' },
];

/** @type {FeatureListItem[]} */
export const databases = [
	{ text: 'MariaDB 10.2 → 10.11 support (default 10.11)' },
	{ text: 'MySQL 8 support' },
	{ text: 'PostgreSQL support' },
	{ text: 'Latest phpMyAdmin and phpPgAdmin included' },
];

/** @type {FeatureListItem[]} */
export const serverAdmin = [
	{
		text: "Automatic backups via SFTP, FTP, or Rclone with 50+ <a href='https://rclone.org/overview/'>cloud storage providers</a>",
	},
];
