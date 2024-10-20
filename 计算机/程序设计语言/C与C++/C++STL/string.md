### string to number
```cpp
std::stoi(s); // string to int
std::stol(s); // strint to long
std::stoll(s);// string to long long 

std::stof(s); // float
std::stod(s); // double
std::stold(s);// long double

std::stoi(str, pos, base) //base指定了str代表的数为几进制
```

### number to string
```cpp
int a = 100;
double b = 3.1415926;
cout << std::to_string(a) << endl
	<< std::to_string(b) << endl;
// 100
// 3.14593
```
### 大小写转换

##### 只能转换单个字符
``` cpp
using namespace std;

// int toupper(char ch);
char ch = toupper('a');  // ch: 'A'
int ch = toupper('a'); // ch: 97

// int tolower(char ch); 
```

##### 转化整个字符串的一种实现
``` cpp
using namespace std;
string s = "hello";
string upper(s.size(), '\0'); // 不初始化 upper.size() 将会是 0
transform(s.begin(), s.end(), upper.begin(),
		 [](char ch){return toupper(ch);});

// 简易版：
transform(s.begin(), s.end(), upper.begin(), ::toupper);
```
