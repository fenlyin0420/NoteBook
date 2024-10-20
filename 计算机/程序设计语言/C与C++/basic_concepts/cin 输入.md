### cin >> value;

cin对象的bool值可行的原因是基类basic_ios对operator bool（）有重载；

当其缓冲区遇到的值类型与value的值类型不一致时，cin对象的bool值为false，这可以作为循环或条件语句的条件。

eg.
`while(cin >> arr[i++]);`

### cin.getline()
- `cin.getline(ch, n, '\n')` 读取n和字符到ch数组中，若遇到`\n`则停止。

### 字符数组初始化
``` c++
char ch[100];
// ch默认以 '\0'(ASCII: 0) 初始化
```
**注：** 整型数组默认不会初始化，声明后其值随机。