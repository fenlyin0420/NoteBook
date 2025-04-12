# outputs 无法显示 png 图片
inputs 和 outputs 均为Image组件，在inputs上传一张png图片，outputs无法正确显示png。

**原因:** `Image`组件默认传递`RGB`模式的图片给函数，即没有传递 Alpha 通道数据。

**解决:** 既然传参过程中，有信息丢失，那我们想办法别让信息丢失就行，`Image`组件提供了`image_mode`关键字参数，将其设置为`RGBA`即可保留 Alpha 通道信息。

```python
def img(image):
    return image

demo = gr.Interface(
    fn=img,
    inputs=gr.Image(image_mode="RGBA"),
    outputs=gr.Image(),
)

demo.launch()
```

# 对图像 Alpha 通道的理解
我使用`np.zeros((100, 100, 4))` 创建了大小为 100x100 的RGBA图片，显然，图片所有的像素值均为`(0, 0, 0)`，且 Alpha 通道也为0，此时图片显示为纯白色，**是因为背景为纯白色**。当我将主题颜色调为暗色，**图片显示为黑色**。

> [!note]
> 当 Alpha 通道为0时，意为全透明，RGB 通道对图片无任何影响，图片仅由背景决定；
> 当 Alpha 通道为255时，意为不透明，RGBA图片等价于RGB图片，Alpha通道对图片无任何影响。



