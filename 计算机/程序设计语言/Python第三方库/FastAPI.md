## 创建应用
```python
app = FastAPI()
```
## 定义路由以及操作
用户的http访问方法、访问目标以及相关参数组成路由，相当于http方法+url。定义路由以及该路由底下的操作后，当用户访问该路由时，将自动执行操作。
```python
@app.get('/')
def read_root():
	return {'message': 'hello world'}
```
使用装饰器定义路由，`@<AppName>.<HTTP_Method>(<path>)`，被装饰的函数为操作。这个函数返回一个字典，**FastAPI将自动将python字典转换为Json数据**。
### 带参数的路由
- url中的查询参数：`https://example.com/search?query=apple&page=2` 以`?`开头，后面跟这若干键值对，以`&`分隔。
```python
@app.get('/search/{item})
def search(item:int, q: Union[str, None]):
	return {'item':item, 'query': q}
```
这个路由可以处理类似于`https://example.com/search/111?q=hello`, `https://example.com/search/112?q=world`等的url，路由参数必须为整型，查询参数键只能为`q`

- 函数的参数除去**路径参数**，其他的将被解析为url的**查询参数**或http请求方法的**请求体**
### 路径参数+查询参数+请求体解析
对于参数列表里的参数，FastAPI将：
- 在路径里也声明了的参数，作为路径参数
- 对于基本数据类型，作为查询参数
- 对于复合数据类型(一般为pydantic、dict; 其他类型将报错), 作为请求体
## 重定向
```python
from fastapi.responses import RedirectResponse
@app.get('/redirect')
def redirect():
	retrun RedirectResponse('/target')
```
访问`http://example.com/redirect` 将重定向到`http://example.com/target`页面
- url最后有无`/`的区别，在服务器处理角度
	- `http://example.com/blog/`表示在blog目录中搜索默认的index文件
	- `http://example.com/blog` blog为一具体的文件，直接访问blog文件

## 常见类
### HTTPException
```python
from fastapi import HTTPException
@app.get('/{item})
def func(item:int):
	if item == 520:
		 # 抛出异常，并自定义状态码和状态信息
		raise HTTPException(status_code = 520,
							detail="No, you cant't do!")
	return f"This is the {item} page!"
```

### JSONResponse
使用JSONResponse可以自定义请求头、请求体。
```python
from fastapi.responses import JSONResponse
@app.get('/')
def root():
	content = "This is index.html"
	header = {"Conten-Type":'application/text', "Status-code":123}
	return JSONResponse(content = content, headers = header)
```


### Request
**属性：**
- `url`: 请求的完整URL（包含路径和查询字符串）。
- `method`: 请求的HTTP方法（如GET、POST等）。
- `headers`: 一个类似于字典的对象，包含了所有的请求头。
- `query_params`: 一个类似于字典的对象，包含了所有的查询参数。
- `state`: 一个可以在中间件中设置和访问的字典，用于跨请求共享数据。
- `json()`: 一个异步方法，用于解析请求体中的JSON数据。
- `form()`: 一个异步方法，用于解析表单数据。
- `cookies`: 一个字典，包含了请求中的所有Cookie。
- `client`: 客户端的IP地址。
- `path_params`: 一个字典，包含了路径参数（如果路径操作函数定义了路径参数的话）。


## 依赖项
依赖项的本质是一个可调用对象，一般为函数，但也可以为类，当为类时，本质是调用其类的构造函数。
```python
class CommonQueryParams: 
	def __init__(self, q: Optional[str] = None, skip: int = 0, limit: int = 100): 
		self.q = q self.skip = skip 
		self.limit = limit 

@app.get("/items/") 
async def read_items(commons: CommonQueryParams = Depends(CommonQueryParams)): 
	response = {} 
	if commons.q: 
		response.update({"q": commons.q}) 
	items = fake_items_db[commons.skip : commons.skip + commons.limit] 
	response.update({"items": items}) 
	return response
```
注入依赖这里：`commons: CommonQueryParams = Depends(CommonQueryParams)`可以简写为`commons: CommonQueryParams = Depends()`。

使用typing类型注解是为了是编辑器更好的进行代码检验。


## pydantic 模型
在FastAPI中使用pydantic模型可以不用手动序列化json，以及检验json合法性，pydantic模型会自动帮我们做。
```python
class body(pydantic.BaseModel):
	name : str
	age : in
	ID : str
	organizition : str = None
```
上述使用pydantic模型包装字典(键值对集合)


## Jinja2模板返回网页


### 1. 安装 FastAPI 和其他依赖

首先，确保你已经安装了 FastAPI 和 Uvicorn（用于运行 FastAPI 应用的 ASGI 服务器）以及 Jinja2（用于模板渲染）。你可以使用 pip 来安装它们：

```bash
pip install fastapi uvicorn jinja2
```

### 2. 准备静态文件

在你的项目目录中，创建一个名为 `static` 的文件夹，用于存放 CSS 和 JavaScript 文件。例如：

```
your_project/
│
├── main.py  # 你的 FastAPI 应用
│
└── static/
    ├── css/
    │   └── styles.css
    └── js/
        └── script.js
```

### 3. 准备模板文件

同样地，创建一个名为 `templates` 的文件夹来存放 HTML 文件。例如：

```
your_project/
│
├── main.py
│
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
└── templates/
    └── index.html
```

在 `index.html` 中，你可以通过 `<link>` 和 `<script>` 标签来引用静态文件夹中的 CSS 和 JavaScript 文件：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/static/css/styles.css">
</head>
<body>
    <h1>Hello, FastAPI!</h1>
    <script src="/static/js/script.js"></script>
</body>
</html>
```

### 4. 编写 FastAPI 应用

在你的 `main.py` 文件中，设置 FastAPI 应用，使用 `StaticFiles` 来服务静态文件，并使用模板渲染来返回 HTML。

```python
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# 设置静态文件目录
app.mount("/static", StaticFiles(directory="static"), name="static")

# 设置模板引擎
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
```

### 5. 运行你的应用

使用 Uvicorn 运行你的 FastAPI 应用：

```bash
uvicorn main:app --reload
```

