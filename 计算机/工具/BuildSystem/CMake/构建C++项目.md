不同编译器编译的库可能不兼容，GCC编译器可能无法使用MSVC编译器编译的库。

在使用CMake时，指定构建系统是通过选择**生成器（Generator）** 来实现的，构建系统有自己默认的编译器，但也可以在一定范围配置其他编译器，具体可以配置哪些视构建系统而定。

### 查看支持的生成器
运行以下命令查看当前系统支持的生成器：
```bash
cmake --help
```
在输出中，你会看到类似以下的内容：
```
Generators

The following generators are available on this platform:
  Visual Studio 17 2022        = Generates Visual Studio 2022 project files.
  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.
  MinGW Makefiles              = Generates makefiles for use with mingw32-make.
  Ninja                        = Generates build.ninja files.
  Unix Makefiles               = Generates standard UNIX makefiles.
  ...
```

---

### 指定生成器
在运行CMake时，使用`-G`参数指定生成器。例如：
#### **MinGW**
指定生成器为`MinGW Makefiles`，默认使用MinGW作为编译器
```bash
cmake -G "MinGW Makefiles" -DCMAKE_C_COMPILER=D:\Applications\mingw64\bin\gcc.exe -DCMAKE_CXX_COMPILER=D:\Applications\mingw64\bin\g++.exe ..
```
- `-G "MinGW Makefiles"`：指定生成器为MinGW。
- `-DCMAKE_C_COMPILER` 和 `-DCMAKE_CXX_COMPILER`：显式指定MinGW的C和C++编译器路径。

#### **MSVC（Visual Studio）**
指定生成器为`Visual Studio`，默认使用MSVC作为编译器，
```bash
cmake -G "Visual Studio 17 2022" ..
```

#### **Ninja**
如果你使用Ninja作为构建工具，指定生成器为`Ninja`：
```bash
cmake -G "Ninja" ..
```
在Ninja构建系统中，可以调用具体的编译器构建项目。
#### **Unix Makefiles**

如果你在Linux或macOS上使用GNU Make，指定生成器为`Unix Makefiles`：
```bash
cmake -G "Unix Makefiles" ..
```

---

### 指定平台架构（仅适用于MSVC）
如果你使用Visual Studio生成器，可以通过`-A`参数指定目标平台架构（例如x64或Win32）：
```bash
cmake -G "Visual Studio 17 2022" -A x64 ..
```
- `-A x64`：指定目标平台为64位。
- `-A Win32`：指定目标平台为32位。

---

### 指定工具链文件
如果你需要自定义编译器或工具链（例如交叉编译），可以使用`-DCMAKE_TOOLCHAIN_FILE`参数指定工具链文件。例如：
```bash
cmake -G "MinGW Makefiles" -DCMAKE_TOOLCHAIN_FILE=D:\path\to\toolchain.cmake ..
```
工具链文件的内容通常包括：
```cmake
set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_C_COMPILER D:\Applications\mingw64\bin\gcc.exe)
set(CMAKE_CXX_COMPILER D:\Applications\mingw64\bin\g++.exe)
```

---

### 6. **验证生成器**
运行CMake后，检查生成的构建文件是否与指定的生成器匹配：
- 如果使用`MinGW Makefiles`，会生成`Makefile`文件。
- 如果使用`Visual Studio`，会生成`.sln`和`.vcxproj`文件。
- 如果使用`Ninja`，会生成`build.ninja`文件。

---

### 7. **构建项目**
配置完成后，使用以下命令构建项目：
- **MinGW**：
  ```bash
  mingw32-make
  ```
- **MSVC**：
  打开生成的`.sln`文件，使用Visual Studio构建。
- **Ninja**：
  ```bash
  ninja
  ```
- **Unix Makefiles**：
  ```bash
  make
  ```

