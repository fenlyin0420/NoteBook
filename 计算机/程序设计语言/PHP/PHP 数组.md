### 数组分类
1. 数值数组
2. 关联数组
数值数组的键始终为数组，从0开始

### foreach遍历关联数组
``` php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43"); 
foreach($age as $x=>$x_value) { // 要同时遍历键值对，要使用这种语法
echo "Key=" . $x . ", Value=" . $x_value;
echo "<br>";
}
/*
output:
Key=Peter, Value=35  
Key=Ben, Value=37  
Key=Joe, Value=43
*/

/*--------------------*/
foreach($age as $x) { // 变量只有一个时，不同于python，php遍历值，而python遍历键
echo $x;
echo "<br>";
}
/*
output:
35  
37  
43
*/
```

### count(array)
返回数组的长度