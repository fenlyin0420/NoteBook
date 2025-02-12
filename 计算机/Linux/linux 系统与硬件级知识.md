---
tags:
  - "#linux"
---
## 修改系统编码
##### 涉及命令
- `locale`  查看当前编码
- `locale -a` 列出所有字符集
##### 具体修改
1. `sudo vim /etc/profile`
2. `export LANG='zh_CN.UTF-8'`在文件结尾追加
3. `reboot` 重启系统
## 修改启动界面
> 启动界面原理：每次启动或者远程连接，都会执行自动化任务，这个任务会输出文件内容，而文件里面，就是我们看到的界面内容。因此，我们只需要修改相关文件的内容，即可修改启动界面。
- 涉及到的文件(Ubuntu): `/etc/update-motd.d/`目录底下的文件，启动后会执行该目录下的所有可执行文件(shell脚本)
- 涉及到的命令：`run-parts` 将给定目录里的所有文件当作shell脚本去执行
## 修改终端光标样式
``` 
echo -e "\e[1 q"    # 块状闪动
echo -e "\e[2 q"    # 块状不动
echo -e "\e[3 q"    # 下划线闪动
echo -e "\e[4 q"    # 下划线不动
echo -e "\e[5 q"    # 竖线闪动
echo -e "\e[6 q"    # 竖线不动
```
## 修改时区
>修改方法有很多，感觉好乱啊，照着网上的修改了一下，没有全改过来，导致crontab出问题，我无语了，下面这个目前似乎好用：？

`timedatectl`
- `timedatectl list-timezones` 显示可用时区
- `timedatectl set-timezone <Asia/Shanghai>` 设置时区


## 特权端口
在类Unix系统中，小于等于1024的端口被称为特权端口（privileged ports），只有root用户才可以绑定。


## 链接文件
linux中链接文件分为软链接（符号链接）和硬链接。
### 软链接
`ln -s <源文件> <链接文件>`
软链接相当于指针，会有独一的inode号，有储存空间，其中储存的是源文件的相关信息
### 硬链接
`ln <源文件> <链接文件>`
硬链接相当于引用（别名），与源文件共享同一inode，只有当所有的硬链接和源文件都被删除时，文件才会被真正删除
硬链接不能跨文件系统创建。


## 磁盘管理
挂载了disk就无法再挂载该disk的partition，反之，挂载了partition，也就无法挂载disk

Linux 目录由各种文件系统组成，将文件系统和目录都看作树，将该文件系统挂载到目录的某个非叶子节点（文件夹），此后该节点称为挂载点。挂载过程为文件系统的根节点替换掉目录上的挂载节点，目录原本该节点以下的子树将被隐藏，直到文件系统被卸载。
### mount与umount
- `mount 设备名 挂载点`
- `umount 设备名/挂载点` 卸载时输入设备名或该设备的挂载点均可
### fuser
`fuser -v 挂载点` 查看正在访问该挂载点的进程、用户
`fuser -km 挂载点` 结束所有正在访问该挂载点的进程

### mkfs
`mkfs.<type> partition` 
`mkfs -t <type> partition`
格式化分区为type类型的文件系统

## 域名
- `resolvectl status` 查看当前的域名服务器
- `resolvectl dns <inte> <ip>` 在指定网络适配器上添加一个域名服务器

