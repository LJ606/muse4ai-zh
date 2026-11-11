import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_ACCOUNTS: DocArticle[] = [
  {
    slug: "accounts-and-limits",
    chapter: "accounts",
    order: 1,
    title: {
      en: "Accounts and usage limits",
      vi: "Tài khoản và hạn mức sử dụng",
      zh: "账号与用量额度"
    },
    summary: {
      en: "Check each Muse account’s usage, paused state, and parallel jobs before sending more work from the app or an agent.",
      vi: "Xem hạn mức, trạng thái tạm dừng và số việc song song của từng tài khoản Muse trước khi gửi thêm việc từ app hoặc agent.",
      zh: "在从应用或 agent 发送更多任务之前，检查每个 Muse 账号的用量、暂停状态和并行任务数。"
    },
    before: [
      {
        en: "Add and sign in to your own Muse account first.",
        vi: "Trước tiên, thêm và đăng nhập tài khoản Muse của bạn.",
        zh: "先添加自己的 Muse 账号并登录。"
      },
      {
        en: `${FACTS.productName} is free. Creating images and videos uses your Muse account’s usage limit.`,
        vi: `${FACTS.productName} miễn phí. Việc tạo ảnh và video sử dụng hạn mức của tài khoản Muse của bạn.`,
        zh: `${FACTS.productName} 免费。生成图片和视频会消耗 Muse 账号的用量额度。`
      },
      {
        en: "Jobs on one account share that account’s Muse memory. Use a separate account for research you want to keep apart.",
        vi: "Các việc trên cùng tài khoản dùng chung bộ nhớ Muse của tài khoản đó. Dùng tài khoản riêng cho nội dung nghiên cứu cần tách biệt.",
        zh: "同一账号上的任务共享该账号的 Muse 记忆。想把研究内容分开，请使用单独的账号。"
      },
    ],
    steps: [
      {
        title: { en: "Check account readiness", vi: "Kiểm tra tài khoản", zh: "检查账号是否就绪" },
        body: {
          en: "Open Accounts. Read each account’s state before assigning work. A paused account needs attention; adding parallel jobs will not fix it.",
          vi: "Mở Tài khoản. Xem trạng thái từng tài khoản trước khi giao việc. Tài khoản bị tạm dừng cần được xử lý; tăng số việc song song không giải quyết được vấn đề.",
          zh: "打开「账号」，在分配任务前查看每个账号的状态。已暂停的账号需要处理；增加并行任务解决不了问题。"
        },
        shot: "accounts-list",
      },
      {
        title: { en: "Read the usage panel", vi: "Xem bảng hạn mức", zh: "查看用量面板" },
        body: {
          en: "Inspect the weekly limit and extra part reported by Muse. If Muse reports nothing left, automatic assignment skips that account.",
          vi: "Xem hạn mức tuần và phần bổ sung do Muse cung cấp. Khi Muse báo đã hết hạn mức, chế độ giao việc tự động sẽ bỏ qua tài khoản đó.",
          zh: "查看 Muse 报告的每周额度和附加部分。如果 Muse 报告额度已用完，自动分配会跳过该账号。"
        },
        shot: "accounts-quota",
      },
      {
        title: { en: "Set parallel work carefully", vi: "Chọn số việc song song", zh: "谨慎设置并行任务数" },
        body: {
          en: "Open the account’s settings and choose its maximum parallel jobs. This controls simultaneous work, not the usage limit granted by Muse.",
          vi: "Mở cài đặt tài khoản và chọn số việc song song tối đa. Tuỳ chọn này chỉ điều khiển số việc chạy cùng lúc, không tăng hạn mức Muse cấp.",
          zh: "打开账号设置，选择它的最大并行任务数。这控制的是同时运行的任务量，而不是 Muse 授予的用量额度。"
        },
        shot: "accounts-mode",
      },
      {
        title: { en: "Resolve pauses before continuing", vi: "Xử lý trước khi chạy tiếp", zh: "继续之前先处理暂停" },
        body: {
          en: "For verification or expired sign-in, open the account window and complete the requested action yourself. For a limit or unsupported region, respect Muse’s restriction; do not change proxies to get around it.",
          vi: "Nếu cần xác minh hoặc đăng nhập lại, mở cửa sổ tài khoản và tự hoàn tất yêu cầu. Nếu hết hạn mức hoặc vùng chưa được hỗ trợ, tuân theo giới hạn của Muse; không đổi proxy để né giới hạn.",
          zh: "遇到验证或登录过期时，打开账号窗口，自己完成要求的操作。遇到额度或不受支持的地区时，请遵守 Muse 的限制；不要更换代理来规避它。"
        },
      },
    ],
    success: {
      en: "You know which accounts can take work and which must wait or need your attention.",
      vi: "Bạn biết tài khoản nào có thể nhận việc và tài khoản nào cần chờ hoặc cần bạn xử lý.",
      zh: "你知道哪些账号可以接受任务，哪些需要等待或处理。"
    },
    troubleshoot: [
      {
        q: { en: "Why is an account skipped?", vi: "Vì sao tài khoản bị bỏ qua?", zh: "账号为什么被跳过？" },
        a: {
          en: "Check its state and usage panel. An exhausted or paused account is not ready for automatic assignment.",
          vi: "Kiểm tra trạng thái và bảng hạn mức. Tài khoản hết hạn mức hoặc bị tạm dừng chưa thể nhận việc tự động.",
          zh: "检查它的状态和用量面板。额度用完或已暂停的账号不适合自动分配。"
        },
      },
      {
        q: { en: "Does more parallel work give more usage?", vi: "Chạy song song có tăng hạn mức không?", zh: "并行任务越多，用量额度越多吗？" },
        a: {
          en: "No. It only changes how much work can run at once. Muse still controls the account’s usage limit.",
          vi: "Không. Tuỳ chọn này chỉ đổi số việc có thể chạy cùng lúc. Muse vẫn quyết định hạn mức tài khoản.",
          zh: "不是。它只改变可以同时运行的任务量。Muse 仍然掌控账号的用量额度。"
        },
      },
      {
        q: { en: "Why do research answers share context?", vi: "Vì sao câu trả lời nghiên cứu dùng chung ngữ cảnh?", zh: "研究答案为什么共享上下文？" },
        a: {
          en: "Jobs on one account share its Muse memory and history. Use a separate account and manage Muse memory yourself when separation matters.",
          vi: "Các việc trên một tài khoản dùng chung bộ nhớ và lịch sử Muse. Khi cần tách biệt, dùng tài khoản riêng và tự quản lý bộ nhớ trong Muse.",
          zh: "同一账号上的任务共享它的 Muse 记忆和历史记录。需要分开时，请使用单独的账号，并自己管理 Muse 记忆。"
        },
      },
    ],
    related: ["add-muse-account", "proxies-and-modes", "queue"],
    appRoute: "/accounts",
    updated: "2026-11-02",
  },
  {
    slug: "proxies-and-modes",
    chapter: "accounts",
    order: 2,
    title: {
      en: "Proxies and connection modes",
      vi: "Proxy và chế độ kết nối",
      zh: "代理与连接方式"
    },
    summary: {
      en: "Choose a proxy and connection mode for each account, and understand when Auto pauses instead of switching paths.",
      vi: "Chọn proxy và chế độ kết nối cho từng tài khoản, đồng thời hiểu khi nào Tự động tạm dừng thay vì đổi đường kết nối.",
      zh: "为每个账号选择代理和连接方式，并了解「自动」何时会暂停而不是切换路径。"
    },
    before: [
      {
        en: "Have a working proxy you are allowed to use.",
        vi: "Chuẩn bị proxy hoạt động và bạn được phép sử dụng.",
        zh: "准备一个你有权使用的可用代理。"
      },
      {
        en: "Each account uses its assigned proxy. There is no direct-connection fallback.",
        vi: "Mỗi tài khoản dùng proxy được gán. App không tự chuyển sang kết nối trực tiếp.",
        zh: "每个账号使用分配给它的代理。没有直连备用方案。"
      },
      {
        en: `These settings control how ${FACTS.productName} reaches Muse, not how an agent reaches the app.`,
        vi: `Các cài đặt này điều khiển cách ${FACTS.productName} kết nối tới Muse, không phải cách agent kết nối tới app.`,
        zh: `这些设置控制 ${FACTS.productName} 如何连接 Muse，而不是 agent 如何连接应用。`
      },
    ],
    steps: [
      {
        title: { en: "Test your proxies", vi: "Kiểm tra proxy", zh: "测试代理" },
        body: {
          en: "Open Settings › Proxy and use Test all. Fix a failing proxy before assigning it to an account.",
          vi: "Mở Cài đặt › Proxy và kiểm tra toàn bộ danh sách. Sửa proxy lỗi trước khi gán cho tài khoản.",
          zh: "打开「设置 › 代理」，使用「全部测试」。在把代理分配给账号之前，先修复有问题的代理。"
        },
        shot: "settings-proxy",
      },
      {
        title: { en: "Assign the account’s proxy", vi: "Gán proxy cho tài khoản", zh: "为账号分配代理" },
        body: {
          en: "In Accounts, use the account card’s menu to change its proxy. Each proxy shows which accounts already use it; sharing is allowed, but those accounts go out through the same IP address. A failed proxy does not cause the account to connect directly.",
          vi: "Trong Tài khoản, mở menu trên thẻ tài khoản để đổi proxy. Mỗi proxy ghi rõ tài khoản nào đang dùng; dùng chung được, nhưng các tài khoản đó sẽ ra cùng một địa chỉ IP. Khi proxy lỗi, tài khoản không tự kết nối trực tiếp.",
          zh: "在「账号」中，使用账号卡片上的菜单更换它的代理。每个代理都会显示哪些账号正在使用它；可以共用，但这些账号会通过同一个 IP 地址访问。代理出问题时，账号不会转为直连。"
        },
      },
      {
        title: { en: "Choose a connection mode", vi: "Chọn chế độ kết nối", zh: "选择连接方式" },
        body: {
          en: "Open the execution method button on the account card. Auto (recommended) prefers HTTP and switches to page control only for technical errors. HTTP only uses the lighter channel; UI only controls the account’s Muse page and uses more memory. Changing the method applies to newly sent jobs.",
          vi: "Bấm nút cách chạy trên thẻ tài khoản. Tự động (khuyên dùng) ưu tiên HTTP và chỉ chuyển sang điều khiển trang khi gặp lỗi kỹ thuật. Chỉ HTTP dùng kênh nhẹ hơn; Chỉ giao diện điều khiển trang Muse của tài khoản và tốn RAM hơn. Thay đổi áp dụng cho việc gửi mới.",
          zh: "打开账号卡片上的执行方式按钮。「自动」（推荐）优先使用 HTTP，只在遇到技术错误时切换到页面控制。「仅 HTTP」使用更轻量的通道；「仅界面」控制该账号的 Muse 页面，占用更多内存。更改方式只对新发送的任务生效。"
        },
        shot: "accounts-mode",
      },
      {
        title: { en: "Respect account pauses", vi: "Tuân theo trạng thái tạm dừng", zh: "遵守账号暂停状态" },
        body: {
          en: "Verification, usage limits, and unsupported regions pause the account. Auto does not switch paths to get around these restrictions.",
          vi: "Yêu cầu xác minh, hết hạn mức và vùng chưa hỗ trợ sẽ làm tài khoản tạm dừng. Tự động không đổi đường kết nối để né các giới hạn này.",
          zh: "验证、用量额度和不受支持的地区都会让账号暂停。「自动」不会切换路径来规避这些限制。"
        },
      },
    ],
    success: {
      en: "The account has a tested proxy and an appropriate connection mode, with no direct fallback.",
      vi: "Tài khoản đã có proxy được kiểm tra và chế độ kết nối phù hợp, không có đường dự phòng trực tiếp.",
      zh: "账号已有经过测试的代理和合适的连接方式，没有直连备用方案。"
    },
    troubleshoot: [
      {
        q: { en: "Why does Proxy error stop the account?", vi: "Vì sao lỗi proxy làm tài khoản dừng?", zh: "为什么代理错误会让账号停下来？" },
        a: {
          en: "The app keeps the account on its assigned proxy. Test or replace that proxy instead of expecting a direct fallback.",
          vi: "App giữ tài khoản trên proxy đã gán. Hãy kiểm tra hoặc thay proxy, thay vì chờ app tự kết nối trực tiếp.",
          zh: "应用会让账号保持在分配的代理上。请测试或更换该代理，不要指望直连备用方案。"
        },
      },
      {
        q: { en: "Will UI only fix a usage limit?", vi: "Chỉ giao diện có xử lý hết hạn mức không?", zh: "「仅界面」能解决用量额度问题吗？" },
        a: {
          en: "No. A connection mode does not change the limits or region rules of your Muse account.",
          vi: "Không. Chế độ kết nối không thay đổi hạn mức hay quy định vùng của tài khoản Muse.",
          zh: "不能。连接方式不会改变 Muse 账号的额度或地区规则。"
        },
      },
    ],
    related: ["accounts-and-limits", "add-muse-account", "troubleshooting"],
    appRoute: "/settings/proxy",
    updated: "2026-11-04",
  },
];
