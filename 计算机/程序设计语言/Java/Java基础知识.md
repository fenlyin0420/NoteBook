## Java包装类
**主要目的：** 使基本数据类型能够像对象一样，调用属性和方法，并通过调用自身方法实现类型转换（包括与字符串之间的相互转换）。

### 装箱与拆箱
- 将基本数据类型包装为类的过程称为**装箱**，装箱分为手动装箱和自动给装箱。
```Java
int x = 1;
Integer x1 = new Integer(x); // 手动装箱,JDK9之后移除
Integer x1 = Integer.valueOf(x1); // 手动装箱
Integer x2 = x; // 自动装箱
```

- 从已包装的类得到基本数据类型的过程称为**拆箱**，同样，拆箱分为手动拆箱和自动拆箱。
```Java
int y1 = x1.intValue(); // 手动拆箱
int y2 = x1; // 自动拆箱
```
每个基本数据类型的包装类都有一个形如`xxxValue()`的**拆箱函数**，用于手动拆箱。
**总结：** 
1. 装箱：`valueOf()`
2. 拆箱：`xxxValue()`
3. 赋值语句自动装箱拆箱。
### 通过包装类实现类型转换
#### valueOf() 
通过装箱实现类型转换
```Java
int a = 10;
double b = Double.valueOf(a); // 将int型 a 转为double型 b

String s = "123";
int n = Integer.valueOf(s); // 将s装箱为Integer，再对Integer自动拆箱
```
_**notice**_: 
1. 通过`valueOf()`进行基本数据类型之间的相互转换时，只能从高精度往低精度转。且再基本数据类型直接转一般无需装箱，直接强制转换即可。
2. 通过装箱实现类型转换主要是在**字符串和数值**之间的转换。

#### 与字符串之间的转换
**数据类型转字符串：**  
1. `String.valueOf()` ，即将数值装箱为String
2. `<type>.toString()`, 直接转

**字符串转为基本数据类型：**
1. `<type>.valueOf()` 手动装箱
2. `<type>.parseXXX()` 直接转


## 常见流
### 文件字节流
- `FileInputStream()`
- `FileOutputStream()`
### 文件字符流
- `FileReader()`
- `FileWriter()`
### 缓冲流
无论是按字节还是按字符读取文件，都无法实现按行读取，此时可以结合缓冲流实现按行读取，缓冲流里遇到换行符就向目的流输出，缓冲流起到中转作用。
- `BufferReader()`
- `BufferWriter()`
### 随机流
- `RandomAccessFile()`
### 数组流

### 数组流

### 对象流

## 常用类
### File
位于`java.IO`包中
File类既可以表示一个目录，也可以表示一个具体的文件。

当File表示一个普通文件，但却调用了关于目录的操作，该操作会将File看作一个目录对待，只是一般会操作失败，因为实际不存在该目录。

关于什么的操作，该操作就会把File对象当作什么看待。

- 构造函数
	- `File(String filename)` 文件在当前工作目录
	- `File(String dir, String filename)` 指定了文件的目录
	- `File(File dir, String filename)` 通过File对象指定了文件的目录
- 成员函数
	- Contents
		- `public boolean exists()` 判断文件是否存在
		- `public boolean isFile()` 判断是否为文件
		- `public String getParent()` 获取文件的父目录
		- `public String getAbsolutePath()` 获取文件的绝对路径
	- File
		- `public boolean createNewFile()` 创建文件
		- `public boolean delete()` 删除文件或目录
	- Directory
		- `public boolean mkdir()` 创建目录
		- `public String[] list()` 列出目录
		- `public boolean delete()` 删除文件或目录
### Arrays
位于`java.util`包中
提供了操作**静态数组**的一系列方法。
- `public static void sort(type[] arr)` 默认按非降序排序
- `public static String toString(type[] arr)` 将数组转为类似`[1, 2, 3]` 这样的字符串并返回 
- `public static boolean equals(type[] a, type[] b)` 判断两数组（元素类型要相同）是否相等。相等条件是所有对应元素相等，或两个数组都为NULL
- `public static int binarySearch(type[] arr, type key)` 二分搜索，返回索引，未找到返回-1
- `public static type[] copyOf(type[] arr, int length)` 返回长度为length的新数组，原数组长度小于length时，剩余部分使用type的默认值填充，原数组长度大于length时，截取原数组的前length部分，并返回。


### StringBuffer
String对象表示的字符序列是无法修改的，但StringBuffer表示的字符序列可以在原对象上进行修改，类似于字符数组。
- 构造函数
	- `StringBuffer(String str)`
