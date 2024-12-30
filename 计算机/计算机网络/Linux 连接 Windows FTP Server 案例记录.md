---
mindmap-plugin: basic
---
## 部署 FTP 服务器
1. 开启Windows FTP feature
![](Pasted%20image%2020241226144153.png)
2. 进入IIS（开始菜单搜iis即可），部署一个FTP服务器
![](Pasted%20image%2020241226151420.png)
3.  配置防火墙，确保 FTP 服务器不会被防火墙阻拦
`Control Panel\System and Security\Windows Defender Firewall\Allowed apps` 
![](Pasted%20image%2020241226151638.png)
![](Pasted%20image%2020241226151721.png)

## 开始连接
命令 `ftp <ip>` 建立连接，之后需要输入用户名和密码，输入服务器要登陆的用户名和密码即可~~（是进入桌面的密码，不是账号的密码）windows真烦人，搞这么多密码。。。~~ 注意：密码是本地账户的密码（即锁屏后解锁进入桌面时输入的密码）不是微软账户的密码。登录微软账户本质上是为了获得例如同步等一些微软向用户提供的服务，在FTP连接时，只跟本地账户有关，跟微软账户无关。
![](Pasted%20image%2020241226145956.png)
## FTP 命令
### type 模式切换
``` 
>ftp binary
200 type set to I.

>ftp type image
200 type set ot I.

>ftp type ascii
200 type set to A.
```
传输文件时，需要根据文件类型，选择传输模式。错误的传输模式会导致文件失真。
共有**两种模式**，**A**SCII 和 **I**mage（Binary)，切换命令如下：
- to ASCII: `type ASCII` 用于传输文本文件
- to Binary: `type Image` or `type binary` 用于传输二进制文件（图像、音频、视频、可执行文件等）

### cd
`ftp> cd <path>`
切换ftp服务器的当前工作目录到指定路径。例如：`cd share/image`，之后文件默认都上传到这个路径下。
### put
`ftp> put <file>` 
上传工作目录下（进入ftp时的目录）`<file>`文件到ftp服务器当前目录下（current directory）

### get
`ftp> get <file>`
下载ftp当前目录下的`<file>`到本机工作目录下。

### quit
关闭ftp连接并退出

