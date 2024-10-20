NPM（Node Package Manager）是一个 JavaScript 包管理工具，**也是** Node.js 的默认包管理器。

npm安装的包中必须要有`Package.json`文件，该文件定义了包的相关属性。
# npm常用命令
- `npm install <packageName> =[-g]` 安装指定包
	- 默认为**局部安装**，即安装在当前目录下: `./node_modules/<packageName>`
	- `-g`选项为**全局安装**, 在windows中安装在`~\AppData\Roaming\npm\<packageName>`下
- `npm list [-g]` 列出已安装的所有包，分为本地和全局
- `npm uninstall <packageName>` 卸载包
- `npm update <packageName>` 更新包
- `npm search <packageName>` 在镜像里搜索指定的包，列出匹配的包
- `npm run <dev|serve>` 运行Vue应用, `dev`是以开发模式运行, 可以检测文件变化并重新运行

