<div align="center">

<img src="hero.png" alt="Muse4AI — AI agent 桥接工具，可搭配 Muse 使用" width="100%" />

# Muse4AI（中文版）

**让你的 AI agent 帮你做图片和视频。**

Muse4AI 运行在你自己的 Windows 电脑上，把你的 Muse 会话交给 ChatGPT、Claude、
Cursor、Codex、n8n，或任何支持 **REST**、**MCP** 或 **OAuth** 的工具——
不经过中间服务器，不按席位收费。

[**官网**](https://muse4ai.andrewbabo.com) ·
[**下载**](https://muse4ai.andrewbabo.com/download) ·
[**使用指南**](https://muse4ai.andrewbabo.com/docs) ·
[**给 agent 看的说明**](https://muse4ai.andrewbabo.com/agents) ·
[English](../README.md) ·
[Tiếng Việt](README-vi.md)

![Website muse4ai.andrewbabo.com](https://img.shields.io/badge/website-muse4ai.andrewbabo.com-1A50D7?style=flat-square)
![MIT licensed](https://img.shields.io/badge/license-MIT-2D664D?style=flat-square)
![Windows](https://img.shields.io/badge/Windows-10%20%2F%2011-1A50D7?style=flat-square)
![Node.js 22+](https://img.shields.io/badge/Node.js-22%2B-5F5A52?style=flat-square)
![848 tests](https://img.shields.io/badge/tests-848-2D664D?style=flat-square)
![v2.0.0-beta.35](https://img.shields.io/badge/version-2.0.0--beta.35-B4762B?style=flat-square)

</div>

> 译者注：这是社区中文翻译版，原项目官方只有英文和越南文。翻译以 2026-11-11 拉取的原仓库 `v2.0.0-beta.35`、848 个测试的版本为准；命令、接口地址、端口、按键名称均未改动，照原样可用。

---

## 它是怎么连起来的

```text
   ChatGPT · Claude · Cursor · Codex · n8n · 你自己的脚本
                       │
                       │  REST  ·  MCP  ·  OAuth
                       ▼
              ┌─────────────────────┐
              │   你电脑上的 Muse4AI │   本地素材库、任务队列、
              │   （Windows 应用）   │   密钥、Token、历史记录
              └─────────────────────┘
                       │
                       │  用你自己已登录的 Muse 会话
                       ▼
                     Muse
```

没有任何数据经过作者运营的服务器中转。应用直接在你的电脑上、用你的会话去调用 Muse，
所有结果、密钥和 Token 都保存在同一台电脑的
`%APPDATA%\MuseStudio` 里。

## 你可以让 agent 帮你做什么

<table>
  <tr>
    <td width="50%">
      <h3>🎬 生成视频和图片</h3>
      一次调用，纯文字或附参考图都行。可以重复同一个提示词、指定用哪个账号，
      在应用内的任务队列里实时看到进度。
    </td>
    <td width="50%">
      <h3>💬 会记住上下文的对话</h3>
      提问或反复打磨一个想法都行。调用后会返回会话 ID，agent 可以沿着
      同一个会话继续聊、继续传文件。
    </td>
  </tr>
  <tr>
    <td>
      <h3>⏱ 续写已生成的视频</h3>
      让一段视频继续往下演，最多 <b>6 步</b>、每条链路约 <b>60 秒</b>，
      就在生成它的那个会话里续写。
    </td>
    <td>
      <h3>🛠 用一句话改视频</h3>
      传一个 MP4 文件，用文字说想改什么就行——不用时间线，
      不用调渲染参数。
    </td>
  </tr>
  <tr>
    <td>
      <h3>🔑 两种连接方式</h3>
      <b>API Key</b> 粘贴一次就行；或者用真正的 <b>OAuth</b>：agent 发起
      请求，你在应用屏幕上看到 6 位验证码，输入即授权。
    </td>
    <td>
      <h3>📚 内置使用指南</h3>
      每个界面都有双语指南（英文 / 越南文，中文版正在补）并配真实截图，
      还有一个 agent 能自己读的 Skill。
    </td>
  </tr>
</table>

## 实际效果

<table>
  <tr>
    <td width="50%"><img src="screens/studio.png" alt="Studio 界面，提示词已就绪" width="100%" /></td>
    <td width="50%"><img src="screens/queue.png" alt="任务队列，图片和视频任务正在运行" width="100%" /></td>
  </tr>
  <tr>
    <td align="center"><b>Studio</b> — 写提示词、传参考图、开始生成。</td>
    <td align="center"><b>队列</b> — 实时状态、缩略图、快速预览。</td>
  </tr>
  <tr>
    <td><img src="screens/library.png" alt="素材库，已生成图片和视频的网格" width="100%" /></td>
    <td><img src="screens/agents.png" alt="设置界面，展示如何连接 agent" width="100%" /></td>
  </tr>
  <tr>
    <td align="center"><b>素材库</b> — 你做过的所有东西，都能搜索。</td>
    <td align="center"><b>API 与 agent</b> — 粘贴一次就连上 agent。</td>
  </tr>
</table>

## 快速开始

### 1. 安装（最简单）

去[下载页](https://muse4ai.andrewbabo.com/download)拿安装包，运行后在
**Accounts（账号）**里添加你的 Muse 账号。Windows 会提示文件未签名——选
**更多信息 → 仍要运行**。之后应用会在 **Settings › About（设置 › 关于）**
里自己检查新版本并安装，不用再回这个页面。

### 2. 从源码运行

需要 **Node.js 22+**。

```bash
cd desktop
npm install
npm run build
npm start
```

应用会在桌面上打开，API 跑在 `http://127.0.0.1:47821`。

## 连接一个 agent

在应用里打开 **Settings → API & agent（设置 → API 与 agent）**。那个界面会
直接给你一段配好的代码，密钥已经填好了——粘贴到你的 agent 配置里就行。

### OAuth（不用复制密钥）

这个应用本身就是一个真正的 OAuth 授权服务器：它会发布
`/.well-known/oauth-authorization-server`，支持动态注册客户端、自己签发 Token。
把 agent 指到 MCP 端点，让它自己走重定向流程：

```json
{
  "mcpServers": {
    "muse4ai": { "url": "http://127.0.0.1:47821/mcp" }
  }
}
```

然后应用会显示一个 **6 位验证码**。在授权确认页输入这个码，Token 才会签发。
只知道链接的人拿不到授权。之后想断开某个应用，去
**Settings → API & agent → Connected apps（已连接的应用）**里撤销。

### API Key

在同一个界面里创建一个密钥（`msk_…` 开头），然后当 Bearer Token 发过去：

```bash
curl -X POST http://127.0.0.1:47821/v1/jobs \
  -H "Authorization: Bearer msk_YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"kind":"video","prompt":"橡木桌上的一杯咖啡，清晨暖光"}'
```

密钥有各自的权限范围、限速，并且可以单独撤销。

### agent 能调用什么

| REST | MCP 工具 |
| --- | --- |
| `POST /v1/jobs` — 图片 / 视频 | `muse_generate` |
| `POST /v1/jobs`，`kind:"chat"` | `muse_chat` |
| `GET /v1/jobs` · `GET /v1/jobs/{id}` | `muse_list_jobs` · `muse_get_job` |
| `POST /v1/jobs/{id}/cancel` | `muse_cancel_job` |
| `POST /v1/assets/{id}/extend` · `POST /v1/conversations/{id}/extend` | `muse_extend_video` · `muse_get_extend` |
| `GET /v1/status` · `GET /v1/health` | `muse_status` |

机器可读的完整接口约定：`GET /v1/openapi.json`。
给偏好 Markdown 的 agent 看的版本：[llms.txt](https://muse4ai.andrewbabo.com/llms.txt)。

## 项目结构

| 路径 | 里面是什么 |
| --- | --- |
| `desktop/` | 应用本身——主进程、界面、REST/MCP/OAuth API、测试、安装包 |
| `content/` | 应用和网站共用的指南、agent 说明和用例文案 |
| `agent-kit/` | Muse4AI Skill，让 agent 能自己学会怎么用这个工具 |

## 开发

```bash
cd desktop
npm test            # 848 个测试
npm run typecheck   # 严格 TypeScript 检查
npm run package:win # 打 Windows ZIP + 安装包输入文件
```

## 质量检查

每次推送代码、以及每周一 02:00 UTC，GitHub Actions 都会重跑整套检查：
**848 个测试**、类型检查、依赖漏洞扫描、全仓库历史密钥扫描，以及对公开接口
的真实调用检查。每周跑失败了会自动开一个 issue。

- 审计报告：[docs/audit/2026-11-06.md](audit/2026-11-06.md)
- 构建规格、计划和实验室证据：[docs/build-3.3/](build-3.3/)（更新、回滚、卸载）·
  [docs/build-3.2/](build-3.2/)
- 每个版本改了什么：[CHANGELOG.md](../CHANGELOG.md)
- 参与贡献：[CONTRIBUTING.md](../CONTRIBUTING.md) · [行为准则](CODE_OF_CONDUCT.md)
- 私下报告安全漏洞：[SECURITY.md](../SECURITY.md)

## 说实话

- **非官方。** Muse4AI 是独立项目，**与 Meta Platforms, Inc. 没有任何隶属、
  背书或赞助关系**。“Meta”和“Muse”是其持有人的商标。
- **风险自担。** 这个应用是在自动化操作*你自己的* Muse 会话。网站一改版，
  自动化就可能失效；而且这种用法可能不符合 Meta 的服务条款——依赖它之前，
  先读一下条款。
- **先做 Windows。** macOS 和 Linux 版还没打包、也没测试过；核心代码本身
  不依赖 Windows，所以移植在路线图上。
- **没有云账号。** 不用注册，没有遥测服务器，没有订阅费。

## 许可证

[MIT](../LICENSE) © 2026 Andrew Babo。第三方声明见 `desktop/LICENSES/`。

有问题或想法：[官网](https://muse4ai.andrewbabo.com) ·
[使用指南](https://muse4ai.andrewbabo.com/docs) ·
[更新日志](https://muse4ai.andrewbabo.com/changelog)。
