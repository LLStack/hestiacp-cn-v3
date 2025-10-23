# 套餐（Packages）

要管理套餐，请以**管理员**身份登录并进入 **用户 <i class="fas fa-fw fa-users"></i>** 选项卡。

## 新增套餐

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增套餐**。
2. 填写表单。点击 <i class="fas fa-fw fa-infinity"><span class="visually-hidden">无限</span></i> 图标可将限制设置为无限。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 复制套餐

1. 将鼠标悬停在要复制的套餐上。
2. 点击套餐名称右侧的 <i class="fas fa-fw fa-clone"><span class="visually-hidden">复制</span></i> 图标。

## 编辑套餐

::: info
**system** 套餐不可编辑或重命名。
:::

1. 将鼠标悬停在要编辑的套餐上。
2. 点击套餐名称右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。

## 删除套餐

::: info
**system** 套餐不可删除。
:::

1. 将鼠标悬停在要删除的套餐上。
2. 点击套餐名称右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 从其他服务器导入套餐

套餐存储在 `/usr/local/hestia/data/packages`，文件名为 `package-name.pkg`。将这些文件复制到其他服务器即可。

## 套餐配置项

::: info
某些选项可能因环境不同而不可用。
:::

### 配额（Quota）

可用总存储空间，包括网站、邮箱、数据库及主目录。若在安装或服务器设置中启用了**文件配额**，此值会对网站、邮箱与主目录生效（数据库不受限）。

### 带宽（Bandwidth）

分配的带宽。仅统计 Web 出站流量。

当前不提供自动暂停的机制。

### 备份（Backups）

可存储的最大备份数量。

## 网站域

### 网站域数量

可创建的网站域数量上限。

### 别名数量

每个域可添加的别名数量上限。

### 反向代理模板

新建域的默认反向代理模板。

### Web 模板

新建域的默认 Web 模板。

## DNS

### DNS 模板

新建域时默认分配的 DNS 模板。

### DNS 域数量

可创建的 DNS 域数量上限。

### DNS 记录数

每个域可添加的 DNS 记录数量上限。

### 名称服务器（NS）

用户默认使用的名称服务器，最多可配置 8 个。

## 邮件

### 邮件域数量

可创建的邮件域数量上限。

### 邮箱账户数

每个域可添加的邮箱账户数量上限。

### 发送限速

每小时可发送的邮件数量上限。

## 数据库

可创建的数据库数量上限。

## 系统

### 定时任务

可创建的定时任务数量上限。

### Shell 访问

选择用户通过 SSH 登录时所使用的 Shell。

::: warning
若设置为 `nologin`，将禁用 SSH 访问，但仍允许 SFTP。
:::
