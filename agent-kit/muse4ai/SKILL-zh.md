---
name: muse4ai
description: 通过 Muse4AI，用 Meta Muse 生成图片、短视频和答案。Muse4AI 是一款免费 Windows 应用，运行在用户自己的电脑和 Muse 账号上。当用户要求生成或编辑图片/视频、做 B-roll、故事板、产品图或课程配图，或者向 Muse 提问，并且有可用的 "muse4ai" MCP 服务器（工具 muse_status、muse_generate、muse_chat、muse_get_job）或 Muse4AI REST API 时使用。
---

# Muse4AI

Muse4AI 是一座桥：你（agent）发请求，Muse4AI 用用户自己 Windows 电脑上的 Muse 账号去执行，再把成品文件交还给你。它与 Meta 没有隶属关系。每次生成都会消耗用户的 Muse 使用额度，所以要想清楚再生成。

## 第一次请求之前

1. 先调用 `muse_status`。它会告诉你哪些类型已启用（图片、图片编辑、视频、图生视频）、有几个账号就绪、每个账号还剩多少额度，以及你的密钥下还有哪些未完成的任务。
2. 如果没有账号就绪，停下来，告诉用户去打开 Muse4AI › Accounts（账号）处理。不要循环重试。
3. 如果 MCP 工具缺失，说明服务器没连上：见 `references/setup.md`。

## 生成图片或视频

1. 写一个清晰的提示词（主体、场景、光线、风格，需要的话加上比例）。任何语言都行。
2. 调用 `muse_generate`，传 `kind`（`image` 或 `video`）、`prompt`，以及一个唯一的 `request_id`（例如 `img-2026-11-02-01`）。用相同的 `request_id` 和相同的输入重新提交，会返回原来的任务，不会重复创建——网络出错后重试时就用这个办法。
3. 用 `muse_get_job` 加 `wait_seconds`（最多 50 秒）等待，直到 `status` 变成 `succeeded`、`failed`、`cancelled` 或 `needs_review`。图片大约 30–90 秒；视频要几分钟。
4. 把每个成品的 `download_url` 交给用户（链接 60 分钟内有效），用户要求保存的文件就帮他存下来。

Muse 的视频是短片段（约 8–10 秒，1280×720）。要做长片的话，规划成多个片段，再让用户（或 Remotion、CapCut 这类工具）拼接。不要承诺能出无缝长视频，也不要承诺角色能完全一致。

## 用参考图或参考视频

- 用自己之前生成的成品：`reference_asset_id`。
- 用用户给的文件：用 `POST /v1/references`（REST）上传，传 `reference_id`；或者直接传 `reference_image_base64`（PNG/JPEG/WEBP，≤ 8 MB）。
- 多张参考图一起用：`reference_ids`（最多一个 MP4）。
- 视频编辑用 `kind: "video"` 加一个 MP4 参考文件和一段编辑提示词；最长可能要 25 分钟。

## 向 Muse 提问或取回文件

调用 `muse_chat`，传 `prompt`（原样发送）、可选的 `attachments`，以及唯一的 `request_id`。你会拿到 Muse 回答的原文、它附带的所有文件，以及一个 `conversation_id`，下次传这个 ID 就能继续同一个会话。Muse4AI 不核查事实：重要的说法请自己核实。同一个 Muse 账号下的所有任务共享该账号的 Muse 记忆。

## 保护用户的规则

- 状态是 `needs_review` 或 `running` 的任务，绝不要重新提交。`needs_review` 的意思是必须有人在 Muse4AI 里人工看一眼。
- 只有当 `error.code` 是 `PRE_SUBMIT_TRANSIENT` 或 `PROXY_FAILED` 时才重试失败的任务；`PROVIDER_ERROR` 也只在几分钟后重试一次。
- 没有用户点头，不要循环生成，也不要批量创建大量任务；先用 `muse_status` 查额度。
- 只有 `muse_status` 列出了 `muse.video.extend` 能力时，才用 `muse_extend_video`，并说明每步能延长的长度不保证。
- 绝不要把 API Key 放进 URL、分享的文件或你的回复里。

## 更多细节

- `references/setup.md` — 连接 Claude Code、Codex、Cursor 等；本地地址 vs 公开地址。
- `references/tools.md` — 每个工具和它的字段。
- `references/workflows.md` — 现成配方（带货短片、课程配图、Remotion 用 B-roll、产品图、故事板）。
- `references/troubleshooting.md` — 每个报错是什么意思、该怎么办。

---

> 译者注：中文翻译版，原版见 `agent-kit/muse4ai/SKILL.md`。工具名、接口地址、字段名、状态值均保持英文原文不变，照原样调用。
