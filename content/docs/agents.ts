import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_AGENTS: DocArticle[] = [
  {
    slug: "oauth",
    chapter: "agents",
    order: 6,
    title: { en: "Connect without a key (OAuth)", vi: "Kết nối không cần khoá (OAuth)", zh: "无需密钥连接（OAuth）" },
    summary: {
      en: "Paste only the MCP address into ChatGPT, Claude, Codex or Cursor, then approve with the 6-digit code shown in Muse4AI.",
      vi: "Chỉ dán địa chỉ MCP vào ChatGPT, Claude, Codex hoặc Cursor, rồi duyệt bằng mã 6 số hiện trong Muse4AI.",
      zh: "只需把 MCP 地址粘贴到 ChatGPT、Claude、Codex 或 Cursor 中，再用 Muse4AI 里显示的 6 位数字码批准。"
    },
    before: [
      {
        en: "Keep the app open and turn on API for agents in Settings › API & agent.",
        vi: "Giữ app mở và bật API cho agent trong Cài đặt › API & agent.",
        zh: "保持应用打开，并在「设置 › API 与 agent」中开启面向 agent 的 API。"
      },
      {
        en: "For cloud apps such as ChatGPT or the Claude app, turn on Remote access first so you have a public address.",
        vi: "Với app đám mây như ChatGPT hoặc app Claude, bật Truy cập từ xa trước để có địa chỉ công khai.",
        zh: "对于 ChatGPT 或 Claude 应用这类云端应用，请先开启远程访问，以获得一个公开地址。"
      },
    ],
    steps: [
      {
        title: { en: "Copy the MCP address", vi: "Chép địa chỉ MCP", zh: "复制 MCP 地址" },
        body: {
          en: "In Settings › API & agent, open the “No key (OAuth)” template and copy the address ending in /mcp. Cloud apps need the public address from [Remote access](/docs/remote-access).",
          vi: "Trong Cài đặt › API & agent, mở mẫu “Không cần khoá (OAuth)” và chép địa chỉ kết thúc bằng /mcp. App đám mây cần địa chỉ công khai từ [truy cập từ xa](/docs/remote-access).",
          zh: "在「设置 › API 与 agent」中，打开「无需密钥（OAuth）」模板，复制以 /mcp 结尾的地址。云端应用需要 [远程访问](/docs/remote-access) 中的公开地址。"
        },
        code: { lang: "text", text: "https://your-address.example/mcp" },
        shot: "settings-api",
      },
      {
        title: { en: "Add it in your AI app", vi: "Thêm vào app AI của bạn", zh: "在你的 AI 应用中添加它" },
        body: {
          en: "Add a new MCP server or connector and paste the address. When asked how to sign in, choose OAuth. Do not add any key.",
          vi: "Thêm máy chủ MCP hoặc connector mới rồi dán địa chỉ. Khi được hỏi cách đăng nhập, chọn OAuth. Không cần thêm khoá nào.",
          zh: "添加新的 MCP 服务器或连接器并粘贴地址。询问登录方式时，选择 OAuth。不要添加任何密钥。"
        },
      },
      {
        title: { en: "Approve with the 6-digit code", vi: "Duyệt bằng mã 6 số", zh: "用 6 位数字码批准" },
        body: {
          en: "A Muse4AI approval page opens showing the app’s name and what it asks for. Type the 6-digit code shown in the Muse4AI window and press Allow. There is no account or password: whoever sits at this PC decides.",
          vi: "Trang xác nhận của Muse4AI mở ra, ghi tên app và quyền nó xin. Gõ mã 6 số đang hiện trong cửa sổ Muse4AI rồi bấm Cho phép. Không có tài khoản hay mật khẩu: người ngồi trước máy này là người quyết.",
          zh: "Muse4AI 的批准页面会打开，显示应用名称和它请求的权限。输入 Muse4AI 窗口中显示的 6 位数字码，然后按「允许」。没有账号和密码：坐在本电脑前的人说了算。"
        },
      },
      {
        title: { en: "Disconnect any time", vi: "Ngắt kết nối bất cứ lúc nào", zh: "随时断开连接" },
        body: {
          en: "Connected apps are listed in Settings › API & agent › Connected apps. Disconnect one and its next request is refused.",
          vi: "Các app đã kết nối nằm trong Cài đặt › API & agent › Ứng dụng đã kết nối. Ngắt một app thì lần gọi kế tiếp của nó bị từ chối.",
          zh: "已连接的应用列在「设置 › API 与 agent › 已连接的应用」中。断开一个应用，它的下一次请求会被拒绝。"
        },
      },
    ],
    success: {
      en: "The AI app shows Muse4AI as connected and can call muse_status without any API key.",
      vi: "App AI báo Muse4AI đã kết nối và gọi được muse_status mà không cần khoá API.",
      zh: "AI 应用显示 Muse4AI 已连接，无需 API 密钥即可调用 muse_status。"
    },
    troubleshoot: [
      {
        q: { en: "The app keeps asking for a key.", vi: "App cứ đòi khoá.", zh: "应用一直要求提供密钥。" },
        a: {
          en: "Choose OAuth (not API key or header) as the sign-in type, and make sure the address ends in /mcp.",
          vi: "Chọn kiểu đăng nhập OAuth (không phải khoá API hay header) và kiểm tra địa chỉ kết thúc bằng /mcp.",
          zh: "选择 OAuth（而不是 API 密钥或请求头）作为登录类型，并确认地址以 /mcp 结尾。"
        },
      },
      {
        q: { en: "It worked yesterday and stopped today.", vi: "Hôm qua dùng được, hôm nay hết.", zh: "昨天还能用，今天不行了。" },
        a: {
          en: "A Quick tunnel address changes every time the app starts. Use a named tunnel or your own domain for a stable address, then reconnect.",
          vi: "Địa chỉ Quick tunnel đổi mỗi lần mở app. Dùng tunnel có tên hoặc tên miền riêng để có địa chỉ cố định, rồi kết nối lại.",
          zh: "临时隧道地址每次随应用启动而变化。请使用命名隧道或自己的域名获得固定地址，然后重新连接。"
        },
      },
    ],
    related: ["connect-overview", "api-keys", "remote-access"],
    appRoute: "/settings/api",
    updated: "2026-11-03",
  },
  {
    slug: "connect-overview",
    chapter: "agents",
    order: 1,
    title: { en: "Connect your AI agent", vi: "Kết nối AI agent của bạn", zh: "连接你的 AI agent" },
    summary: {
      en: "Connect an agent on this PC, a cloud agent, or an advanced command bridge with the right address and a separate key.",
      vi: "Kết nối agent trên máy này, agent đám mây hoặc cầu nối lệnh nâng cao bằng đúng địa chỉ và một khoá riêng cho từng agent.",
      zh: "用正确的地址和每 agent 独立的密钥，连接本电脑上的 agent、云端 agent 或高级命令桥。"
    },
    before: [
      {
        en: "Keep the app open on your Windows PC and sign in to Muse.",
        vi: "Giữ app mở trên máy Windows và đăng nhập Muse.",
        zh: "保持应用在 Windows 电脑上打开，并登录 Muse。"
      },
      {
        en: "Find out whether the agent runs on this PC or in the cloud.",
        vi: "Xác định agent chạy trên máy này hay trên đám mây.",
        zh: "确认 agent 是在本电脑上运行还是在云端运行。"
      },
    ],
    steps: [
      {
        title: { en: "Enable access and create a key", vi: "Bật kết nối và tạo khoá", zh: "开启访问并创建密钥" },
        body: {
          en: "Open Settings › API & agent. Enable API for agents and create a key named for this agent. Copy the key before closing its dialog.",
          vi: "Mở Cài đặt › API & agent. Bật API cho agent rồi tạo khoá đặt tên theo agent này. Chép khoá trước khi đóng hộp thoại.",
          zh: "打开「设置 › API 与 agent」，开启面向 agent 的 API，并创建一个以该 agent 命名的密钥。关闭对话框前先复制密钥。"
        },
        shot: "settings-api",
      },
      {
        title: { en: "For an agent on this PC", vi: "Với agent trên máy này", zh: "本电脑上的 agent" },
        body: {
          en: `Add an HTTP MCP server using ${FACTS.localMcpUrl} and your key. Use the app’s current address if you changed its port. See [Claude Code](/agents/claude-code), [Cursor](/agents/cursor), or [Codex](/agents/codex).`,
          vi: `Thêm máy chủ MCP qua HTTP bằng ${FACTS.localMcpUrl} và khoá của bạn. Nếu đã đổi cổng, dùng địa chỉ hiện tại trong app. Xem [Claude Code](/agents/claude-code), [Cursor](/agents/cursor) hoặc [Codex](/agents/codex).`,
          zh: `使用 ${FACTS.localMcpUrl} 和你的密钥添加一个 HTTP MCP 服务器。如果更改了端口，请使用应用内的当前地址。参见 [Claude Code](/agents/claude-code)、[Cursor](/agents/cursor) 或 [Codex](/agents/codex)。`
        },
        code: {
          lang: "text",
          text: `MCP URL: ${FACTS.localMcpUrl}\nAuthorization: Bearer ${FACTS.placeholderKey}`,
        },
      },
      {
        title: { en: "For a cloud agent", vi: "Với agent đám mây", zh: "云端 agent" },
        body: {
          en: "A cloud agent cannot reach this PC’s local address. Set up [Remote access](/docs/remote-access), then use the public MCP address and a key. See [Claude](/agents/claude) or [Lovable](/agents/lovable).",
          vi: "Agent đám mây không gọi được địa chỉ nội bộ của máy này. Thiết lập [truy cập từ xa](/docs/remote-access), rồi dùng địa chỉ MCP công khai cùng khoá. Xem [Claude](/agents/claude) hoặc [Lovable](/agents/lovable).",
          zh: "云端 agent 无法访问本电脑的本地地址。请先设置 [远程访问](/docs/remote-access)，然后使用公开的 MCP 地址和密钥。参见 [Claude](/agents/claude) 或 [Lovable](/agents/lovable)。"
        },
      },
      {
        title: { en: "For local-command-only apps", vi: "Với app chỉ nhận lệnh cục bộ", zh: "仅支持本地命令的应用" },
        body: {
          en: "An advanced bridge runs a local command and forwards requests to the HTTP MCP server. Use the configuration in the agent’s guide rather than guessing a command. Browse [all agent guides](/agents).",
          vi: "Cầu nối nâng cao chạy một lệnh cục bộ rồi chuyển yêu cầu tới máy chủ MCP qua HTTP. Dùng cấu hình trong bài hướng dẫn của agent, không tự đoán lệnh. Xem [mọi hướng dẫn agent](/agents).",
          zh: "高级桥接会运行一条本地命令，把请求转发到 HTTP MCP 服务器。请使用该 agent 指南中的配置，不要自己猜命令。浏览 [全部 agent 指南](/agents)。"
        },
      },
      {
        title: { en: "No key at all: sign in with OAuth", vi: "Không cần khoá: đăng nhập bằng OAuth", zh: "完全不用密钥：用 OAuth 登录" },
        body: {
          en: "Apps such as ChatGPT, Claude, Codex or Cursor can connect with only the MCP address. See [Connect without a key (OAuth)](/docs/oauth).",
          vi: "Các app như ChatGPT, Claude, Codex hoặc Cursor có thể kết nối chỉ với địa chỉ MCP. Xem [Kết nối không cần khoá (OAuth)](/docs/oauth).",
          zh: "ChatGPT、Claude、Codex 或 Cursor 这类应用只需 MCP 地址即可连接。参见 [无需密钥连接（OAuth）](/docs/oauth)。"
        },
      },
      {
        title: { en: "Test before creating media", vi: "Kiểm tra trước khi tạo nội dung", zh: "生成内容前先测试" },
        body: {
          en: `Ask the agent to call ${FACTS.mcpTools[0]} first. Confirm it can see the app’s status before asking it to create an image or video.`,
          vi: `Nhờ agent gọi ${FACTS.mcpTools[0]} trước. Xác nhận agent đọc được trạng thái app rồi mới yêu cầu tạo ảnh hoặc video.`,
          zh: `先让 agent 调用 ${FACTS.mcpTools[0]}。确认它能看到应用状态，再让它创建图片或视频。`
        },
      },
    ],
    success: {
      en: "The agent can read the app’s status using its own key and the correct local or public address.",
      vi: "Agent đọc được trạng thái app bằng khoá riêng và đúng địa chỉ nội bộ hoặc công khai.",
      zh: "Agent 能用自己的密钥和正确的本地或公开地址读取应用状态。"
    },
    troubleshoot: [
      {
        q: { en: "Why does the local URL fail in a cloud app?", vi: "Vì sao URL nội bộ không dùng được trong app đám mây?", zh: "为什么本地 URL 在云端应用中失败？" },
        a: {
          en: "A local address points to the computer making the request. Give a cloud agent the public address from Remote access instead.",
          vi: "Địa chỉ nội bộ trỏ tới máy đang gửi yêu cầu. Với agent đám mây, hãy dùng địa chỉ công khai từ phần truy cập từ xa.",
          zh: "本地地址指向发出请求的电脑。请给云端 agent 改用远程访问中的公开地址。"
        },
      },
      {
        q: { en: "Why does the agent say unauthorized?", vi: "Vì sao agent báo không được cấp quyền?", zh: "为什么 agent 说未获授权？" },
        a: {
          en: "Check that the key is active and sent as a Bearer authorization header. A public address does not replace the key.",
          vi: "Kiểm tra khoá còn hiệu lực và được gửi trong header Authorization kiểu Bearer. Địa chỉ công khai không thay thế khoá.",
          zh: "检查密钥是否有效，并确认它是以 Bearer 授权请求头发送的。公开地址不能代替密钥。"
        },
      },
    ],
    related: ["api-keys", "remote-access", "agent-skill", "mcp-tools"],
    appRoute: "/settings/api",
    updated: "2026-11-02",
  },
  {
    slug: "api-keys",
    chapter: "agents",
    order: 2,
    title: { en: "Create and replace API keys", vi: "Tạo và thay khoá API", zh: "创建与更换 API 密钥" },
    summary: {
      en: "Create one key per agent, copy it while it is visible, and replace or revoke it safely if access needs to change.",
      vi: "Tạo khoá riêng cho từng agent, chép khi khoá còn hiển thị và thay hoặc thu hồi khoá an toàn khi cần đổi quyền truy cập.",
      zh: "每个 agent 创建一个密钥，在可见时复制它；需要变更访问权限时，安全地更换或撤销。"
    },
    before: [
      {
        en: "Choose a clear name for the agent that will use the key.",
        vi: "Chọn tên dễ nhận biết cho agent sẽ dùng khoá.",
        zh: "为将使用密钥的 agent 选择一个清晰的名称。"
      },
      {
        en: "Treat a key like a password. Do not put it in screenshots, public messages, or URLs.",
        vi: "Giữ khoá kín như mật khẩu. Không đưa khoá vào ảnh chụp màn hình, tin nhắn công khai hoặc URL.",
        zh: "把密钥当作密码保管。不要把它放进截图、公开消息或 URL 中。"
      },
    ],
    steps: [
      {
        title: { en: "Create a named key", vi: "Tạo khoá có tên", zh: "创建带名称的密钥" },
        body: {
          en: "Open Settings › API & agent and create a key. Name it after the agent. Choose Create and cancel for generation, or Status only for monitoring.",
          vi: "Mở Cài đặt › API & agent và tạo khoá. Đặt tên theo agent. Chọn Tạo và huỷ để tạo nội dung, hoặc Chỉ xem tình trạng để theo dõi.",
          zh: "打开「设置 › API 与 agent」并创建密钥。用 agent 的名字命名。需要生成内容时选择「创建与取消」，仅监控时选择「仅查看状态」。"
        },
        shot: "settings-api-key",
      },
      {
        title: { en: "Copy it once", vi: "Chép ngay khi hiển thị", zh: "只显示一次，立即复制" },
        body: {
          en: "Copy the full key before closing the dialog; you cannot reveal it again. Paste it only into the intended agent’s protected configuration.",
          vi: "Chép toàn bộ khoá trước khi đóng hộp thoại; bạn không thể xem lại. Chỉ dán vào phần cấu hình được bảo vệ của agent cần dùng.",
          zh: "关闭对话框前复制完整密钥；之后无法再次查看。只把它粘贴到目标 agent 受保护的配置中。"
        },
        code: {
          lang: "http",
          text: `Authorization: Bearer ${FACTS.placeholderKey}`,
        },
      },
      {
        title: { en: "Replace and revoke safely", vi: "Thay và thu hồi an toàn", zh: "安全地更换与撤销" },
        body: {
          en: "To rotate a key, create a replacement, update the agent, test access, then revoke the old key. If a key was exposed, revoke it immediately. Revoking a key stops future authenticated access with it.",
          vi: "Để đổi khoá định kỳ, tạo khoá mới, cập nhật agent, kiểm tra kết nối rồi thu hồi khoá cũ. Nếu khoá bị lộ, thu hồi ngay. Khoá đã thu hồi không dùng được cho các yêu cầu xác thực tiếp theo.",
          zh: "要轮换密钥，请先创建替代密钥，更新 agent，测试访问，然后撤销旧密钥。如果密钥已泄露，请立即撤销。撤销密钥后，以后用它发起的认证访问都会停止。"
        },
      },
    ],
    success: {
      en: "Each agent has a separately named key with the access it needs, and obsolete keys are revoked.",
      vi: "Mỗi agent có khoá mang tên riêng với quyền phù hợp; các khoá không còn dùng đã được thu hồi.",
      zh: "每个 agent 都有以其命名的独立密钥，拥有需要的访问权限；不再使用的密钥已被撤销。"
    },
    troubleshoot: [
      {
        q: { en: "I closed the dialog without copying.", vi: "Tôi đóng hộp thoại trước khi chép.", zh: "我没复制就关闭了对话框。" },
        a: {
          en: "Revoke that key and create another. The app does not reveal the original key again.",
          vi: "Thu hồi khoá đó và tạo khoá mới. App không hiển thị lại khoá ban đầu.",
          zh: "撤销该密钥并创建一个新的。应用不会再次显示原始密钥。"
        },
      },
      {
        q: { en: "Status works but generation fails.", vi: "Xem trạng thái được nhưng không tạo được.", zh: "查看状态可以，生成却失败。" },
        a: {
          en: "Check the key’s scope. A Status only key cannot create or cancel jobs.",
          vi: "Kiểm tra quyền của khoá. Khoá Chỉ xem tình trạng không thể tạo hoặc huỷ việc.",
          zh: "检查密钥的权限。「仅查看状态」的密钥不能创建或取消任务。"
        },
      },
    ],
    related: ["connect-overview", "remote-access", "privacy-and-data"],
    appRoute: "/settings/api",
    updated: "2026-11-02",
  },
  {
    slug: "agent-skill",
    chapter: "agents",
    order: 3,
    title: { en: "Teach your agent with the Muse4AI skill", vi: "Dạy agent bằng skill Muse4AI", zh: "用 Muse4AI skill 教你的 agent" },
    summary: {
      en: "Give your agent the Muse4AI skill or a short instruction note so it sends requests the safe way, without duplicates.",
      vi: "Cho agent skill Muse4AI hoặc lời dặn ngắn để agent gửi yêu cầu đúng cách, an toàn và không gửi trùng.",
      zh: "把 Muse4AI skill 或一段简短说明交给 agent，让它以安全的方式发送请求，不产生重复。"
    },
    before: [
      {
        en: "A skill is a small folder of instructions. It teaches the agent how to use Muse4AI; it is not the connection itself.",
        vi: "Skill là một thư mục hướng dẫn nhỏ. Nó dạy agent cách dùng Muse4AI; bản thân nó không phải kết nối.",
        zh: "skill 是一个装着说明的小文件夹。它教 agent 如何使用 Muse4AI；它本身不是连接。"
      },
      {
        en: "Connect the agent first with [Connect your AI agent](/docs/connect-overview). The skill never contains your key.",
        vi: "Kết nối agent trước theo bài [Kết nối AI agent](/docs/connect-overview). Skill không bao giờ chứa khoá của bạn.",
        zh: "先按 [连接你的 AI agent](/docs/connect-overview) 连接 agent。skill 绝不包含你的密钥。"
      },
    ],
    steps: [
      {
        title: { en: "1. Open the agent panel", vi: "1. Mở thẻ dành cho agent", zh: "1. 打开 agent 面板" },
        body: {
          en: "In Muse4AI, open Guide and find the panel **For your AI agent**. It has three buttons: Copy instructions, Download skill, and Install for Claude Code.",
          vi: "Trong Muse4AI, mở Hướng dẫn và tìm thẻ **Cho AI agent**. Thẻ có ba nút: Sao chép lời dặn, Tải skill và Cài cho Claude Code.",
          zh: "在 Muse4AI 中打开「指南」，找到 **面向你的 AI agent** 面板。它有三个按钮：「复制说明」「下载 skill」和「为 Claude Code 安装」。"
        },
        shot: "guide-agent",
      },
      {
        title: { en: "2. Claude Code: install in one click", vi: "2. Claude Code: cài bằng một lần bấm", zh: "2. Claude Code：一键安装" },
        body: {
          en: "Choose **Install for Claude Code**. The app shows the exact folder below and asks before writing. If the folder already exists, choose Replace or Cancel; Cancel changes nothing. Start a new Claude Code session afterwards.",
          vi: "Chọn **Cài cho Claude Code**. App hiện đúng thư mục bên dưới và hỏi trước khi ghi. Nếu thư mục đã có, chọn Thay thế hoặc Huỷ; Huỷ không đổi gì. Sau đó mở phiên Claude Code mới.",
          zh: "选择 **为 Claude Code 安装**。应用会显示确切的文件夹，并在写入前征求确认。如果文件夹已存在，选择「替换」或「取消」；「取消」不会改变任何内容。之后开始一个新的 Claude Code 会话。"
        },
        code: { lang: "text", text: `%USERPROFILE%\\.claude\\skills\\${FACTS.productId}` },
      },
      {
        title: { en: "3. Other agents with skills", vi: "3. Agent khác có hỗ trợ skill", zh: "3. 支持 skill 的其他 agent" },
        body: {
          en: "Choose **Download skill** to save a ZIP, or get the same file from the website: [muse4ai-skill.zip](/downloads/muse4ai-skill.zip). Unzip it into the skills folder your agent's documentation names, keeping the `muse4ai` folder intact.",
          vi: "Chọn **Tải skill** để lưu tệp ZIP, hoặc tải cùng tệp trên website: [muse4ai-skill.zip](/downloads/muse4ai-skill.zip). Giải nén vào thư mục skill mà tài liệu của agent chỉ định, giữ nguyên thư mục `muse4ai`.",
          zh: "选择 **下载 skill** 保存 ZIP，或从网站获取同一文件：[muse4ai-skill.zip](/downloads/muse4ai-skill.zip)。把它解压到 agent 文档指定的 skills 文件夹，保持 `muse4ai` 文件夹完整。"
        },
      },
      {
        title: { en: "4. Agents without skills", vi: "4. Agent không hỗ trợ skill", zh: "4. 不支持 skill 的 agent" },
        body: {
          en: "Choose **Copy instructions** and paste the note into the agent's project instructions, such as AGENTS.md for Codex. The note has your PC's MCP address and the safe-use rules, but no key.",
          vi: "Chọn **Sao chép lời dặn** rồi dán vào phần hướng dẫn dự án của agent, ví dụ AGENTS.md cho Codex. Lời dặn có địa chỉ MCP trên máy bạn và các luật dùng an toàn, nhưng không có khoá.",
          zh: "选择 **复制说明**，把说明粘贴到 agent 的项目说明中，例如 Codex 的 AGENTS.md。说明里有你电脑上的 MCP 地址和安全使用规则，但没有密钥。"
        },
      },
      {
        title: { en: "5. Check what the agent learned", vi: "5. Kiểm tra agent đã hiểu", zh: "5. 检查 agent 学到了什么" },
        body: {
          en: "Ask the agent: \"How should you create an image with Muse4AI?\" A good answer mentions checking status first, a unique request ID, and waiting for the job instead of sending again.",
          vi: "Hỏi agent: \"Bạn sẽ tạo ảnh bằng Muse4AI như thế nào?\" Câu trả lời tốt có ý: kiểm tra trạng thái trước, mỗi yêu cầu một mã riêng, và chờ việc xong thay vì gửi lại.",
          zh: "问 agent：“你应该如何用 Muse4AI 创建图片？”好的回答会提到：先检查状态、每个请求用唯一的请求 ID、等待任务完成而不是重新发送。"
        },
      },
    ],
    success: {
      en: "Your agent follows the Muse4AI rules: it checks status, sends each request once, and waits for the result.",
      vi: "Agent làm theo luật của Muse4AI: kiểm tra trạng thái, gửi mỗi yêu cầu một lần và chờ kết quả.",
      zh: "你的 agent 遵守 Muse4AI 的规则：先检查状态，每个请求只发送一次，等待结果。"
    },
    troubleshoot: [
      {
        q: { en: "I installed the skill but the agent cannot reach Muse4AI.", vi: "Đã cài skill nhưng agent không gọi được Muse4AI.", zh: "我安装了 skill，但 agent 连不上 Muse4AI。" },
        a: {
          en: "A skill teaches behavior only. The agent still needs the MCP address and an active key from [Create and replace API keys](/docs/api-keys).",
          vi: "Skill chỉ dạy cách làm. Agent vẫn cần địa chỉ MCP và khoá còn hiệu lực theo bài [Tạo và thay khoá API](/docs/api-keys).",
          zh: "skill 只教行为。agent 仍然需要 MCP 地址和有效的密钥，参见 [创建与更换 API 密钥](/docs/api-keys)。"
        },
      },
      {
        q: { en: "Claude Code does not use the skill.", vi: "Claude Code không dùng skill.", zh: "Claude Code 没有使用 skill。" },
        a: {
          en: "Start a new session so it reloads skills, and check that the folder contains SKILL.md directly inside `muse4ai`.",
          vi: "Mở phiên mới để Claude Code nạp lại skill, và kiểm tra thư mục `muse4ai` có tệp SKILL.md nằm ngay bên trong.",
          zh: "开始一个新的会话，让它重新加载 skill，并检查 `muse4ai` 文件夹里是否直接包含 SKILL.md。"
        },
      },
    ],
    related: ["connect-overview", "api-keys", "mcp-tools"],
    appRoute: "/guide",
    updated: "2026-11-02",
  },
  {
    slug: "mcp-tools",
    chapter: "agents",
    order: 4,
    title: { en: "MCP tool reference", vi: "Tra cứu công cụ MCP", zh: "MCP 工具参考" },
    summary: {
      en: "Learn the MCP tools, follow a job through its states, and avoid duplicate submissions when a request is interrupted.",
      vi: "Tìm hiểu các công cụ MCP, theo dõi trạng thái công việc và tránh gửi trùng khi yêu cầu bị gián đoạn giữa chừng.",
      zh: "了解 MCP 工具，跟进任务的各个状态，掌握重试规则，并在请求中断时避免重复提交。"
    },
    before: [
      {
        en: "Connect an MCP client with an active API key.",
        vi: "Kết nối ứng dụng MCP bằng khoá API còn hiệu lực.",
        zh: "用有效的 API 密钥连接 MCP 客户端。"
      },
      {
        en: "Generation uses your Muse account’s usage limit. Do not loop requests to overcome a limit.",
        vi: "Tạo nội dung sử dụng hạn mức tài khoản Muse. Không lặp yêu cầu để vượt hạn mức.",
        zh: "生成内容会消耗 Muse 账号的用量额度。不要循环发送请求来突破额度。"
      },
    ],
    steps: [
      {
        title: { en: "Check the server and capabilities", vi: "Kiểm tra máy chủ và khả năng hỗ trợ", zh: "检查服务器与支持的能力" },
        body: {
          en: `Open Settings › API & agent, then call ${FACTS.mcpTools[0]} to read account readiness, usage, and available capabilities.`,
          vi: `Mở Cài đặt › API & agent, rồi gọi ${FACTS.mcpTools[0]} để xem tài khoản sẵn sàng, hạn mức và các khả năng được hỗ trợ.`,
          zh: `打开「设置 › API 与 agent」，然后调用 ${FACTS.mcpTools[0]}，查看账号就绪情况、用量和支持的能力。`
        },
        shot: "settings-api",
      },
      {
        title: { en: "Choose the right tool", vi: "Chọn đúng công cụ", zh: "选择正确的工具" },
        body: {
          en: `Tool — purpose:\n- \`${FACTS.mcpTools[0]}\` — read status and capabilities.\n- \`${FACTS.mcpTools[1]}\` — queue image or video work.\n- \`${FACTS.mcpTools[2]}\` — ask Muse; receive its answer unchanged, files, and a conversation_id.\n- \`${FACTS.mcpTools[3]}\` — read or wait for one job.\n- \`${FACTS.mcpTools[4]}\` — list jobs created with this key.\n- \`${FACTS.mcpTools[5]}\` — request cancellation of your job.\n- \`${FACTS.mcpTools[6]}\` — start a supported video-extension chain.\n- \`${FACTS.mcpTools[7]}\` — inspect or wait for an extension chain.`,
          vi: `Công cụ — công dụng:\n- \`${FACTS.mcpTools[0]}\` — xem trạng thái và khả năng hỗ trợ.\n- \`${FACTS.mcpTools[1]}\` — đưa việc tạo ảnh hoặc video vào hàng chờ.\n- \`${FACTS.mcpTools[2]}\` — hỏi Muse; nhận nguyên văn câu trả lời, tệp và conversation_id.\n- \`${FACTS.mcpTools[3]}\` — xem hoặc chờ một việc.\n- \`${FACTS.mcpTools[4]}\` — liệt kê việc được tạo bằng khoá này.\n- \`${FACTS.mcpTools[5]}\` — yêu cầu huỷ việc của bạn.\n- \`${FACTS.mcpTools[6]}\` — bắt đầu chuỗi nối video khi được hỗ trợ.\n- \`${FACTS.mcpTools[7]}\` — xem hoặc chờ chuỗi nối video.`,
          zh: `工具——用途：\n- \`${FACTS.mcpTools[0]}\`——读取状态和支持的能力。\n- \`${FACTS.mcpTools[1]}\`——把图片或视频任务加入队列。\n- \`${FACTS.mcpTools[2]}\`——向 Muse 提问；原样返回答案、文件和 conversation_id。\n- \`${FACTS.mcpTools[3]}\`——读取或等待一个任务。\n- \`${FACTS.mcpTools[4]}\`——列出用此密钥创建的任务。\n- \`${FACTS.mcpTools[5]}\`——请求取消你的任务。\n- \`${FACTS.mcpTools[6]}\`——开始受支持的视频续写链。\n- \`${FACTS.mcpTools[7]}\`——检查或等待续写链。`
        },
      },
      {
        title: { en: "Submit once, then poll", vi: "Gửi một lần rồi theo dõi", zh: "只提交一次，然后轮询" },
        body: {
          en: `Call ${FACTS.mcpTools[1]} with a unique request_id for each new operation. Then call ${FACTS.mcpTools[3]} with wait_seconds until succeeded, failed, cancelled, or needs_review. On success, use download_url. Reuse the same request_id and unchanged input only when retrying the same interrupted submission.`,
          vi: `Gọi ${FACTS.mcpTools[1]} với request_id riêng cho mỗi thao tác mới. Sau đó gọi ${FACTS.mcpTools[3]} với wait_seconds đến khi succeeded, failed, cancelled hoặc needs_review. Khi thành công, dùng download_url. Chỉ dùng lại request_id cùng dữ liệu không đổi khi thử lại chính lần gửi bị gián đoạn.`,
          zh: `调用 ${FACTS.mcpTools[1]} 时，每个新操作使用唯一的 request_id。然后调用 ${FACTS.mcpTools[3]}，传入 wait_seconds，直到 succeeded、failed、cancelled 或 needs_review。成功后使用 download_url。只在重试同一中断提交时，才重复使用相同的 request_id 和未改动的输入。`
        },
        code: {
          lang: "json",
          text: JSON.stringify(
            {
              kind: "image",
              prompt: "A ceramic cup on a wooden desk",
              request_id: `${FACTS.productId}-image-example-001`,
            },
            null,
            2,
          ),
        },
      },
      {
        title: { en: "Apply the retry rules", vi: "Tuân theo quy tắc thử lại", zh: "遵守重试规则" },
        body: {
          en: "Never resubmit running or needs_review work. Failed jobs may be retried only for PRE_SUBMIT_TRANSIENT or PROXY_FAILED, or once after a few minutes for PROVIDER_ERROR. A person must inspect needs_review work in the app.",
          vi: "Không gửi lại việc đang running hoặc needs_review. Chỉ thử lại việc thất bại với PRE_SUBMIT_TRANSIENT hoặc PROXY_FAILED, hoặc thử một lần sau vài phút với PROVIDER_ERROR. Việc needs_review cần người kiểm tra trong app.",
          zh: "永远不要重新提交 running 或 needs_review 的任务。失败的任务只在 PRE_SUBMIT_TRANSIENT 或 PROXY_FAILED 时可以重试，或在 PROVIDER_ERROR 时几分钟后重试一次。needs_review 的任务必须由人在应用内检查。"
        },
      },
      {
        title: { en: "Handle conversations and extensions", vi: "Xử lý hội thoại và nối video", zh: "处理会话与续写" },
        body: {
          en: `Keep conversation_id to continue a chat. A conversation_busy result means wait, not resubmit in a loop. Use ${FACTS.mcpTools[6]} only when ${FACTS.mcpTools[0]} reports the extension capability, then follow it with ${FACTS.mcpTools[7]}. Extra length and seamless continuity are not guaranteed.`,
          vi: `Giữ conversation_id để tiếp tục hội thoại. Khi nhận conversation_busy, hãy chờ, không gửi lặp. Chỉ dùng ${FACTS.mcpTools[6]} khi ${FACTS.mcpTools[0]} báo có khả năng nối video, rồi theo dõi bằng ${FACTS.mcpTools[7]}. Không đảm bảo độ dài tăng thêm hoặc chuyển cảnh liền mạch.`,
          zh: `保留 conversation_id 以继续会话。收到 conversation_busy 表示要等待，而不是循环重新提交。只有在 ${FACTS.mcpTools[0]} 报告支持续写能力时，才使用 ${FACTS.mcpTools[6]}，然后用 ${FACTS.mcpTools[7]} 跟进。额外时长和无缝衔接无法保证。`
        },
      },
    ],
    success: {
      en: "Your client tracks existing jobs, preserves request IDs, and stops for human review when required.",
      vi: "Ứng dụng của bạn theo dõi việc đã có, giữ request ID và dừng để người dùng kiểm tra khi cần.",
      zh: "你的客户端会跟踪已有任务、保留请求 ID，并在需要时停下来等待人工审核。"
    },
    troubleshoot: [
      {
        q: { en: "The request timed out. Should I create another?", vi: "Yêu cầu hết thời gian chờ. Có nên tạo lại?", zh: "请求超时了，要再创建一个吗？" },
        a: {
          en: "Check the existing job first. If retrying an interrupted submission, keep the same request_id and input to avoid duplicates.",
          vi: "Kiểm tra việc hiện có trước. Nếu thử lại lần gửi bị gián đoạn, giữ nguyên request_id và dữ liệu để tránh tạo trùng.",
          zh: "先检查已有任务。如果要重试中断的提交，请保持相同的 request_id 和输入，避免重复。"
        },
      },
      {
        q: { en: "Why can I not see another agent’s jobs?", vi: "Vì sao không thấy việc của agent khác?", zh: "为什么看不到其他 agent 的任务？" },
        a: {
          en: "The listing tool returns jobs created with the current API key.",
          vi: "Công cụ liệt kê trả về các việc được tạo bằng khoá API hiện tại.",
          zh: "列表工具只返回用当前 API 密钥创建的任务。"
        },
      },
      {
        q: { en: "Does chat verify Muse’s answer?", vi: "Chat có kiểm chứng câu trả lời Muse không?", zh: "聊天会验证 Muse 的答案吗？" },
        a: {
          en: "No. The answer is returned unchanged. Check research claims and attached files yourself.",
          vi: "Không. Câu trả lời được trả nguyên văn. Bạn cần tự kiểm tra thông tin nghiên cứu và tệp đính kèm.",
          zh: "不会。答案原样返回。请自己核对研究内容和附加文件。"
        },
      },
    ],
    related: ["connect-overview", "rest-api", "queue", "accounts-and-limits"],
    appRoute: "/settings/api",
    advanced: true,
    updated: "2026-11-02",
  },
  {
    slug: "rest-api",
    chapter: "agents",
    order: 5,
    title: { en: "REST API reference", vi: "Tra cứu REST API", zh: "REST API 参考" },
    summary: {
      en: "Use the local REST API with a Bearer key, inspect its OpenAPI document, and follow jobs without submitting duplicates.",
      vi: "Dùng REST API trên máy với khoá Bearer, xem tài liệu OpenAPI và theo dõi công việc mà không gửi lại yêu cầu trùng lặp.",
      zh: "使用带 Bearer 密钥的本地 REST API，查看它的 OpenAPI 文档，跟进任务且不重复提交。"
    },
    before: [
      {
        en: "Enable API for agents and create a key with the required scope.",
        vi: "Bật API cho agent và tạo khoá có quyền phù hợp.",
        zh: "开启面向 agent 的 API，并创建一个具有所需权限的密钥。"
      },
      {
        en: `The default base URL is ${FACTS.localRestUrl}. Use the app’s current address if its port changed.`,
        vi: `URL gốc mặc định là ${FACTS.localRestUrl}. Nếu đã đổi cổng, dùng địa chỉ hiện tại trong app.`,
        zh: `默认基础 URL 是 ${FACTS.localRestUrl}。如果更改了端口，请使用应用内的当前地址。`
      },
    ],
    steps: [
      {
        title: { en: "Check server access", vi: "Kiểm tra kết nối máy chủ", zh: "检查服务器访问" },
        body: {
          en: "Open Settings › API & agent. Keep access local unless another machine needs it. Send your key in Authorization: Bearer, never in the URL.",
          vi: "Mở Cài đặt › API & agent. Giữ kết nối chỉ trên máy này nếu máy khác không cần dùng. Gửi khoá bằng Authorization: Bearer, không đặt trong URL.",
          zh: "打开「设置 › API 与 agent」。除非其他机器需要访问，否则保持仅本地访问。密钥通过 Authorization: Bearer 发送，绝不要放在 URL 中。"
        },
        shot: "settings-api",
      },
      {
        title: { en: "Read status", vi: "Đọc trạng thái", zh: "读取状态" },
        body: {
          en: "Run this in a terminal, replacing the placeholder with your own key. On Windows, curl.exe avoids a PowerShell command alias.",
          vi: "Chạy lệnh này trong cửa sổ dòng lệnh và thay khoá mẫu bằng khoá của bạn. Trên Windows, curl.exe tránh trùng tên lệnh trong PowerShell.",
          zh: "在终端中运行这条命令，把占位符换成你自己的密钥。在 Windows 上，curl.exe 可以避免与 PowerShell 命令别名冲突。"
        },
        code: {
          lang: "powershell",
          text: `curl.exe "${FACTS.localRestUrl}/status" -H "Authorization: Bearer ${FACTS.placeholderKey}"`,
        },
      },
      {
        title: { en: "Choose an endpoint", vi: "Chọn đường dẫn API", zh: "选择 API 路径" },
        body: {
          en: "Paths below are relative to the base URL:\n- GET /health — liveness; no key required.\n- GET /openapi.json — API schema; no key required.\n- GET /status — readiness and capabilities.\n- GET or POST /jobs — list or submit jobs.\n- GET /jobs/{id} — job details and results.\n- POST /jobs/{id}/cancel — request cancellation.\n- POST /references — upload reference bytes.\n- GET or HEAD /assets/{id}/content — fetch an output with a key or valid signature.\n- GET /conversations/{id} — read a conversation.\n- POST /assets/{id}/extend or /conversations/{id}/extend — start an extension.\n- GET /extend-chains/{id} — read an extension chain.\n- POST /extend-chains/{id}/cancel — cancel a chain.",
          vi: "Các đường dẫn sau được nối vào URL gốc:\n- GET /health — kiểm tra máy chủ; không cần khoá.\n- GET /openapi.json — cấu trúc API; không cần khoá.\n- GET /status — trạng thái và khả năng hỗ trợ.\n- GET hoặc POST /jobs — liệt kê hoặc gửi việc.\n- GET /jobs/{id} — chi tiết và kết quả công việc.\n- POST /jobs/{id}/cancel — yêu cầu huỷ.\n- POST /references — tải dữ liệu tệp tham chiếu lên.\n- GET hoặc HEAD /assets/{id}/content — lấy kết quả bằng khoá hoặc chữ ký hợp lệ.\n- GET /conversations/{id} — đọc hội thoại.\n- POST /assets/{id}/extend hoặc /conversations/{id}/extend — bắt đầu nối video.\n- GET /extend-chains/{id} — đọc chuỗi nối video.\n- POST /extend-chains/{id}/cancel — huỷ chuỗi.",
          zh: "以下路径相对于基础 URL：\n- GET /health——存活检查；不需要密钥。\n- GET /openapi.json——API 结构；不需要密钥。\n- GET /status——就绪状态与支持的能力。\n- GET 或 POST /jobs——列出或提交任务。\n- GET /jobs/{id}——任务详情与结果。\n- POST /jobs/{id}/cancel——请求取消。\n- POST /references——上传参考文件数据。\n- GET 或 HEAD /assets/{id}/content——用密钥或有效签名获取输出。\n- GET /conversations/{id}——读取会话。\n- POST /assets/{id}/extend 或 /conversations/{id}/extend——开始续写。\n- GET /extend-chains/{id}——读取续写链。\n- POST /extend-chains/{id}/cancel——取消续写链。"
        },
      },
      {
        title: { en: "Use the live schema", vi: "Dùng tài liệu từ máy chủ", zh: "使用实时结构文档" },
        body: {
          en: `The server exposes its OpenAPI document at ${FACTS.localRestUrl}/openapi.json without a key. Read it for request fields and responses. Give each new submission a unique request_id; preserve it when retrying the same interrupted request.`,
          vi: `Máy chủ cung cấp tài liệu OpenAPI tại ${FACTS.localRestUrl}/openapi.json, không cần khoá. Xem tài liệu để biết trường gửi và dữ liệu trả về. Mỗi lần gửi mới dùng request_id riêng; giữ nguyên khi thử lại chính yêu cầu bị gián đoạn.`,
          zh: `服务器在 ${FACTS.localRestUrl}/openapi.json 提供 OpenAPI 文档，不需要密钥。请阅读它了解请求字段和响应。每次新提交使用唯一的 request_id；重试同一中断请求时保留它。`
        },
      },
      {
        title: { en: "Follow the existing job", vi: "Theo dõi việc đã gửi", zh: "跟进已发送的任务" },
        body: {
          en: "Poll the returned job ID. Never resubmit running or needs_review work. Follow the [MCP retry rules](/docs/mcp-tools), which apply to the same underlying jobs.",
          vi: "Theo dõi bằng ID công việc được trả về. Không gửi lại việc running hoặc needs_review. Tuân theo [quy tắc thử lại MCP](/docs/mcp-tools), vì hai cách kết nối dùng cùng hệ thống công việc.",
          zh: "用返回的任务 ID 轮询。永远不要重新提交 running 或 needs_review 的任务。遵守 [MCP 重试规则](/docs/mcp-tools)，它们适用于同一批底层任务。"
        },
      },
    ],
    success: {
      en: "An authenticated status request succeeds and your client can read the server’s schema.",
      vi: "Yêu cầu trạng thái có xác thực thành công và ứng dụng của bạn đọc được cấu trúc API.",
      zh: "认证后的状态请求成功，客户端可以读取服务器的结构文档。"
    },
    troubleshoot: [
      {
        q: { en: "Why does health work but status fails?", vi: "Vì sao health chạy được nhưng status lỗi?", zh: "为什么 health 能用，status 却失败？" },
        a: {
          en: "Health is public. Status requires an active key in the Bearer header.",
          vi: "Health không yêu cầu khoá. Status cần khoá còn hiệu lực trong header Bearer.",
          zh: "health 是公开的。status 需要在 Bearer 请求头中提供有效的密钥。"
        },
      },
      {
        q: { en: "Why do I get not found?", vi: "Vì sao nhận lỗi không tìm thấy?", zh: "为什么会收到未找到的错误？" },
        a: {
          en: `Check that the base includes ${FACTS.restBase}, and compare the route and method with the OpenAPI document.`,
          vi: `Kiểm tra URL gốc có ${FACTS.restBase}, rồi đối chiếu đường dẫn và phương thức với tài liệu OpenAPI.`,
          zh: `检查基础 URL 是否包含 ${FACTS.restBase}，并对照 OpenAPI 文档核对路径和方法。`
        },
      },
    ],
    related: ["api-keys", "mcp-tools", "remote-access"],
    appRoute: "/settings/api",
    advanced: true,
    updated: "2026-11-02",
  },
];
