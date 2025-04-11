---
title: AutoGen 团队配置指南
titleTemplate: 入门指南
description: AutoGen 多种团队配置模式详细对比
outline: deep
aside: true
prev: false
next: false
lastUpdated: true
---

# AutoGen 团队配置指南

AutoGen 提供了多种团队配置模式，以适应不同的协作任务和应用场景。以下是关于 `RoundRobinGroupChat`、`MagenticOneGroupChat`、`SelectorGroupChat` 和 `Swarm` 的详细对比：
### 对比
| 特性 | RoundRobinGroupChat | MagenticOneGroupChat | SelectorGroupChat | Swarm |
| --- | --- | --- | --- | --- |
| **发言者选择机制** | 固定顺序 | 协调者规划 | 基于模型的动态选择 | 基于任务需求的移交 |
| **任务分配方式** | 依次轮流 | 协调者分解和规划 | 动态上下文感知 | 参与者自主决策 |
| **上下文共享** | 是 | 是 | 是 | 是 |
| **终止条件** | 可配置 | 协调者控制 | 可配置 | 可配置 |
| **多模态交互支持** | 有限 | 是 | 有限 | 有限 |
| **模型无关性** | 有限 | 是 | 有限 | 有限 |
| **适用场景** | 简单轮流发言场景 | 复杂任务解决 | 动态上下文感知协作 | 动态任务分配和协作 |
### RoundRobinGroupChat
- **定义**：`RoundRobinGroupChat` 是一种团队配置，其中所有参与者共享相同的上下文，并以轮询的方式依次响应。
- **特点**：
    - **轮询机制**：按照固定的顺序依次选择参与者发言，每个参与者在自己的回合中发表意见。
    - **简单高效**：适用于需要多个参与者依次贡献想法或信息的场景，能够保证每个参与者都有机会表达自己的观点。
    - **可配置终止条件**：可以通过设置终止条件来控制团队运行的结束时机，例如当某个特定词汇被提及时。
- **使用场景**：适用于需要多个参与者依次贡献想法或信息的场景，例如头脑风暴、问答环节等。
- **示例**：一个团队中包含多个助理代理（AssistantAgent），他们依次回答问题或提供信息。

#### 代码示例
```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

# 创建多个助理代理
assistant1 = AssistantAgent(
    name="助理1",
    system_message="你是一位Python专家",
    llm_config={"temperature": 0.7}
)

assistant2 = AssistantAgent(
    name="助理2",
    system_message="你是一位数据库专家",
    llm_config={"temperature": 0.7}
)

assistant3 = AssistantAgent(
    name="助理3",
    system_message="你是一位系统架构师",
    llm_config={"temperature": 0.7}
)

# 创建用户代理
user_proxy = UserProxyAgent(
    name="用户",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10
)

# 创建群聊并设置轮询顺序
group_chat = GroupChat(
    agents=[user_proxy, assistant1, assistant2, assistant3],
    messages=[],
    max_round=5,
    speaker_selection_method="round_robin"  # 设置为轮询模式
)

# 创建群聊管理器
manager = GroupChatManager(groupchat=group_chat)

# 发起对话
user_proxy.initiate_chat(
    manager,
    message="请讨论如何设计一个高性能的Web应用架构？"
)
```

### MagenticOneGroupChat
- **定义**：`MagenticOneGroupChat` 是基于 Magentic-One 架构的团队配置，由一个主导的协调者（Orchestrator）管理参与者。
- **特点**：
    - **任务分解与规划**：协调者负责任务分解和规划，指导其他参与者执行子任务，跟踪整体进度，并在必要时采取纠正措施。
    - **动态调整**：如果协调者发现进度没有足够进展，它可以更新任务账本并创建新的计划。
    - **多模态交互**：支持多种类型的参与者，如 WebSurfer（用于浏览网页）、FileSurfer（用于处理文件）、Coder（用于编写代码）等。
    - **模型无关性**：虽然默认使用 GPT-4o 作为多模态 LLM，但 Magentic-One 是模型无关的，可以使用不同的 LLM 和 SLM 及其专门版本来支持不同能力或满足不同的成本要求。
- **使用场景**：适用于需要解决复杂任务的场景，特别是那些涉及多模态交互和动态环境适应的任务。
#### 代码示例
```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

# 创建协调者代理
orchestrator = AssistantAgent(
    name="协调者",
    system_message="你是项目协调者，负责分解任务和分配工作",
    llm_config={"temperature": 0.7}
)

# 创建专业代理
web_surfer = AssistantAgent(
    name="网页浏览者",
    system_message="你负责网页内容获取和分析",
    llm_config={"temperature": 0.7}
)

coder = AssistantAgent(
    name="程序员",
    system_message="你负责编写和优化代码",
    llm_config={"temperature": 0.7}
)

file_surfer = AssistantAgent(
    name="文件处理者",
    system_message="你负责文件操作和数据处理",
    llm_config={"temperature": 0.7}
)

# 创建用户代理
user_proxy = UserProxyAgent(
    name="用户",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10
)

# 创建群聊
group_chat = GroupChat(
    agents=[user_proxy, orchestrator, web_surfer, coder, file_surfer],
    messages=[],
    max_round=10,
    speaker_selection_method="magnetic_one",
    speaker_selection_params={
        "orchestrator": orchestrator,
        "allow_repeat_speaker": False
    }
)

# 创建群聊管理器
manager = GroupChatManager(groupchat=group_chat)

# 发起对话
user_proxy.initiate_chat(
    manager,
    message="请帮我开发一个网页爬虫，需要能够下载并保存图片"
)
```
### SelectorGroupChat
- **定义**：`SelectorGroupChat` 实现了一个团队，其中参与者轮流向所有其他成员广播消息。一个生成模型（例如 LLM）基于共享上下文选择下一个发言者。
- **特点**：
    - **基于模型的发言者选择**：根据上下文动态选择下一个发言者，能够根据对话内容和参与者的角色描述智能地分配任务。
    - **可配置的参与者角色和描述**：可以为每个参与者设置详细的描述，帮助模型更好地理解每个参与者的角色和能力。
    - **防止连续发言**：可以选择禁止同一个参与者连续发言，确保对话的多样性和公平性。
    - **可自定义的选择提示**：可以根据需要自定义模型的选择提示，以更好地适应特定的对话场景。
    - **可自定义的选择函数**：可以提供自定义的选择函数来覆盖默认的基于模型的选择逻辑，实现更复杂的发言者选择策略。
