# 备份与恢复

## 如何将用户迁移到新服务器？

当前的恢复功能支持恢复由 VestaCP 与 HestiaCP 生成的备份。

1. 在旧服务器上为该用户创建备份：

   ```bash
   v-backup-user username
   ```

2. 将生成的 tar 包复制到新服务器的 `/backup` 目录：

   ```bash
   scp /backup/username.2020.01.01-00-00.tar root@host.domain.tld:/backup/
   ```

3. 在新服务器上恢复备份。若要恢复为其他用户名，可在命令中更改用户名：

   ```bash
   v-restore-user username username.2020.01.01-00-00.tar
   ```

不存在的用户将自动创建。

## 可以恢复哪些类型的备份？

当前仅支持恢复以下来源的备份：

1. HestiaCP
2. VestaCP

## 如何调整备份保留数量？

如需调整备份数量，请参阅 [套餐](../user-guide/packages) 与 [用户](../user-guide/users) 文档。需要创建或编辑套餐，并分配给目标用户。

## 备份失败：磁盘空间不足

出于安全考虑，创建备份时 Hestia 需预留用户磁盘占用的 2 倍空间。因此开始备份前会检查用户剩余可用空间。若遇到该错误，可尝试：

- 降低每个用户保留的备份数量。
- 将备份存储迁移到远程存储。
- 将备份目录挂载到其他磁盘。
- 将大型用户拆分为多个用户。
- 在备份中排除部分目录或邮箱账户。

## zstd 与 gzip 的差异

zstd 由 Facebook 开发，用于替代 gzip。我们的测试显示，相比 gzip，zstd 具有更快的速度与更小的空间占用。

更多信息可参阅 [zstd 仓库](https://github.com/facebook/zstd)。

## 最佳压缩级别

级别越高，压缩率越高。测试表明：zstd 等级 3 的体积与等级 9 接近，但速度更快；等级 11 体积更小、速度相近。19 以上等级速度极慢，不建议使用。

## 支持的备份协议

- FTP
- SFTP
- Rclone（支持 50+ 云存储服务商，见其[文档](https://rclone.org)）

## 配置 FTP 备份主机

通过 SSH 以 root 执行：

```bash
v-add-backup-host 'ftp' 'remote.ftp-host.tld' 'backup-user' 'p4ssw0rd' '/path-backups/' 'port'
```

### 配置 SFTP 备份主机

::: warning
注意：密码会以明文存储在服务器上，仅 root 可访问。若需更高安全性，建议使用公私钥。
:::

以 root 执行：

```bash
v-add-backup-host 'sftp' 'remote.ftp-host.tld' 'backup-user' 'p4ssw0rd' '/path-backups/' 'port'
```

使用公私钥（推荐）：

```bash
v-add-backup-host 'sftp' 'remote.ftp-host.tld' 'backup-user' '/root/id_rsa' '/path-backups/' 'port'
```

## 配置 Rclone

::: tip
首次配置需通过命令行完成；之后可在 Web 面板中更新设置。
:::

先[下载 Rclone](https://rclone.org/downloads/)，可运行：

```bash
sudo -v
curl https://rclone.org/install.sh | sudo bash
```

安装完成后，以 root 运行 `rclone config` 并选择 `n` 新建，按提示完成。

验证是否可用：

```bash
echo "test" > /tmp/backuptest.txt
rclone cp /tmp/backuptest.txt $HOST:$FOLDER/backuptest.txt
rclone lsf $HOST:$FOLDER
```

确认已上传后，清理：

```bash
rclone delete $HOST:$FOLDER/backuptest.txt
```

保存配置后，在 Hestia 中添加：

```bash
v-add-backup-host 'rclone' 'remote-name' '' '' 'Bucket or Folder name' ''
```

::: tip
不同端点配置差异较大，请务必测试。可执行：

```bash
v-backup-user admin
```

:::

示例：

```bash
rclone config

Current remotes:

Name Type
==== ====
r2 s3
```

使用 “R2”：

```bash
v-add-backup-host 'rclone' 'r2' '' '' 'folder'
```

Backblaze B2：

```bash
v-add-backup-host 'rclone' 'b2' '' '' 'hestiacp'
```

## 增量备份（Restic）

在用户套餐中启用增量备份。

### 使用 Rclone

自 1.9 起 Hestia 默认包含 Rclone。以 root 运行 `rclone config` 并选择 `n` 新建，完成后执行：

```bash
v-add-backup-host-restic 'rclone:target:/folder/' '30' '8' '5' '3' '-1'
v-backup-users-restic
# 或者
v-backup-user-restic username
```

::: warning
首次运行会初始化 Restic 仓库，并在 `/usr/local/hestia/data/users/{users}/restic.conf` 生成加密密钥。请务必备份该文件；若丢失或用户被删除，将无法恢复数据。这也是我们建议保留原完整备份的原因。
:::

### 其他方式

只要 Restic 支持即可。但命令以 root 运行，无法预先交互提供密钥/密码，因此推荐用 Rclone 方案。

## 更改默认备份目录

出于安全考虑，不允许使用符号链接。要更改默认备份目录：

1. 确保当前备份目录为 `/backup`。
2. 若目录内有内容，先清空再重建（或直接 `mkdir /backup`）。
3. 使用 `mount --bind` 将目标目录挂载到 `/backup`：

   ```bash
   mount --bind /path/to/new/backup/folder /backup
   ```

要持久化，请在 `fstab` 中添加记录以便开机自动挂载：

1. 打开 `/etc/fstab`。
2. 追加：

   ```bash
   /path/to/new/backup/folder /backup none defaults,bind 0 0
   ```

3. 保存文件。

## 解压 .zstd 文件

可参考下述步骤，或使用 WinRAR 6.10 及以上版本解压 .zst 文件。

### 在 Windows 上用 zstd.exe 解压 domain_data.tar.zst

1. 下载并解压 zstd.exe（见 [zstd GitHub](https://github.com/facebook/zstd/releases/)）。
2. 解压命令：

   ```batch
   {dir_to_zstd}\zstd.exe -o {dir_to_file}\{file}.tar.zst
   ```

   例如：

   ```batch
   C:\Users\{user}\Downloads\zstd-v1.4.4-win64\zstd.exe -d c:\Users\{user}\Downloads\admin.2021-06-27_05-48-23\web\{domain}\domain_data.tar.zst
   ```

   输出：

   ```batch
   C:\Users\{user}\Downloads\admin.2021-06-27_05-48-23\web\{domain}\domain_data.tar.zst: 61440 bytes
   ```

3. 使用你偏好的工具解压生成的 tar 包，例如：

   ```batch
   C:\Users\{user}\Downloads\admin.2021-06-27_05-48-23\web\{domain}\domain_data.tar
   ```
