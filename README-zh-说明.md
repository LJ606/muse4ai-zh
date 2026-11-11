# Muse4AI 中文版 — 这次做了什么、没做什么

原项目：https://github.com/andrew-babo/muse4ai
版本：`v2.0.0-beta.35`，2026-11-11 拉取，848 个测试
许可证：MIT（可以 fork、改、发，保留原作者版权声明即可）

一句话：这是一个 Windows 应用，让 ChatGPT / Claude / Cursor / Codex / n8n 这些 agent
通过 REST / MCP / OAuth 调用你自己电脑上已登录的 Muse 账号，帮你生成图片和视频。
不经过作者的服务器，密钥和成品都存在你自己电脑的 `%APPDATA%\MuseStudio`。

## Phase 1（已完成，可直接用）

| 文件 | 内容 |
| --- | --- |
| `docs/README-zh.md` | README 全文中文翻译，对标原项目 `docs/README-vi.md` 的做法。命令、接口、端口（`127.0.0.1:47821`）、版本号、链接全部照原文，没改动 |
| `agent-kit/muse4ai/SKILL-zh.md` | Agent Skill 中文版。工具名（`muse_generate` / `muse_chat` / `muse_status` 等）、字段名、状态值保持英文原文，照原样调用 |

中文提示词本身就能用：Muse 接受任何语言的提示词，不用等界面汉化，
在 Studio 里直接写中文提示词就行。

## Phase 2（已完成，2026-11-11）：完整中文界面

桌面应用和网站内容都已加中文（`zh`），英文/越南文原文一处没动。
设计原则：中文是**新增的第三语**，不是替换——

- 桌面端：新建并行 catalog `desktop/src/shared/i18n/catalog/zh/`（越南文 key → 中文值，
  与英文版同结构）；中文查不到时回落英文，绝不显示越南文；
  缺失会记入 `missingZhKeys()` 供诊断
- 网站内容端：`L` 改成 `{ en, vi, zh? }`（`zh` 可选），中文缺失时回落英文；
  摘要 `summary.zh` 35–160 字（中文比英文密集，下限由 70 改为 35），标题 `title.zh` ≤ 60 字

### 翻了多少条（实测数，非估算）

| 范围 | 条数 | 校验结果 |
| --- | --- | --- |
| 桌面端 catalog `zh/updates.ts` | 62 | checker 0 缺失 0 多余 0 值问题 |
| 桌面端 catalog `zh/shared.ts` | 220 | 同上 |
| 桌面端 catalog `zh/main.ts` | 364 | 同上 |
| 桌面端 catalog `zh/api.ts` | 218 | 同上 |
| 桌面端 catalog `zh/ui.ts` | 974 | 同上 |
| **桌面端小计** | **1,838** | `i18n-catalog-zh.test.ts` 3/3 通过 |
| 网站内容 `content/docs/` 11 个文件 | 548 处 | `content-zh.test.ts` 3/3 通过 |
| 网站内容 `content/agents/` + `content/usecases/` | 250 处 | 同上 |
| 网站内容 `content/` 根文件（copy/pages/site/chapters/glossary/credits/facts/media/shots/shotCatalog） | 572 处 | 同上 |
| **网站内容小计** | **1,370 处** | 翻译前 `zhCoverageProblems()` 报 1,494 处缺失，现为 0 |

术语统一：任务 / 队列 / 素材库 / 账号 / 设置 / 指南 / 批量 / 代理 / 额度 / 提示词 /
参考图 / 视频 / 图片 / 会话 / 续写 / 待审核 / 下载 / 生成。
工具名、API 路径、端口 `127.0.0.1:47821`、命令、版本号、链接、品牌名（Muse / Meta /
ChatGPT / Claude / Cursor / Codex / Muse4AI）一律保持原文，没有编造任何 `/zh` 链接。

### 基础设施改动（除翻译外）

- `desktop/src/shared/i18n/index.ts`：`Locale` 改为 `"vi" | "en" | "zh"`，`LOCALES` 加
  `{ id: "zh", label: "中文" }`；默认语言仍为英文；`Accept-Language: zh-CN` / `zh-Hans`
  自动识别；`tc()` 的 `@@context` 变体中文版同样支持
- `desktop/src/shared/format.ts`：中文数字/日期格式（千分位 `,`、日期 `2026年11月2日`）
- `desktop/src/shared/ipc.ts`：语言校验 `z.enum(["vi", "en", "zh"])`
- `desktop/src/renderer/components/LanguageSwitch.tsx`：二选一改成三语循环（vi → en → zh → vi）
- `desktop/src/renderer/lib/ui.ts`：头像名加中文版
- `desktop/src/shared/updates.ts`、`desktop/src/main/updater.ts`：更新器语言类型拓宽为三语
- `desktop/installer/install.ps1`：23 处调用点全部补中文（缺失回落英文），`$savedLang` 校验加 `zh`
- `desktop/installer/setup.iss`：加中文语言 `ChineseSimplified.isl`；
  新建 `desktop/installer/setup-notice-zh.txt`
- `content/types.ts` / `content/i18n.ts` / `content/validate.ts` / `content/routes.ts` /
  `content/inline.ts`：`Locale` 加 `zh`，`L` 加可选 `zh`，`pick()` / `l()` / `localizedPath()` /
  `splitLocale()` 支持 `/zh` 路由；`isL()` 接受 `en,vi` 或 `en,vi,zh` 两种 key 集合；
  新增 `zhCoverageProblems()`；禁用词与否定词规则补中文模式
