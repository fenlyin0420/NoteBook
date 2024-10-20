## assert statement
``` python
x = 'hello'
assert x == 'world'[,'x is not world']
```
The `assert` statement is used to debug whether a specified expression is `True` or `False`. If the expression evaluates to `True`, nothing will happen. Otherwise, an `AssertionError` will be raised. Additionally, you can customize the exception information by adding `, 'your custom error info'` at the end of the `assert` statement.

## encode/decode
```python
s = "hello world"
s_utf = s.encode("utf-8")
s_utf_utf = s_utf.decode("utf-8")
```


## 任意进制转十进制
`int(num:str, base:int)`
- `num:` base进制的数字


## for 循环底层原理
- 可迭代对象：实现了`__iter__()`方法的对象
- 迭代器：实现了`__next__()`方法的对象

一般情况下，可迭代对象会使用`__iter__()`方法返回一个迭代器对象（即实现了`__next__()`方法，之后由该迭代器来迭代自己。


## 装饰器、迭代器与生成器
### 装饰器
- 装饰器本质是一个函数。装饰器（函数）接受一个函数参数，对这个函数的功能进行**扩展(装饰)**，之后返回一个扩展功能后的新的函数。
- 使用装饰器的好处是：先定义实现基本功能（需要已确定）的函数，在通过装饰器对基本函数进行装饰，实现各种高级功能， **应对未知需求**。
``` python
def calculate_time(func): # 装饰器
    def wrapper(num:int): # 这将是装饰后的函数
        start = time.time()
        time.sleep(1)
        res = func(num)
        end = time.time()
        return res, end - start # 扩展了被装饰函数的功能
    return wrapper # 返回装饰后的函数


@calculate_time
def factorial1(num:int): # 递归函数不推荐装饰
    if num == 0:
        return 1
    else:
        return num * factorial1(num-1)

        
@calculate_time # 被装饰后其功能得到扩展
def factorial(num:int): # 只实现了基本功能的函数
    if num == 0:
        return 1
    else:
        res = 1
        for i in range(1, num + 1):
            res *= i
    return res
```
- 递归实现的函数一般不容易被装饰。


## 多线程与线程安全
当某个操作为原子(`atomic`)时，这个操作是线程安全的。操作线程安全是说：在执行这个操作中途不会调度到另一个线程，避免了共享数据的混乱。

对于非线程安全型操作，可以手动加锁，使其线程安全
``` python
from threading import Thread
import threading

num = 0
lock = threading.RLock()

def task1():
    lock.acquire()
    for i in range(1000000):
        global num
        num += 1
    lock.release()
	
def task2():
    lock.acquire()
    for i in range(1000000):
        global num
        num -= 1
    lock.release()

t1 = Thread(target=task1)
t2 = Thread(target=task2)

t1.start()
t2.start()
t1.join()
t2.join()
print(num)
```
考虑一下场景：
- `task1: r <- 0(num)`
- `task2: r <- 0(num)`
- `task2: r--(-1)`
- `task2: num <- r(-1)`
- `task1: r++(1)`
- `task1: num <- r(1)`
最终，`num == 1`， 显然不符合预期，因为 `+=` 和 `-=` 是非线程安全的，所以手动加锁才行。


## 递归锁与死锁
在python中，有两种锁：
1. `threading.RLock()` 递归锁，允许多次获取和释放
2. `threading.Lock()` 普通锁，只允许获取一次
### RLock应用案例
``` python	
lock = treading.RLock()
def my_func():
	lock.acquire()
	pass
	lock.release()

def other_func():
	lock.acquire()
	my_func() # 多次获得锁
	lock.release()
```

### 死锁
定义：永远不能被获取的锁成为死锁


## python字典和Json转换
- 字典转Json
```python
import json
data = {  
    'name': 'John Doe',  
    'age': 30,  
    'city': 'New York'  
} 
jsonStr = json.dumps(data, [indetn=4])
```
- Json转字典
```python
data2 = json.loads(jsonStr)
```


