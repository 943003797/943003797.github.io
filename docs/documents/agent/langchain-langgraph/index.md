---
title: LangChain 和 LangGraph 整体关系
description: LangChain、LangGraph 与 Agent 的定位和关系
outline: deep
---

# LangChain 和 LangGraph：整体关系

| 名称 | 主要职责 | 可以这样理解 |
|---|---|---|
| LangChain | 提供模型、消息、提示词、工具等组件和高层 API | 构建 LLM 应用的常用积木 |
| LangGraph | 编排有状态的流程，控制节点、状态和流转 | 管理积木如何按流程运行 |
| `create_agent` | 提供高层 Agent 接口，自动处理常见的工具调用循环 | 基于 LangGraph 实现的 Agent 封装 |

它们可以组合使用，但不是简单的上下级关系。LangGraph 节点可以调用 LangChain 组件，也可以运行普通 Python 逻辑。

## 如何选择

## 学习顺序

1. 在 [LangChain](/agent/langchain-langgraph/langchain/) 中学习模型调用、工具和 Agent。
2. 在 [LangGraph](/agent/langchain-langgraph/langgraph/) 中学习状态图和流程控制。
