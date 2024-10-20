#  pygame模块

- **pygame.init()**
  - **说明**: 初始化 Pygame 库的所有模块。
  - **参数**: 无
  - **返回值**: 返回一个元组 (num_successful_inits, num_failed_inits)

- **pygame.quit()**
  - **说明**: 退出 Pygame 库的所有模块。
  - **参数**: 无
  - **返回值**: 无

#  **pygame.display 模块**
## General Functions
- [set_mode](Contents.md#set_mode)



- **pygame.display.set_caption(title, icontitle=None)**
  - **说明**: 设置窗口标题。
  - **参数**: 
    - `title`: 标题字符串
    - `icontitle`: 可选的窗口小图标标题
  - **返回值**: 无

- **pygame.display.flip()**
  - **说明**: 更新整个待显示的 Surface 到屏幕上。
  - **参数**: 无
  - **返回值**: 无



#  **pygame.draw 模块**

- **pygame.draw.circle(surface, color, center, radius, width=0)**
  - **说明**: 在 Surface 对象上绘制一个圆。
  - **参数**: 
    - `surface`: 绘制的目标 Surface
    - `color`: 颜色
    - `center`: 圆心位置 (x, y)
    - `radius`: 半径
    - `width`: 线条宽度（0 表示填充）
  - **返回值**: Rect 对象

- **pygame.draw.line(surface, color, start_pos, end_pos, width=1)**
  - **说明**: 在 Surface 对象上绘制一条直线。
  - **参数**: 
    - `surface`: 绘制的目标 Surface
    - `color`: 颜色
    - `start_pos`: 起点位置 (x, y)
    - `end_pos`: 终点位置 (x, y)
    - `width`: 线条宽度
  - **返回值**: Rect 对象



#  **pygame.event 模块**

- **pygame.event.get()**
  - **说明**: 获取事件队列中的所有事件。
  - **参数**: 无
  - **返回值**: 事件对象列表

- **pygame.event.wait()**
  - **说明**: 等待一个事件发生。
  - **参数**: 无
  - **返回值**: 事件对象

- **pygame.event.post(Event)**
  - **说明**: 将一个事件放入事件队列。
  - **参数**: 
    - `Event`: 事件对象
    - **返回值**: 无


#  **pygame.time 模块**

- **pygame.time.Clock()**
  - **说明**: 创建一个 Clock 对象，用于帮助控制时间。
  - **参数**: 无
  - **返回值**: Clock 对象

- **Clock.tick(framerate)**
  - **说明**: 控制游戏的帧率。
  - **参数**: 
    - `framerate`: 每秒帧数
  - **返回值**: 自上次调用以来的毫秒数



#  **pygame.mixer 模块**

- **pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096)**
  - **说明**: 初始化混音器模块。
  - **参数**: 
    - `frequency`: 采样频率
    - `size`: 每个样本的位数
    - `channels`: 通道数
    - `buffer`: 缓冲区大小
  - **返回值**: 无

- **pygame.mixer.Sound(file)**
  - **说明**: 创建一个声音对象。
  - **参数**: 
    - `file`: 音频文件路径
  - **返回值**: Sound 对象

- **Sound.play(loops=0, maxtime=0, fade_ms=0)**
  - **说明**: 播放声音。
  - **参数**: 
    - `loops`: 循环次数
    - `maxtime`: 最大播放时间
    - `fade_ms`: 淡入时间
  - **返回值**: Channel 对象



#  **pygame.image 模块**

- **pygame.image.load(filename)**
  - **说明**: 加载图像文件。
  - **参数**: 
    - `filename`: 图像文件路径
  - **返回值**: Surface 对象

- **pygame.image.save(Surface, filename)**
  - **说明**: 保存 Surface 对象为图像文件。
  - **参数**: 
    - `Surface`: 要保存的 Surface
    - `filename`: 文件名
  - **返回值**: 无



#  **pygame.font 模块**

- **pygame.font.Font(filename, size)**
  - **说明**: 创建一个 Font 对象。
  - **参数**: 
    - `filename`: 字体文件路径
    - `size`: 字体大小
  - **返回值**: Font 对象

- **Font.render(text, antialias, color, background=None)**
  - **说明**: 渲染文本到 Surface 对象。
  - **参数**: 
    - `text`: 文本字符串
    - `antialias`: 是否抗锯齿
    - `color`: 文字颜色
    - `background`: 背景颜色
  - **返回值**: Surface 对象