- **使用场景**：适用于需要根据上下文动态选择发言者的复杂对话场景，例如多角色协作任务、多领域知识问答等。
#### 代码示例
```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

# 创建专业代理
frontend_expert = AssistantAgent(
    name="前端专家",
    system_message="你是前端开发专家，精通 HTML、CSS 和 JavaScript，负责用户界面和交互设计",
    llm_config={"temperature": 0.7}
)

backend_expert = AssistantAgent(
    name="后端专家",
    system_message="你是后端开发专家，精通服务器架构和API设计，负责系统核心功能实现",
    llm_config={"temperature": 0.7}
)

db_expert = AssistantAgent(
    name="数据库专家",
    system_message="你是数据库专家，精通数据建模和性能优化，负责数据存储方案",
    llm_config={"temperature": 0.7}
)

security_expert = AssistantAgent(
    name="安全专家",
    system_message="你是网络安全专家，精通安全架构和防护措施，负责系统安全设计",
    llm_config={"temperature": 0.7}
)

# 创建用户代理
user_proxy = UserProxyAgent(
    name="用户",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10
)

# 创建群聊
group_chat = GroupChat(
    agents=[user_proxy, frontend_expert, backend_expert, db_expert, security_expert],
    messages=[],
    max_round=10,
    speaker_selection_method="selector",
    speaker_selection_params={
        "allow_repeat_speaker": False,  # 禁止连续发言
        "selection_prompt": "根据当前讨论的技术问题，选择最合适的专家回答"
    }
)

# 创建群聊管理器
manager = GroupChatManager(groupchat=group_chat)

# 发起对话
user_proxy.initiate_chat(
    manager,
    message="请设计一个安全可靠的用户认证系统，需要考虑前端交互、后端实现、数据存储和安全防护"
)
```
### Swarm
- **定义**：`Swarm` 实现了一个团队，其中代理可以根据它们的能力将任务移交给其他代理。
- **特点**：
    - **任务移交**：参与者可以根据任务需求将任务移交给其他参与者，而不需要依赖中央协调器。
    - **共享上下文**：所有参与者共享相同的消息上下文，确保每个参与者都能获取到最新的任务信息。
    - **局部决策**：每个参与者可以根据自己的能力和上下文信息独立地做出决策，提高了系统的灵活性和适应性。
    - **支持工具调用**：参与者可以使用工具调用来生成任务移交信息，但需要注意避免并行工具调用导致的意外行为。
- **使用场景**：适用于需要多个参与者协作完成任务的场景，特别是当任务需要根据参与者的专长进行动态分配时。
#### 代码示例
```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

# 创建专业代理
planner = AssistantAgent(
    name="规划专家",
    system_message="你是AI项目规划专家，负责理解需求并制定初步方案",
    llm_config={"temperature": 0.7}
)

data_scientist = AssistantAgent(
    name="数据科学家",
    system_message="你是数据科学专家，负责数据处理和模型训练",
    llm_config={"temperature": 0.7}
)

ml_engineer = AssistantAgent(
    name="机器学习工程师",
    system_message="你是机器学习工程师，负责模型部署和优化",
    llm_config={"temperature": 0.7}
)

devops = AssistantAgent(
    name="运维工程师",
    system_message="你是DevOps专家，负责系统部署和监控",
    llm_config={"temperature": 0.7}
)

qa_engineer = AssistantAgent(
    name="测试工程师",
    system_message="你是QA专家，负责质量保证和性能测试",
    llm_config={"temperature": 0.7}
)

# 创建用户代理
user_proxy = UserProxyAgent(
    name="用户",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10
)

# 创建群聊
group_chat = GroupChat(
    agents=[user_proxy, planner, data_scientist, ml_engineer, devops, qa_engineer],
    messages=[],
    max_round=15,
    speaker_selection_method="swarm",
    speaker_selection_params={
        "allow_delegation": True,     # 允许任务委派
        "share_context": True,        # 共享上下文
        "delegation_type": "ability"  # 基于能力进行任务移交
    }
)

# 创建群聊管理器
manager = GroupChatManager(groupchat=group_chat)

# 发起对话
user_proxy.initiate_chat(
    manager,
    message="请帮我开发一个图像分类模型系统，包括数据处理、模型训练、部署和监控"
)





