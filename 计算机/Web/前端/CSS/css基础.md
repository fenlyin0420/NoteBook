# css计数器
## counter and counters
- counter(\<name>) 返回指定计数器的值
- counters(\<name>, str) 返回所有名称为 `<name>` 的计数器的值，从最外层开始调用，多个值之间使用 `str` 连接

# 选择器
## 直接子元素选择器
```CSS
.test > .child {

}
```
选择所有属于`child`类的直接子元素，即儿子节点，属于`child`类的孙子节点不选

## 相邻兄弟选择器
```CSS
.first + .second {

}
```
选择紧跟着`first`类的`second`类元素，这两个元素必须是兄弟关系
## 属性选择器
### 存在性选择

```css
tag[attr] {

}
// 选择存在 attr 属性的 tag 元素
```

### 值选择器

```css
 tag[attr=value] {
    
}
// 选择存在 attr 属性且值为 value 的 tag 元素
```

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
在这个例子中，空格表示`.container`类的后代元素`<p>`将被应用`font-size: 16px;`的样式规则。这意味着所有位于`.container`元素内部的`<p>`元素都将受到影响。

| 符号 | 作用 | 示例 |
| --- | --- | --- |
| 逗号（,） | 分隔不同的选择器，为多个元素或选择器应用相同的样式规则 | `h1, h2, .title { color: red; }` |
| 空格（ ） | 表示元素之间的后代关系，选择某个元素内部的后代元素进行样式应用 | `.container p { font-size: 16px; }` |

