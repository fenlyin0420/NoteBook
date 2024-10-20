## 导入
```Javascript
<script src="https://cdn.staticfile.net/jquery/1.10.2/jquery.min.js"></script>
```
## 基本语法
`$(selector).action()`
- `$`定义jQuery
- 选择器选择元素, 需要传入字符串
- `action` 是对元素的操作

`action()` 可以是一个事件，也可以是一个操作。
- 作为事件
	- `$(selector).event()` 表示主动触发该事件
	- `$(selector).event(function(){...})` 不主动触发，当该事件发生时，执行function内部代码
- 作为操作
	- `$(selector).action()`对选中的元素执行操作，操作是内置的，不能自定义

综上，jQuery是对HTML元素进行某种内置操作，或激发HTML元素的某个事件，或当HTML元素的某个事件发生时，jQuery定义事件处理函数。

`$(selector) -> jQuery` 返回一个`Object` , 其`0`属性是选中的`HTMLDOM`节点对象。

## 内置操作
- `hide(speed,type,callback)` 隐藏元素，隐藏后不占DOM空间
- `show(speed,type,callback)` 显示元素
- `toggle(speed, type, callback)` 在hide和show之间切换
	- `speed` 有`slow` `fast` 常量, 以毫秒为单位的数值
	- `type` 字符串，有`liner` `swing` 两种常量
	- `callback`操作完成后的回调函数


## 内置事件
- 鼠标事件
	- `click`
	- `dblclick` 鼠标左键双击
- 