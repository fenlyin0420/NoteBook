### `partial_sum(iter first, iter second, iter res)`  ^partial-sum
#前缀和
- Parameter:
	- first: 起始迭代器
	- second: 终止迭代器
	- res: 存放结果的数组
- Returns:
	- iter res: 存放结果的数组的迭代器
- Function:
	- $res[n]=\sum_{i=f}^{f+n-1}{num[i]}$ (res's index based zero)