## with语句
Python中的`with`语句是一种上下文管理协议，它用于包装代码的执行。这种机制主要用于确保资源如文件、网络连接、线程锁的获取与释放等操作能够正确且安全地进行，即使在发生异常时也能保证资源的正确释放，从而避免资源泄露。

### 上下文管理协议

要实现`with`语句的功能，一个类需要实现上下文管理协议，该协议包含两个方法：`__enter__()` 和 `__exit__(exc_type, exc_val, exc_tb)`。

- `__enter__(self)`：进入上下文管理器的准备阶段，通常返回该上下文管理器的对象（也可以是另一个对象），这个返回值将被`with`语句的目标/变量接收。
- `__exit__(self, exc_type, exc_val, exc_tb)`：退出上下文管理器的清理阶段。这个方法可以接受三个参数，分别表示异常的类型、异常的值和异常的追踪信息（如果没有异常发生，则这三个参数都为`None`）。这个方法返回`True`表示异常已被处理，不需要再往外传；返回`False`表示异常未被处理，需要继续传递到上一级。

### 使用`with`语句

`with`语句的一般形式如下：

```python
with expression as variable:
    # 使用variable做一些操作
    # 这部分代码块称为上下文管理器的运行时上下文
```

这里的`expression`必须是一个上下文管理器对象，即实现了上下文管理协议的对象。执行流程是：

1. 计算`expression`，得到一个上下文管理器对象。
2. 调用该对象的`__enter__()`方法，`with`语句中的`as variable`部分（如果有的话）会被赋值为`__enter__()`方法的返回值。
3. 执行`with`语句块中的代码。
4. 无论是否发生异常，`with`语句块执行完毕后都会调用上下文管理器对象的`__exit__(exc_type, exc_val, exc_tb)`方法。

### 示例

#### 使用文件作为上下文管理器

Python的文件对象就实现了上下文管理协议，因此可以直接使用`with`语句来操作文件：

```python
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
# 文件在离开with语句块时自动关闭
```

#### 自定义上下文管理器

你也可以通过实现`__enter__()`和`__exit__()`方法来创建自定义的上下文管理器：

```python
class MyContextManager:
    def __enter__(self):
        print("Entering")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting")
        # 如果这里处理了异常，可以返回True
        # 否则返回None或False（默认）

	def hello(self):
		print("Hello!")

with MyContextManager() as cm:
    print("Inside the context manager")
# 输出：
# Entering
# Inside the context manager
# Hello!
# Exiting
```

>[!note] 
>with 语句的target变量在with语句块之外也可以使用，即target的作用域不是with语句块，而是with语句所属的作用域


# Lambda 表达式
Python中的lambda表达式是一种简洁定义单行小函数的方式。lambda函数本质上是一个表达式，它产生了一个函数对象。这个表达式的结果（即函数对象）可以被赋值给一个变量，或者直接作为参数传递给高阶函数（即接受函数作为参数或返回函数的函数）。

lambda函数的基本语法如下：
```python
lambda 参数列表: 表达式
```
这里，“参数列表”可以是一个或多个参数，用逗号分隔，但不可以使用默认参数或可变参数列表（如`*args`或`**kwargs`）。“表达式”是函数体，它会被求值并返回。lambda函数只能有一个表达式，不能包含多条语句。


# 异常
![](Pasted%20image%2020241004154141.png)

## 主动抛出异常
- `raise`
- `raise Exception("description")` 


## 自定义异常
```Python
class myError(Exception):
    def __init__(self, msg, value):
        self.msg = msg
        self.value = value
    
    def __str__(self):
        return "{} {}__str__".format(self.msg, self.value)



a, b = [int(i) for i in input("请输入被除数与除数：").split(' ')]
c = a / b
print("result:", c)
raise myError("除数不能为0", b)
```

![](Pasted%20image%2020241004160410.png)
在异常信息里，显示的是异常类的`__str(self)__`函数的返回值。