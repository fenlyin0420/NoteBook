Typescript代码会先被转换为Javascript代码，最终执行的其实还是Javascript代码。
# 变量声明
<code lang="Typescript"> var identifer : type [= value];</code>

# 数据类型
## 基本数据类型
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
## 引用类型
- `Array`
- `Tuple` `var x:[string, number] = ['age', 18];`
## 其他
- `Enum`
- `Union`  `var x:string|number`
- `any`: 表示任意类型，在变量类型不确定时可以使用，例如用户输入。
- 类型别名: `type myString = string; var s:myString = 'hello';`


# 基本控制流
## 循环
1. for循环，与C一致
2. for-in循环：`for (let i in <Array>)` i是Array的**索引**(Key)。
# Array
## Array的声明及创建
```Typescript
// 使用数组字面量
var arr1:number[] = [1, 2, 3];
var arr2:string[];
arr2 = ["hello", "world"];

// 使用 Array() 构造函数 + 泛型
var arr3:Array<string> = new Array<string>('a', 'b');
// ['a', 'b']

```
## 数组解构
将有n个元素的数组解构，一次性赋值给n个变量，这种是变量与元素一对一。
当变量多于元素时，从左至右，后面未被赋值的变量为undefined类型。
当变量少于元素时，假设变量有m个，n>m，将数组的前m元素赋值给变量。
```TypeScript
var arr:number[] = [1,2,3];
var [x, y] = arr;
// x = 1, y = 2
```


# interface
接口是一个抽象的Object，接口提供了标准化、规范化的抽象属性和抽象方法，供其他类型实现。接口仅仅是TypeScript的一部分，JavaScript中没有接口。