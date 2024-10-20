![Component类的部分子类](Component类的部分子类.md)
## Container
### JFrame 
- `JFrame()` 创建无标题窗口
- `JFrame(String title)` 创建指定标题的窗口
- `setBounds(int a, int b, int width, int height)`
- `setSize(int width, int height)`
- `setLocation(int a, int b)`
- `setVisible(boolean flag)` 设置窗口可见性，默认为False
- `setExtendedState(int state)` 
	- `MAXIMIZED_HORIZ`水平最大化
	- `MAXIMIZED_VERT` 垂直最大化
	- `MAXIMIZED_BOTH`都最大化
- `setDefaultCloseOperation(int operation)` 
	- `DO_NOTHING_ON_CLOSE`什么都不做
	- `HIDE_ON_CLOSE`隐藏窗口(Default)
	- `DISPOSE_ON_CLOSE`隐藏窗口并释放窗口占有的其他资源
	- `EXIT_IN_CLOSE`结束窗口所在的程序
- `dispose()` 撤销窗口，并释放资源

### JDialog

## Component


## Layout


## Event
容器、组件、布局共同决定了UI，而事件决定了交互。
- 事件源：能够产生事件的对象，如：按钮、文本框、下拉列表等。
- 监视器：监视事件的发生，事件源必须注册了相关事件的监视器，该事件发生时，程序才能处理
- 事件接口：监视器发现事件发生后，调用事件接口处理该事件。
### ActionEvent

### ItemEvent

### DocumentEvent

### MouseEvent

### FocusEvent

### KeyEvent

### WindowEvent

