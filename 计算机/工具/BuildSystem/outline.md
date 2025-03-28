![Build System](Build%20System.md)
- 蓝线表示使用makefile手动构建项目
- 红线表示使用cmake+makefile构建项目
- 绿线表示使用cmake+ninja构建项目


cmake是用来 **生成(generate)** 构建工具规则文件的工具。

常见的构建工具规则文件有`makefile(make)`、`build.ninja(ninja)`、`*.sln(msbuild)` 等等。

面对大型项目时，利用构建引擎和构建规则，可以方便的编译、链接，无需重复写编译命令。


