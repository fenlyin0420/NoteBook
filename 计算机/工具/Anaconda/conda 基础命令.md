# conda info
显示基本信息
- `conda info -e` 列出已经创建的虚拟环境

# 虚拟环境的使用
1. **Conda虚拟环境创建**：
   - 默认位置创建：使用`conda create --name demo_3.8 python=3.8`命令在默认路径下创建虚拟环境。
   - 指定位置创建：使用`conda create --prefix=指定路径 python=版本号`, 在特定路径下创建虚拟环境，例如:
   - `conda create --prefix=E:/ProgramData/Anaconda3/envs/demo_3.10 python=3.1`。

2. **查看虚拟环境列表**：
   - 使用`conda env list`或`conda info --envs`命令查看当前所有的虚拟环境列表。

3. **虚拟环境激活**：
   - 激活命令：使用`conda activate 环境名`或`conda activate 路径`来激活虚拟环境，例如`conda activate demo_py3.10`。
   - 绝对路径激活：如果环境名未显示，可以通过绝对路径来激活环境，虽然这种方法较为繁琐。

4. **环境目录配置**：
   - 环境目录检查：使用`conda config --show envs_dirs`查看当前conda配置的环境目录。
   - 添加新目录：通过`conda config --append envs_dirs your_path`将新创建的虚拟环境目录添加到conda的配置中，以确保conda能够识别新环境。

5. **在VSCode中使用虚拟环境**：
   - 切换解释器：在VSCode中，通过`Ctrl+Shift+P`打开命令面板，搜索并选择`Python: Select Interpreter`来切换当前项目的Python解释器至指定的虚拟环境。
   - VSCode默认解释器：VSCode默认的Python解释器可能是全局的base环境，需要手动切换至项目对应的虚拟环境。

6. **虚拟环境包管理**：
   - 安装包：在激活的虚拟环境中，使用`conda install 包名`命令安装所需的Python包，例如`conda install opencv`。
   - 卸载包：使用`conda remove 包名`命令从虚拟环境中卸载不再需要的包。

7. **退出虚拟环境**：
   - 使用`conda deactivate`命令退出当前激活的虚拟环境，回到系统的默认Python环境或之前激活的环境。

# 虚拟环境目录配置
在Conda中，如果你之前通过`conda config --append envs_dirs your_path`命令添加了一个新的虚拟环境目录到Conda的配置中，并且现在想要删除这个添加的目录，你需要使用`conda config --remove-key`命令来移除相应的配置项。但是，需要注意的是，`envs_dirs`是一个列表，它可能包含多个路径，而`conda config`命令并没有直接提供一个选项来移除列表中特定的路径。

不过，你可以通过编辑Conda的配置文件来手动删除这个路径。Conda的配置文件通常位于你的用户目录下的`.condarc`文件中（在Windows上可能是`C:\Users\你的用户名\.condarc`，在Linux或Mac上可能是`~/.condarc`）。

以下是如何手动编辑`.condarc`文件来删除`envs_dirs`中的特定路径的步骤：

1. **找到`.condarc`文件**：首先，你需要找到`.condarc`文件的位置。如上所述，这个文件通常位于你的用户目录下。

2. **编辑`.condarc`文件**：使用文本编辑器（如Notepad++, Visual Studio Code, Nano等）打开`.condarc`文件。

3. **查找`envs_dirs`项**：在`.condarc`文件中，找到`envs_dirs`这一项。它可能看起来像这样：

   ```yaml
   envs_dirs:
     - /path/to/first/envs
     - /path/to/your/added/envs  # 这是你想要删除的目录
     - /path/to/another/envs
   ```

4. **删除特定路径**：从`envs_dirs`列表中删除你不再需要的路径。确保保留列表的格式，包括缩进和`-`前缀。

5. **保存并关闭文件**：保存你的更改并关闭文本编辑器。

6. **验证更改**：为了确保更改已正确应用，你可以运行`conda info --envs`命令来查看当前Conda配置的虚拟环境目录列表，确认你的更改已生效。

