## 注释
```CMakeLists
# 单行注释

#[[ 
多行注释
多行注释]]
```


## 常见指令
- `cmake_minimum_required(VERSION 3.0)` 所需的cmake最低版本
- `project(demo)`  项目名称
- `add_executable(app sourcefile1;sourcefile2)` 工程会生成的可执行程序；源文件除了使用`;`分隔，也可以使用空格分隔


## 变量
- `set(SRC_LIST main.c;add.c; ub.c;)` 定义变量
- `${SRC_LIST}` 访问变量


## 指定输出路径
输出路径默认是Makefile所在目录，但可以通过CMake预定义的宏`EXECUTABLE_OUTPUT_PATH`来改变输出路径
```CMakeLists
set(HOME /home/fenlyin/Demo)
set(EXECUTABLE_OUTPUT_PATH ${HOME}/build)
```


## 整合源文件
当项目源文件很多时，在`add_executable()`中写源文件将会很麻烦，此时可以使用文件搜索，搜索指定文件并以列表的形式存储在变量中
### file GLOB
```CMakeLists
# file(GLOB/GLOB_RECURSE <var> <file_type>)
file(GLOB SRC_LIST {HOME}/*.c) # 搜索所有的c源文件
```
- `GLOB_RECURSE` 表示递归的搜索当前目录，即还要搜索子目录
- `GLOB`  在大型项目中谨慎使用

### aux_source_directory
```CMakeLists
aux_source_directory(<dir> <var>)

aux_source_directory(. SRC_LIST)
add_executable(main. ${SRC_LIST})
```
- `dir` 要搜索的目录
- `var`将搜索结果存储在该变量中
## 指定头文件搜索路径
```CMakeLists
include_directories(<dir> <dir>)
```
构建系统在编译时会传参给编译器(`gcc -I <dir>`)头文件的目录，如果有多个目录，则通过空格分隔
头文件在预处理阶段展开，插入到对应的源文件中，如果没有头文件，编译会失败。

## 构建库文件
在Linux中，静态库命名方式为：前缀+库名+后缀
### 静态库
```CMakeLists
add_library(<library_name> STATIC <source_files>)
```
`lib<library_name>.a`

### 动态库
```CMakeLists
add_library(<library_name> SHARED <source_files>)
```
`lib<library_name>.so`


## 链接库文件
### 链接静态库
```CMakeLists
link_library(<lib1> [<libn])
```
- `<lib>` 可以只是库名，也可以是库的文件名。
### 指定静态库路径
```CMakeLists
link_directories(<path>)
```

### 链接动态库
