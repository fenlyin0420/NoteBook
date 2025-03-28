## 文件操作类命令
- `New-Item -Path <path> -ItemType <Dir | File>`, 创建文件或文件夹
- `Copy-Item <Dir | File> [-Destination] <Dir | File>`, 复制文件或文件夹，`alias: cp`
- `Remove-Item <Dir | File>`, 删除文件或文件夹
- `Get-Content <file>` 查看文件内容，`alias: cat`
- `Set-Content <file> <content>` 往文件中写入内容，覆盖原先内容
- `Add-Content <file> <content>` 往文件中追加内容，不会覆盖原先内容
- `Clear-Content <file>` 清除文件内容

## Get-help
`Get-help <command>` 查看命令的帮助信息
## Get-command
`get-command echo` 获取指定命令的**名称，版本，源码文件位置**等信息

## Get-Date
- `get-date -displayhint date` 仅获取日期
- `get-date -displayhint time` 仅获取时间
- `get-date` 同时获取日期和时间

## Read-Host
等待用户输入
- `--Prompt` 提示语

## Copy-Item(cp)
```PowerShell
cp source dest
```
- 当`source`为文件时，检测`dest`是否为已存在的目录，如果是已存在的目录，则复制到该目录底下，否则，复制为名为`dest`的文件。
- 当`source`为目录时，检测`dest`是否为已存在的目录，如果是已存在的目录，则复制到该目录底下，否则，创建名为`dest`的目录作为复制后的目录。

## findstr
> `findstr` 是一个Command Line，而不是Cmelet。

`ls | findstr("demo")` 类似于`grep`

`findstr("demo")`，之所以能够这样执行，是因为powershell将其视为了函数调用
在执行过程中，powershell发现找不到该函数，于是在环境变量中寻找，找到`findstr.exe`后，将参数`"demo"`传递给它，最终将执行`findstr "demo"`

类似的，`dir("..")`最终将执行`dir ".."`

## powershell访问环境变量
``` powershell
# 设置
[Environment]::setEnvironmentVariable(name, value:str, host)

# 访问
$var=[Environment]::getEnvironmentVariable(name:str, host:Union("User"|"Machine"))
```

# Write-Host 跟 Write-Output 区别
|特性|`Write-Host`|`Write-Output`|
|---|---|---|
|​**输出位置**|直接显示在控制台。|输出到管道，可以被进一步处理。|
|​**是否传递到管道**|不会传递到管道。|会传递到管道。|
|​**格式化选项**|支持颜色和其他格式化选项。|不支持颜色或特殊格式化。|
|​**默认行为**|不是默认的输出方式。|是 PowerShell 的默认输出方式。|
|​**适用场景**|用于调试或向用户显示消息。|用于生成数据并传递给其他 cmdlet。|
## Write-Host 改变颜色
```powershell
write-host "hello, world" -foregroundcolor red -backgroundcolor white
```

