# Skill 文档

## 渐进式披露架构

```
┌─────────────────────────────────────────────────────────┐
│                     Skill 架构                          │
├─────────────────┬─────────────────┬─────────────────────┤
│  元数据层       │   指令层        │      资源层         │
├─────────────────┼─────────────────┼─────────────────────┤
│  名称           │  Skill.md 内容  │  Reference (读取)   │
│  描述           │  (按需加载)      │  Script (执行)      │
│  (始终加载)     │                 │  (按需加载)         │
└─────────────────┴─────────────────┴─────────────────────┘
```

渐进式披露架构是一种设计模式，根据需求逐步加载和展示信息，优化性能和用户体验。Skill架构采用这种模式，将信息分为三个层次：

### 元数据层
- **名称**：Skill的唯一标识符
- **描述**：Skill的简短说明
- **加载策略**：始终加载，提供基本信息

### 指令层
- **内容**：Skill.md中除名称和描述之外的详细内容
- **加载策略**：按需加载，根据用户需求动态获取

### 资源层
- **Reference**：用于读取外部资源
- **Script**：用于执行动态逻辑
- **加载策略**：按需加载，在需要时才加载和执行

## 1. Skill的基础简介和用法

### 什么是Skill
Skill是一种可复用的智能模块，用于扩展Agent的能力。它封装了特定领域的知识和功能，可以被Agent调用以完成各种任务。

### 基本用法

```markdown
---
name: "示例Skill"
description: "这是一个示例Skill，展示基本结构"
---

# 示例Skill

这是Skill的详细内容，包括功能说明、使用方法等。
```

### 创建和使用流程
1. 定义Skill的元数据（名称、描述）
2. 编写Skill的详细内容
3. 将Skill注册到Agent系统
4. Agent根据需要调用Skill

## 2. Skill Reference的简介和用法

### 什么是Skill Reference
Skill Reference是Skill的资源层组件，用于读取外部资源，如文档、数据文件或API响应。

### 基本用法

```markdown
---
name: "数据查询Skill"
description: "用于查询外部数据的Skill"
---

# 数据查询Skill

## 参考资源

### Reference: 产品数据库
```reference
{
  "type": "database",
  "source": "products.db",
  "query": "SELECT * FROM products WHERE category = ?"
}
```

### 使用说明
1. 配置Reference源
2. 定义查询模板
3. Agent调用时传入参数
4. Reference返回查询结果

## 3. Skill Script的简介和用法

### 什么是Skill Script
Skill Script是Skill的资源层组件，用于执行动态逻辑，如数据处理、计算或调用外部服务。

### 基本用法

```markdown
---
name: "计算Skill"
description: "用于执行数学计算的Skill"
---

# 计算Skill

## 执行脚本

### Script: 计算器
```script
{
  "type": "javascript",
  "code": "
    function calculate(a, b, operation) {
      switch(operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return '无效操作';
      }
    }
  "
}
```

### 使用说明
1. 编写脚本代码
2. 定义输入输出参数
3. Agent调用时传入数据
4. Script执行并返回结果

## 总结

Skill架构采用渐进式披露设计，将信息分为元数据层、指令层和资源层，实现了高效的按需加载。通过Skill、Skill Reference和Skill Script的组合，可以构建强大的智能模块，扩展Agent的能力边界。

- **Skill**：提供核心功能和文档
- **Reference**：实现外部资源读取
- **Script**：支持动态逻辑执行

这种分层设计使得Skill既灵活又高效，能够适应各种复杂场景的需求。