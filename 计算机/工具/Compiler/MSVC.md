**MSVC**（Microsoft Visual C++）是微软提供的 C/C++ 编译器和开发环境，广泛用于 Windows 平台的软件开发。MSVC 提供了强大的优化功能、调试工具以及与 Windows API 的良好兼容性，适用于从桌面应用到大型企业级项目的开发。

---
## 基础命令
### **MSVC 的核心组件**

1. **`cl.exe`（编译器）**
    
    - 负责将 C/C++ 源代码编译成中间目标文件（`.obj`）。
    - 常用参数：
        - `/c`：只编译，不链接。
        - `/EHsc`：启用标准 C++ 异常处理模型。
        - `/O2`：优化代码以提高速度。
        - `/W3`：设置警告级别为 3（中等）。
        - `/MD`：使用多线程 DLL 运行时库。
2. **`link.exe`（链接器）**
    
    - 将 `.obj` 文件链接为可执行文件（`.exe`）或动态链接库（`.dll`）。
    - 常用参数：
        - `/OUT:filename.exe`：指定输出文件名。
        - `/LIBPATH:path`：指定库文件路径。
        - `kernel32.lib`：链接 Windows 核心库。
3. **`nmake.exe`（构建工具）**
    
    - 微软的 make 工具，类似于 GNU 的 `make`，用于自动化编译过程。
    - 通过读取 `Makefile` 文件定义的规则来执行构建步骤。
4. `MSBuild.exe` **(构建工具)**
	- `.sln` 项目
5. **调试工具**
    
    - **`dbghelp.dll`**：调试帮助库。
    - **Visual Studio Debugger**：集成调试器，支持断点、内存检查、线程调试等。

---

### **MSVC 常用命令和参数**

#### **a. 编译（`cl.exe`）**

基本编译命令格式：

```bash
cl [options] file
```

**示例：**

1. **简单编译：**
    
    ```bash
    cl /EHsc /W4 /O2 hello.cpp
    ```
    
    - `/EHsc`：启用 C++ 异常处理。
    - `/W4`：警告级别设为 4（最高）。
    - `/O2`：进行速度优化。
2. **仅生成目标文件：**
    
    ```bash
    cl /c hello.cpp
    ```
    
    这会生成 `hello.obj`，不会链接成可执行文件。
    
3. **指定输出文件名：**
    
    ```bash
    cl /Fe:my_program.exe hello.cpp
    ```
    
    `/Fe:` 指定生成的可执行文件名。
    

---

#### **b. 链接（`link.exe`）**

如果只用 `cl /c` 编译了 `.obj` 文件，可以手动链接：

```bash
link hello.obj /OUT:hello.exe
```

**示例：**

```bash
link hello.obj kernel32.lib user32.lib /OUT:hello.exe
```

- `kernel32.lib` 和 `user32.lib` 是 Windows 的核心库，提供基本系统 API 支持。

---

#### **c. 使用 NMake 自动化构建**

`nmake` 读取 `Makefile` 来自动化编译步骤。

**Makefile 示例：**

```makefile
all: hello.exe

hello.exe: hello.obj
    link hello.obj /OUT:hello.exe

hello.obj: hello.cpp
    cl /c /EHsc hello.cpp

clean:
    del *.obj *.exe
```

运行：

```bash
nmake
```

这会根据规则自动编译和链接。

---

### **调试与优化**

#### **a. 编译调试版本**

- 使用 `/Zi` 生成调试信息，配合 `/Od` 关闭优化，方便调试：
    
    ```bash
    cl /Zi /Od hello.cpp
    ```
    
- 在 Visual Studio 中可直接设置断点调试。
    

#### **b. 编译发布版本**

- 开启优化并移除调试信息，生成更小、更快的可执行文件：
    
    ```bash
    cl /O2 /DNDEBUG hello.cpp
    ```
    
- `/O2`：速度优化，`/DNDEBUG`：禁用 `assert` 语句。
    

---

## 在MSVC下使用CMake构建项目

### 编译项目

CMake 生成的是 Visual Studio 的解决方案文件（`.sln`），可以使用 **Visual Studio IDE** 打开，或者直接在命令行编译。

#### 使用 CMake 构建

4. **编译 Debug 版本**：
    
    ```bash
    cmake --build . --config Debug
    ```
    
5. **编译 Release 版本**：
    
    ```bash
    cmake --build . --config Release
    ```
    

---

### 运行可执行文件

构建完成后，生成的可执行文件一般在如下路径：

```bash
build\Debug\your_program.exe
```

或者：

```bash
build\Release\your_program.exe
```

直接运行即可。

---

### 其他常用参数

6. **清理构建文件**：
    
    ```bash
    cmake --build . --target clean
    ```
    
7. **并行编译（加速构建）**：
    
    ```bash
    cmake --build . --config Release -- /m
    ```
    
    `/m`：启用多核并行编译。
    
8. **指定输出目录**：
    
    ```bash
    cmake -DCMAKE_RUNTIME_OUTPUT_DIRECTORY=bin ..
    ```
    
    这会将生成的可执行文件放在 `bin` 目录下。

