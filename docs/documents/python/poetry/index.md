# Poetry 使用指南

## 安装

### 官方推荐安装方式
```bash
# 使用官方安装脚本（推荐）
curl -sSL https://install.python-poetry.org | python3 -
```

### 其他安装方式
```bash
# 使用 pip 安装
pip install poetry

# 使用 pipx 安装（推荐用于隔离环境）
pipx install poetry
```

### 验证安装
```bash
poetry --version
```

## 项目初始化

### 创建新项目
```bash
# 交互式创建项目
poetry new my-project

# 在当前目录初始化项目
poetry init

# 使用特定Python版本
poetry init --python "^3.8"
```

### 项目结构
```
my-project/
├── pyproject.toml  # 项目配置文件
├── README.md
├── poetry.lock     # 依赖锁定文件
├── src/
│   └── my_project/
│       ├── __init__.py
│       └── main.py
└── tests/
    └── __init__.py
```

## 虚拟环境管理

### 创建虚拟环境
```bash
# 自动创建虚拟环境（默认行为）
poetry install

# 指定Python版本
poetry env use /usr/bin/python3.9

# 在项目目录内创建虚拟环境
poetry config virtualenvs.in-project true
```

### 激活/停用环境
```bash
# 激活虚拟环境
poetry shell

# 在虚拟环境中运行命令
poetry run python script.py

# 退出虚拟环境
exit
```

### 环境管理命令
```bash
# 查看当前环境信息
poetry env info

# 列出所有环境
poetry env list

# 删除虚拟环境
poetry env remove python
```

## 依赖管理

### 添加依赖
```bash
# 添加生产依赖
poetry add requests

# 添加开发依赖
poetry add --group dev pytest

# 添加特定版本
poetry add django@^4.0
poetry add flask@~2.0.0

# 添加Git依赖
poetry add git+https://github.com/user/repo.git
```

### 依赖操作
```bash
# 安装所有依赖
poetry install

# 仅安装生产依赖（不安装开发依赖）
poetry install --no-dev

# 更新依赖
poetry update

# 更新特定包
poetry update requests

# 移除依赖
poetry remove requests
```

### 依赖文件管理
```bash
# 导出requirements.txt
poetry export -f requirements.txt --output requirements.txt

# 导出不带hash的requirements.txt
poetry export -f requirements.txt --without-hashes --output requirements.txt

# 查看依赖树
poetry show --tree
```

## 项目配置

### pyproject.toml 配置文件示例
```toml
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = "A sample project"
authors = ["Your Name <email@example.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.8"
requests = "^2.28.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.0.0"
black = "^22.0.0"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.scripts]
my-script = "my_project.main:main"
```

### 配置命令
```bash
# 查看配置
poetry config --list

# 设置配置项
poetry config virtualenvs.create true
poetry config virtualenvs.in-project true

# 取消配置
poetry config virtualenvs.create --unset
```

## 构建和发布

### 构建项目
```bash
# 构建包
poetry build

# 构建源码包
poetry build --format sdist

# 构建wheel包
poetry build --format wheel
```

### 发布到PyPI
```bash
# 发布到PyPI
poetry publish

# 发布到测试PyPI
poetry publish --repository testpypi

# 使用API token发布
poetry config pypi-token.pypi your-token
```

## 常用工作流程

### 新项目开发流程
```bash
# 1. 创建新项目
poetry new my-project
cd my-project

# 2. 添加依赖
poetry add requests pandas
poetry add --group dev pytest black

# 3. 激活环境并开发
poetry shell
# 或者使用 poetry run python script.py

# 4. 测试和构建
poetry run pytest
poetry build
```

### 现有项目迁移流程
```bash
# 1. 在现有项目根目录初始化
poetry init

# 2. 从requirements.txt添加依赖
cat requirements.txt | xargs poetry add

# 3. 安装依赖
poetry install

# 4. 删除旧的虚拟环境，使用Poetry管理
```

## 注意事项和最佳实践

### 版本控制
- 将 `poetry.lock` 文件加入版本控制
- 不要将虚拟环境目录（`.venv/`）加入版本控制
- 在 `.gitignore` 中添加：
```
.venv/
__pycache__/
*.pyc
```

### 环境配置
- 建议设置 `virtualenvs.in-project true` 让虚拟环境在项目目录内
- 在多项目开发时，使用不同的Python版本管理
- 定期运行 `poetry update` 保持依赖更新

### 依赖管理
- 使用语义化版本控制（如 `^2.0.0`, `~1.2.0`）
- 将开发依赖和运行时依赖分开管理
- 定期检查安全漏洞：`poetry check`

### 性能优化
- 使用 `--no-dev` 在生产环境中安装
- 配置镜像源加速依赖下载
- 使用缓存：`poetry cache list` 和 `poetry cache clear`

### 常见问题解决
```bash
# 如果遇到依赖解析问题
poetry lock --no-update

# 清除缓存重新安装
poetry cache clear --all pypi
poetry install

# 检查依赖冲突
poetry check
```

## 与uv对比

| 特性 | Poetry | UV |
|------|--------|----|
| 项目配置 | pyproject.toml | pyproject.toml |
| 虚拟环境 | 内置管理 | 内置管理 |
| 依赖解析 | 强依赖解析 | 快速依赖解析 |
| 发布功能 | 内置发布到PyPI | 无内置发布功能 |
| 性能 | 良好 | 极快 |
| 生态系统 | 成熟稳定 | 新兴工具 |

Poetry更适合完整的项目生命周期管理，而UV更专注于快速的依赖安装和环境管理。