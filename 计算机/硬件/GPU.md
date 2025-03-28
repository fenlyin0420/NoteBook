**CUDA、OpenCL、DirectML、Vulkan** 等是直接与 GPU 硬件交互的底层计算框架或 API，它们充当了 **CPU 和 GPU 之间的桥梁**，允许开发者编写程序来利用 GPU 的计算能力。其他高级库（如 PyTorch、TensorFlow 等）如果想要利用 GPU 进行计算，通常需要依赖这些底层框架之一。

### **直接访问 GPU 的框架**
这些框架可以直接与 GPU 硬件交互，管理 GPU 的资源（如显存、计算核心等），并执行并行计算任务：

- **CUDA**：NVIDIA 专有的并行计算平台，仅支持 NVIDIA GPU。
- **ROCm**：AMD 提供的并行计算平台，类似于 CUDA，仅支持 AMD GPU。
- **OpenCL**：跨平台的并行计算框架，支持多种硬件（如 NVIDIA GPU、AMD GPU、CPU、FPGA 等）。
- **DirectML**：微软提供的机器学习加速 API，支持多种硬件（如 NVIDIA、AMD、Intel GPU）。
- **Vulkan**：跨平台的图形和计算 API，支持 GPU 通用计算。
- **Metal**：苹果提供的图形和计算 API，专为苹果设备（如 macOS、iOS）设计。

这些框架提供了底层的编程接口，允许开发者直接控制 GPU 的计算任务。

---

### **高级库依赖底层框架**
像 **PyTorch、TensorFlow、MXNet** 等深度学习框架，以及 **NumPy、SciPy** 等科学计算库，通常不会直接与 GPU 硬件交互。它们依赖于上述底层框架来实现 GPU 加速：

- **PyTorch**：默认使用 CUDA 支持 NVIDIA GPU，也可以通过 ROCm 支持 AMD GPU。
- **TensorFlow**：支持 CUDA（NVIDIA GPU）和 ROCm（AMD GPU）。
- **JAX**：依赖于 CUDA 或 ROCm 来支持 GPU 计算。
- **NumPy/SciPy**：通常通过 CuPy（基于 CUDA）或其他 GPU 加速库来利用 GPU。

这些高级库通过调用底层框架（如 CUDA、OpenCL 等）的接口，将计算任务分配到 GPU 上执行。

