# UV 使用指南

## 多平台安装方法

### Windows
```powershell
pip install uv
```

### macOS/Linux
```bash
pip install uv
```

## 虚拟环境管理

### 创建环境
```bash
uv venv venv
```

### 激活环境
- Windows：
```cmd
.\venv\Scripts\activate
```
- macOS/Linux：
```bash
source venv/bin/activate
```

## 依赖管理

### 安装依赖
```bash
uv pip install requests
```

### 批量安装
```bash
uv pip install -r requirements.txt
```

### 生成依赖文件
```bash
uv pip freeze > requirements.txt
```

## 环境初始化
```bash
uv init  # 生成基础配置文件
```

## 注意事项
1. 确保Python 3.8+版本
2. 建议将venv目录加入.gitignore
3. 环境变量需包含Python安装路径