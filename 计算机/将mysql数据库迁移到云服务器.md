# 1. 本地导出mysql数据库的脚本
```shell
mysqldump -u root -p blockchain_hospital > master.sql 
```
# 2. 将脚本上传到服务器

![](Pasted%20image%2020250112194623.png)

# 3. 导入数据库脚本
```shell
mysql -u root -p blockchain_hospital < master.sql
```

或连接至mysql后：
```
source master.sql;
```

# 4. 修改用户的可登录主机
```sql
use mysql;
UPDATE user SET host = '%' WHERE user = 'root' AND host = 'localhost'
```
所有用户的`host`字段默认为`localhost`，意为只能本地连接数据库，修改为`%`意为能够在任意主机连接数据库

# 5. 修改mysql监听地址
```shell
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

![](Pasted%20image%2020250112204538.png)

将mysqld的bind-address改为`0.0.0.0`，意为监听任意地址。

# 6. 重启mysql服务
```shell
sudo systemctl restart mysql
```

# 7. 远程连接mysql
重启成功后，即可远程连接
```shell
mysql -u root -h 152.136.22.166 -p
```