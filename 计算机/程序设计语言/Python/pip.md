# pip 常用命令
`pip show <moudule>` 检查某个第三方模块有没有安装
## 永久换源
1. **定位配置文件路径**：
    - 打开文件管理器，在地址栏输入`%APPDATA%`并回车，这将定位到用户目录下的`AppData\Roaming`文件夹。
    - 在`Roaming`文件夹中，检查是否存在名为`pip`的文件夹。如果不存在，则新建一个名为`pip`的文件夹。
2. **创建并编辑配置文件**：
    - 在`pip`文件夹中，创建一个名为`pip.ini`的新文件（注意是`.ini`扩展名，不是`.conf`）。
    - 使用文本编辑器（如记事本）打开`pip.ini`文件，并添加以下内容（以下以使用清华大学镜像源为例）：
```
[global]  
	index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```
如果你想同时添加多个源作为备选，可以使用`extra-index-url`（注意这不是`pip.ini`的标准配置，但`pip.conf`支持，且pip通常会按顺序尝试所有源）：

```
[global]  
	index-url = https://pypi.tuna.tsinghua.edu.cn/simple  
	extra-index-url = https://mirrors.aliyun.com/pypi/simple
```