- 测试新增（均为加强而非放宽）：`desktop/test/i18n-catalog-zh.test.ts`、
  `desktop/test/content-zh.test.ts`；`content/content.test.ts` 加 `AC-CNT-01-zh`；
  `desktop/test/i18n.test.ts` 加中文格式/回落测试

### 验证结果（2026-11-11 15:15，全部亲手重跑）

| 检查 | 结果 |
| --- | --- |
| `npm run typecheck`（桌面端全量） | 干净通过，exit 0 |
| 桌面端全量 `npm test` | 861 个测试：857 通过、1 失败、3 跳过；71 个文件：68 通过、1 失败、2 跳过 |
| 唯一失败 | `test/api-server.test.ts` 的 AC-API-02（“本机模式只绑定 127.0.0.1”），**上游基线就有的既有失败**，与中文无关：本机 LAN IP 也能连通导致断言失败，属本机网络环境所致 |
| 目标测试 5 文件（`content-zh` / `i18n` / `i18n-catalog` / `i18n-catalog-zh` / `i18n-api`） | 39/39 通过 |
| 5 个桌面 catalog 逐文件 checker | 全部 `missing=0 extra=0 value-problems=0` |
| `content/content.test.ts` | 仍无法加载：顶层读 `docs/build-3.0/evidence/media/ledger.json`，该文件在上游 HEAD 就不存在（`git log` 无记录），且上游 CI（`.github/workflows/audit.yml`）从不跑内容测试——**上游既有问题**，与中文无关；中文覆盖改由 `desktop/test/content-zh.test.ts` 验证 |

验证过程中的两个插曲（均已查清，与翻译无关）：
- 中途一次全量跑出 `coordinator.test.ts` 等 31 个失败，原因是 `/tmp`（512 MB tmpfs）被历次
  测试留下的 `muse-test-*` 临时目录塞满，SQLite 报 `database or disk is full`；
  清掉临时目录后重跑，`coordinator.test.ts` + `rules.test.ts` 59/59 通过。
  教训：这台机上每次全量测试前先清 `/tmp/muse-test-*`。
- 试点测试 `i18n.test.ts` 里有一条断言“`Hàng chờ` 不在中文 catalog 里、应回落英文”，
  全量翻完后这条断言本身过期了（中文已翻成“队列”），已更新为：翻过的 key 译中文、
  两边都没有的 key 原样返回并记入缺失、另补一条临时删 key 直测 zh→en 回落的测试。

## 还没做的

- **中文截图没重截**：`content/shots/` 仍只有英文/越南文两套；`content/media.ts` 里
  38 条提示词的中文翻译已翻好，但截图本身还是英文/越南文界面。中文界面跑通后需重截一套。
  另注意 `shots.ts` / `media.ts` 文件头写着 “GENERATED — do not edit by hand”，
  下次跑 `scripts/gen-media.py` / `docs-shots.py` 重新生成时会覆盖掉 `zh`，需给生成器加 `zh` 支持。
- **OG 分享图无中文版**；网站 `/zh` 路由只做到 `localizedPath()` / `splitLocale()` 层面，
  没有做上线部署动作。
- **Inno Setup 安装向导构建未在 Linux 验证**：`setup.iss` 的中文语言配置已加，
  但 Inno Setup 只能在 Windows 构建，本机无法验证。
- **没推 GitHub、没建仓库、没发 PR**（按任务要求只改本地文件）。
- 上游原有小问题（未引入、如实记录）：`api.ts` 英文版里
  `Không có tác phẩm này trong các lượt của khoá` 同一 key 出现两次、英文值不同
  （JS 对象去重后只有后一条生效），中文版如实镜像，未改。

## 怎么用这个中文版

1. 先读 `docs/README-zh.md`，按里面的快速开始装原版应用
   （下载页 https://muse4ai.andrewbabo.com/download，Windows 会提示未签名，选“更多信息 → 仍要运行”）
2. 想让 agent 用中文理解这个工具，把 `agent-kit/muse4ai/SKILL-zh.md`
   发给你的 agent / 放进它的 Skill 目录
3. 在 Studio 里直接写中文提示词，例如“橡木桌上的一杯咖啡，清晨暖光”
4. 中文界面：装好原版后，把本仓库 `desktop/` 的中文改动打进原项目构建，
   或等上游合并后在设置里选“中文”

## 风险提示（原文照翻，不是吓你）

- 非官方项目，与 Meta 没有任何隶属、背书或赞助关系
- 它是在自动化操作你自己的 Muse 会话，网站一改版就可能失效，
  而且这种用法可能不符合 Muse 的服务条款，用之前先读条款；
  稳妥起见用小号 / 备用账号
- 只有 Windows 版经过打包和测试，macOS / Linux 还没有

## 下一步由你定

- 要推到你的 GitHub（例如 `LJ606/muse4ai-zh`）：你手动建一个空公开仓库，
  我把这份中文版推上去（和之前推插件一样的流程，API 建库会被 403 拒，只能你手动建）
- 要发 PR 给原作者：可以，MIT 协议允许；但注意原项目语言架构是越南文为源语言，
  中文是新增第三语，PR 说明里要写清这一点
