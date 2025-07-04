# n8n 本地部署指南

n8n 是一个强大的工作流自动化平台，允许您连接各种服务和应用程序，创建自动化工作流程，无需编写代码。本指南将帮助您在本地环境中部署 n8n。

## 系统要求

- Windows 10/11、Linux 或 macOS
- Node.js 16 或更高版本
- 可选NPM或Docker部署

## 安装 n8n

### 1. 使用 npm 安装

1. 打开命令提示符，全局安装 n8n：

```bash
npm install n8n -g
```

2. 启动 n8n：

```bash
n8n start
```

启动后，在浏览器中访问 localhost:5678 即可使用 n8n。

### 2. 使用 npx 安装
1. 打开命令提示符，运行npx命令
```bash
npx n8n start
```
2. 启动后，在浏览器中访问 localhost:5678 即可使用 n8n。后续也使用该命令启动

### 3. 使用 Docker 安装

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


## 常见问题解决

### 端口冲突

如果 5678 端口已被占用，可以更改端口：

```bash
 --port=5679
```

或在 Docker 中：

```yaml
ports:
  - "5679:5678"
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

## 参考资源

- [n8n 官方文档](https://docs.n8n.io/)
- [n8n GitHub 仓库](https://github.com/n8n-io/n8n)
- [n8n 社区论坛](https://community.n8n.io/)
- [supabase 矢量存储](https://supabase.com/)