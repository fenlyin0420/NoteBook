# winget
## 换源
- `winget source remove <name>` 移除某个名为 `<name>` 的源
- `winget source add <name> <url>` 添加 `<url>` 源, 命名为 `<name>`
- `winget source list` 查看源列表
**注：** 源列表中不允许有同名的源

## 指定安装路径
``` powershell
winget install <package.name> -l[--location] D:\app\target.folder
```
需要手动创建软件包根目录

# Excel 乱码问题
> csv 文件 utf-8 编码, 使用 Excel打开, 汉字全部为方框乱码

**原因：** Excel 默认使用 `UTF-8 BOM` 解析文件。 `UTF-8 BOM` 只是在 `UTF-8` 的基础上在文件头多了  `EF BB BF` 这三个字节。解码错位导致出现了乱码。

# Windows Schedule Tasks
* `/sc`: 指定计划类型。可以是 MINUTE、HOURLY、DAILY、WEEKLY、MONTHLY、ONCE、ONSTART、ONLOGON、ONIDLE 或 ONEVENT。 
* `/tn`: 指定任务的名称。 
* `/tr`: 指定要运行的命令或脚本。 
* `/st`: 指定开始时间。对于 ONCE 计划, 这是必需的。 
* `/ed`: 指定任务的结束日期（可选）。

当然, 以下是 `schtasks /create` 命令的Markdown格式总结：

## SCHTASKS /Create 命令概述

`SCHTASKS /Create` 命令允许管理员在本地或远程系统上创建计划任务。

## 参数列表

- `/S system`: 指定要连接的远程系统。如果省略, 默认为本地系统。
- `/U username`: 指定 SchTasks.exe 应执行的用户上下文。
- `/P [password]`: 指定给定用户上下文的密码。如果省略, 将提示输入。
- `/RU username`: 指定任务运行的"作为"用户账户（用户上下文）。对于系统账户, 有效值为 `""`, `"NT AUTHORITY\SYSTEM"` 或 `"SYSTEM"`。
- `/RP [password]`: 指定"作为"用户的密码。如果值为 `"*"` 或无, 将提示输入密码。对于系统账户, 此密码将被忽略。
- `/SC schedule`: 指定计划频率。有效计划类型：`MINUTE`, `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`, `ONCE`, `ONSTART`, `ONLOGON`, `ONIDLE`, `ONEVENT`。
- `/MO modifier`: 对计划类型进行细化, 以便对计划的重复性进行更精细的控制。
- `/D day`: 指定任务运行的星期几或月份中的哪一天。
- `/M months`: 指定一年中的月份。
- `/I idletime`: 指定在运行计划的 `ONIDLE` 任务之前等待的空闲时间。
- `/TN taskname`: 指定以路径\名称形式的唯一标识符。
- `/TR taskrun`: 指定在预定时间运行的程序的路径和文件名。
- `/ST starttime`: 指定任务开始运行的时间。
- `/RI interval`: 指定重复间隔（分钟）。
- `/ET endtime`: 指定任务运行的结束时间。
- `/DU duration`: 指定任务运行的持续时间。
- `/K`: 在结束时间或持续时间到达时终止任务。
- `/SD startdate`: 指定任务首次运行的日期。
- `/ED enddate`: 指定任务运行的最后日期。
- `/EC ChannelName`: 指定 `OnEvent` 触发器的事件通道。
- `/IT`: 仅当作业运行时 `/RU` 用户已登录, 才允许任务交互式运行。
- `/NP`: 不存储密码。作为给定用户非交互式运行任务。
- `/Z`: 在任务最后一次运行后将其标记为删除。
- `/XML xmlfile`: 从指定的 XML 文件创建任务。
- `/V1`: 创建对预 Vista 平台可见的任务。
- `/F`: 强制创建任务并抑制警告。
- `/RL level`: 设置作业的运行级别。
- `/DELAY delaytime`: 指定触发器触发后延迟运行任务的时间。
- `/HRESULT`: 进程退出代码将以 HRESULT 格式显示。
- `/?`: 显示帮助信息。

