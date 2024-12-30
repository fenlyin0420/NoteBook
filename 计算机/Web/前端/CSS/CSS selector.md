# css计数器
## counter and counters
- counter(\<name>) 返回指定计数器的值
- counters(\<name>, str) 返回所有名称为 `<name>` 的计数器的值，从最外层开始调用，多个值之间使用 `str` 连接

# 选择器
## 后代选择器(空格)
```CSS
.test p 

```
如果 `test`类元素的后代中是 `<p>`的元素。
## 初代子元素选择器
```CSS
.test > .child 

```
选择所有属于`child`类的初代子元素，即儿子节点，属于`child`类的孙子节点不选

## 相邻兄弟选择器
```CSS
.first + .second 

```
选择紧跟着`first`类的`second`类元素，这两个元素必须是兄弟关系

## 通用兄弟选择器
```CSS
.start ~ .later

```
选择`start`类后面的所有`later`类元素，再`start`类**前面的不选择**。
## 属性选择器
### 存在性选择

```css
tag[attr] 

// 选择存在 attr 属性的 tag 元素
```

### 值选择器

```css
 tag[attr="value"] 

// 选择存在 attr 属性且值为 value 的 tag 元素

tag[attr|="value"]

// 选择存在 attr 属性且值为 value- 的元素
div[lang|="zh"]
```

### 值存在性选择器
```CSS
tag[atrr~="value"]

// 选择存在 attr 属性，且其值中包含 value 的元素（多值属性）
```
### 字符串匹配选择器|选择器|示例|描述|
| 选择器             | 示例                  | 描述                                                   |
| --------------- | ------------------- | ---------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为_attr_的属性的元素，其值开头为_value_子字符串                |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为_attr_的属性的元素，其值结尾为_value_子字符串                |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为_attr_的属性的元素，其值的字符串中的任何地方，至少出现了一次_value_子字符串 |

## 逗号和空格的区别

```css
h1, h2, .title {
    color: red;
}
```
在这个例子中，逗号分隔了`h1`、`h2`和类名为`.title`的元素，这些元素都将应用`color: red;`的样式规则。


```css
.container p {
    font-size: 16px;
}
```
空格表示`.container`类的**后代**元素`<p>`将被应用`font-size: 16px;`的样式规则。这意味着所有位于`.container`元素内部的`<p>`元素都将受到影响。

| 符号 | 作用 | 示例 |
| --- | --- | --- |
| 逗号（,） | 分隔不同的选择器，为多个元素或选择器应用相同的样式规则 | `h1, h2, .title { color: red; }` |
| 空格（ ） | 表示元素之间的后代关系，选择某个元素内部的后代元素进行样式应用 | `.container p { font-size: 16px; }` |

# clientheight 和 offsetheight有什么区别
- `clientHeight = content + padding`
- `offsetHeight = content + padding + border`
>[!warning]
>滚动条占用的是内容区域

# 选择器优先级
使用指定规则声明一个选择器，选择器利用指定的规则去选择文档中符合规则的元素。当多个选择器选择到同一个元素，并且均对这个元素应用的相同的CSS属性时，这时根据选择器的优先级决定采用谁的样式。换句话说，当同一个元素有多个声明的时候，优先级才有意义。


# 分辨率问题
浏览器是基于系统分辨率对各元素进行尺寸计算的。

屏幕有自己固有的物理分辨率，操作系统对屏幕分辨率进行了接管，可以设置小于物理分辨率的多种预置分辨率，更加灵活。