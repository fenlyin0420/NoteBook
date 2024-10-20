# Series()
``` python
Series([1,2,3], index=range(1, 4), name="myData")
# index： 手动指定索引，长度必须和数据相等，一 一对应
#

```
Series可以包含不同类型的元素，此时，`Series` 的 `dtype=object`，但使用`type`查看每一个元素的类型时，显示为该元素本身的类型。

# DataFrame
## 创建DataFrame
1. 通过列表，**按行**创建。
```python
import pandas as pd

data = [['Google', 10], ['Runoob', 12], ['Wiki', 13]]

# 创建DataFrame
df = pd.DataFrame(data, columns=['Site', 'Age'])

# 使用astype方法设置每列的数据类型
df['Site'] = df['Site'].astype(str)
df['Age'] = df['Age'].astype(float)

print(df)
#      Site   Age
# 0  Google  10.0
# 1  Runoob  12.0
# 2    Wiki  13.0
```
通过列表按行创建时，其`DataFrame`的数值部分相当于二维数组。

2. 通过字典，**按列**创建
```python
s1 = pd.Series(['Google', 10], index = range(1, 3))
s2 = pd.Series(['Runoob', 12], index = ['a', 'b'])
df2 = pd.DataFrame(data = {"site": s1, "age": s2})
print(df2)
#      site     age
# 1  Google     NaN
# 2      10     NaN
# a     NaN  Runoob
# b     NaN      12
```
字典的值为`Series`时，`DataFram` 的行索引由组成的`Series`索引共同决定

```python
l1 = ['Google', 'Runoob']
l2 = [18, 12]
df3 = pd.DataFrame(data={'site': l1, 'Age': l2}, index=range(1, 3))
print(df3)
#      site  Age
# 1  Google   18
# 2  Runoob   12
```
字典的值为普通列表时，`DataFrame`的行索引不指定时为默认0开始的整数，也可以显示指定。

# DataFrame 的属性和方法
### DataFrame 的属性

- `df.shape`
  - 描述：返回DataFrame的形状，即行数和列数的元组。
  - 示例：`(行数, 列数)`

- `df.columns`
  - 描述：返回DataFrame的列标签。
  - 示例：`Index(['列1', '列2', '列3'], dtype='object')`

- `df.index`
  - 描述：返回DataFrame的行标签（索引）。
  - 示例：`RangeIndex(start=0, stop=n, step=1)`（其中n是行数）

### DataFrame 的方法

- `df.head()`
  - 描述：返回DataFrame的前n行数据，默认是前5行。
  - 示例：`df.head(3)` 将返回前3行数据。

- `df.tail()`
  - 描述：返回DataFrame的后n行数据，默认是后5行。
  - 示例：`df.tail(2)` 将返回后2行数据。

- `df.info()`
  - 描述：打印DataFrame的简要摘要，包括行数、列数、每列的数据类型和非空值的数量。
  - 示例：输出DataFrame的摘要信息。

- `df.describe()`
  - 描述：生成描述性统计信息，包括每个数值列的计数、平均值、标准差、最小值、25%、50%、75%分位数和最大值。
  - 示例：输出数值列的统计信息。

- `df.mean()`
  - 描述：返回DataFrame中每列的平均值。
  - 示例：输出每列的平均值。

- `df.sum()`
  - 描述：返回DataFrame中每列或每行的和。
  - 示例：`df.sum(axis=1)` 将返回每行的和。

# 访问DataFrame
```python
data = {  
    'A': [1, 2, 3, 4],  
    'B': [5, 6, 7, 8],  
    'C': [9, 10, 11, 12],  
    'D': [13, 14, 15, 16]  
}  
  
df = pd.DataFrame(data, index=['row1', 'row2', 'row3', 'row4'])
```
## 基于行列标签的访问(loc)
1. 单个索引
```python
df.loc['row1', 'B']
# 5
```
2. 索引列表
```python
df.loc[['row1' 'row3'], ['A', 'B']]
  
#       A  B
# row1  1  5
# row3  3  7
```
3. 切片
```python
df.loc['row1':'row4', :]
#       A  B   C   D
# row1  1  5   9  13
# row2  2  6  10  14
# row3  3  7  11  15
# row4  4  8  12  16
```
## 基于整数位置(Integer location)的访问(iloc)
将行列标签换为以0为基础的整数索引，其余的和标签访问一致。


