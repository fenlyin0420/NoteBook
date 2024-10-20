**弹性盒子**作为一个容器，用来容纳**弹性子元素**；通过设置容器的 `display: flex` 声明该容器是弹性盒子，弹性盒子里的一级子元素将会自动成为弹性子元素。

弹性盒子外部以及弹性子元素内部正常渲染，不受弹性布局的影响，弹性盒子只定义了在弹性盒子内部，弹性子元素如何布局。

# 弹性盒子属性
### flex-direction
`flex-direction: row | row-reverse | column | column-reverse`
指定弹性子元素在容器中的位置。
- `row` 默认，元素从左到右排列（左对齐）
- `row-reverse` 元素从右到左排列（右对齐），第一个元素在最右边，最后一个元素在最左边
- `column` 元素从上到下排列（且为左对齐）
- `column-reverse` 元素还是从上到下排列（左对齐），最后一个元素在最上面，第一个元素在最下面

注：这个属性用于设置弹性容器的 `main-start` 和 `main-end`。
\[参考链接][main-start-end](main-start-end.md)

### justify-content
`justify-content: flex-start | flex-end | center | space-between | space-around`
- `flex-start` 第一个元素的外边距线 与容器的 `main-start` 对齐
- `flex-end` 最后一个元素的外边距线与容器的 `main-end` 对齐
- `center` 弹性项目居中紧挨着排布
- `space-between` 第一个元素的外边距线与容器的 `main-start` 对齐，最后一个元素的外边距线与容器的 `main-end` 对齐，剩余元素在首位元素之间平均分布
- `space-around` 弹性项目平均分布在一行，要求首位元素的外边距线到 `main-start` 和 `main-end` 的距离要为元素之间距离的一半

![justify-content](justify-content.png)

### align-items
`align-items: flex-start | flex-end | center | baselline | stretch`
- `baseline` 
- `strrtch`

### flex-wrap
指定元素的换行方式。在弹性盒子中，默认只有一行以容纳元素，通过该属性，可以使元素换行。
`flex-wrap: nowrap(default) | wrap | wrap-reverse`
- `nowrap` 默认值，不换行
- `wrap` 换行
- `wrap-reverse` 反转行，第一行将会在容器最底部。


