# Python 虚拟环境 (VENV) 使用指南

## 为什么使用虚拟环境？
- 🛡️ 隔离项目依赖，避免版本冲突
- 📦 便于管理不同项目的包依赖
- 🧹 保持系统 Python 环境的干净
- 🔀 方便测试不同 Python 版本组合

## 创建虚拟环境
```bash
# 创建名为 venv 的虚拟环境
python -m venv venv

# 创建指定 Python 版本的虚拟环境（需已安装对应版本）
py -3.11 -m venv myenv
```

## 激活虚拟环境
### Windows 命令提示符 (CMD)
```bash
venv\Scripts\activate.bat
```

### Windows PowerShell
```bash
.\venv\Scripts\Activate.ps1
```
❗ 如果出现执行策略错误，临时允许脚本执行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

## 虚拟环境操作
激活后命令行会出现 `(venv)` 前缀：
```bash
# 安装包（示例安装 requests）
pip install requests

# 导出依赖
pip freeze > requirements.txt

# 安装依赖
pip install -r requirements.txt

# 查看已安装包
pip list
```

## 退出虚拟环境
```bash
deactivate
```

## VS Code 集成
1. 打开命令面板 `Ctrl+Shift+P`
2. 输入 "Python: Select Interpreter"
3. 选择虚拟环境中的 python.exe
   `venv\Scripts\python.exe`

## 最佳实践
1. 每个项目单独创建虚拟环境
2. 将 `venv/` 加入 `.gitignore`
3. 定期更新依赖版本
4. 使用 requirements.txt 记录精确版本：
```txt
requests==2.31.0
numpy>=1.20.0
```

## 虚拟环境管理工具
### 安装 virtualenvwrapper
```bash
pip install virtualenvwrapper-win
```

### 常用命令
```bash
# 创建环境
mkvirtualenv myenv

# 列出所有环境
workon

# 切换环境 
workon myenv

# 删除环境
rmvirtualenv myenv
```