- 成员函数
	- `public char charAt(int n)` 获取位置n的字符
	- `public void setCharAt(int n, char ch)` 在位置n插入字符ch
	- `public StringBuffer reverse()` 翻转字符序列，并返回原对象引用，在原对象上修改，不会创建新的对象
	- `StringBuffer append(String s)` 将字符串s追加到StringBuffer
	- `StringBuffer append(int n)` 将整型n转换为字符串并追加到StringBuffer
	- `StringBuffer insert(int index, String s)` 将字符串s插入到index指定的位置
	- `StringBuffer delete(int start, int end)` 删除`[start, end)`范围内的字符序列
	- `StringBuffer replace(int start, int end, String s)` 利用s替换`[start, end)`范围内的字符序列
### Random
位于`java.util`包中
- 构造函数
	- `Random()`
	- `Random(long seed)`
- 成员函数
	- `nextInt()`
	- `nextInt(int bound)` 返回`[0, bound)` 之间的随机整数
	- `nextInt(int origin, int bound)` 返回`[origin, bound)`之间的随机整数
### Class
任何类都有一个Class类型的类属性：`class`， 该属性封装了该类有哪些构造方法，以及哪些成员变量和成员函数。
```Java
public Class{
	static Class<?> forName(String classname);
	String getName();
	Constructor getConstructor(String.class, int.class);
	Constructor[] getDeclaredConstructors();
	Field[] getDeclaredFields();
	Method[] getDeclaredMethods();
}
```
#### 反射
通过调用Class对象(class)的以下方法，获取当前类的有关信息，这一机制称为反射
- `String getName()` 返回类的名字
- `Constructor getConstructor(String.class, int.class)` 返回与参数列表匹配的构造方法
- `Constructor getDeclaredConstructor()` 返回无参构造方法
- `Constructor[] getDeclaredConstructors()` 返回全部的用户声明的构造方法
- `Field[] getDeclaredFields()` 返回全部的用户声明的成员变量
- `Method[] getDeclaredMethods()` 返回全部的用户声明的成员函数
**每个类都具有的关于反射的方法：**
- `Class<?> getClass()`返回实例所属类的Class对象，等价于`type.class`。是`class`属性的`getter`方法。

#### 反射实例
```Java
public static void main(String[] args){  
    try{  
	    // 获取目标类的Class对象
        Class<?> cs = Class.forName("Test.Dog");  
        // 通过Class对象获取到类的默认构造函数
        Constructor<?> constructor = cs.getConstructor();  
        // 通过构造函数创建实例
        Object dog = constructor.newInstance();  
        // 通过Class对象获取到类的成员方法
        Method runMethod = cs.getMethod("run");  
        // 以刚创建的对象调用刚获取到的方法
        runMethod.invoke(dog);  
    }catch(Exception e) {  
        System.out.println(e.getMessage());  
    }  
}
```

## 匿名类
匿名类一定是内部类。
### 和子类有关的匿名类
如果没有声明某个类的子类，但现在又想使用子类的对象，则可以使用匿名类。
```Java
public abstract class Bank{
	public void output();
}

new Bank(){
	// 类体
	public void output(){
		System.out.println("output");	
	}
}
```

### 和接口有关的匿名类
如果Computable是一个接口，则可以创建实现了该接口的匿名类：
```Java
new Computable(){
	// 实现了Computable接口的匿名类类体
}
```
### Lambda表达式代替匿名类
匿名类在类体中要重写父类的方法，可以使用Lambda表示式重写，代码会比较简洁。
- 语法：`(paras) -> {return-statements;}` `para -> return-statement`
## java连接数据库
连接数据库要在DriverManager中注册相关信息，而Driver类的静态代码块中有注册此信息的代码
```Java
static {
    try {
        DriverManager.registerDriver(new Driver());
    } catch (SQLException e) {
        throw new RuntimeException("Can't register driver!");
    }
}
```
因此需要通过加载该类，来执行注册代码:
```Java
Class.forName("com.mysql.cj.jdbc.Driver"); 
// 或
import com.mysql.cj.jdbc.Driver;
```
以上两种方法都会加载类


## 项目管理
### JVM搜索类的路径
- 使用`-cp` 或 `-classpath` 会覆盖默认路径和环境变量CLASSPATH指定的路径，只在该参数指定的路径搜索


## 权限管理
java中的权限修饰符限制等级从低到高有：
`public -> protected -> friendly -> private`
- `public` 任意地方任何类都可访问
- `protected` 同一包中的类可以访问，不同包中的子类也可以访问
- `friendly` 同一包中的类可以访问（包级私有）
- `private` 只能在本类中被访问（类级私有）

`protected` 相对于对子类有特殊权限的包级私有修饰符，对于普通类，就相当于包级私有，对于子类，相当于`public`。


