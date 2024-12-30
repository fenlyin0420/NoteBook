# go 命令
## 编译并运行
`go run <file1.go> <file2.go> ...` 会自动编译链接然后运行，不会再当前目录下生成可执行文件（应该是生成了临时的可执行文件，运行完毕后会自动删除）

## 编译
`go build -o main.exe main.go` 选项必须出现在输入文件的前面个。

这样的命令会报错：`go build main.c -o main.exe` 
`named files must be .go files: -o`
> [!note]
> 我的猜测：go 在解析命令时，先解析所有的选项，然后才是参数，上述，main.c被解析为参数，go则认为后面的已经全是参数了，所以`-o`也会被解析为参数，与参数的约束不符，报错。

# 函数传递规约
在 GO 中，基本数据类型默认为值传递，引用类型默认为引用传递，而在 C++ 中，所有的类型默认都是值传递，只有通过`&`显示指定才能实现引用传递。

# range 关键字
range 关键字一般用于用于在for循环中迭代字符串、数组、切片、集合（map）等可迭代对象。在基于索引得数据结构下，它返回索引和对应得数据；在基于键值对得数据结构下，它返回键值对。
```go
for k, v := range map1
for k := map1
for _, v := range map1

for i, v := range arr1
for i := range arr1
for _, v := range arr1
```

# 数组
## 声明
Go 语言数组声明需要指定元素类型及**元素个数**，语法格式如下：
```go
var arrName [size]type;
var arr [5]int;
```
## 初始化
1. 使用初始化列表
```go
var arr [5]int{1, 2, 3, 4, 5}
// 在使用初始化列表时，可以省略 size，编译器会根据初始化列表自动计算大小
var arr [...]int{1, 2, 3, 4, 5}
```

# 切片
切片是动态数组，声明方式如下：
```go
var slice1 []int
// 也可以使用 make 声明
var slice2 = make([]int, 10) // 初始化容量为10，可以动态增长，底层是重新分配一块更大的内存空间，然后复制过去
```
# map 数据结构
## 创建
1. `map1 := make(map[string]int, 3)` `string` 是键的类型，`int`是值得类型，`3`是初始容量。
2. 使用字面量创建并初始化
```go
map2 := map[string]int{
	"apple": 3,
	"banana": 2,
	"orange": 10	
}
```

## 访问元素
`value := map1["key"]`
`value, ok := map1["key"]`，当键存在时，ok为True，value为对应得值，键不存在时，ok为False，value为对应类型得零值

## 增加元素
要增加一个键值对元素，直接使用
`map1["key2"] = value`
当`key2`不存在时，增加一个键值对，当`key2`存在时，相当于修改`key2`

## 删除元素
`delete(map1, "key")`

## 遍历map
```go
// 遍历 Map
for k, v := range map1 {
    fmt.Printf("key=%s, value=%d\n", k, v)
}
```

# goroutine
在java/c++中我们要实现并发编程的时候，我们通常需要自己维护一个线程池，并且需要自己去包装一个又一个的任务，同时需要自己去调度线程执行任务并维护上下文切换，这一切通常会耗费程序员大量的心智。那么能不能有一种机制，程序员只需要定义很多个任务，让系统去帮助我们把这些任务分配到CPU上实现并发执行呢？

Go语言中的goroutine就是这样一种机制，goroutine的概念类似于线程，但 **goroutine是由Go的运行时（runtime）调度和管理的**。Go程序会智能地将 goroutine 中的任务合理地分配给每个CPU。Go语言之所以被称为现代化的编程语言，就是因为它在语言层面已经内置了调度和上下文切换的机制。

Go语言中使用goroutine非常简单，只需要在调用函数的时候在前面加上go关键字，就可以为一个函数创建一个goroutine。

一个goroutine必定对应一个函数，可以创建多个goroutine去执行相同的函数。

```go
func sayHello() {
	fmt.Println("Hello")
}
func main() {
	go sayHello()
	fmt.Println("main routine")
}
```
如上，执行结果可能为：
```
main routine
Hello
```
也可能为：
```
main routine
```
第二种是因为主协程执行完毕后sayHello协程还没开始打印，主协程已返回所有得子协程将被强制终止。

# channel
channel是一种类型，一种引用类型。声明通道类型的格式如下：
```go
var ch1 chan int // 一个传递整型数据得通道
var ch2 chan []int // 一个传递整型切片的通道
```
## 创建channel
```go
ch := make(chan int, 1) // 创建一个传递整型数据的通道，缓冲大小为1
```
## 发送数据
``` go
ch<- 101 // 向ch通道发送数据101
```
## 接收数据
```go
value := <-ch // 从通道接收一个整型数据，并赋值给变量value
<-ch // 从通道取出一个值并忽略
```
## 关闭channel
```go
close(ch)
```

# 模块
一个包中所有以大写字母开头的标识符将被导出。

# ... 运算符
`...` 运算符一般用作函数变长参数，例如：
```go
func demo(numbers ...int)
```
`numbers` 在函数内部将会是一个可迭代对象，可通过`for...range`语句遍历其元素。

# defer 关键字
在Go语言中，`defer`关键字用于注册一个延迟执行的函数。这个函数会在包含`defer`语句的函数即将返回时被执行。下面详细介绍`defer`关键字的用法和特性：

## 基本用法
`defer`语句的基本语法如下：
```go
defer functionCall()
```
这里的`functionCall()`是一个函数调用，它会在包含`defer`语句的函数返回前被执行。

## 多个`defer`语句
可以在一个函数中使用多个`defer`语句，这些延迟函数会按照后进先出（LIFO，Last In First Out）的顺序执行，即注册一个defer语句，就入栈，到时候执行时，依次出栈并执行。
```go
package main

import "fmt"

func main() {
    fmt.Println("Start of main")
    defer fmt.Println("First deferred call")
    defer fmt.Println("Second deferred call")
    fmt.Println("End of main")
}
```
输出结果为：
```
Start of main
End of main
Second deferred call
First deferred call
```

## `defer`与返回值
`defer`语句在函数返回值已经确定但还未真正返回时执行。这意味着`defer`函数可以修改返回值。
```go
package main

import "fmt"

func returnValue() int {
    var x = 10
    defer func() {
        x = x + 10
    }()
    return x
}

func main() {
    fmt.Println(returnValue())
}
```
在上述代码中，`return x`语句确定了返回值为`10`，但在真正返回之前，`defer`函数被执行，将`x`的值增加到`20`。因此，最终输出结果为`20`。

## 资源清理
`defer`语句最常见的用途之一是资源清理，例如关闭文件、数据库连接等。
```go
package main

import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("example.txt")
    if err!= nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file.Close() // 延迟关闭文件

    // 读取文件内容
    //...
}
```
在上述代码中，`defer file.Close()`语句确保在`main`函数结束时，文件会被正确关闭，无论文件读取过程中是否发生错误。
