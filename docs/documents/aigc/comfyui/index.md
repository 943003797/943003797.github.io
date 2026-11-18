# ComfyUI 安装指南

ComfyUI 是一个功能强大的节点式 AI 图像生成界面，专为 Stable Diffusion 设计。下面是详细的安装步骤。

## 系统要求

- Windows 10/11、Linux 或 macOS
- NVIDIA GPU (推荐 8GB+ VRAM) 或 AMD GPU (支持有限)
- Python 3.10 或更高版本
- Git

## Windows 安装步骤

### 1. 安装 Python

1. 访问 [Python 官网](https://www.python.org/downloads/) 下载 Python 3.10 或更高版本
2. 安装时勾选 "Add Python to PATH"
3. 完成安装后，打开命令提示符验证安装：

```bash
python --version
```

### 2. 安装 Git

1. 访问 [Git 官网](https://git-scm.com/download/win) 下载 Git
2. 按照默认选项完成安装
3. 验证安装：

```bash
git --version
```

### 3. 下载并安装 ComfyUI

1. 打开命令提示符，切换到你想安装 ComfyUI 的目录
2. 克隆 ComfyUI 仓库：

```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
```

3. 创建并激活虚拟环境（可选但推荐）：

```bash
python -m venv venv
venv\Scripts\activate
```

4. 安装依赖：

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt
```

### 4. 下载 Stable Diffusion 模型

1. 创建模型目录：

```bash
mkdir -p models\checkpoints
```

2. 从 [Hugging Face](https://huggingface.co/runwayml/stable-diffusion-v1-5) 或 [Civitai](https://civitai.com/) 下载模型
3. 将下载的模型文件（.ckpt 或 .safetensors）放入 `models\checkpoints` 目录

### 5. 启动 ComfyUI

```bash
python main.py
```

启动后，在浏览器中访问 http://127.0.0.1:8188 即可使用 ComfyUI。

## Linux/macOS 安装步骤

Linux 和 macOS 的安装步骤类似，主要区别在于路径分隔符和激活虚拟环境的命令：

```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
python -m venv venv
source venv/bin/activate  # Linux/macOS 激活虚拟环境
pip install -r requirements.txt
mkdir -p models/checkpoints
python main.py
```

## 常见问题解决

### CUDA 相关错误

如果遇到 CUDA 相关错误，请确保：
- 已安装最新的 NVIDIA 驱动
- 安装了与 GPU 兼容的 PyTorch 版本

### 内存不足

如果遇到内存不足的问题：
- 使用 `--lowvram` 或 `--medvram` 参数启动：
  ```bash
  python main.py --lowvram
  ```
- 减小生成图像的尺寸
- 关闭其他占用 GPU 内存的应用

### 模型加载失败

确保模型文件放在正确的目录中：
- Stable Diffusion 模型: `models/checkpoints/` - 存放基础的 Stable Diffusion 模型文件(.ckpt 或 .safetensors)
- VAE 模型: `models/vae/` - 存放用于图像编码和解码的 VAE 模型
- LoRA 模型: `models/lora/` - 存放用于微调的 LoRA 模型文件
- 控制网络模型: `models/controlnet/` - 存放用于精确控制生成过程的 ControlNet 模型
- 嵌入模型: `models/embeddings/` - 存放 Textual Inversion 训练的嵌入模型
- CLIP 模型: `models/clip/` - 存放用于文本理解的 CLIP 模型
- GLIGEN 模型: `models/gligen/` - 存放用于生成布局的 GLIGEN 模型
- CLIP Vision 模型: `models/clip_vision/` - 存放用于图像理解的 CLIP Vision 模型
- Diffusers 模型: `models/diffusers/` - 存放 Hugging Face Diffusers 格式的模型
- Upscale 模型: `models/upscale_models/` - 存放用于图像放大的超分辨率模型

## 自定义节点安装

ComfyUI 支持通过自定义节点扩展功能：

1. 创建自定义节点目录：
```bash
mkdir -p custom_nodes
```

2. 克隆所需的自定义节点仓库：
```bash
cd custom_nodes
git clone https://github.com/作者名/节点仓库名
```

3. 安装节点依赖（如果有）：
```bash
cd 节点仓库名
pip install -r requirements.txt
```

4. 重启 ComfyUI 以加载新节点

## 更新 ComfyUI

定期更新 ComfyUI 以获取最新功能和修复：

```bash
cd ComfyUI
git pull
pip install -r requirements.txt
```

## 参考资源

- [ComfyUI 官方仓库](https://github.com/comfyanonymous/ComfyUI)
- [ComfyUI 文档](https://github.com/comfyanonymous/ComfyUI/blob/master/README.md)
- [ComfyUI 讨论区](https://github.com/comfyanonymous/ComfyUI/discussions)

希望这份安装指南对你有所帮助！如有任何问题，可以在 GitHub 讨论区寻求帮助。