# UV 使用指南

## 安装

### Windows
```powershell
#使用 irm 下载脚本并通过 iex 执行：
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### macOS/Linux
```bash
#使用 curl 下载脚本并通过 sh 执行：
curl -LsSf https://astral.sh/uv/install.sh | sh
#如果您的系统没有安装 curl，可以使用 wget：
wget -qO- https://astral.sh/uv/install.sh | sh
#指定特定版本时，在 URL 中包含版本号：
curl -LsSf https://astral.sh/uv/0.5.5/install.sh | sh
```

## 虚拟环境管理

### 创建环境
```bash
uv venv .venv
```

### 激活环境
- Windows：
```cmd
.venv\Scripts\activate
```
- macOS/Linux：
```bash
source .venv/bin/activate
```

### 环境初始化
```bash
uv init  # 生成基础配置文件
```

## 依赖管理

### 安装依赖
```bash
uv pip install requests
or
uv add requests
```

### 批量安装
```bash
uv pip install -r requirements.txt
```

### 生成依赖文件
```bash
uv pip freeze > requirements.txt
```

## 注意事项
1. 确保Python 3.8+版本
2. 建议将venv目录加入.gitignore
3. 环境变量需包含Python安装路径