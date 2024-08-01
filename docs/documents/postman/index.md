---
title: Postman Guide
titleTemplate: 入门指南
description: Postman 使用入门指南
prev: false
next: false
lastUpdated: true
---

[//]: # (- [工作空间]&#40;#gongzuokongjian&#41;)

[//]: # (- [API 集合]&#40;#apijihe&#41;)

[//]: # (- [环境配置]&#40;#peizhi&#41;)

[//]: # (- [脚本]&#40;#jiaoben&#41;)

[//]: # (- [Postman Interceptor]&#40;#chajian&#41;)

[//]: # (- [协作]&#40;#xiezuo&#41;)

#### 工作空间（Workspaces）{#gongzuokongjian}

1. 在Home页，选择Workspaces -> Create Workspace

![image-20240801145337262](C:\Users\Kinson\AppData\Roaming\Typora\typora-user-images\image-20240801145337262.png)

2. 一般选择一个空的空间

![image-20240729150907224](https://s2.loli.net/2024/07/29/QaZkWRPoY371eXz.png)

3. **Workspace Name**，选择访问权限

- **Only me ** (Personal Workspace) **私有**
- **Everyone from team** (Team Workspace) **团队协作**
- **Anyone on the internet** (Public) **公开**

![image-20240729151412584](https://s2.loli.net/2024/07/29/I4SZPMsvydlB51x.png)

4. 创建一个**Team Workspace**，基础设置包括**简介**，Team内的**Comment**，**成员编辑**等

   ##### Configure sidebar：选择工作空间常用功能，将显示在左侧菜单栏

   ![image-20240729154336257](https://s2.loli.net/2024/07/29/QY6e1kwusmXVdpD.png)

#### API集合

- **新建集合**
  - 可以配置该集合下的Authorization，Scripts，Variables，Runs
  - Authorization，Scripts，Variables将会作用于整个集合
  - Runs是记录了当前集合执行过的Runner

#### ![image-20240801153301068](C:\Users\Kinson\AppData\Roaming\Typora\typora-user-images\image-20240801153301068.png)

- **Runner**
  - 在集合中，可以对集合或某个文件夹开启一个Run，Run以特定顺序依次执行Run list接口
  - 主要配置：
    - **迭代次数**- collection run 的迭代次数。
    - **延迟**- 每个请求之间的间隔延迟（以毫秒为单位）。
    - **数据**-collection run 的数据。

![image-20240801154221212](C:\Users\Kinson\AppData\Roaming\Typora\typora-user-images\image-20240801154221212.png)

- 执行结果

![image-20240801161533609](C:\Users\Kinson\AppData\Roaming\Typora\typora-user-images\image-20240801161533609.png)

#### 环境配置{#peizhi}

![image-20240731165146385](https://s2.loli.net/2024/07/31/sRZ9tqMhoPcfK8U.png)

- ##### 全局变量

  全局变量在所有环境可调用，定义所有你想在任何环境里使用的变量，例如：登录ID

  ![image-20240731165421825](https://s2.loli.net/2024/07/31/eXMJmgfoYsPIA27.png)

- ##### 环境变量

  在这里定义不同环境，特殊的变量：链接地址、鉴权信息

  ![image-20240731165827771](https://s2.loli.net/2024/07/31/KBioQgpZbxctGUF.png)

- 变量引用

  在需要的地方以**{{变量名}}**引用，例如：**{{HOST}}**

  ![image-20240731212926237](https://s2.loli.net/2024/07/31/7mq2u39ECOUlySR.png)

- 环境分支

  可以在建立基础环境之后，例如**Local**，使用**Fork**建立分支环境

  ![image-20240731213659453](https://s2.loli.net/2024/07/31/QDV6CdI9xEHzq1i.png)

  例如正式开发环境等等
  
  ![image-20240731211751138](https://s2.loli.net/2024/07/31/LvABNqJTwOGVEsY.png)

#### 脚本{#jiaoben}

- 在任意接口的Script, 可编辑前置&后置脚本，也可选择open package library编辑通用脚本，而后在这里引用


![image-20240731213826862](https://s2.loli.net/2024/07/31/pwL9tBeqWvAmGPl.png)

- 在**Package Library**新建脚本并保存


![image-20240731212048470](https://s2.loli.net/2024/07/31/gTR62n4AFCbKM95.png)

- 可以在单个请求里引入

  ![image-20240731212244976](https://s2.loli.net/2024/07/31/aKqkD6C2r5NFjvM.png)

- 或者在集合中，应用到整个集合


![image-20240731212505943](https://s2.loli.net/2024/07/31/OkbCELdg46Boj1l.png)

#### 协作{#xiezuo}

- 工作空间-》Settings-》Invite


![image-20240731204613700](https://s2.loli.net/2024/07/31/3rRc8imjyOBI1oE.png)

- 填写被邀请人邮箱，选择角色权限


![image-20240731205048114](https://s2.loli.net/2024/07/31/YG1MI8Xz6BfRkxv.png)

- 或着复制邀请链接


![image-20240731205916370](https://s2.loli.net/2024/07/31/UpG9kSFWYaXC86s.png)

- 打开链接，选择接受


![image-20240731210048846](https://s2.loli.net/2024/07/31/d2IJWoGsMDr9gli.png)
