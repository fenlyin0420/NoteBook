### map lower_bound(key)
``` cpp
multimap<int, char> dict;
dict.insert(1, 'b');
dict.insert(1, 'a');
dict.lower_bound(1);
// output: b
// 在 multimap 中，当存在多个相同的键时，按照插入的顺序输出
```

### 添加元素
- multimap 不能通过 `[]` 添加元素。

