import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_HELP: DocArticle[] = [
  {
    slug: "troubleshooting",
    chapter: "help",
    order: 1,
    title: { en: "Troubleshooting", vi: "Xử lý sự cố", zh: "故障排查" },
    summary: {
      en: "Resolve common sign-in, queue, connection, and installation problems without accidentally sending the same job twice.",
      vi: "Xử lý lỗi đăng nhập, hàng chờ, kết nối và cài đặt thường gặp mà không vô tình gửi cùng một công việc thêm lần nữa.",
      zh: "解决常见的登录、队列、连接和安装问题，且不会不小心把同一个任务发送两次。"
    },
    before: [
      {
        en: "Keep the error message and note which account, job, or agent is affected.",
        vi: "Giữ thông báo lỗi và ghi lại tài khoản, công việc hoặc agent gặp lỗi.",
        zh: "保留错误信息，并记下受影响的账号、任务或 agent。"
      },
      {
        en: "Do not resubmit running or needs_review jobs while investigating.",
        vi: "Không gửi lại việc running hoặc needs_review trong lúc kiểm tra.",
        zh: "排查期间，不要重新提交运行中或 needs_review 的任务。"
      },
    ],
    steps: [
      {
        title: { en: "Inspect the existing job", vi: "Kiểm tra việc hiện có", zh: "检查已有任务" },
        body: {
          en: "Open Queue and select the job. Read its state and error before retrying. For needs_review, inspect Muse history rather than immediately creating another job.",
          vi: "Mở Hàng chờ và chọn công việc. Đọc trạng thái, lỗi trước khi thử lại. Với needs_review, kiểm tra lịch sử Muse thay vì tạo ngay việc mới.",
          zh: "打开队列并选择任务。重试之前，先读它的状态和错误。对于 needs_review，请检查 Muse 历史记录，而不是立即创建另一个任务。"
        },
        shot: "queue-drawer",
      },
      {
        title: { en: "Check the affected connection", vi: "Kiểm tra kết nối liên quan", zh: "检查受影响的连接" },
        body: {
          en: "For account problems, check Accounts and the assigned proxy. For agent problems, check Settings › API & agent, the current address, and the key.",
          vi: "Nếu lỗi tài khoản, kiểm tra Tài khoản và proxy đã gán. Nếu lỗi agent, kiểm tra Cài đặt › API & agent, địa chỉ hiện tại và khoá.",
          zh: "账号出问题时，检查「账号」和分配的代理。Agent 出问题时，检查「设置 › API 与 agent」、当前地址和密钥。"
        },
      },
      {
        title: { en: "Collect a useful report", vi: "Chuẩn bị báo lỗi hữu ích", zh: "准备一份有用的报告" },
        body: {
          en: "Record the app version, what you tried, and the exact error. Export a diagnostics ZIP from Settings › Diagnostics. Remove exposed keys from anything you share.",
          vi: "Ghi phiên bản app, thao tác đã thử và nguyên văn lỗi. Xuất ZIP trong Cài đặt › Chẩn đoán. Xoá khoá bị lộ khỏi mọi nội dung bạn chia sẻ.",
          zh: "记录应用版本、你尝试过的操作和确切的错误。从「设置 › 诊断」导出诊断 ZIP。分享内容前，删除其中暴露的密钥。"
        },
        shot: "settings-diagnostics",
      },
    ],
    success: {
      en: "You have resolved the issue or collected a clear report without duplicating work.",
      vi: "Bạn đã xử lý được lỗi hoặc có báo cáo rõ ràng mà không tạo việc trùng.",
      zh: "你已经解决了问题，或收集了一份清晰的报告，且没有重复工作。"
    },
    troubleshoot: [
      {
        q: { en: "The account needs verification or sign-in.", vi: "Tài khoản cần xác minh hoặc đăng nhập lại.", zh: "账号需要验证或重新登录。" },
        a: {
          en: "Open the account window using Take over, complete the requested action yourself, then check the session again. Do not automate around verification.",
          vi: "Mở cửa sổ tài khoản bằng thao tác tiếp quản, tự hoàn tất yêu cầu rồi kiểm tra lại phiên. Không tự động hoá để né xác minh.",
          zh: "使用「接管」打开账号窗口，自己完成要求的操作，然后再次检查会话。不要用自动化手段规避验证。"
        },
      },
      {
        q: { en: "The account is paused for a usage limit.", vi: "Tài khoản tạm dừng vì hết hạn mức.", zh: "账号因用量额度而暂停。" },
        a: {
          en: "Check the usage panel and wait for availability reported by Muse. Increasing parallel work does not restore usage.",
          vi: "Xem bảng hạn mức và chờ Muse báo có thể dùng lại. Tăng số việc song song không khôi phục hạn mức.",
          zh: "查看用量面板，等待 Muse 报告恢复可用。增加并行任务并不能恢复用量。"
        },
      },
      {
        q: { en: "Muse reports an unsupported region.", vi: "Muse báo vùng chưa được hỗ trợ.", zh: "Muse 报告地区不受支持。" },
        a: {
          en: "Stop using the affected account for this work and respect Muse’s restriction. Do not use proxies or connection modes to bypass it.",
          vi: "Dừng dùng tài khoản đó cho công việc này và tuân theo giới hạn của Muse. Không dùng proxy hay chế độ kết nối để né.",
          zh: "停止用该账号做这项工作，并遵守 Muse 的限制。不要使用代理或连接方式来规避它。"
        },
      },
      {
        q: { en: "My Quick tunnel link stopped working.", vi: "Liên kết đường hầm tạm thời không hoạt động.", zh: "我的临时隧道链接失效了。" },
        a: {
          en: "Its address changes each time the app starts. Copy the current public MCP address into the agent and retain its key.",
          vi: "Địa chỉ đổi mỗi lần app khởi động. Chép địa chỉ MCP công khai hiện tại vào agent và giữ cấu hình khoá.",
          zh: "它的地址每次随应用启动而变化。请把当前公开的 MCP 地址复制到 agent 中，并保留密钥配置。"
        },
      },
      {
        q: { en: "The agent says unauthorized.", vi: "Agent báo không được cấp quyền.", zh: "Agent 报告未获授权。" },
        a: {
          en: `Use an active key in Authorization: Bearer. ${FACTS.placeholderKey} is only a placeholder. If the original key is lost, revoke it and create another.`,
          vi: `Dùng khoá còn hiệu lực trong Authorization: Bearer. ${FACTS.placeholderKey} chỉ là khoá mẫu. Nếu mất khoá ban đầu, thu hồi và tạo khoá mới.`,
          zh: `在 Authorization: Bearer 中使用有效的密钥。${FACTS.placeholderKey} 只是占位符。如果原始密钥丢失，请撤销它并创建一个新的。`
        },
      },
      {
        q: { en: "The API port is busy.", vi: "Cổng API đang được sử dụng.", zh: "API 端口被占用。" },
        a: {
          en: "Use the free port suggested in Settings › API & agent, then copy the updated address into every affected agent.",
          vi: "Dùng cổng trống được gợi ý trong Cài đặt › API & agent, rồi cập nhật địa chỉ cho các agent liên quan.",
          zh: "使用「设置 › API 与 agent」中建议的空闲端口，然后把更新后的地址复制到每个受影响的 agent 中。"
        },
      },
      {
        q: { en: "Windows SmartScreen warns about the installer.", vi: "Windows SmartScreen cảnh báo bộ cài.", zh: "Windows SmartScreen 对安装程序发出警告。" },
        a: {
          en: "The app is not code-signed. Only if you trust the downloaded package, choose More info → Run anyway. Do not disable Windows protection globally.",
          vi: "App chưa được ký mã. Chỉ khi tin tưởng gói đã tải, chọn More info → Run anyway. Không tắt toàn bộ cơ chế bảo vệ Windows.",
          zh: "应用没有代码签名。只有在信任已下载的安装包时，才选择「More info → Run anyway」。不要全局关闭 Windows 保护。"
        },
      },
      {
        q: { en: "A job needs review.", vi: "Một công việc cần kiểm tra.", zh: "有个任务需要审核。" },
        a: {
          en: "The app is unsure whether Muse received it. Inspect the job and Muse history. Import an existing result when available; sending again can create a duplicate and use more of your limit.",
          vi: "App chưa chắc Muse đã nhận việc. Kiểm tra công việc và lịch sử Muse. Nhập kết quả đã có nếu tìm thấy; gửi lại có thể tạo trùng và dùng thêm hạn mức.",
          zh: "应用不确定 Muse 是否已收到它。请检查该任务和 Muse 历史记录。如果已有结果，请导入；重新发送可能产生重复任务并消耗更多额度。"
        },
      },
      {
        q: { en: "The video is shorter than requested.", vi: "Video ngắn hơn yêu cầu.", zh: "视频比要求得短。" },
        a: {
          en: `Muse clips are about ${FACTS.media.videoSeconds} seconds. Prompting for more does not guarantee length. Extension is available only when reported by the server, and added duration is not guaranteed.`,
          vi: `Video Muse thường dài khoảng ${FACTS.media.videoSeconds} giây. Yêu cầu dài hơn trong prompt không đảm bảo độ dài. Chỉ nối video khi máy chủ báo hỗ trợ; thời lượng tăng thêm cũng không được đảm bảo.`,
          zh: `Muse 的片段大约 ${FACTS.media.videoSeconds} 秒。在提示词中要求更长并不能保证时长。只有在服务器报告支持时才能续写，增加的时长也无法保证。`
        },
      },
      {
        q: { en: "The app disappeared after I clicked X.", vi: "App biến mất sau khi tôi bấm X.", zh: "我点了 X 后应用消失了。" },
        a: {
          en: "It is hidden in the system tray. Open it from the tray icon. To stop it fully, right-click that icon and choose Quit.",
          vi: "App đang ẩn ở khay hệ thống. Mở lại bằng biểu tượng ở khay. Muốn dừng hẳn, bấm phải biểu tượng đó rồi chọn thoát.",
          zh: "它藏在系统托盘里。请从托盘图标打开它。要完全退出，请右键点击该图标并选择「退出」。"
        },
      },
      {
        q: { en: "The account reports a proxy error.", vi: "Tài khoản báo lỗi proxy.", zh: "账号报告代理错误。" },
        a: {
          en: "Test proxies in Settings › Proxy and fix or replace the assigned proxy. The app does not fall back to a direct connection.",
          vi: "Kiểm tra proxy trong Cài đặt › Proxy, rồi sửa hoặc thay proxy đã gán. App không tự chuyển sang kết nối trực tiếp.",
          zh: "在「设置 › 代理」中测试代理，修复或更换分配的代理。应用不会退回直连。"
        },
      },
      {
        q: { en: "Downloads paused because the disk is nearly full.", vi: "Tải kết quả tạm dừng vì ổ gần đầy.", zh: "下载因磁盘快满而暂停。" },
        a: {
          en: "Free space on the output drive or change the output folder in Settings › General. Downloads can resume when space is available.",
          vi: "Dọn dung lượng ổ lưu kết quả hoặc đổi thư mục trong Cài đặt › Chung. Việc tải có thể tiếp tục khi có đủ chỗ.",
          zh: "清理输出磁盘的空间，或在「设置 › 通用」中更换输出文件夹。空间足够后，下载可以继续。"
        },
      },
    ],
    related: ["accounts-and-limits", "remote-access", "updates-and-backups", "queue"],
    appRoute: "/settings/diagnostics",
    updated: "2026-11-02",
  },
  {
    slug: "glossary",
    chapter: "help",
    order: 2,
    title: { en: "Glossary", vi: "Giải thích thuật ngữ", zh: "术语表" },
    summary: {
      en: "Look up unfamiliar app and agent terms in plain language, then return to the guide you were reading with more context.",
      vi: "Tra nghĩa các từ lạ trong app và khi dùng agent bằng lời dễ hiểu, rồi quay lại bài hướng dẫn bạn đang đọc để làm tiếp.",
      zh: "用通俗语言查询应用和 agent 中不熟悉的术语，然后带着更多背景回到正在阅读的指南。"
    },
    before: [
      {
        en: "You do not need programming knowledge to use this glossary.",
        vi: "Bạn không cần biết lập trình để dùng phần giải thích này.",
        zh: "使用本术语表不需要编程知识。"
      },
      {
        en: "Keep the unfamiliar word or the guide you were reading in mind.",
        vi: "Ghi nhớ từ chưa rõ hoặc bài hướng dẫn bạn đang đọc.",
        zh: "记住不熟悉的词语，或你正在阅读的指南。"
      },
    ],
    steps: [
      {
        title: { en: "Start from your guide", vi: "Bắt đầu từ bài hướng dẫn", zh: "从你的指南开始" },
        body: {
          en: `Open Guide in ${FACTS.productName}. In supported articles, the first use of a glossary term links to its explanation.`,
          vi: `Mở Hướng dẫn trong ${FACTS.productName}. Trong bài có hỗ trợ, lần xuất hiện đầu của thuật ngữ sẽ liên kết tới phần giải thích.`,
          zh: `在 ${FACTS.productName} 中打开「指南」。在受支持的文章中，术语首次出现时会链接到它的解释。`
        },
        shot: "guide-home",
      },
      {
        title: { en: "Read the list below", vi: "Xem danh sách bên dưới", zh: "阅读下面的列表" },
        body: {
          en: "The glossary list appears automatically below this article. Find the term and read its short explanation.",
          vi: "Danh sách thuật ngữ tự hiển thị bên dưới bài này. Tìm từ cần biết và đọc phần giải thích ngắn.",
          zh: "术语表会自动显示在这篇文章下方。找到术语，阅读它的简短解释。"
        },
      },
      {
        title: { en: "Return to the task", vi: "Quay lại việc đang làm", zh: "回到手头的任务" },
        body: {
          en: "Return to your guide and continue the next step. For connection terms, start with [Connect your AI agent](/docs/connect-overview).",
          vi: "Quay lại bài hướng dẫn và làm tiếp. Với thuật ngữ kết nối, bắt đầu từ [Kết nối AI agent](/docs/connect-overview).",
          zh: "回到你的指南，继续下一步。连接类术语请从 [连接 AI agent](/docs/connect-overview) 开始。"
        },
      },
    ],
    success: {
      en: "You understand the term well enough to continue your task.",
      vi: "Bạn hiểu thuật ngữ đủ để tiếp tục việc đang làm.",
      zh: "你已经充分理解了术语，可以继续手头的任务。"
    },
    troubleshoot: [
      {
        q: { en: "Do I need to memorize these terms?", vi: "Có cần học thuộc các từ này không?", zh: "需要记住这些术语吗？" },
        a: {
          en: "No. Look them up when needed and follow the practical steps in the guide.",
          vi: "Không. Tra khi cần và làm theo các bước thực tế trong bài hướng dẫn.",
          zh: "不需要。需要时再查，并按指南中的实际步骤操作。"
        },
      },
      {
        q: { en: "What if a term is not listed?", vi: "Nếu không có từ cần tìm thì sao?", zh: "要找的术语不在列表中怎么办？" },
        a: {
          en: "Read the surrounding explanation in the relevant guide. For an agent-specific term, consult that agent’s documentation.",
          vi: "Đọc phần giải thích xung quanh trong bài liên quan. Với từ riêng của một agent, xem tài liệu của agent đó.",
          zh: "阅读相关指南中围绕它的解释。Agent 专属术语请查阅该 agent 的文档。"
        },
      },
    ],
    related: ["what-is-muse4ai", "connect-overview", "troubleshooting"],
    appRoute: "/guide",
    updated: "2026-11-02",
  },
];
