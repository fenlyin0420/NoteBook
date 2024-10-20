# 连接MYSQL
``` shell
mysql [-h 127.0.0.1] [-p 3306] -u root -p
```

MySQL 是多用户系统，每个用户管理若干个**数据库**，各个用户之间的数据库不共享，每个数据库包含若干的**表**。

# SQL语法分类
| 分类  | 全称                         | 说明                     |
| --- | -------------------------- | ---------------------- |
| DDL | Data Definition Language   | 定义语言，定义数据库对象(数据库、表、字段) |
| DML | Data Manipulation Language | 操作语言，对表中数据进行增删改        |
| DQL | Data Query Language        | 查询语言，查询表中数据            |
| DCL | Data Control Language      | 控制语言，创建用户，修改访问权限       |
DML和DQL操作对象只是表中数据，DDL操作对象可以为数据库，表，是容器。


# DDL
## 数据库
###  创建数据库
``` sql
CREATE DATABASE [IF NOT EXISTS] <DATABASE NAME> [DEFAULT CHARSET <字符集>];
```
### 删除数据库
``` sql
DROP DATABASE [IF EXISTS] <DATABASE NAME>;
```
### 查询数据库
``` sql
SHOW DATABASES;    -- 查询所有数据库
SELECT DATABASE();  -- 查询当前数据库，就是看一下当前选中的是哪个数据库
```
### 使用数据库
``` sql
USE <DATABASE_NAME>;
```
## 表
### 创建表
```SQL
CREATE TABLE <TABLE_NAME> (
	Column1 datatype constraits,
	Column2 datatype constraits,
	Column3 datatype constraits,
	...
)
```
Datatype: [Datatype](计算机/数据库/link/link.md#Datatype)
Constraits: [Constraints](计算机/数据库/link/link.md#Constraints)
### 删除表
```SQL
DROP TABLE <TABLE_NAME>;    -- 直接删除表，不检查是否存在
-- 或
DROP TABLE [IF EXISTS] <TABLE_NAME>;

```
### 查询所有表
```SQL
SHOW TABLES;
```
### 查询表的结构
``` sql
DESC <TABLE_NAME>;
// 列出表的字段，默认值，主键等结构
```
### 查询建表时的语句
``` sql
SHOW CREATE TABLE <TABLE_NAME>;
```


# DML
## 插入数据
```SQL
INSERT INTO <TABLE_NAME> (Column1, Column2, ...)
VALUES(Value1, Value2, ...)
```
字段和值在位置上要一一对应，若选中了所有列，则列集合可以省略，按照表原有的列顺序一次给出其值。

未指定的字段（列）将会采用默认值，若有 `AUTO_IMCREMENT` 约束，则会在其前驱的基础上递增。

若 `DEFAULT` 为 `NULL` 而该字段又受到 `NULL:NO` 的约束，不指定值而采用默认值将会报错。

```SQL
INSERT INTO users
VALUES (NULL,'test', 'test@runoob.com', '1990-01-01', true);
```
这里 `NULL` 值为 `ID` 字段占位，`ID` 受`AUTO_IMCREMENT`约束，所以不会真为 `NULL`，而是递增。

```SQL
INSERT INTO users (username, email, birthdate, is_active)
VALUES
    ('test1', 'test1@runoob.com', '1985-07-10', true),
    ('test2', 'test2@runoob.com', '1988-11-25', false),
    ('test3', 'test3@runoob.com', '1993-05-03', true);
```
一次插入多行数据。


# DQL
## SELECT 查询数据
`SELECT` 语句可以用于查询表中特定数据
```SQL
SELECT <FIELD> FROM <TABLE_NAME>
```

## WHERE 过滤条件
用于条件过滤
```SQL
SELECT <FIELD> FROM <TABLE_NAME> WHERE <CONDITION>
```
### 操作符
| 操作符           | 描述            | 示例                                                                  |
| ------------- | ------------- | ------------------------------------------------------------------- |
| `=`           | 等于            | `WHERE field = value`                                         |
| `<>` 或 `!=`   | 不等于           | `WHERE field <> value` 或 `WHERE field != value`         |
| `>`           | 大于            | `WHERE field > value`                                         |
| `<`           | 小于            | `WHERE field < value`                                         |
| `>=`          | 大于等于          | `WHERE field >= value`                                        |
| `<=`          | 小于等于          | `WHERE field <= value`                                        |
| `BETWEEN`     | 在指定范围内        | `WHERE field BETWEEN value1 AND value2`                       |
| `NOT BETWEEN` | 不在指定范围内       | `WHERE field NOT BETWEEN value1 AND value2, [value1, value2]` |
| `IN`          | 等于指定列表中的某个值   | `WHERE field IN (value1, value2, ...)`                        |
| `NOT IN`      | 不等于指定列表中的任何值  | `WHERE field NOT IN (value1, value2, ...)`                    |
| `LIKE`        | 匹配模式（通常用于字符串） | `WHERE field LIKE 'pattern%'`                                 |
| `NOT LIKE`    | 不匹配模式         | `WHERE field NOT LIKE 'pattern%'`                             |
| `IS NULL`     | 是 NULL 值      | `WHERE field IS NULL`                                         |
| `IS NOT NULL` | 不是 NULL 值     | `WHERE field IS NOT NULL`                                     |
| `AND`         | 逻辑与，同时满足多个条件  | `WHERE condition1 AND condition2`                                   |
| `OR`          | 逻辑或，满足其中一个条件  | `WHERE condition1 OR condition2`                                    |
| `NOT`         | 逻辑非，否定条件      | `WHERE NOT condition`                                               |
| `LIMIT`       | 查询行数          | `WHERE LIMIT 10` 及 `WHERE LIMIT 20,10`                              |

## 查询总结
### 单表查询


### 多表查询（连接查询）
多表查询是先连接，再查询。
`select [filed] form table1, table2 where <expr>;`
将`table1`和`table2`以条件表达式`expr`连接。

#### 几种特殊的连接
通过`where`语句可以实现所有连接，几种常见的连接也有其各自的语句
- `t1 LEFT OUTTER JOIN t2 ON(<expr>)`  左外连接


# DCL


# 配置
在MySQL中，数据库的存放目录（也称为数据目录）取决于MySQL的安装和配置方式。通常，这个目录包含了MySQL数据库中所有的数据库文件，包括表结构文件（`.frm`）、数据文件（`.MYD` 对于MyISAM表，`.ibd` 对于InnoDB表的单独表空间）以及索引文件（`.MYI` 对于MyISAM表，InnoDB表通常将数据和索引存储在`.ibd`文件中，或者如果启用了共享表空间，则存储在`ibdata1`等文件中）。

### 查看MySQL数据目录的几种方法：

#### 1. 配置文件（my.cnf 或 my.ini）

MySQL的数据目录通常在其配置文件`my.cnf`（在Linux上）或`my.ini`（在Windows上）中指定。你可以搜索这个文件中的`datadir`项来找到数据目录的路径。例如：

```bash
# 在Linux上
grep 'datadir' /etc/mysql/my.cnf
# 或者，如果你使用的是MariaDB或其他MySQL变种，路径可能不同
grep 'datadir' /etc/mysql/mariadb.conf.d/50-server.cnf

# 在Windows上
# 打开my.ini文件，搜索 [mysqld] 部分下的 datadir 配置项
```

#### 2. MySQL命令行

你也可以通过MySQL命令行来查询数据目录。登录到MySQL后，执行以下SQL命令：

```sql
SHOW VARIABLES LIKE 'datadir';
```

这将返回数据目录的路径。

#### 3. 系统信息命令（Linux）

如果你使用的是Linux系统，并且有足够的权限，你可以通过系统命令来查找MySQL进程，并查看其启动参数中是否包含了数据目录的路径。但这通常不如直接查看配置文件或MySQL命令行输出直接。

# 添加用户
这份网址主要介绍了MySQL中创建用户的三种方法。以下是详细的知识点总结：

1. **MySQL创建用户的三种方式**：
   - **使用CREATE USER语句**：
     - **基本语法**：`CREATE USER 'username'@'host' IDENTIFIED BY 'password';`
     - **参数说明**：
       - `username`：要创建的用户名。
       - `host`：指定用户可以从哪个主机登录，使用`localhost`为本地用户，`%`为任意远程主机。
       - `password`：用户的登录密码，可以为空。
     - **示例**：`create user 'dog'@'localhost' identified by '123456';`
   - **在mysql.user表中添加用户**：
     - **使用INSERT语句**：`insert into mysql.user(host, user, authentication_string) values ('hostname', 'username', password('password'));`
     - **MySQL 5.7及以后**：使用`authentication_string`字段存储密码哈希。
     - **注意**：需要FLUSH PRIVILEGES命令使新用户生效。
     - **示例**：`insert into mysql.user(host, user, authentication_string) values ('localhost', 'cat', password('654321'));`
   - **使用GRANT语句创建用户**：
     - **基本语法**：`GRANT priv_type ON database.table TO 'username'@'host' IDENTIFIED BY 'password';`
     - **功能**：不仅可以创建用户，还可以直接授予权限。
     - **示例**：`GRANT SELECT, INSERT ON exampledb.* TO 'newuser'@'%' IDENTIFIED BY 'password';`

# 修改用户密码
```MySQL
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```


# 用户权限管理
## 授予权限
```mysql
GRANT SELECT, INSERT, UPDATE, DELETE ON hospital_db.* TO 'hospital'@'%';
```
给用户 hospital 在所有登录的主机上授予仅对 hospital_db 数据库的 select, insert, update, delete 权限。

```mysql
GRANT ALL PRIVILEGES ON hospital_db.* TO 'hospital'@'%';

```
授予所有权限。

## 撤销权限
```mysql
REVOKE ALL PRIVILEGES ON hospital_db.* FROM 'hospital'@'%';

REVODE SELECT, INSERT ON hospital_db.* FROM 'hospital'@'%';
```

>[!note]
>修改权限后记得执行 `FLUSH PRIVILEGES` 进行刷新。

