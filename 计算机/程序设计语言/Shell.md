# 运行Shell脚本的方法
1. `./test.sh` 这种方法告诉系统，运行当前目录下的test.sh文件，不会去PATH中搜索，如果使用这种方式，test.sh文件开头要指定解释此文件的解释器，否则无法运行
2. `/bin/bash test.sh` 作为解释参数器参数运行，此时脚本开头无需指定解释器
- `#!/bin/bash` 指定解释器的语法

# Shell 变量
### 定义变量
shell脚本中定义变量和给变量重新赋值时，**等号两边最好不要有空格。**
``` bash
x=1    # 在shell中养成这种习惯
x = 1  # 最好不要使用这种风格
```
### 使用变量
- `echo $x` 如果没有$符号，将直接输出"x"
- `echo ${varName}` 使用"{}"符号指定变量名的边界
### 只读变量
``` bash
str1="hello"
readonly str1
# 使用readonly关键字声明变量的只读属性
# 如果先readonly再初始化，这是不行的，因为已经readonly了, 即声明时必须初始化
```
### 删除变量
- `unset x` 使用unset关键字
- 只读变量不能被删除
### 变量类型
shell作为一门动态编程语言，其变量类型会根据变量的值或字面值进行推导，但在Shell中，字面值只有一种，字符型，如此一来，声明整型变量就要用到其他方法了。
- `declare -i x=1`| `typeset x=1` 使用这两种方法声明整型变量
### 特殊变量
- 环境变量：操作系统级的变量，由操作系统或用户设置，用于配置Shell行为和其执行环境
- 参数变量：$0 表示脚本名称，$1, $2...等表示脚本参数，\$\#表示参数数量，\$?表示上一个命令的退出状态

# 字符串
### 拼接字符串
将各个子串一次罗列出来即可，中间千万不能以空格分隔，要紧贴
``` bash
str1="world"
str="hello"" "$str1
# Output: hello world
# 也可：
str=hello" "$str1
```
### 字符串长度
``` bash
str=hello
echo ${#str}    # 不知道什么原理，记住吧
# Output: 5
```
### 字符串截取
``` bash
str="hello world"
echo ${str:6:5}    # 从索引6开始截取5个字符
# Output: world
```
### 字符串查找
``` bash
str="hello world"
echo `expr index "$str" h`
# Output: 1
echo `expr index "$str" lo`
# Output: 3
# 待查字符串必须要以引号包围的形式出现，后面是待查字符。找出字符串中第一次出现待查字符的位置即可，索引从1开始！！！
```
# Shell数组
### 定义及访问
``` bash
# shell中的数组，分为index型和associatex型（字典）

# index:
arr1=(1 2 3 4)    # 元素间以空格分隔
echo ${arr1[0]}   # 访问
a=${arr1[0]}
b=${arr1[1]}
c=$a+$b
echo $c    # Output: 3  index型数组中数字的字面值又是整型，可能是例外吧，真是搞不懂

# associate:（也就是字典）
declare -A arr2
arr2["name"]="John"
arr2[age]=12
arr2[name]=John
# 因为Shell中字面值只有字符型，因此"name" 和 name 都可

# “@”一次访问所有元素
echo ${arr[@]}    # 遍历并输出所有元素
```
### 数组的长度
``` bash
length=${#arr[@]} 
# 或
length=${#arr[*]}    # 取得数组长度

length=${#arr[1]}    # 取得元素长度
```
### 数组的键
``` bash
# 使用！符号访问数组的键
arr1=(1 2 3)
echo ${!arr1[@]}
# Output: 
# 0 1 2

declare -A site
site["google"]="www.google.com"
site["runoob"]="www.runoob.com"
site["taobao"]="www.taobao.com"
echo "数组的键为: ${!site[*]}"
echo "数组的键为: ${!site[@]}"
# Output:
# 数组的键为: google runoob taobao
# 数组的键为: google runoob taobao
```
# 运算符
>凡是需要被方括号包围的条件表达式，方括号与操作数、操作数与操作符之间都需要有空格分隔
>与C语言不同，在shell中，0代表True，非0代表False
### 算术运算符
![img](suan_shu.png)
Shell不支持数学运算，因此，想要进行数学运算需要用到其他方法：
``` bash
echo `expr $a \* $b`
echo [$a+$b] // 不能有多余空格
```
这是一个`a+b`的表达式，需要注意的是：
- 算术运算符表达式使用\`expr \`包围
- 对于乘法，需要加一个转义符
- 操作数与操作符之间必须要用一个空格分隔
### 关系运算符
![关系运算符](guan_xi.png)
![关系运算符](guan_xi_1.png)
- 关系运算符表达式使用方括号包围
### 布尔运算/逻辑运算
![bool](bool.png)
![logic](logic.png)
- 本人感觉这两运算符是一个东西。。。
### 字符串运算符
![str_operator](str_operator.png)
### 文件检测运算符
文件检测运算符可以用来检测一个文件的各种属性
![file_operator](file_operator.png)
- `-S` 判断文件是否Socket
- `-L` 判断文件是否存在并且是一个符号链接

# echo命令
- `echo -e "hello world\n"` 开启转义，输出换行。类似于行换这种，必须要在双引号中
- `echo '$str\n'` 输出：`$str\n` 输出原样字符，使用单引号
# printf命令
# 流程控制
### if-else if-else
``` bash
if condition1
then
	command1
