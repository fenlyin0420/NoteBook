- `rename(old_str, new_str)` 文件重命名。原文件不存在会抛出`FileNotFound`异常。此函数可以在重命名的同时移动原文件
- `makedirs(dir:str)` 常见一个目录，可以一次创建多级目录
- `mkdir()` 只能创建一级目录
- `listdir()` ls命令，返回一个目录列表，元素均为字符串类型
- `remove(file:str)` 删除指定文件
## path
- `join(*path:str) -> str` 将参数按从左到右的的顺序组合成有效的文件路径
```python
>>>os.path.join('var', 'log', 'cron.log')
'var/log/cron.log'
>>>os.path.join('/', 'var', 'log', 'cron.log')
'/var/log/cron.log' # '/'作为根目录
>>>os.path.join('sys', '/', 'var', 'log', 'cron.log')
'/var/log/cron.log' # '/'之前的参数会无效
### 在windows环境下，'/' 会变为'\\'
>>>os.path.join('sys', '/', 'var', 'log', 'cron.log')
'/var\\log\\cron.log'
```

- `dirname(path:str) -> str` 传入一个文件路径，返回去掉叶子节点后的路径，本质上只是保留字符串最后一个'/'前面个的部分
```python
>>>os.path.dirname('/var/log/cron.log')
'/var/log'
```

- `basename(path:str) -> str` 传入一个文件路径，返回叶子节点，本质上只是保留字符串最后一个'/'后面的部分
```python
>>>os.path.basename('/var/log/cron.log')
'cron.log'
```

- `splitext(basename:str) -> tuple` 可以获取没有后缀名的文件名
```Python
basename = 'text.txt'
name = splitext(basename)
# ('text', 'txt')
```

- `exists(path:str)` Test weather a path exists.

## shutil
- `rmtree(dir:str)` 递归的删除整个目录，包括此目录


