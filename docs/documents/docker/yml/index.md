# postgres {#postgres}
```yaml
version: '3.8'
services:
  # PostgreSQL 数据库服务
  postgres:
    image: ankane/pgvector:latest  # 预装 pgvector 的 PostgreSQL 镜像
    container_name: postgres
    environment:
      POSTGRES_USER: user      # 数据库用户名
      POSTGRES_PASSWORD: password  # 数据库密码
      POSTGRES_DB: postgres_db          # 数据库名称
    volumes:
      - pgdata:/var/lib/postgresql/data  # 数据持久化
    ports:
      - "5432:5432"               # 数据库端口映射
# 数据卷定义
volumes:
  pgdata:                         # PostgreSQL 数据卷
```