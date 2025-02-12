
`cmake <dir>` This command will view `<dir>` as the input(src dir), and output in current directroy. If you don't want to your src directory to dirty, you should make a directory `build` and change your working directroy to `build`, then execute `cmake ..`.

# demo
![](Pasted%20image%2020241211113738.png)


# 设置 prefix 变量
`set(CMAKE_INSTALL_PREFIX /home/user/my_project_install)`

# find_package
成功后定义以下变量
- `<PackageName>_LIBRARIES`

# 使用库的方法
1. 以源码的形式访问，最后，将自己项目源码和库源码统一编译。这种方式，每个项目只要使用库里的api都需要重新编译一次库源码。
2. 访问静态库或动态库，将库源码先编译为可重定位目标文件，在打包为库文件，之后每使用库里api，均无需重新编译库源码，而是直接搜索库文件并链接。

Eigen3 库的架构是：所有的源码均写在头文件中，需要访问哪些api，就直接包含对应的头文件，所以使用Eigen3库无需再次链接。

编译一个项目至少需要头文件路径（预处理）、库文件路径（链接）；因此，如果项目中用到了自定义路径的头文件和库文件，编译时一定要手动添加。

一个包，要么将源码直接写在头文件中，要么提供源文件（或库文件）和头文件，头文件作为接口使用，具体实现在源文件或编译之后的库文件中。

# 改变构建工具
1. 再调用命令时传参：`cmake <dir> -G "Unix Makefiles"

# 指定编译器
定义变量`CMAKE_C_COMPILER` 和 `CMAKE_CXX_COMPILER`。可以在CMakeList中使用set定义，也可以在命令行中定义。
- 在文件中定义
```cmake
# 指定 C 编译器
set(CMAKE_C_COMPILER "C:/Path/To/gcc.exe")

# 指定 C++ 编译器
set(CMAKE_CXX_COMPILER "C:/Path/To/g++.exe")
```

- 在命令行中定义
```shell
cmake -DCMAKE_C_COMPILER="C:/Path/To/gcc.exe" -DCMAKE_CXX_COMPILER="C:/Path/To/g++.exe" ..
```

# Cmake install 头文件
cmake 构建完项目后，可能没有头文件，需要手动执行`cmake --install .` 安装头文件，前提是`CmakeLists.txt`中定义了`install`命令。
```cmake
# 生成配置
cmake -DCMAKE_INSTALL_PREFIX=./install -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ..
# 构建
cmake --build . --config Release
# 安装头文件
cmake --install .
```