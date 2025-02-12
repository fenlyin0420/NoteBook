# 1. 下载 mihomo deb 包
```shell
curl -o mihomo.deb -L https://github.com/MetaCubeX/mihomo/releases/download/Prerelease-Alpha/mihomo-linux-amd64-alpha-c7661d7.deb
```

# 2. 安装 mihomo 内核
```shell
sudo dpkg -i mihomo.deb
```

# 3. 上传配置文件
```shell
scp -r C:\Users\Fenlyin\.config\mihomo root@<ip>:~/
```
这里直接将我windows的配置文件上传到服务器，省的重新配置。

# 4. 开启代理
```
echo "export http_proxy=127.0.0.1:7897" >> /etc/bash.bashrc
echo "export https_proxy=127.0.0.1:7897" >> /etc/bash.bashrc
```

# 5. 开启服务
```shell
systemctl start mihomo
```
