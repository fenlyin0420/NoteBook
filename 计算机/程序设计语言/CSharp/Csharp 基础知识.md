---
tags:
  - "#c-sharp"
---

# 访问权限
-  (1) Pubilc ：任何公有成员可以被外部的类访问。
-  (2) Private ：只有同一个类中的函数可以访问它的私有成员。
-  (3) Protected ：该类内部和继承类中可以访问。
-  (4) internal : 同一个程序集的对象可以访问。
-  (5) Protected internal ：3 和 4 的并集，符合任意一条都可以访问。
[CSharp权限](CSharp权限.md)

# 函数参数传递方式
### 值传递
同c++
### 引用传递
``` csharp
void func(ref int a); // 使用 ref 声明一个参数是引用类型
```
### 输出传递
``` csharp
void func(out int a)
{
	int temp = 5;
	a = temp;
}

// 调用
int a;
func(a);
// a == 5
```

# 委托
> c#中的委托就像c++中的函数指针一样，委托一个函数后，可以通过该委托调用该函数

### 委托多播
>委托使用与 `+` 和 `-` 运算符，多个委托组合成一个全新的复合委托，通过复合委托，可以一次按顺序（拼接时的顺序）调用多个委托。只有相同类型的委托可以拼接。

```cSharp
using System;

delegate int NumberChanger(int n);
namespace DelegateAppl
{
   class TestDelegate
   {
      static int num = 10;
      public static int AddNum(int p)
      {
         num += p;
         return num;
      }

      public static int MultNum(int q)
      {
         num *= q;
         return num;
      }
      public static int getNum()
      {
         return num;
      }

      static void Main(string[] args)
      {
         // 创建委托实例
         NumberChanger nc;
         NumberChanger nc1 = new NumberChanger(AddNum);
         NumberChanger nc2 = new NumberChanger(MultNum);
         nc = nc1;
         nc += nc2;
         // 调用多播
         nc(5);
         Console.WriteLine("Value of Num: {0}", getNum());
         // 75
         // nc1->10+5=15; nc2->15*5=75
         Console.ReadKey();
      }
   }
}
```