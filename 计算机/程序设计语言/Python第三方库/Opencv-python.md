### cv2.nameWindow()
- `winname:str` window title
- `flags:int`, display mode
	- cv2.WINDOW_AUTOSIZE(default)
	- cv2.WINDOW_NORMAL

### cv2.copyMakeBorder()
- `src:Mat` image
- `top, bottom, left, right:int`, border piex number
- `borderType` 
	- cv2.BORDER_CONSTANT (requaird value para) 固定彩色边框
	- cv2.BORDER_REFLECT 边界以镜像方式显示
- `value` border color

### cv2.addWeighted()
- `src1, alpha: MatLike, float`
- `src2, beta: MatLike, float`
- `gamma`
`dst = src1 * alpha + src2 * beta + gamma`
按照权重图像混合

# 按位操作实践
> 将一幅轮廓复杂的图片放到另一幅图片上

1. 创建蒙版和反向蒙版
	1. 图片二值化处理(`threshold()`), 得到蒙版
	2. 将蒙版按位非运算(`bitwise_not()`), 得到反向蒙版
2. 利用蒙版，提取出待放图片有效部分（前景），利用反向蒙版提取出后景; (`bitwise_and(mask=mask)`, `bitwise_and(mask=inverse_mask)`, 蒙版区域不运算，以0填充
3. 将前景和后景进行饱和相加(add())，得到局部目标图片
4. 将局部目标图片直接覆盖原图
**蒙版(mask)**: 蒙版区域是我们不关注的，一般为0， 我们感兴趣的区域为255(1)。