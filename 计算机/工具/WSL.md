# 发行版的导入和导出
将系统导出为一个压缩包，然后再导入（同时指定新的安装位置），可以实现系统迁移。
- 导出：`wsl --export <发行版名称> <导出文件路径>`
- 导入：`wsl --import <新发行版名称> <目标安装目录> <导出文件路径>`
- 示例：
```shell
# 查看系统中所有的发行版
wsl --list --verbose
# 导出Ubuntu这个发行版，保存到D:\WSL\Ubuntu.tar
wsl --export Ubuntu D:\WSL\Ubuntu.tar
# 注销，删除原来位置的发行版
wsl --unregister Ubuntu
# 导入，同时可以重新命名该发行版
wsl --import Ubuntu2204 D:\WSL\Ubuntu2204 D:\WSL\Ubuntu.tar
```

# 设置默认的发行版
```shell
wsl --set-default <Distribution Name>
```


- `Get-NetAdapter | Where-Object {$_.Name -like "*WSL*"}`
- `Get-NetIPAddress -InterfaceAlias "vEthernet (WSL)"`

-  windows执行`ipconfig /all`，在某个网络适配器下可以看`DNS Server`ip地址，一般是**网关ip**。

# /etc/resolv.conf
`/etc/resolv.conf` 是一个在类 Unix 系统（如 Linux）中用于配置系统 DNS（域名系统）解析器的文件，它包含了系统用于解析域名的 DNS 服务器地址以及其他相关配置信息。以下是关于该文件的一些详细说明：
- **nameserver**：这是该文件中最常见的配置项，用于指定 DNS 服务器的 IP 地址。可以有多个 `nameserver` 行，系统会按照从上到下的顺序依次查询这些 DNS 服务器。例如：
    ```
    nameserver 8.8.8.8
    nameserver 8.8.4.4
    ```
    这表示系统会先向 IP 地址为 8.8.8.8 的 DNS 服务器发起域名解析请求，如果该服务器没有响应或解析失败，再向 8.8.4.4 的 DNS 服务器发起请求。

- **search**：用于指定域名搜索后缀。当系统尝试解析一个不包含完整域名的主机名时，会依次将这些后缀添加到主机名后面进行解析。例如：
    ```
    search example.com
    ```
    如果要解析主机名 `server`，系统会先尝试解析 `server.example.com`。

- **domain**：用于设置默认的域名。不过在现代系统中，`search` 选项更为常用，`domain` 选项的作用相对较小。
