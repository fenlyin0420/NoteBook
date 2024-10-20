> Python的`configparser`模块是一个标准库，它提供了一种解析和操作配置文件的标准方式。这些配置文件通常采用INI格式，其结构清晰、易于阅读和编辑，由节（sections）、键（options）和值（values）组成。

### Class ConfigParser:
##### method:
**加载文件：**
- `read(path:str)` 读取配置文件  ****** 
**获取信息：**
- `get(section:str, key:str)` 获取section下key的值
- `getint(section:str, key:str)` 获取并将值转为整型
- `getfloat(section:str, key:str)`
- `getboolean(section:str, key:str)`
**修改信息：**
- `add_section(new_section_name:str)` 添加一个新的section
- `set(setion:str, key:str, value:str` 修改（要存在）
- `config_obj['section_name'] = {'key1': 'value1', 'key2': 'value2' ,...}` 修改多个值
**保存信息：**
``` python
with open('config.ini', 'w') as configfile: 
	config_obj.write(configfile)
# 'w'模式，全部覆盖
# 'a'模式，追加
```