## 修饰符

- `/MO` 开关的有效值根据计划类型而异。

## 示例
```
schtasks /create /sc DAILY /tn "My Task" /tr "C:\path\to\your\script.bat" /st 08:00 /ed 12/31/2023
```

1. 创建每小时在远程机器 "ABC" 上运行 `notepad.exe` 的任务 "doc"。
   ```
   SCHTASKS /Create /S ABC /U user /P password /RU runasuser /RP runaspassword /SC HOURLY /TN doc /TR notepad
   ```

2. 创建在远程机器 "ABC" 上运行 `calc.exe` 的任务 "accountant", 每五分钟运行一次。
   ```
   SCHTASKS /Create /S ABC /U domain\user /P password /SC MINUTE /MO 5 /TN accountant /TR calc.exe /ST 12:00 /ET 14:00 /SD 06/06/2006 /ED 06/06/2006 /RU runasuser /RP userpassword
   ```

3. 创建每月第一个星期日运行 `freecell` 的任务 "gametime"。
   ```
   SCHTASKS /Create /SC MONTHLY /MO first /D SUN /TN gametime /TR c:\windows\system32\freecell
   ```

4. 创建每周在远程机器 "ABC" 上运行 `notepad.exe` 的任务 "report"。
   ```
   SCHTASKS /Create /S ABC /U user /P password /RU runasuser /RP runaspassword /SC WEEKLY /TN report /TR notepad.exe
   ```

5. 创建每天从指定开始时间运行 `notepad.exe` 且没有结束时间的任务 "logtracker"。
   ```
   SCHTASKS /Create /S ABC /U domain\user /P password /SC MINUTE /MO 5 /TN logtracker /TR c:\windows\system32\notepad.exe /ST 18:30 /RU runasuser /RP
   ```

6. 创建每天从 12:00 开始运行 `freecell.exe` 并在 14:00 自动终止的任务 "gaming"。
   ```
   SCHTASKS /Create /SC DAILY /TN gaming /TR c:\freecell /ST 12:00 /ET 14:00 /K
   ```

7. 创建当系统事件通道发布事件 101 时运行 `wevtvwr.msc` 的任务 "EventLog"。
   ```
   SCHTASKS /Create /TN EventLog /TR wevtvwr.msc /SC ONEVENT /EC System /MO *[System/EventID=101]
   ```

8. 处理文件路径中空格的示例。
   ```
   SCHTASKS /Create /tr "'c:\program files\internet explorer\iexplorer.exe' 'c:\log data\today.xml'" ...
   ```


# 注册表
windows 中某些功能是每隔一段时间读取一次注册表, 因此这种功能改变注册表后, 不会立即生效
### 添加右键菜单项
**导航到上下文菜单项的位置**
   - 桌面背景的右键菜单
     ```
     HKEY_CLASSES_ROOT\Directory\Background\shell
     ```
   - 文件夹的右键菜单
     ```
     HKEY_CLASSES_ROOT\Directory\shell
     ```
   - 文件的右键菜单
     ```
     HKEY_CLASSES_ROOT\*\shell
     ```

3. **创建新项**
   - 在目标位置上, 右键点击 `shell` 文件夹, 选择 `新建 > 项`。
   - 为新项命名, 这个名字将是你在右键菜单中看到的文本。

4. **设置命令**
   - 选择你刚创建的新项, 在右侧窗格中右键点击, 选择 `新建 > 字符串值`。
   - 命名为 `Icon` 并设置图标路径（可选）。
   - 右键点击新项, 再次选择 `新建 > 项`, 并命名为 `command`。
   - 选择 `command` 项, 在右侧窗格中双击 `默认` 值。
   - 在弹出的对话框中输入你想要执行的命令或程序的路径。例如, 要打开记事本, 可以输入：
     ```
     notepad.exe
     ```

### 示例

例如, 添加一个“打开记事本”的右键菜单项：

