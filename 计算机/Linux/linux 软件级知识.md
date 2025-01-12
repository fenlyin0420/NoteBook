---
tags:
  - "#linux"
---
## linux用户管理

linux用户管理主要设计到两个文件：
1. `/etc/passwd`
2. `/etc/group`
其中，paaswd存储的是用户相关的信息，一行存储一个用户，每行有7个字段。group存储的是组信息，一行一组，每行四个字段。详细信息如下：
- **passwd**: fenlyin:x\:1000:1000:main user:/home/fenlyin:/bin/bash
- 分别为：用户名:用户密码(加密过):用户id:组id:用户描述:用户根目录:用户终端

- **group**：adm:x\:4:syslog
- 分别为：组名:组密码\:组id:组中附属用户列表（一般组密码都为空）

- **快捷命令**：
  - getent passwd == cat /etc/passwd
  - getent group == cat /etc/group

>[!note] 一个用户只能有一个主组，但能加入多个附属组，组信息中也会显示该组中的附属用户(主组不是该组的用户)。


### 用户方面
#### useradd options username(root)

- `-c` 指定用户描述
- `-d` 指定用户根目录， 但不会创建此目录，所以如果目录不存在，则还要-m创建
- `-m` 创建用户目录(此选项没有参数)
- `-g` 指定用户组
- `-G` 指定用户附属组列表，可以指定多项，eg. -G root, adm
- `-a` 增加用户的附属组到附属组列表中，必须与-G一起出现，-aG
- `-s` 指定用户终端
- `-u` 指定用户id，如果不给出，默认是从上一个用户id递增

#### usermod options username(root)
 - 常用选项与 useradd一致，可以为用户指定新的资源值

#### userdel options username(root)
- `-r` 连同用户的根目录一起删除

#### 用户密码与权限
  `passwd [optinons] username`
  用户刚创建后没有密码，此时会被系统锁定，无法使用，必须要为其设置密码
 - options:
   - `-l` 锁定，即禁用账号
   - `-u` 解锁
   - `-d` 指定用户的密码为空密码
   - `-f` 强迫用户下次登陆时修改密码
 - `passwd username` 修改用户密码
 - 普通用户只能修改自己的密码，且修改前要输入旧密码，超级用户可以修改任意用户密码，其无需旧密码确认。

`sudo` 命令
 - 要执行sudo命令，用户必须要在sudoer文件中才有权限，而文件中指出，在sudo用户组中的用户拥有权限，因此，用户需要加入sudo用户组中才有权限执行sudo命令。
 - `-u username` 以指定用户的身份执行命令，不加此选项默认是以root身份执行命令。
 
 `id`, `groups`
- 查看用户信息和用户组信息

### 用户组方面

  1. groupadd options groupname (root)
	 - `-g` 指定组id，与`-o`协同使用表示可以与已有的其他组id相同
  1.  groupdel groupname (root)
     - 删除组
  2. groupmod options groupname(root)
     - `-g -o` 与groupadd一致
     - `-n` 指定新组名
  3. newgrp groupname
     - 切换当前用户到指定的组中，已使用指定组的权限，前提是当前用户已经是指定组的成员(主成员或附属成员都可)
  
	

## screen简单理解

#### 新建虚拟终端
  - screen \[-S|-R name]
  - 不指定终端名，系统会使用linux默认的命名方法，会很麻烦。
  - -R 选项，如果name终端已经存在，则直接连接，如果是-S的话，则会创建一个同名的新终端

#### 挂起虚拟终端
  - Ctrl+a d
  - Ctrl+a进入特殊命令模式，在按d键登出

#### 连接虚拟终端
  - screen -r -R pid/name
  - -R 选项， 如果终端不存在，则会创建新终端

#### 清除虚拟终端
- 在虚拟终端中Ctrl+d登出，或者输入exit
-  在主终端中输入：screen -R pid/name -X quit
- screen -ls 列出所有的虚拟终端
- screen高阶命令：
  - 进入特殊命令模式后：
  - 关闭虚拟终端，相当于exit
  - ？显示所有的命令
## crontab
```
* * * * * command
```
分钟（0 - 59）、小时（0 - 23）、日期（1 - 31）、月份（1 - 12）、星期（0 - 6，0 代表周日）

`*`代表改字段可取所有值。

### 示例
1. 每月2号这一天，每分钟执行一次
```
* * 2 * * command
```

2. 每月2号这一天，且是星期日的话，中午12小时这一小时内每分钟执行一次
```
* 12 2 * 0 command
```

3. 每周一的 8 点 30 分执行命令
```
30 8 * * 1 command
```

4. 每两天执行一次命令（从每天的 0 点开始）
```
0 0 */2 * * command
```
`*/2` 表示每两天，因此该任务会每两天在 0 点执行一次。

