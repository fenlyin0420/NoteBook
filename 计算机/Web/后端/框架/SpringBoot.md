# SpringBoot 项目创建
>SpringBoot 不是对 spring的增强，而是提供了一种快速使用 spring 的方式。


## 利用 Idea 插件快速创建
![](Pasted%20image%2020240909185357.png)


# SpringBoot 配置文件
有两种类型的配置文件`application.properties`和`application.yml`. 一般常用`yaml`文件作为配置文件 , 因为结构清晰。

## 获取配置文件中的数据
1. `@Value`
```Java
@Value("server.port")
public string var;

// 将配置文件中的 server.port 值赋值给变量 var
```

2. `@configurationProperties`
```Java
@configurationProperties(prefix = "server")
public class Test(){
	// 变量 port 的值就是 serever.port 的值
	// 变量名必须和配置文件中的键一致
	// 变量必须要有 setter() 函数
	public string port;	

	public void main(){
		...;
	}
}
```

使用 `@configurationProperties` 注解更加简便.


# IOC
所有对象均由IOC容器创建
## 容器配置
- xml 文件配置

- java 类配置

- 注解配置


# AOP
切面的本质也是一个类，所有切面也是一个 bean， 也需要被IOC容器管理。
## 配置方式
- xml 文件配置

- 注解配置

# MyBatis
>MyBatis是一款优秀的基于java的持久层框架，它内部封装了jdbc，使开发者只需要关注sql语句本身，而不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。

