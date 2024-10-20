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