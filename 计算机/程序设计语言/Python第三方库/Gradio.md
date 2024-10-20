# 核心机制
![机制](Pasted%20image%2020240823200805.png)


# Interface
## constructor
- `Interface(fn, inputs, outputs)` 
	- `fn` 接收`inputs`参数，进行处理后返回给`outputs` 
	- `inputs` 和 `outputs` 均表示组件或组件列表，可以为`String`或`Componet`或对应的列表，例如`inputs=["text", "slider"]`，说明有两个`input`元素，分别为文本输入和滑块输入。

# Blocks


# Component
- `Textbox -> str`: 允许用户输入单行文本。
- `Textarea -> str`: 允许用户输入多行文本。
- `Number -> int/float`: 允许用户输入数字，可以配置为整数或浮点数。
- `Slider -> float/int`: 允许用户通过滑动条选择一个数值范围内的值，取决于配置。
- `Checkbox -> bool/list`: 允许用户勾选一个或多个选项，单个复选框返回布尔值，允许多选时返回选项列表。
- `Radio -> str`: 允许用户从一组选项中选择一个，选中的选项作为字符串返回。
- `Dropdown -> str`: 允许用户从下拉列表中选择一个选项，选中的选项作为字符串返回。
- `Image -> PIL.Image.Image/str`: 允许用户上传图像文件，根据配置返回Pillow库的图像对象或文件路径。
- `File -> str`: 允许用户上传任意类型的文件，并返回该文件在服务器上的路径。
- `Buttons -> 事件/回调函数`: 按钮通常用于触发某些操作，如提交表单、执行计算等，不直接返回数据。