## 多态
所谓多态，就是指相同的方法在不同的情形下调用有不同的表现形式。
多态的条件：
1. 继承
2. 重写
3. 上转型
首先需要一个抽象类（基类），该类中有抽象方法，子类继承基类，并重写基类抽象方法，之后使用基类引用指向子类对象（上转型），然后通过基类引用调用之前的抽象方法。不同子类重新了各自的方法，基类引用再去一一调用，就会产生不同的表现形式。

## 接口
### 接口体的要求
1. 抽象方法`[abstract] [public] type identifier();`
2. 静态常量`[public] [final] [static] type identifier;`
3. 实例方法`[public] default type identifier(){ code; }`
4. 静态方法`[public] static type identifier(){ code; }`
5. 私有方法

## 异常与错误
![](Pasted%20image%2020240609224409.png)

### 主动抛出异常
可以通过`throw`关键字主动抛出内置异常或自定义异常。语法为：
`throw new <ExceptionName>(<Message>);` 构造函数参数为异常的信息。
### 自定义异常
```Java
class myException extends Exception{
	myException(){}

	myException(String msg){
		super(msg);	
	}
}
```

### 异常分类
#### 检查性异常
需要开发人员手动处理或者手动“甩锅”给JVM处理，否则编译不通过。也就是说，可能出现检测性异常的代码块，必须要再try语句块中，或者通过`throws`关键字交给JVM处理。

| Exception                  | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| ClassNotFoundException     | 应用程序试图加载类时，找不到相应的类，抛出该异常。                                                  |
| CloneNotSupportedException | 当调用 Object 类中的 clone 方法克隆对象，但该对象的类无法实现 Cloneable 接口时，抛出该异常。                |
| IllegalAccessException     | 拒绝访问一个类的时候，抛出该异常。                                                          |
| InstantiationException     | 当试图使用 Class 类中的 newInstance 方法创建一个类的实例，而指定的类对象因为是一个接口或是一个抽象类而无法实例化时，抛出该异常。 |
| InterruptedException       | 一个线程被另一个线程中断，抛出该异常。                                                        |
| NoSuchFieldException       | 请求的变量不存在                                                                   |
| NoSuchMethodException      | 请求的方法不存在                                                                   |
| IOException及其子类            | 对文件或流的操作有误时，抛出异常                                                           |


#### 运行时异常
JVM可以自动处理，处理方式为依次调用`e.toString()` 和 `e.getStackTrace()`.
`e.toString()` 返回的信息包含了`e.getMessage()`的返回信息。 

| Exception                       | Description                                                      |
| ------------------------------- | ---------------------------------------------------------------- |
| ArithmeticException             | 当出现异常的运算条件时，抛出此异常。例如，一个整数"除以零"时，抛出此类的一个实例。                       |
| ArrayIndexOutOfBoundsException  | 用非法索引访问数组时抛出的异常。如果索引为负或大于等于数组大小，则该索引为非法索引。                       |
| ClassCastException              | 当试图将对象强制转换为不是实例的子类时，抛出该异常。                                       |
| IllegalArgumentException        | 抛出的异常表明向方法传递了一个不合法或不正确的参数。                                       |
| IllegalMonitorStateException    | 抛出的异常表明某一线程已经试图等待对象的监视器，或者试图通知其他正在等待对象的监视器而本身没有指定监视器的线程。         |
| IllegalStateException           | 在非法或不适当的时间调用方法时产生的信号。换句话说，即 Java 环境或 Java 应用程序没有处于请求操作所要求的适当状态下。 |
| IllegalThreadStateException     | 线程没有处于请求操作所要求的适当状态时抛出的异常。                                        |
| IndexOutOfBoundsException       | 指示某排序索引（例如对数组、字符串或向量的排序）超出范围时抛出。                                 |
| NegativeArraySizeException      | 如果应用程序试图创建大小为负的数组，则抛出该异常。                                        |
| NullPointerException            | 当应用程序试图在需要对象的地方使用 null 时，抛出该异常                                   |
| NumberFormatException           | 当应用程序试图将字符串转换成一种数值类型，但该字符串不能转换为适当格式时，抛出该异常。                      |
| StringIndexOutOfBoundsException | 此异常由 String 方法抛出，指示索引或者为负，或者超出字符串的大小。                            |

# 第三方包结构
第三方包多以 jar 包的形式存在，每一个 jar 包都是一个 classpath，再搜索类时，除了再系统指定的 classpath 下搜索，还会再指定的 jar 包中搜索。

groupId、artifactId 和 version 三个坐标决定了一个 artifact 的具体位置。artifact 本质是一个文件夹，包含 jar 包、pom 文件以及一些配置信息。当 atifact 只有一个版本时，也可以省略 version 坐标。

jar 包里的包结构就是我们要导入类时需要写的包结构。