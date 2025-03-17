# Python 虚拟环境使用指南

## 创建虚拟环境

```bash
# 在项目目录中创建名为 venv 的虚拟环境
python -m venv venv
```

## 激活虚拟环境

### Windows 系统
```powershell
# 使用 PowerShell
.\venv\Scripts\activate

# 使用 CMD
venv\Scripts\activate.bat
```

### Linux/macOS 系统
```bash
source venv/bin/activate
```

## 退出虚拟环境
```bash
deactivate
```

## 环境管理

### 删除虚拟环境
```bash
# 直接删除整个 venv 目录
rm -rf venv  # Linux/macOS
rd /s /q venv  # Windows CMD
```

## 依赖管理

### 保存依赖
```bash
pip freeze > requirements.txt
```

### 安装依赖
```bash
pip install -r requirements.txt
```

## 最佳实践
1. 建议将 `venv/` 添加到 `.gitignore`
2. 每个项目独立创建虚拟环境
3. 使用 Python 3.3+ 自带的 venv 模块

> 注意：Windows 使用反斜杠路径，Linux/macOS 使用正斜杠路径。激活后命令行提示符前会显示 `(venv)` 标识。