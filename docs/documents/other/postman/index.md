---
title: Postman Guide
titleTemplate: 入门指南
description: Postman 使用入门指南
prev: false
next: false
lastUpdated: true
---

# Postman 使用入门指南

## 工作空间（Workspaces）{#gongzuokongjian}

### 创建工作空间

1. 在 Home 页，选择 Workspaces -> Create Workspace

   ![创建工作空间](https://s2.loli.net/2024/08/01/D7FUWwic3r6R1lZ.png)

2. 一般选择一个空的空间

   ![选择空间类型](https://s2.loli.net/2024/07/29/QaZkWRPoY371eXz.png)

3. 设置 **Workspace Name**，选择访问权限：

   - **Only me** (Personal Workspace) - **私有**
   - **Everyone from team** (Team Workspace) - **团队协作**
   - **Anyone on the internet** (Public) - **公开**

   ![设置工作空间权限](https://s2.loli.net/2024/07/29/I4SZPMsvydlB51x.png)

4. 创建 **Team Workspace** 时，基础设置包括**简介**，Team 内的 **Comment**，**成员编辑**等

   #### Configure sidebar
   
   选择工作空间常用功能，将显示在左侧菜单栏
   
   ![配置侧边栏](https://s2.loli.net/2024/07/29/QY6e1kwusmXVdpD.png)

## API 集合 {#apijihe}

### 新建集合

- 可以配置该集合下的 Authorization、Scripts、Variables、Runs
- Authorization、Scripts、Variables 将会作用于整个集合
- Runs 是记录了当前集合执行过的 Runner

![新建集合](https://s2.loli.net/2024/08/01/LPESadMgiOJsIb2.png)

### Runner-Functional

- 在集合中，可以对集合或某个文件夹开启一个 Run，Run 以特定顺序依次执行 Run list 接口
- 主要配置：
  - **迭代次数** - collection run 的迭代次数
  - **延迟** - 每个请求之间的间隔延迟（以毫秒为单位）
  - **数据** - collection run 的数据

![功能性测试配置](https://s2.loli.net/2024/08/01/9a3fwb4m2ExTr6j.png)

- 执行结果

![执行结果](https://s2.loli.net/2024/08/01/tkX2QlYpPO3SfJR.png)

### Runner-Performance

- 压力测试，选择 Performance
- 配置选项：
  - **Load profile** - 负载曲线
  - **Virtual users** - 模拟峰值用户数
  - **Test duration** - 持续时间
  - **Initial load** - 初始模拟用户数
  - **Select file** - 测试用请求数据

![性能测试配置](https://s2.loli.net/2024/08/02/m7NgKaCitYywHGb.png)

- 启动 Run，等待结果

![性能测试结果](https://s2.loli.net/2024/08/02/LVBN6GRxmdczj8W.png)

## 环境配置 {#peizhi}

![环境配置](https://s2.loli.net/2024/07/31/sRZ9tqMhoPcfK8U.png)

### 全局变量

全局变量在所有环境可调用，定义所有你想在任何环境里使用的变量，例如：登录 ID

![全局变量](https://s2.loli.net/2024/07/31/eXMJmgfoYsPIA27.png)

### 环境变量

在这里定义不同环境，特殊的变量：链接地址、鉴权信息

![环境变量](https://s2.loli.net/2024/07/31/KBioQgpZbxctGUF.png)

### 变量引用

在需要的地方以 `{{变量名}}` 引用，例如：`{{HOST}}`

![变量引用](https://s2.loli.net/2024/07/31/7mq2u39ECOUlySR.png)

### 环境分支

可以在建立基础环境之后，例如 **Local**，使用 **Fork** 建立分支环境

![环境分支](https://s2.loli.net/2024/07/31/LvABNqJTwOGVEsY.png)

例如正式开发环境等等

![分支环境示例](https://s2.loli.net/2024/07/31/QDV6CdI9xEHzq1i.png)

## 脚本 {#jiaoben}

- 在任意接口的 Script，可编辑前置 & 后置脚本，也可选择 open package library 编辑通用脚本，而后在这里引用

![脚本编辑](https://s2.loli.net/2024/07/31/pwL9tBeqWvAmGPl.png)

- 在 **Package Library** 新建脚本并保存

![新建脚本](https://s2.loli.net/2024/07/31/gTR62n4AFCbKM95.png)

- 可以在单个请求里引入

![单个请求引入脚本](https://s2.loli.net/2024/07/31/OkbCELdg46Boj1l.png)

- 或者在集合中，应用到整个集合

![集合应用脚本](https://s2.loli.net/2024/07/31/aKqkD6C2r5NFjvM.png)

## Postman Interceptor {#chajian}

### 安装插件

- 浏览器插件市场，搜索安装

![安装插件](https://s2.loli.net/2024/08/02/Mvs4hyJn6ePpaIZ.png)

### 功能 1：请求捕获

- 启动捕获（可选请求类型，URL）

![启动捕获](https://s2.loli.net/2024/08/02/B1Odg6ZkfCwIxby.png)

- 触发需要捕获的请求，等待插件捕获，选择 Stop

![停止捕获](https://s2.loli.net/2024/08/02/cBV5KxAwYruUeqn.png)

- 提示打开 Postman

![打开 Postman](https://s2.loli.net/2024/08/02/I62zjvKXSa3gswB.png)

- 在 Postman 中查看已捕获的请求，可选择保存请求到工作空间

![查看捕获请求](https://s2.loli.net/2024/08/02/WzX6LcnE3qwFHlu.png)

### 功能 2：Cookie 同步

- 如下捕获到的请求

![捕获的请求](https://s2.loli.net/2024/08/02/1DNCUrM7IQewhnS.png)

- 打开 Cookies，选择 Sync Cookies，添加我们要做 Cookie 同步的域名

![添加同步域名](https://s2.loli.net/2024/08/02/HPz1oYdtxiFqRK5.png)

- 打开插件，可以看到待同步域名已加入，选择 Sync Cookies

![同步 Cookies](https://s2.loli.net/2024/08/02/kghj5w7aWGxfipq.png)

- 回到 Postman，可以看到 Cookies 已同步到 Postman

![Cookies 已同步](https://s2.loli.net/2024/08/02/zA4mqyStrb8KudW.png)

## 协作 {#xiezuo}

### 邀请团队成员

- 工作空间 -> Settings -> Invite

![邀请设置](https://s2.loli.net/2024/07/31/3rRc8imjyOBI1oE.png)

- 填写被邀请人邮箱，选择角色权限

![邀请成员](https://s2.loli.net/2024/07/31/UpG9kSFWYaXC86s.png)

- 或者复制邀请链接

![复制邀请链接](https://s2.loli.net/2024/07/31/YG1MI8Xz6BfRkxv.png)

- 打开链接，选择接受

![接受邀请](https://s2.loli.net/2024/07/31/d2IJWoGsMDr9gli.png)
