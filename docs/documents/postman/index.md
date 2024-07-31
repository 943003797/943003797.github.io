### 常用功能

- [工作空间](#gongzuokongjian)
- [API 请求](#apiqingqiu)
- [API 集合](#apijihe)
- [环境配置](#huanjingpeizhi)
- [脚本](#jiaoben)
- [Postman Interceptor](#chajian)
- [协作](#xiezuo)


#### 工作空间（Workspaces）{#gongzuokongjian}

1. 在Workspaces创建工作空间，在工作空间中创建编辑API，更好的管理和协作

![image-20240729150655952](https://s2.loli.net/2024/07/29/m4zntibfOZU2uFP.png)

2. 选择创建一个空的空间

![image-20240729150907224](https://s2.loli.net/2024/07/29/QaZkWRPoY371eXz.png)

3. 输入**Workspace Name**，这里可选三种权限

- **Only me **(Personal Workspace): **私有的，只能自己访问和编辑**
- **Everyone from team** (Team Workspace) **多个团队成员协作**
- **Anyone on the internet** (Public) **完全公开的**

![image-20240729151412584](https://s2.loli.net/2024/07/29/I4SZPMsvydlB51x.png)

4. 创建一个**Team**类型的工作空间，基础设置包括**简介**，Team内的**Comment**，**成员编辑**等
   ![image-20240729154336257](https://s2.loli.net/2024/07/29/QY6e1kwusmXVdpD.png)

#### API请求{#apiqingqiu}

#### API集合{#apijihe}

#### 环境配置{#huanjingpeizhi}

#### {#huanjingpeizhi}

![image-20240731165146385](https://s2.loli.net/2024/07/31/sRZ9tqMhoPcfK8U.png)

- ##### 全局变量

  全局变量在所有环境可调用，定义所有你想在任何环境里使用的变量，例如：登录ID

  ![image-20240731165421825](https://s2.loli.net/2024/07/31/eXMJmgfoYsPIA27.png)

- ##### 环境变量

  在这里定义不同环境，特殊的变量：链接地址、鉴权信息

  ![image-20240731165827771](https://s2.loli.net/2024/07/31/KBioQgpZbxctGUF.png)

- 变量引用

  在需要引用的地方以{{变量名}}，例如：{{HOST}}

  ![image-20240731212926237](https://s2.loli.net/2024/07/31/7mq2u39ECOUlySR.png)

- 环境分支

  可以在建立基础环境之后，例如Local，使用Fork建立分支环境

  ![image-20240731213659453](https://s2.loli.net/2024/07/31/QDV6CdI9xEHzq1i.png)

  例如正式开发环境等等
  ![image-20240731213826862](https://s2.loli.net/2024/07/31/pwL9tBeqWvAmGPl.png)

##### 脚本{#jiaoben}

任意接口的Script, 可编辑前置&后置脚本，或选择open package library编辑通用脚本，而后引用

![image-20240731211751138](https://s2.loli.net/2024/07/31/LvABNqJTwOGVEsY.png)

新建脚本并保存

![image-20240731212048470](https://s2.loli.net/2024/07/31/gTR62n4AFCbKM95.png)

可以在单个请求里引入
![image-20240731212244976](https://s2.loli.net/2024/07/31/aKqkD6C2r5NFjvM.png)

或者在集合中，引入脚本到整个集合

![image-20240731212505943](https://s2.loli.net/2024/07/31/OkbCELdg46Boj1l.png)

##### 协作{#xiezuo}

工作空间-》Settings-》Invite

![image-20240731204613700](https://s2.loli.net/2024/07/31/3rRc8imjyOBI1oE.png)

填写被邀请人邮箱，选择角色权限

![image-20240731205048114](https://s2.loli.net/2024/07/31/YG1MI8Xz6BfRkxv.png)

复制邀请链接

![image-20240731205916370](https://s2.loli.net/2024/07/31/UpG9kSFWYaXC86s.png)

选择接受

![image-20240731210048846](https://s2.loli.net/2024/07/31/d2IJWoGsMDr9gli.png)
