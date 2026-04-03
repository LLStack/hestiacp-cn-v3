# 用户

要管理用户，请以**管理员**身份登录并进入 **用户 <i class="fas fa-fw fa-users"></i>** 选项卡。

## 新增用户

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增用户**。
2. 填写表单。
3. 点击右上角 **<i class="fas fa-fw fa-save"></i> 保存**。

## 以某用户身份登录（冒充）

1. 将鼠标悬停在目标用户上。
2. 点击用户名和邮箱右侧的 <i class="fas fa-fw fa-sign-in-alt"><span class="visually-hidden">以其身份登录</span></i> 图标。
3. 现在你已以该用户身份登录，之后的操作均以该用户执行。

## 编辑用户

以下设置仅管理员可用。常规设置请参阅[账户管理](../user-guide/account)。

编辑用户有两种方式：其一是先以其身份登录，然后点击右上角 <i class="fas fa-lg fa-fw fa-user-circle"><span class="visually-hidden">user</span></i>；其二是：

1. 将鼠标悬停在要编辑的用户上。
2. 点击用户名和邮箱右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。

## 暂停用户

1. 将鼠标悬停在要暂停的用户上。
2. 点击用户名和邮箱右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。

## 删除用户

1. 将鼠标悬停在要删除的用户上。
2. 点击用户名和邮箱右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 用户配置

### 禁止访问控制面板

勾选 **不允许用户登录控制面板** 以移除用户的面板访问权限。

### 修改角色

在下拉框中修改 **角色** 即可变更用户角色。

::: warning
将 **Administrator** 角色分配给某用户后，该用户可查看并编辑其他用户。但他们不能编辑 **admin** 用户（除非在服务器设置中允许查看）。
:::

### 修改套餐

在下拉框中修改 **套餐** 即可调整用户套餐。

### 修改 SSH 访问

点击 **高级选项**，在下拉框中修改 **SSH 访问**。

::: warning
使用 **nologin** 作为 shell 并不会禁用 SFTP 访问。
:::

### 修改 PHP CLI 版本

点击 **高级选项**，在下拉框中修改 **PHP CLI 版本**。

### 修改默认名称服务器

点击 **高级选项**，编辑 **默认名称服务器** 字段。

::: warning
至少需要 2 个默认名称服务器以提供冗余。建议将名称服务器部署在不同主机上以提高可靠性。若你是系统管理员并准备搭建，请参阅我们的 [DNS 集群文档](../server-administration/dns#dns-cluster-setup)。
:::