# 修改DataFrame
## 增
1. 增加列
```python
df['column'] = [1, 2, 3]
```
2. 增加行
```python
new_row = pd.DataFrame([[c1, c2, c3]], index[col1, col2, col3]) # 指定列名，不指定会使用默认的列名，加在df原列后面，不符合预期

df = pd.concat([new_row, df], ignore_index = True) # 忽略new_row的index，最后的dfindex取决于原本的df
```

## 删
使用`df.drop(key, axis) -> DataFrame`, `axis = 0` 代表行，`axis = 1`代表列。
1. 删除行
`df.drop(<index>, [axis=0])` 根据行索引删除改行。
2. 删除列
`df.drop(<column>, axis=1)` 根据列索引删除列。


# 数据清洗
## 删除空值(NaN)
`DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)`
**args:**
- axis：默认为 **0**，表示逢空值剔除整行，如果设置参数 **axis＝1** 表示逢空值去掉整列。
- how：默认为 **'any'** 如果一行（或一列）里任何一个数据有出现 NA 就去掉整行，如果设置 **how='all'** 一行（或列）都是 NaN 才去掉这整行。
- thresh：设置需要多少非空值的数据才可以保留下来的。
- subset：设置想要检查的列。如果是多个列，可以使用列名的 list 作为参数。
- inplace：如果设置 True，将计算得到的值直接覆盖之前的值并返回 None，修改的是源数据。
# 函数总结
- **数据读取和写入**
    - `pd.read_csv(file_path) -> df`：从CSV文件中读取数据。
    - `pd.read_excel(file_path) -> df`：从Excel文件中读取数据。需要安装`openpyxl(.xlsx)`和`xlrd(.xls)` 包。
    - `df.to_csv(file_path)`：将数据写入CSV文件。
    - `df.to_excel(file_path)`：将数据写入Excel文件。

- **数据查看**
    - `df.head(n)`：查看DataFrame对象的前n行。
    - `df.tail(n)`：查看DataFrame对象的最后n行。
    - `df.shape()`：查看行数和列数。
    - `df.info()`：查看索引、数据类型和内存信息。
    - `df.describe()`：查看数值型列的汇总统计。
    - `s.value_counts(dropna=False)`：查看Series对象的唯一值和计数。

- **数据清洗**
    - `df.dropna()`：删除包含缺失值的行或列。
    - `df.fillna(value)`：将缺失值填充为指定值。
    - `df.replace(old_value, new_value)`：将指定值替换为新值。
    - `df.duplicated()`：查找重复的行。
    - `df.drop_duplicates()`：删除重复的行。

- **数据筛选**
    - `df[df['column_name'] > value]`：筛选出指定列中大于指定值的行。
    - `df[df['column_name'].isin(list)]`：筛选出指定列中包含在列表中的行。
    - `df.query('expression')`：使用表达式筛选行。
    - `df.loc[row_indexer, column_indexer]`：使用标签筛选行和列。
    - `df.iloc[row_indexer, column_indexer]`：使用整数位置筛选行和列。

- **数据分组和聚合**
    - `df.groupby('column_name').mean()`：按指定列分组并计算平均值。
    - `df.groupby('column_name').sum()`：按指定列分组并计算总和。
    - `df.groupby('column_name').count()`：按指定列分组并计算计数。
    - `df.groupby('column_name').agg(function)`：按指定列分组并应用自定义聚合函数。

- **数据变换**
    - `df.apply(function)`：应用自定义函数到每一列或行。
    - `df.transform(function)`：应用自定义函数到每一个元素。
    - `df.pivot_table(values, index, columns, aggfunc)`：创建透视表。
    - `df.melt(id_vars, value_vars)`：将数据从宽格式转换为长格式。
