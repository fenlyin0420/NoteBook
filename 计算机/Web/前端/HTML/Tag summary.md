# \<form>
表单用于收集用户信息，并发送到指定地方。表单本身不可见，必须包含可见元素，\<input>标签等。表单类似于收集信息域的最外层包装，起到了封装作用。此外，表单可以将收集到的整个用户信息提交(action属性)
- `action` 该属性指定了表单提交的url
- `methon` 指定表达提交的http方法
## \<input>
常见作为表单元素，收集用户信息。
- `type` 主要属性！指定input显示的元素类型，详细信息：[HTML input 标签 | 菜鸟教程 (runoob.com)](https://www.runoob.com/tags/tag-input.html)、 [type 取值](计算机/Web/前端/HTML/link/link.md#input)
- `name` 表单数据的**键**
- `value` 表单数据的**值**，提前指定相当于为其默认值

## \<label>
label标签可以为input标签做标注(类似注释)，此外，通过`for`属性将input标签联系起来后，用户即使点击label，也能触发input。
- `for`指定要标注的标签，值为标签的`id`属性
``` HTML
<input type="checkbox" id = "subscribe">
<label for="subscribe">订阅推送消息</label>
```
这样，即使鼠标点击“订阅推送消息”这几个文字，也可以触发复选框

## \<select> 下拉框
- \<option> 下拉框要显示的元素
``` HTML
<select>
	<option value='cn'>CN</option>
	<option value='usa'>USA</option>
	<option value='uk'>UK</option>
</select>
```

# \<pre> 保留文本原始格式
``` html
<div>
	<pre> 
		hello
	world
	</pre>
</div>
```
after render:
```
		hello
	world
```
- 因为在源文件中，hello前有两个 `\t` ,world前有一个`\t`.
- 在div容器中显示，即在视窗的具体位置还要取决与div


## \<a>
```HTML
<a href="#id"> link </a>
<a href="javascript:void(0)"> link </a>
```
- href为`#+id`时，这个链接是一个锚点链接，用于在页面上定位
- href为`JavaScript:`时，点击这个链接将会执行后面的JavaScript代码
# 常见的内联级元素
- `span`
- `a`
- `img`