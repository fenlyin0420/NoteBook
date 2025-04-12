## 安装 Conda

### Linux 系统安装方式

1. **下载 Miniconda**:
   如果要安装其他版本可以在清华大学源找到对应的安装包。
   ```bash
   wget --no-check-certificate https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
   ```

2. **授权并安装**:
   下载后只需要授权安装即可。
   ```bash
   chmod +x Miniconda3-py39_4.12.0-Linux-x86_64.sh
   ./Miniconda3-latest-Linux-x86_64.sh
   ```

3. **配置环境变量**:
   安装完成后，需要将 `conda` 命令添加到系统的 PATH 中。
   ```bash
   echo 'export PATH=/root/miniconda3/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

4. **初始化 Conda**:
   如果不小心跳过了自动初始化，可以手动进行。
   ```bash
   conda init bash
   source ~/.bashrc
   ```

5. **验证安装**:
   成功配置后，终端开头应显示 `(base)` 表示已经进入 base 环境。

### 卸载 Conda

- **去除终端配置中 Conda 相关的内容**:
  ```bash
  conda init --reverse bash
  ```
- **删除 Miniconda 和 .conda 目录以及配置文件**:
  ```bash
  rm -rf ~/miniconda3
  rm -rf ~/.conda
  rm ~/.condarc
  ```

## 创建和管理环境

### 创建新环境

创建指定 Python 版本的环境：
```bash
conda create -n test python=3.8
```

激活新创建的环境：
```bash
conda activate test
```

退出当前环境（返回 base 环境）：
```bash
conda deactivate
```

列出所有环境：
```bash
conda env list
```

删除环境：
```bash
conda env remove -n test
```

### 导出和导入环境

导出环境为 YAML 文件：
```bash
conda env export --name test --file environment.yml
```

从 YAML 文件创建环境：
```bash
conda env create --prefix ./env --file environment.yml
```

更新环境：
```bash
conda env update --file environment.yml
```

## 包管理

安装包：
```bash
conda install matplotlib
```

查看已安装的包：
```bash
conda list
```

更新包：
```bash
conda update 包名
```

删除包：
```bash
conda remove 包名
```

列出可安装的 Python 版本：
```bash
conda search python
```

## 配置 Conda 不自动进入 base 环境

设置不自动进入 conda 的 base 环境：
```bash
conda config --set auto_activate_base false
```


# conda硬链接内容
Miniconda 采用 **硬链接（hard link）** 来节省磁盘空间和加快环境创建速度。通常，Miniconda 会对以下几类文件进行硬链接：
## **1. Python 解释器**

- Miniconda 安装的 Python 二进制文件（`python.exe` 或 `python`）
    
- 相关的动态库（如 `libpythonX.X.so` 或 `pythonX.X.dll`）
    

**存储位置：**

- `pkgs/python-<version>-<platform>/bin/python`（Linux/macOS）
    
- `pkgs/python-<version>-<platform>/python.exe`（Windows）
    
- `envs/my_env/bin/python`（Linux/macOS）
    
- `envs\my_env\python.exe`（Windows）
    

**检查：**

```bash
ls -li ~/miniconda3/pkgs/python-*/bin/python ~/miniconda3/envs/my_env/bin/python
```

如果 inode 相同，则表明是硬链接。

---

## **2. Conda 本身及其依赖**

Miniconda 自带 Conda 包管理工具，默认情况下，其核心组件是硬链接的：

- `conda` 及其 Python 依赖：
    
    - `pkgs/conda-<version>/bin/conda`
        
    - `envs/my_env/bin/conda`
        
- 相关依赖：
    
    - `conda-package-handling`
        
    - `ruamel.yaml`
        
    - `requests`
        
    - `pyopenssl`
        

**检查：**

```bash
ls -li ~/miniconda3/pkgs/conda-*/bin/conda ~/miniconda3/envs/my_env/bin/conda
```

---

## **3. 共享的核心库**

Miniconda 默认会硬链接以下依赖库：

- `openssl`
    
- `sqlite`
    
- `zlib`
    
- `libffi`
    
- `xz`
    
- `tk`
    
- `ncurses`（Linux/macOS）
    

**存储位置：**

- `pkgs/<package-name>/lib/`
    
- `envs/my_env/lib/`
    

**检查：**

```bash
ls -li ~/miniconda3/pkgs/openssl-*/lib/libssl.so ~/miniconda3/envs/my_env/lib/libssl.so
```

---

## **4. 标准库和 Site-Packages**

- Miniconda 的 `site-packages` 目录下的一些基础 Python 包，如：
    
    - `setuptools`
        
    - `pip`
        
    - `wheel`
        
    - `six`
        
    - `certifi`
        

**存储位置：**

- `pkgs/<package>/site-packages/`
    
- `envs/my_env/lib/pythonX.X/site-packages/`
    

**检查：**

```bash
ls -li ~/miniconda3/pkgs/certifi-*/site-packages/certifi ~/miniconda3/envs/my_env/lib/pythonX.X/site-packages/certifi
```

---

## **5. 环境创建时安装的 Conda 包**

当你创建一个新环境时，Conda 会优先尝试硬链接 `pkgs` 目录中的已有包，而不是复制它们。例如：

```bash
conda create -n my_env numpy
```

如果 `numpy` 及其依赖（如 `libblas`, `liblapack`）已经存在于 `pkgs/` 目录，Conda 直接硬链接，而不是下载和解压新文件。

**检查：**

```bash
ls -li ~/miniconda3/pkgs/numpy-*/lib/pythonX.X/site-packages/numpy ~/miniconda3/envs/my_env/lib/pythonX.X/site-packages/numpy
```

---

## **如何确认哪些文件是硬链接的？**

### **方法 1：使用 `conda list --explicit`**

```bash
conda list --explicit
```

如果某个包的路径指向 `pkgs/`，说明它是硬链接的。

### **方法 2：使用 `find` 命令**

```bash
find ~/miniconda3/envs/my_env -type f -links +1
```

这将列出所有 **硬链接数大于 1** 的文件，即它们被多个环境共享。

### **方法 3：Windows 下使用 `fsutil`**

```powershell
fsutil hardlink list C:\Users\YourUser\miniconda3\envs\my_env\python.exe
```

如果 Python 在 `pkgs` 目录中存在硬链接，`fsutil` 会列出它们。

---

## **总结**

Miniconda 默认会硬链接：

1. **Python 解释器** (`python`, `python.exe`)
    
2. **Conda 及其核心依赖** (`conda`, `openssl`, `sqlite`, `zlib`)
    
3. **标准库及基本 Site-Packages** (`setuptools`, `pip`, `wheel`)
    
4. **环境创建时已安装的包**（如 `numpy`, `pandas`，前提是它们已存在于 `pkgs`）
    

硬链接可以大幅减少存储占用，提高环境管理效率。如果你想确认具体的文件是否被硬链接，可以使用 `ls -li` 或 `fsutil hardlink list` 进行检查。