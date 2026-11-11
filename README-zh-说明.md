# Muse4AI 中文版 — 这次做了什么、没做什么

原项目：https://github.com/andrew-babo/muse4ai
版本：`v2.0.0-beta.35`，2026-11-11 拉取，848 个测试
许可证：MIT（可以 fork、改、发，保留原作者版权声明即可）

一句话：这是一个 Windows 应用，让 ChatGPT / Claude / Cursor / Codex / n8n 这些 agent
通过 REST / MCP / OAuth 调用你自己电脑上已登录的 Muse 账号，帮你生成图片和视频。
不经过作者的服务器，密钥和成品都存在你自己电脑的 `%APPDATA%\MuseStudio`。

## 这次已经做好的（Phase 1，可直接用）

| 文件 | 内容 |
| --- | --- |
| `docs/README-zh.md` | README 全文中文翻译，对标原项目 `docs/README-vi.md` 的做法。命令、接口、端口（`127.0.0.1:47821`）、版本号、链接全部照原文，没改动 |
| `agent-kit/muse4ai/SKILL-zh.md` | Agent Skill 中文版。工具名（`muse_generate` / `muse_chat` / `muse_status` 等）、字段名、状态值保持英文原文，照原样调用 |
| 本文件 | 范围说明 + 完整汉化要怎么走 |

中文提示词本身就能用：Muse 接受任何语言的提示词，不用等界面汉化，
在 Studio 里直接写中文提示词就行。

## 这次没做的（先说实话）

应用界面本身还是只有英文 / 越南文，没有中文界面。原因不是没翻完一页文档，
而是这个项目的语言架构就是双语写死的：

- `content/types.ts`：`Locale = "en" | "vi"`，每个可见文案都是 `{ en, vi }` 的 `L` 类型
- `content/` 里 `vi:` 出现了 790 处，分布在 37 个内容文件里
- `desktop/src/shared/i18n/`：界面文案以越南文为源语言，英文是映射表，
  5 个 catalog 文件约 1,844 条（`ui.ts` 975 条、`main.ts` 364 条、`api.ts` 220 条、
  `shared.ts` 220 条、`updates.ts` 65 条）
- `desktop/src/renderer/components/LanguageSwitch.tsx`：语言切换是二选一
  （`vi` ↔ `en`），三语要重写这个组件
- 截图只有英文 / 越南文两套（`content/shots/`），中文界面要重截一套
- 测试会强制检查双语完整性（`content/content.test.ts`、`desktop/test/*i18n*`），
  加一门语言要同步改测试，否则 848 个测试会挂

合计完整汉化约 2,600+ 条文案，不是翻一页 README 的量。

## 如果要做完整中文界面（Phase 2），要改这些

按原项目越南文版的路子走，最稳的方案是加第三语，而不是把越南文替换掉：

1. `content/types.ts`：`Locale` 改成 `"en" | "vi" | "zh"`，`L` 改成 `{ en, vi, zh }`
2. `content/i18n.ts`：`pick()` / `l()` / `localizedPath()` / `splitLocale()` 加 `zh` 分支，
   路由 `/zh/...`，搜索折叠 `fold()` 加中文处理（中文不用去重音，直接按原文匹配）
3. `content/*.ts`、`content/docs/*.ts`：790 处补 `zh:` 字段
4. `desktop/src/shared/i18n/index.ts`：`Locale` 加 `"zh"`，`LOCALES` 加 `{ id: "zh", label: "中文" }`，
   `isLocale()`、`localeFromAcceptLanguage()`、`resolveStartLocale()` 同步改；
   现有架构是“越南文原文 → 英文映射”，中文要另建一套映射（`zh` 目录或以中文为 key 的 catalog），
   不能直接复用越南文 key
5. `desktop/src/shared/i18n/catalog/*.ts`：1,844 条补中文
6. `desktop/src/renderer/components/LanguageSwitch.tsx`：二选一改成三语选择器
7. `desktop/installer/`：加中文安装向导文案（现有只有 `Vietnamese.isl` + 英文提示）
8. 测试：`content.test.ts` 和 i18n 相关测试把“两种语言”改成“三种语言”，重跑
   `npm test`（848 个）+ `npm run typecheck`，全过才算完成
9. 截图：中文界面跑通后重截 `content/shots/` 的中文版

更省事的折中方案（如果只是自己用，不用发版）：只汉化 `desktop` 界面 catalog，
`content/` 网站文案先不动，`L` 类型改成 `zh` 可选、缺失时回落英文，
这样不用一次翻完 790 条网站文案也能先用上中文界面。

## 怎么用这个中文版

1. 先读 `docs/README-zh.md`，按里面的快速开始装原版应用
   （下载页 https://muse4ai.andrewbabo.com/download，Windows 会提示未签名，选“更多信息 → 仍要运行”）
2. 想让 agent 用中文理解这个工具，把 `agent-kit/muse4ai/SKILL-zh.md`
   发给你的 agent / 放进它的 Skill 目录
3. 在 Studio 里直接写中文提示词，例如“橡木桌上的一杯咖啡，清晨暖光”

## 风险提示（原文照翻，不是吓你）

- 非官方项目，与 Meta 没有任何隶属、背书或赞助关系
- 它是在自动化操作你自己的 Muse 会话，网站一改版就可能失效，
  而且这种用法可能不符合 Muse 的服务条款，用之前先读条款；
  稳妥起见用小号 / 备用账号
- 只有 Windows 版经过打包和测试，macOS / Linux 还没有

## 下一步由你定

- 只要 Phase 1（已经做完）：直接用上面两个中文文件就行，不用再动
- 要 Phase 2 完整中文界面：我按上面的清单开工，先翻 `desktop` 界面 1,844 条，
  再翻 `content/` 790 条，分批交付、每批跑测试
- 要推到你的 GitHub（例如 `LJ606/muse4ai-zh`）：你手动建一个空公开仓库，
  我把这份中文版推上去（和之前推插件一样的流程，API 建库会被 403 拒，只能你手动建）