1. 导航到 `HKEY_CLASSES_ROOT\Directory\Background\shell`。
2. 右键点击 `shell` 文件夹, 选择 `新建 > 项`, 命名为 `打开记事本`。
3. 在右侧窗格中, 右键点击空白处, 选择 `新建 > 字符串值`, 命名为 `Icon`, 然后双击它并输入：
   ```
   C:\Windows\System32\notepad.exe
   ```
4. 右键点击 `打开记事本` 项, 选择 `新建 > 项`, 命名为 `command`。
5. 选择 `command` 项, 在右侧窗格中双击 `默认` 值, 并输入：
   ```
   C:\Windows\System32\notepad.exe
   ```


### 语法说明

- **注册表文件头**：必须以 `Windows Registry Editor Version 5.00` 开头。
- **项的定义**：使用方括号 `[ ]` 指定项路径。例如, `[HKEY_CLASSES_ROOT\Directory\Background\shell\Open Notepad]`。
- **值的定义**：
    - 默认值使用 `@` 表示, 例如 `@="Open Notepad"`。
    - 指定名称的值使用 `"Name"="Value"` 语法, 例如 `"Icon"="C:\\Windows\\System32\\notepad.exe"`。
- **转义字符**：在路径中使用双反斜杠（`\\`）来转义反斜杠。
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\Open Notepad]
@="Open Notepad"
"Icon"="C:\\Windows\\System32\\notepad.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\Open Notepad\command]
@="C:\\Windows\\System32\\notepad.exe"

```



# 字符编码
~~用一个事物表示另一个事物, 其间必然存在某种映射关系。在利用计算机表示文字方面, 这种映射便是字符编码。
将目标字符储存起来, 要指定编码方式, 通过编码, 将目标字符转换为比特值, 存储；想要访问该字符, 则用对应的解码方式解码。当编码器与解码器不对应时, 便会发生乱码, 所谓乱码, 就是无意义的字符序列。~~
字符编码是将二进制与字符一一对应，对应法则本质就是一个二元关系：`{<binary, char>}`。我们将这个关系称为编码，将`char`所组成的集合称为字符集。例如，在ascill编码下，其字符集共有128个元素。

## GB2312 与 UTF-8 之间的乱码
文件以 GB2312 编码保存, 再以 UTF-8 编码打开, 乱码大多表现为菱形符号。
![乱码](Pasted%20image%2020240912123406.png)
![ 原码](Pasted%20image%2020240912123431.png)
例如, 对"生成代码"四个字符, 使用 GB2312 编码保存, 再使用 UTF-8 编码打开, 如下, 和上述图形界面一致。
![](Pasted%20image%2020240912123503.png)
![](Pasted%20image%2020240912123519.png)

## FQA
1. 为什么图形界面, 有的中文字符显示正常, 有的却是乱码？

显示为乱码的是程序中的**字符常量** ，显示正常的是**图片资源**。


# 开始菜单的搜索
Windows 开始菜单的搜索功能主要在以下路径搜索内容：

1. **用户文件夹**：
   - 包括桌面、文档、下载、图片、音乐、视频等常见的用户目录。

2. **开始菜单**：
   - 系统中安装的应用程序的快捷方式、文件夹和磁贴。

3. **系统文件夹**：
   - 包括系统目录（如 `C:\Windows` 和 `C:\Program Files`）、已安装程序的路径和相关文件。

4. **索引位置**：
   - Windows 索引服务索引的路径。可以在“索引选项”中配置或查看索引的位置, 默认包括用户文件夹和 Outlook 数据等。

5. **注册表**：
   - 搜索特定的设置或应用程序时, 可能会查询相关注册表键值。

6. **OneDrive**：
   - 如果启用了 OneDrive 并设置了同步文件夹, 搜索时也会包括 OneDrive 上的文件。

7. **网络位置**：
   - 如果配置了网络驱动器或者与网络共享资源连接, 搜索功能也会在这些网络位置中查找。

>[!note]- 
>索引设置可以在开始菜单搜索："index options", 在索引选项里可以配置哪些路径将被搜索。


