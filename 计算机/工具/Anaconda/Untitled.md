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
