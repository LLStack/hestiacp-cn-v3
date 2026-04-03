# 备份

要管理备份，请进入 **备份 <i class="fas fa-fw fa-file-archive"></i>** 选项卡。

## 手动创建备份

点击 **<i class="fas fa-fw fa-plus-circle"></i> 创建备份** 按钮。

将弹出如下提示：

**任务已加入队列。备份可下载时你将收到邮件通知。**

## 下载备份

1. 将鼠标悬停在要下载的备份上。
2. 点击备份文件名右侧的 <i class="fas fa-fw fa-file-download"><span class="visually-hidden">下载</span></i> 图标。

如果备份存储在远程服务器上，系统会先将文件下载到服务器，下载就绪后你会收到邮件通知。

## 恢复备份

1. 将鼠标悬停在要恢复的备份上。
2. 点击备份文件名，或点击其右侧的 <i class="fas fa-fw fa-undo"><span class="visually-hidden">恢复</span></i> 图标。
3. 通过以下方式之一恢复备份：
   1. 点击右上角 **<i class="fas fa-fw fa-undo"></i> 恢复备份** 按钮，恢复整个备份。
   2. 勾选多个项目，右上角 **批量操作** 菜单选择 **恢复**，再点击 <i class="fas fa-fw fa-arrow-right"><span class="visually-hidden">应用</span></i> 按钮。
   3. 将鼠标悬停在某个项目上，点击其右侧的 <i class="fas fa-fw fa-undo"><span class="visually-hidden">恢复</span></i> 图标，仅恢复该部分。

## 删除备份

1. 将鼠标悬停在要删除的备份上。
2. 点击备份文件名右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 从备份中排除组件

1. 点击 **<i class="fas fa-fw fa-folder-minus"></i> 备份排除** 按钮。
2. 点击 **<i class="fas fa-fw fa-pencil-alt"></i> 编辑排除项** 按钮。

### 排除网站域名

在 **网站域** 输入框中，每行输入一个需要排除的域名。

要从某个域排除特定文件夹，使用以下语法：

```bash
domain.tld:public_html/wp-content/uploads:public_html/cache
```

这将排除该域下的 `public_html/wp-content/uploads/` 和 `public_html/cache/`。

排除所有域名可使用 `*`。

### 排除邮件域

在 **邮件域** 输入框中，每行输入一个需要排除的域名。

只排除某个或多个邮箱账户时，使用以下语法：

```bash
domain.tld:info:support
```

这将排除 `info@domain.tld` 与 `support@domain.tld`。

排除所有域名可使用 `*`。

### 排除数据库

在 **数据库** 输入框中，每行输入一个需要排除的数据库名。

排除所有数据库可使用 `*`。

### 排除用户目录

在 **用户目录** 输入框中，每行输入一个需要排除的目录名。

排除所有目录可使用 `*`。

## 调整备份保留数量

如需调整备份数量，请参阅 [套餐](../user-guide/packages) 与 [用户](../user-guide/users) 文档。需要先创建或编辑套餐，并将其分配给目标用户。
