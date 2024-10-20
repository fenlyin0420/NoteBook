---
mindmap-plugin: basic
---

## 需求
有两台在同一局域网中的电脑，其中一台（linux）需要从另一台（windows11）中下载文件

## 部署 FTP 服务器
开启windows ftp 功能，具体网络上有教程

## 服务器设置
为了安全起见，禁用匿名认证，只开启basci Authentication

## linux 连接
链接需要输入用户名和密码，输入服务其的用户名和密码即可（是进入桌面的密码，不是账号的密码）windows真烦人，搞这么多密码。。。
## FTP 命令
### 模式切换
``` ftp
>ftp binary
200 type set to I.

>ftp type image
200 type set ot I.

>ftp type ascii
200 type set to A.
```
传输文件之间，需要根据文件类型，选择传输模式。错误的传输模式会导致文件失真。
共有**两种模式**，**A**SCII 和 **I**mage（Binary)
切换：
- to ASCII: `type ASCII`
- to Binary: `type Image` or `type binary`

### upload and download
- upload: `put local-file-name remote-file-name`
- download: `get remote-file-name local-file-name`

