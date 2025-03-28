## Makefile Syntax
A Makefile consists of a set of _rules_. A rule generally looks like this:
``` makefile
targets1: prerequisites
	command
	command
	command

targets2:
	command1
	command2
```
The _targets1_ are file name, separated by spaces. Typically, there is only one per rule.

The _commands_ are a series of steps typically used to make the target(s). These _need to start with a tab character_, not spaces.

The _prerequisites_ are also file names, separated by spaces. These files need to exist before the commands for the target are run. These are also called _dependencies_.

each makefile can have more than one target, when run command `make`, the first target will be built by default. You can provider parameter to build target what you want. eg. `make targets2`


## The essence of make
```
blah: blah.c
	cc blah.c -o blah
```
When we run `make` again, the following set of steps happens:
- The first target is selected, because the first target is the default target
- Make decides if it should run the `blah` target. It will only run if `blah` doesn't exist, or `blah.c` is _newer than_ `blah`
- When  depedency `blah.c` is not exist, if target `blah.c` exists, make will run `blah.c` target first. 

## variable
### define variable
`IDENTIFIER = <variable_content>`
All the content on `=` right will be variable's value(including white character, e.g. whitespace, tab etc.)
### use variable
- `$@` 代表当前target。
- `$<` 代表第一个prerequisites。
- `$^` 代表所有prerequisites。
- `$(var)` 访问已定义的变量`var`

![makeflow](makeflow.md)


## features
### do not print the command
```
target:
	@gcc main.c -o target
```
make executed this command, but it was not printed to the terminal.

## 问题记录
```Makefile
# $(info $(SHELL))
main.exe: main.cu
    nvcc.exe -o main.exe -Wno-deprecated-gpu-targets main.cu
clean:
    rm -f main.lib main.exe main.exp
```
会报错，类似问题：https://stackoverflow.com/questions/33674973/makefile-error-make-e-2-the-system-cannot-find-the-file-specified

windows 上，make 默认使用`cmd.exe`作为终端，因此，`rm`命令不可用，因该使用`del`命令。

另外，使用`SHELL := powershell.exe`等改变了make的终端，但是环境变量没有导入(?)，所以即使改变终端，也无法很轻易的在windows上使用类Unix风格的命令。