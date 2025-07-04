# n8n 本地部署指南

n8n 是一个强大的工作流自动化平台，允许您连接各种服务和应用程序，创建自动化工作流程，无需编写代码。本指南将帮助您在本地环境中部署 n8n。

## 系统要求

- Windows 10/11、Linux 或 macOS
- Node.js 16 或更高版本
- npm 或 yarn 包管理器
- 可选：Docker 和 Docker Compose（用于容器化部署）

## Windows 安装步骤

### 1. 安装 Node.js

1. 访问 [Node.js 官网](https://nodejs.org/) 下载 Node.js 16 或更高版本
2. 按照安装向导完成安装
3. 安装完成后，打开命令提示符验证安装：

```bash
node --version
npm --version
```

### 2. 使用 npm 安装 n8n

1. 打开命令提示符，全局安装 n8n：

```bash
npm install n8n -g
```

2. 启动 n8n：

```bash
n8n start
```

启动后，在浏览器中访问 http://localhost:5678 即可使用 n8n。

### 3. 使用 Docker 安装（可选）

如果您已安装 Docker，可以使用 Docker 容器运行 n8n：

1. 创建一个 `docker-compose.yml` 文件：

```yaml
version: '3'

services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=用户名
      - N8N_BASIC_AUTH_PASSWORD=密码
    volumes:
      - ./n8n-data:/home/node/.n8n
```

2. 启动 n8n 容器：

```bash
docker-compose up -d
```

## Linux/macOS 安装步骤

### 使用 npm 安装

```bash
# 安装 n8n
npm install n8n -g

# 启动 n8n
n8n start
```

### 使用 Docker 安装

与 Windows 的 Docker 安装步骤相同。

## 持久化数据配置

n8n 默认使用 SQLite 数据库存储工作流和凭证。对于生产环境，建议配置更可靠的数据库：

### 使用 PostgreSQL

1. 在 `docker-compose.yml` 中添加 PostgreSQL 服务：

```yaml
version: '3'

services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=密码
    volumes:
      - ./n8n-data:/home/node/.n8n
    depends_on:
      - postgres

  postgres:
    image: postgres:14
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=密码
      - POSTGRES_DB=n8n
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

## 环境变量配置

n8n 可以通过环境变量进行配置。以下是一些常用的环境变量：

- `N8N_BASIC_AUTH_ACTIVE`: 启用基本身份验证（true/false）
- `N8N_BASIC_AUTH_USER`: 基本身份验证用户名
- `N8N_BASIC_AUTH_PASSWORD`: 基本身份验证密码
- `N8N_HOST`: n8n 主机名（默认：localhost）
- `N8N_PORT`: n8n 端口（默认：5678）
- `N8N_PROTOCOL`: 协议（http 或 https）
- `N8N_ENCRYPTION_KEY`: 用于加密凭证的密钥
- `WEBHOOK_URL`: Webhook URL（用于外部访问）

## 启用 HTTPS

对于生产环境，建议启用 HTTPS：

1. 准备 SSL 证书和密钥文件
2. 配置环境变量：

```bash
N8N_PROTOCOL=https
N8N_SSL_KEY=/path/to/privkey.pem
N8N_SSL_CERT=/path/to/cert.pem
```

## 常见问题解决

### 端口冲突

如果 5678 端口已被占用，可以更改端口：

```bash
n8n start --port=5679
```

或在 Docker 中：

```yaml
ports:
  - "5679:5678"
```

### 内存不足

如果遇到内存不足的问题，可以增加 Node.js 的内存限制：

```bash
node --max-old-space-size=4096 /usr/local/bin/n8n start
```

### 外部访问 Webhook

要使 Webhook 可以从外部访问，需要设置 `WEBHOOK_URL` 环境变量：

```bash
WEBHOOK_URL=https://your-domain.com/
```

## 更新 n8n

### 使用 npm 更新

```bash
npm update -g n8n
```

### 使用 Docker 更新

```bash
docker-compose pull
docker-compose up -d
```

## 备份与恢复

### 备份数据

对于 SQLite 数据库，备份 `~/.n8n/database.sqlite` 文件。

对于 PostgreSQL 数据库，使用 `pg_dump`：

```bash
pg_dump -U postgres -d n8n > n8n_backup.sql
```

### 恢复数据

对于 SQLite 数据库，替换 `~/.n8n/database.sqlite` 文件。

对于 PostgreSQL 数据库：

```bash
psql -U postgres -d n8n < n8n_backup.sql
```

## 参考资源

- [n8n 官方文档](https://docs.n8n.io/)
- [n8n GitHub 仓库](https://github.com/n8n-io/n8n)
- [n8n 社区论坛](https://community.n8n.io/)

希望这份部署指南对你有所帮助！如有任何问题，可以在 n8n 社区论坛寻求帮助。
        