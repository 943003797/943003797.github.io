# n8n
一个强大的工作流自动化平台，允许您连接各种服务和应用程序，创建自动化工作流程，无需编写代码。本指南将帮助您在本地环境中部署 n8n。

## 开始

### 前提
npm 是在本地使用 n8n 的快速方法。必须安装Node.js。n8n 需要 20.19 到 24.x 之间的Node.js版本（含）。

### 使用 npm 安装

1. 安装 n8n：

```bash
npm install n8n
```

2. 启动 n8n：

```bash
n8n start
```

### .env配置

```bash
# n8n 配置文件
N8N_HOST=localhost
N8N_PROTOCOL=https
WEBHOOK_URL=localhost
N8N_USER_FOLDER=./n8n-data  # 数据存储目录
N8N_PORT=7777 # 端口号
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true  # 强制设置配置文件权限
npm_config_dns_result_order=ipv4first  # 优先使用 IPv4 地址
npm_config_dns=8.8.8.8  # DNS 服务器地址
# 可选：启用基础认证（推荐生产环境开启）
# N8N_BASIC_AUTH_ACTIVE=true
# N8N_BASIC_AUTH_USER=admin
# N8N_BASIC_AUTH_PASSWORD=YourStrongPassword
JWT_EXPIRATION=7d # JWT 过期时间
# 可选：日志级别（debug | info | warn | error）
N8N_LOG_LEVEL=info # 日志级别
GENERIC_TIMEZONE=Asia/Shanghai # 时区
N8N_SECURE_COOKIE=false # 是否使用安全 Cookie
N8N_DEFAULT_LOCALE=zh-CN # 默认语言, 配合汉化插件: https://github.com/other-blowsnow/n8n-i18n-chinese
```

###  汉化
插件地址:https://github.com/other-blowsnow/n8n-i18n-chinese
1. 选择与当前n8n版本一致的翻译版本下载
2. 解压并覆盖n8n/node_modules/n8n-editor-ui/dist
3. 在.env中配置中文: N8N_DEFAULT_LOCALE=zh-CN











## 参考资源

- [n8n 官方文档](https://docs.n8n.io/)
- [n8n GitHub 仓库](https://github.com/n8n-io/n8n)
- [n8n 社区论坛](https://community.n8n.io/)
- [汉化插件](https://github.com/other-blowsnow/n8n-i18n-chinese)
- [supabase 矢量存储](https://supabase.com/)