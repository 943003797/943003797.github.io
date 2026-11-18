---
title: LangChain 和 LangGraph 学习笔记
description: 记录 LangChain 与 LangGraph 的核心概念和实践
outline: deep
---

# LangChain 和 LangGraph 学习笔记

持续记录模型调用、工具调用、Agent 和流程编排的学习内容。

## 整体关系

| 名称 | 主要职责 | 可以这样理解 |
|---|---|---|
| LangChain | 提供模型、消息、提示词、工具等组件和高层 API | 构建 LLM 应用的常用积木 |
| LangGraph | 编排有状态的流程，控制节点、状态和流转 | 管理积木如何按流程运行 |
| `create_agent` | 提供高层 Agent 接口，自动处理常见的工具调用循环 | 基于 LangGraph 实现的 Agent 封装 |

它们可以组合使用，但不是简单的上下级关系。LangGraph 节点可以调用 LangChain 组件，也可以运行普通 Python 逻辑。

## 模型调用

使用 `init_chat_model` 创建聊天模型：

```python
from langchain.chat_models import init_chat_model

model = init_chat_model("deepseek:deepseek-chat")
```

常见调用方式：

| 方法 | 效果 | 返回方式 |
|---|---|---|
| `invoke(input)` | 同步处理一个输入，等待完整回答 | 一条完整 AI 消息 |
| `stream(input)` | 同步流式生成，适合实时显示 | 多个消息片段 |
| `batch(inputs)` | 批量处理多个独立输入 | 与输入顺序对应的结果列表 |
| `ainvoke(input)` | 异步处理一个输入 | `await` 后得到完整回答 |
| `astream(input)` | 异步流式生成 | `async for` 逐个读取消息片段 |
| `abatch(inputs)` | 异步批量处理多个输入 | `await` 后得到结果列表 |

`batch` 是 LangChain 的批量调用接口，不保证底层模型 API 将多个输入合并为单个请求。批量输入彼此独立，不会自动共享对话历史。

流式响应中的 chunk 不一定都有文本；例如工具调用或元数据 chunk 的 `text` 可能为空。只想显示文本时，可以检查 `chunk.text` 是否非空。

## 工具调用

`@tool` 可以将 Python 函数转换为 LangChain 工具。LangChain 会使用函数签名和文档字符串生成工具描述和参数 schema：

```python
from langchain_core.tools import tool

@tool
def get_weather(city: str) -> str:
    """查询指定城市的天气。"""
    return f"{city}：晴"
```

`@tool` 不是唯一方式，也可以用 `StructuredTool` 或继承 `BaseTool` 定义工具。

### `bind_tools` 只绑定工具定义

```python
model_with_tools = model.bind_tools([get_weather])
response = model_with_tools.invoke("北京天气怎么样？")
```

`bind_tools` 会把工具的 schema 提供给模型，让模型可以返回 `tool_calls`（工具名、参数和调用 ID）；它**不会自动执行工具函数**。如果直接使用 `bind_tools`，应用需要自行处理调用流程：

1. 读取模型返回的 `tool_calls`。
2. 根据工具名找到对应工具，并执行它。
3. 将执行结果作为带有相同 `tool_call_id` 的 `ToolMessage` 回传。
4. 再调用模型，让它根据工具结果生成回答。

模型发出工具调用请求不等于工具已执行。工具执行权和执行逻辑留在应用侧，便于校验参数、处理权限和错误，以及限制调用次数。

## Agent

Agent 通常是一个循环：**模型判断下一步 → 需要时调用工具 → 将结果交回模型 → 继续处理，直到生成最终回答**。

可以用 LangChain 的 `create_agent` 自动处理常见的工具调用循环：

```python
from langchain.agents import create_agent

agent = create_agent(
    model=model,
    tools=[get_weather],
    system_prompt="需要查询天气时，请使用 get_weather 工具。",
)

result = agent.invoke({
    "messages": [{"role": "user", "content": "北京天气怎么样？"}]
})
```

固定步骤的任务通常直接编写流程更简单；当模型需要根据上下文动态选择工具和后续动作时，Agent 更合适。

## LangGraph

LangGraph 用图来描述流程，常见组成包括：

- **State**：节点之间共享和更新的数据。
- **Node**：执行工作的函数，例如调用模型或工具。
- **Edge**：决定节点之间的流向；条件边可以根据状态选择分支。

它可以支持循环、分支、持久化状态、暂停和恢复等流程控制。`create_agent` 是基于 LangGraph 实现的高层接口；需要自定义更复杂的流程时，可以直接使用 LangGraph。

## 学习顺序

1. 使用 `invoke`、`stream` 直接调用模型。
2. 使用 `@tool` 定义工具，手动完成一次工具调用和结果回传。
3. 用 `create_agent` 对比自动化的 Agent 循环。
4. 使用 LangGraph 定义带状态、分支和循环的流程。
