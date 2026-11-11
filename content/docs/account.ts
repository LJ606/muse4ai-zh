import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_ACCOUNT: DocArticle[] = [
  {
    slug: "add-muse-account",
    chapter: "account",
    order: 1,
    title: {
      en: "Add a Muse account",
      vi: "Thêm tài khoản Muse",
      zh: "添加 Muse 账号"
    },
    summary: {
      en: "Add a Muse account with a proxy, sign in yourself, and check that the account is ready to accept jobs.",
      vi: "Thêm tài khoản Muse với một proxy, tự đăng nhập trong cửa sổ Muse và kiểm tra tài khoản đã sẵn sàng nhận việc.",
      zh: "通过代理添加 Muse 账号，自己完成登录，并检查账号是否已就绪、可以接受任务。"
    },
    before: [
      {
        en: `Open ${FACTS.productName} and finish the first-run notice.`,
        vi: `Mở ${FACTS.productName} và xác nhận lưu ý khi dùng lần đầu.`,
        zh: `打开 ${FACTS.productName}，完成首次运行提示。`
      },
      {
        en: "Have access to your Muse account and its verification method. A secondary account is recommended.",
        vi: "Bạn truy cập được tài khoản Muse và phương thức xác minh của tài khoản. Nên dùng tài khoản phụ.",
        zh: "需要能登录自己的 Muse 账号，并能完成它的验证方式。建议使用备用账号。"
      },
      {
        en: "Have a working proxy. A separate proxy for each account is best; accounts can share one, but then they go out through the same IP address.",
        vi: "Chuẩn bị proxy hoạt động. Tốt nhất mỗi tài khoản một proxy riêng; dùng chung được, nhưng các tài khoản sẽ ra cùng một địa chỉ IP.",
        zh: "准备一个可用的代理。最好每个账号单独用一个代理；账号也可以共用一个代理，但那样它们会通过同一个 IP 地址访问。"
      },
    ],
    steps: [
      {
        title: {
          en: "1. Open the account dialog",
          vi: "1. Mở hộp thoại thêm tài khoản",
          zh: "1. 打开添加账号对话框"
        },
        body: {
          en: "Open Accounts and choose Add account. Enter a recognizable alias; it is a label in the app, not your Muse login.",
          vi: "Mở Tài khoản rồi chọn Thêm tài khoản. Nhập Tên gọi dễ nhận biết; đây là nhãn trong app, không phải tên đăng nhập Muse.",
          zh: "打开「账号」，选择「添加账号」。输入一个容易识别的别名；它只是应用内的标签，不是 Muse 登录名。"
        },
        shot: "accounts-add",
      },
      {
        title: {
          en: "2. Assign a proxy",
          vi: "2. Gán proxy",
          zh: "2. 分配代理"
        },
        body: {
          en: "Each proxy in the list shows “Not in use” or which accounts already use it, unused ones first. The app pre-selects an unused healthy proxy; to share one, click it and read the short note. If there is no healthy proxy, import and test one first. A proxy failure stops every account on it; the app does not switch to a direct connection.",
          vi: "Mỗi proxy trong danh sách ghi “Chưa ai dùng” hoặc tên các tài khoản đang dùng, proxy chưa dùng xếp trước. App chọn sẵn một proxy khoẻ chưa ai dùng; muốn dùng chung thì bấm vào proxy đó và đọc dòng nhắc. Nếu chưa có proxy khoẻ, hãy Nhập proxy và kiểm tra trước. Khi proxy lỗi, mọi tài khoản trên proxy đó dừng; app không tự chuyển sang kết nối trực tiếp.",
          zh: "列表里的每个代理都会显示“未使用”或正在使用它的账号，未使用的排在前面。应用会预先选择一个未使用且健康的代理；要共用时，点击该代理并阅读简短提示。如果没有健康的代理，请先导入并测试一个。代理出问题时，该代理上的所有账号都会停下来；应用不会切换到直连。"
        },
      },
      {
        title: {
          en: "3. Sign in yourself",
          vi: "3. Tự đăng nhập Muse",
          zh: "3. 自己登录"
        },
        body: {
          en: "Continue to sign-in. In the separate Muse window, enter your account details and complete Muse's verification yourself. If Muse opens another page (for example Meta Accounts Center or a tool's Connect button), it shows in its own small window or a tab, through the same proxy. The app does not store passwords or verification codes.",
          vi: "Chọn Tiếp tục đăng nhập. Trong cửa sổ Muse riêng, nhập thông tin tài khoản và tự hoàn tất xác minh của Muse. Nếu Muse mở thêm trang (ví dụ Trung tâm tài khoản Meta hay nút Kết nối của một công cụ), trang đó hiện trong cửa sổ nhỏ hoặc một tab riêng, đi cùng proxy. App không lưu mật khẩu hay mã xác nhận.",
          zh: "继续登录。在单独的 Muse 窗口中输入账号信息，并自己完成 Muse 的验证。如果 Muse 打开了其他页面（例如 Meta 账号中心或某个工具的「连接」按钮），它会在自己的小窗口或标签页中显示，同样走这个代理。应用不保存密码或验证码。"
        },
      },
      {
        title: {
          en: "4. Check that the account is ready",
          vi: "4. Kiểm tra tài khoản đã sẵn sàng",
          zh: "4. 检查账号是否就绪"
        },
        body: {
          en: "The app detects a completed sign-in automatically. Return to Accounts and check the account's status before sending a Studio request. Resolve any verification or usage-limit notice first.",
          vi: "App tự nhận ra khi bạn đăng nhập xong. Quay lại Tài khoản và kiểm tra trạng thái trước khi gửi yêu cầu trong Studio. Xử lý thông báo xác minh hoặc hạn mức nếu có.",
          zh: "应用会自动检测登录是否完成。回到「账号」，在 Studio 发送请求之前检查账号状态。先处理验证或用量额度相关的提示。"
        },
        shot: "accounts-list",
      },
    ],
    success: {
      en: "The account appears in Accounts without a sign-in or proxy error and is ready to accept work.",
      vi: "Tài khoản xuất hiện trong Tài khoản, không báo lỗi đăng nhập hay proxy và đã sẵn sàng nhận việc.",
      zh: "账号出现在「账号」中，没有登录或代理错误，可以接受任务了。"
    },
    troubleshoot: [
      {
        q: {
          en: "Every proxy is already in use. What should I do?",
          vi: "Proxy nào cũng đang có tài khoản dùng thì làm sao?",
          zh: "每个代理都已被使用，该怎么办？"
        },
        a: {
          en: "You can pick one and share it — the list shows who already uses it. For separate IP addresses, open Settings › Proxy to add and test another proxy.",
          vi: "Anh có thể chọn một proxy để dùng chung — danh sách ghi rõ ai đang dùng. Muốn mỗi tài khoản một địa chỉ IP riêng thì mở Cài đặt › Proxy để thêm và kiểm tra proxy mới.",
          zh: "可以选一个共用——列表会显示谁在用它。想让每个账号走不同的 IP 地址，请打开「设置 › 代理」，添加并测试另一个代理。"
        },
      },
      {
        q: {
          en: "I clicked Connect (or opened Meta Accounts Center) and a new page appeared. Where is it?",
          vi: "Tôi bấm Kết nối (hoặc mở Trung tâm tài khoản Meta) và có trang mới. Trang đó nằm đâu?",
          zh: "我点了「连接」（或打开了 Meta 账号中心），出现了新页面，它在哪里？"
        },
        a: {
          en: "A small sign-in window opens over the Muse window and closes itself when you finish. Other pages open in one extra window; with two or more pages, a thin row of tabs appears at the top (Ctrl+W closes a tab, Ctrl+Tab switches). They only open while you use the account's window, always through its proxy.",
          vi: "Cửa sổ đăng nhập nhỏ mở ngay giữa cửa sổ Muse và tự đóng khi bạn xác nhận xong. Trang khác mở trong một cửa sổ phụ; từ hai trang trở lên sẽ có hàng tab mảnh phía trên (Ctrl+W đóng tab, Ctrl+Tab chuyển tab). Các trang này chỉ mở khi bạn đang dùng cửa sổ của tài khoản, luôn đi qua proxy của nó.",
          zh: "一个小登录窗口会盖在 Muse 窗口上方，完成后自动关闭。其他页面会在另一个窗口中打开；打开两个或更多页面时，顶部会出现一行窄标签页（Ctrl+W 关闭标签页，Ctrl+Tab 切换）。这些页面只在使用该账号窗口时打开，始终走它的代理。"
        },
      },
      {
        q: {
          en: "Muse asks for verification. Can the app finish it?",
          vi: "Muse yêu cầu xác minh. App có làm thay được không?",
          zh: "Muse 要求验证，应用能代办吗？"
        },
        a: {
          en: "No. Open the account's control window and complete the check yourself. When finished, use the session-check action if shown. Stop if Muse reports an unsupported region or unusual account restrictions.",
          vi: "Không. Mở Điều khiển của tài khoản và tự xác minh. Khi xong, chọn Đã xong, kiểm tra phiên nếu nút này xuất hiện. Dừng nếu Muse báo vùng không hỗ trợ hoặc hạn chế tài khoản bất thường.",
          zh: "不能。打开该账号的控制窗口，自己完成验证。完成后，如果显示了会话检查操作，请使用它。如果 Muse 提示地区不受支持或账号有异常限制，请停下来。"
        },
      },
      {
        q: {
          en: "The account is signed in but jobs still wait. Why?",
          vi: "Tài khoản đã đăng nhập nhưng lượt vẫn chờ. Vì sao?",
          zh: "账号已登录，但任务还在等待，为什么？"
        },
        a: {
          en: "Check whether the account is paused, busy, out of usage limit, or reporting a proxy error. Signing in does not remove Muse's limits.",
          vi: "Kiểm tra tài khoản có đang tạm dừng, bận, hết hạn mức hoặc lỗi proxy không. Đăng nhập không xoá hạn mức do Muse đặt.",
          zh: "检查账号是否已暂停、繁忙、额度用完或报告代理错误。登录并不会消除 Muse 的限制。"
        },
      },
    ],
    related: ["first-open", "accounts-and-limits", "proxies-and-modes", "create-image"],
    appRoute: "/accounts",
    updated: "2026-11-04",
  },
];