5. 在每月的 1 号、15 号和 30 号执行命令
```
0 0 1,15,30 * * command
```
使用逗号 `,` 来指定多个值，这里表示在每月的 1 号、15 号和 30 号的 0 点执行。

6. 在工作时间段（周一到周五）（ 9 点到 17 点），每小时的第 30 分钟执行命令
```
30 9-17 * * 1-5 command
```
使用连字符 `-` 来指定范围，`1-5` 表示周一到周五，`9-17` 表示 9 点到 17 点。

### 命令
- `crontab -e` 编辑任务
- `crontab -l` 查看当前用户所有的任务
- `crontab -r` 删除当前用户所有的任务， **慎用！！**


+ 开启crontab的日志记录
  1. 修改/etc/rsyslog.d/50-default.conf, 去掉cron前面的注释
  2. 重启 `service rsyslog restart`
  3. 查看 **cat /var/log/cron.log**
+ 配置文件：
  1. 用户：**/var/spool/cron/crontabs/username**
  2. crontab：**/etc/crontab**
  - 在用户配置文件中，任务格式：* * * * * CMD
  - 在crontab软件自身配置文件中，任务格式：* * * * * username CMD
+ 编辑用户配置文件
  + crontab -e
  + 也可以使用vim等文本编辑器，但使用crontab可以检查，如果任务格式有错，关闭时会提醒
+ minute hour day month week


## ssh远程连接linux
​       要使用ssh远程连接linux，那么linux上至少需要安装ssh服务端，自身至少要安装ssh客户端。

### 安装ssh服务端
- dpkg -l | grep ssh 查看有无openssh-server
- 如果无，则：sudo apt-get install openssh-server
- 安装后：ps -e | grep ssh, 看到sshd则说明ssh服务已启动
- 如果没启动，则：`sudo service ssh start`或`sudo systemctl start ssh`

​       
### 连接ssh
#### 基于用户口令(密码)的连接
​       ssh username@IP address, 之后需要输入该用户的口令（密码）

#### 基于密钥对的连接
- 私钥放在客户端，公钥放在服务端，密钥对生成后便是用户无关的了，比如我用用户fenlyin生成的密钥对，公钥传到服务器，私钥发给sam一份，则sam也可以利用该密钥对登录服务器。
- 公钥会添加在服务器用户根目录中`.ssh/authorized_keys`文件中。
- 生成密钥对：`ssh-keygen -t rsa`， -t type: 即使用rsa非对称加密法。
- 将密钥对传到服务器：`ssh-copy-id username@IPaddress`。传密钥时确保服务端开启了基于口令的连接，即**PasswordAuthentication yes**，因为在传公钥时肯定要建立连接，而此时还不能基于密钥连接，所以只能基于口令连接。

### ssh连接细节
- 使用ssh客户端连接远程服务器时，首先会搜索~/.ssh/know_hosts文件中有无该主机，如果有，则进行密钥连接，否则，进行口令连接（前提是ssh服务端开启了口令连接）
- ~~~据我猜测，known_hosts中应该存有ip地址和主机的映射关系，因为我前后使用同一个ip地址登录了两台主机，当我等第二台主机时，ssh警告说：远程主机不安全。这是因为本地认为该ip地址应该是主机1的，但现在成为主机2了，那么很可能自己正在被中间劫持攻击，所以ssh拒绝连接。~~~ known_hosts中存储着远程服务器的用于建立安全连接的公钥(在`/etc/ssh`目录下，包含`rsa_key.pub、ecdsa_key.pub、dsa_key.pub`等各种类型的密钥)，客户端发出连接请求后，服务器将此公钥发送给客户端，客户端在其konwn_hosts中搜索是否存在此公钥，已验证该服务器是否可信，如果可信，则进行下一步，否则，会给出警告信息，并让用户手动确认。
- 每个用户应将生成的私钥和公钥存好，之后想要远程连接任意服务器，只需将此公钥上传服务器即可，而私钥用于与服务器的公钥配对，即理想情况下一个用户一生只需用一个密钥对。
#### ssh连接细节再总结(2024-05-28)
1. 客户端发出建立连接的请求，服务器发送公钥，客户端验证可信性
2. 客户端发送使用私钥签名过的挑战信息，并发送给服务器
3. 服务器使用公钥验证挑战信息，如果验证成功，则授权登录
### 通过ssh传输文件
`scp [-r] source destination`
### 从服务端下载文件到客户端：
`scp username@IPaddress:file_path  destination_path`
eg.
`scp kali@kali:/home/kali/test  ~`
### 从客户端上传文件到服务端：
`scp file_path  username@IPaddress:destination_path`
eg.
`scp ~/test  kali@kali:/home/kali`
- destination is always directory, if source is directory type, then add -r option.


## apt
- `-o` 修改apt的配置，语法为`-o KEY=VALUE`
	- `Dir::Etc::SourceList="mySourceList` 修改源





