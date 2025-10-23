# 数据库

要管理数据库，请进入 **数据库 <i class="fas fa-fw fa-database"></i>** 选项卡。

## 新增数据库

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增数据库**。
2. 填写表单。数据库名与用户名会自动加上 `user_` 前缀。
3. 可选：填写一个邮箱，以接收登录信息。
4. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

在 **高级选项** 中，可以选择主机（默认 `localhost`）和字符集（默认 `utf8`）。

## 编辑数据库

1. 将鼠标悬停在要编辑的数据库上。
2. 点击数据库名称右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。若不想修改密码，则保持密码字段为空。

## 访问数据库

默认情况下，**phpMyAdmin** 与 **phpPgAdmin** 分别可通过 `https://hostname.domain.tld/phpmyadmin` 与 `https://hostname.domain.tld/phppgadmin` 访问。也可以在 **数据库 <i class="fas fa-fw fa-database"></i>** 选项卡中点击 **<i class="fas fa-fw fa-database"></i> phpMyAdmin** 或 **<i class="fas fa-fw fa-database"></i> phpPgAdmin** 按钮。

对于 MySQL，如果启用了 **phpMyAdmin 单点登录（SSO）**，将鼠标悬停在数据库上会显示 <i class="fas fa-fw fa-sign-in-alt"><span class="visually-hidden">phpMyAdmin</span></i> 图标，点击即可直接登录 **phpMyAdmin**。

## 暂停数据库

1. 将鼠标悬停在要暂停的数据库上。
2. 点击数据库名称右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击数据库名称右侧的 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除数据库

1. 将鼠标悬停在要删除的数据库上。
2. 点击数据库名称右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。数据库用户与数据库都会被删除。
