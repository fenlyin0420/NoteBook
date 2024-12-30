---
tags:
  - 打包
  - 可执行程序
  - py2exe
---
## pyinstaller
优点：打包速度快
缺点：体积大
`pyinstaller --onefile script.py`

## nuitka
优点：打包后体积小
缺点：打包速度慢


# 安装C库
Python 的 `setuptools` 安装脚本支持多种打包和分发格式，默认生成的 `.egg` 文件是其中之一。此外，还可以生成和安装其他类型的打包格式，如 `.whl`、`.tar.gz` 等。下面详细介绍常见的打包和安装格式及其示例。

---

### 1. **`.egg` 文件**

#### **生成 `.egg` 文件**

要生成 `.egg` 文件，可以使用以下命令：

```bash
python setup.py bdist_egg
```

#### **安装 `.egg` 文件**

使用 `easy_install` 安装 `.egg` 文件：

```bash
easy_install dist/addmodule-1.0-py3.8-linux-x86_64.egg
```

---

### 2. **`.whl` 文件（Wheel 格式）**

`.whl` 文件是 Python 包的现代打包格式，具有更好的兼容性和安装速度。推荐使用 `.whl` 而不是 `.egg`。

#### **生成 `.whl` 文件**

需要安装 `wheel` 包：

```bash
pip install wheel
```

然后生成 `.whl` 文件：

```bash
python setup.py bdist_wheel
```

#### **安装 `.whl` 文件**

使用 `pip` 安装生成的 `.whl` 文件：

```bash
pip install dist/addmodule-1.0-cp38-cp38-linux_x86_64.whl
```

---

### 3. **`.tar.gz` 源码分发包**

`.tar.gz` 是一种常见的源码分发格式，适用于需要手动构建和安装的情况。

#### **生成 `.tar.gz` 文件**

```bash
python setup.py sdist
```

这将在 `dist` 目录下生成一个文件，例如：

```
addmodule-1.0.tar.gz
```

#### **安装 `.tar.gz` 文件**

使用 `pip` 安装：

```bash
pip install dist/addmodule-1.0.tar.gz
```

或者手动解压后安装：

```bash
tar -xzf addmodule-1.0.tar.gz
cd addmodule-1.0
python setup.py install
```

---

### 4. **`.zip` 源码分发包**

和 `.tar.gz` 类似，也可以打包为 `.zip` 格式。

#### **生成 `.zip` 文件**

```bash
python setup.py sdist --formats=zip
```

#### **安装 `.zip` 文件**

使用 `pip` 安装：

```bash
pip install dist/addmodule-1.0.zip
```

或者手动解压后安装：

```bash
unzip addmodule-1.0.zip
cd addmodule-1.0
python setup.py install
```

---

### 5. **直接安装（开发模式）**

开发模式允许在不重新安装的情况下，对模块进行修改并立即生效。

#### **安装为开发模式**

```bash
python setup.py develop
```

或者使用 `pip` 安装：

```bash
pip install -e .
```

这样会在当前环境中创建一个指向源代码的链接，修改代码后无需重新安装即可生效。

---

### 6. **生成所有常见格式**

可以一次性生成所有常见的打包格式（`.egg`, `.whl`, `.tar.gz`, `.zip`）：

```bash
python setup.py sdist bdist_egg bdist_wheel
```

生成的文件会存放在 `dist` 目录中。

---

### **总结**

|格式|命令|安装命令|
|---|---|---|
|**`.egg`**|`python setup.py bdist_egg`|`easy_install dist/*.egg`|
|**`.whl`**|`python setup.py bdist_wheel`|`pip install dist/*.whl`|
|**`.tar.gz`**|`python setup.py sdist`|`pip install dist/*.tar.gz`|
|**`.zip`**|`python setup.py sdist --formats=zip`|`pip install dist/*.zip`|
|**开发模式**|`python setup.py develop`|`pip install -e .`|

根据具体需求选择合适的打包和安装格式，**推荐使用 `.whl` 格式**，因为它是当前的标准打包格式，安装速度快且兼容性好。

# python 调用C库流程

```
+-------------------+            +---------------------+           +-------------------+
| Python 解释器      |            |     C 扩展函数       |           | Python 解释器      |
| 解析调用和参数      | -------->  |   开始执行 C 代码     | --------> | 接收结果并继续运行   |
| 打包参数           |            |  (解释器挂起)         |           |                   |
+-------------------+            +---------------------+           +-------------------+
```
这体现了python可以黏合各种编程语言的作用。使用python，可以调用C、Java等程序，它们都以python对象为媒介，进行通信。

一个C程序想要被python调用，那么其编程必须符合pyton API。