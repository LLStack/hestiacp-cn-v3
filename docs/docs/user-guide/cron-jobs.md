# 定时任务（Cron）

要管理定时任务，请进入 **计划任务 <i class="fas fa-fw fa-clock"></i>** 选项卡。

## 开关任务通知

1. 关闭通知：点击 **<i class="fas fa-fw fa-toggle-off"></i> 关闭通知**。
2. 开启通知：点击 **<i class="fas fa-fw fa-toggle-off"></i> 开启通知**。

## 新增定时任务

1. 点击 **<i class="fas fa-fw fa-plus-circle"></i> 新增任务**。
2. 输入要执行的命令。
3. 设置执行计划。可使用生成器辅助，或参考 [Crontab.guru](https://crontab.guru/)。
4. **重要**：普通用户的定时任务中无法使用 sudo。Hestia 不会将普通用户加入 sudoers。

## 编辑定时任务

1. 将鼠标悬停在要编辑的任务上。
2. 点击命令右侧的 <i class="fas fa-fw fa-pencil-alt"><span class="visually-hidden">编辑</span></i> 图标。

## 暂停定时任务

1. 将鼠标悬停在要暂停的任务上。
2. 点击命令右侧的 <i class="fas fa-fw fa-pause"><span class="visually-hidden">暂停</span></i> 图标。
3. 取消暂停：点击命令右侧的 <i class="fas fa-fw fa-play"><span class="visually-hidden">取消暂停</span></i> 图标。

## 删除定时任务

1. 将鼠标悬停在要删除的任务上。
2. 点击命令右侧的 <i class="fas fa-fw fa-trash"><span class="visually-hidden">删除</span></i> 图标。

## 示例命令

若要以某用户身份执行 PHP 脚本，使用可执行文件的完整路径，例如：

```bash
/usr/bin/php8.2 -f /home/user/web/domain.example.com/public_html/cron.php
```
