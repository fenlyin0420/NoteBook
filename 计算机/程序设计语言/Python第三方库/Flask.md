## 使用Jiaja2模板返回网页

### 步骤 1: 安装Flask

首先，确保你的计算机上安装了Python。然后，使用pip安装Flask。

```bash
pip install Flask
```

### 步骤 2: 创建Flask应用

1. 创建一个Python文件，比如叫`app.py`。
2. 导入Flask并创建一个Flask应用实例。

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # 这里可以添加逻辑来从数据库获取数据等
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### 步骤 3: 创建HTML模板

1. 在你的项目文件夹中创建一个名为`templates`的文件夹（Flask默认从该文件夹中寻找模板文件）。
2. 在`templates`文件夹中创建一个HTML文件，比如叫`index.html`。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>动态网页示例</title>
</head>
<body>
    <h1>欢迎来到我的动态网页</h1>
    <!-- 这里可以添加更多的HTML代码 -->
</body>
</html>
```

### 步骤 4: 运行你的Flask应用

回到命令行，确保你在包含`app.py`的目录中，然后运行以下命令来启动你的Flask应用。

```bash
python app.py
```

默认情况下，Flask应用会在`http://127.0.0.1:5000/`上运行。在浏览器中访问这个地址，你应该能看到你的动态网页。

### 步骤 5: 添加动态内容

要让网页内容动态化，你可以修改`home`函数来从数据库或其他数据源获取数据，并将这些数据传递给模板。

```python
from flask import Flask, render_template

app = Flask(__name__)

# 假设这是从数据库获取的数据
data = {'message': '这是从数据库获取的动态消息'}

@app.route('/')
def home():
    return render_template('index.html', **data)

if __name__ == '__main__':
    app.run(debug=True)
```

然后，在`index.html`中使用Jinja2模板语法来显示这些数据。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>动态网页示例</title>
</head>
<body>
    <h1>欢迎来到我的动态网页</h1>
    <p>{{ message }}</p>
</body>
</html>
```

