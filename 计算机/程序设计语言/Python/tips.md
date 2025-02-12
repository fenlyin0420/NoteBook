### 舍入误差
* python12中，舍入误差的上界是e-45。即舍去小数点45位之后的值。

### star expression

``` python
fourcc = cv.VideoWriter_fourcc('X', 'V', 'I', 'D')
fourcc = cv.VideoWriter_fourcc(*"XVID")
# 以上两条语句等价
```

## namespace and scoop
- Assignments do not copy data, they just bind names to objects.
- nonlocal scoops are the local scoops of the enclosing functions.

# good statement
- An object's type determines the operations that the object surpports, and also defines the possible values for the objects of that type.

### `__str__()` 和 `__repr__()` 的区别

- **`__str__()`**：面向用户，返回一个易读的字符串。
	
- **`__repr__()`**：面向开发者，返回一个详细的、明确的字符串，通常用于调试。

如果这两个方法都没有被定义，在`print()`时，会打印对象的类型和内存地址。