else if
	command2
else
	command3
fi  # 注意要加fi结束

# 写成一行：
if [ condition1 ];then command1;else if command2;else command3;fi
```
### for 循环
``` bash
for i in 1 2 3 4 5
do
	echo $i
done

# 写成一行：
for i  in 1 2 3 4 5;do echo $i;done
```
### while  循环
``` bash
while condition
do
	command
done
```
### until 循环
- until 循环与while循环相反，while是当条件为真时执行循环体，而until是当条件为假时执行循环体
### case-esac
``` bash
case var in
	var) command ;;
	var) command ;;
	  *) command ;;
esac
# 1. ) 后面只能隔一个空格
# 2. ;; 不能少，最后一个除外
# 3. 在shell中，break不能代替 ;;
```
### break-continue
>与c语言中的语法一致，但只限于跳出循环语句
# 函数
### 定义
``` bash
[Function] func([var1, var2, ...]){
# Function引导符可有可无
	command1
	command2
	[return var] # 没有return，则将以最后一条命令的结果作为返回值
} 
```
### 调用
``` bash
# 无参：
func
# 有参：
func var1 var2 ...
# 在shell中，函数更偏向于命令形式
```
### 函数参数
``` bash
$# 参数个数
$<i> 第i个参数
$? 上一条命令（函数）的返回值
```
# 文件包含
在shell中，也可以包含文件，方便代码复用等。
``` bash
. file_path
# or
source file_path
```


# 输入输出重定向
一个命令只要有输入或输出，那么就可以重定向。默认情况下，一个命令有一个输入源：`stdin`(文件描述符:`0`)；两个输出：`stdout`(文件描述符:`1`)、`stderr`(文件描述符`2`)
- 输出重定向
	- `cat file > file1`或`cat file >> file1` 输出重定向到file1
	- `>` 表示覆盖写入，`>>`表示追加写入
	- `cat file >> file1 2>&1` 将stdout和stderr合并输出到file1中
- 输入重定向
	- `wc -l < file` 重定输向输入为`file`
- `echo hello >&2` 等价于 `echo hello 1>&2` ，省略了`1`
- `1>&2` 这种不是对命令的重定向，而是对标准输入输出的重定向，对一个命令进行重定向的同时，也可以对标准输入输出重定向

## 文档字符串
``` shell
$ wc -l << EOF
> Hello
> World
> !
> EOF
$ 3
# 注意：结束符EOF必须要顶格且后面不能有任何字符
# 结束符可以不必是EOF
```

## /dev/null 文件
此文件是一个特殊文件，写入到此的内容会被自动丢弃，而且也无法读出有效内容，因此，如果想要屏蔽某命令的输出，可以将输出重定向到此文件。