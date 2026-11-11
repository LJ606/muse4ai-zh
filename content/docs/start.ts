import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_START: DocArticle[] = [
  {
    slug: "what-is-muse4ai",
    chapter: "start",
    order: 1,
    title: {
      en: `What is ${FACTS.productName}?`,
      vi: `${FACTS.productName} là gì?`,
      zh: `${FACTS.productName} 是什么？`
    },
    summary: {
      en: "Learn how Muse4AI connects your Windows PC, your Muse account, and AI agents, and what using it means for your usage limit.",
      vi: "Tìm hiểu cách Muse4AI kết nối máy Windows, tài khoản Muse và AI agent, cùng những điều cần biết về hạn mức sử dụng.",
      zh: "了解 Muse4AI 如何连接 Windows 电脑、Muse 账号和 AI agent，以及使用它对用量额度意味着什么。"
    },
    before: [
      {
        en: "Have access to a Windows PC.",
        vi: "Bạn có máy tính Windows để sử dụng app.",
        zh: "有可用的 Windows 电脑。"
      },
      {
        en: "Have your own Muse account if you want to create results.",
        vi: "Bạn có tài khoản Muse riêng nếu muốn tạo kết quả.",
        zh: "想生成内容的话，需要有自己的 Muse 账号。"
      },
    ],
    steps: [
      {
        title: {
          en: "1. Understand the bridge",
          vi: "1. Hiểu vai trò cầu nối",
          zh: "1. 了解桥接作用"
        },
        body: {
          en: `${FACTS.productName} is a free Windows app that runs on your PC and works with your own Muse account. You can send requests in Studio or let AI agents send them through MCP or REST.\n\nIt is not a new AI model and is not affiliated with Meta. Creating images and videos uses your Muse account's usage limit; the app itself is free.`,
          vi: `${FACTS.productName} là app Windows miễn phí, chạy trên máy của bạn và dùng tài khoản Muse của bạn. Bạn có thể gửi yêu cầu trong Studio hoặc để AI agent gửi qua MCP hay REST.\n\nĐây không phải mô hình AI mới và không có liên kết với Meta. App miễn phí, nhưng việc tạo ảnh và video vẫn dùng hạn mức của tài khoản Muse của bạn.`,
          zh: `${FACTS.productName} 是一款免费的 Windows 应用，运行在你的电脑上，配合你自己的 Muse 账号使用。你可以在 Studio 里发送请求，也可以让 AI agent 通过 MCP 或 REST 发送请求。\n\n它不是新的 AI 模型，与 Meta 没有关联。生成图片和视频会消耗 Muse 账号的用量额度；应用本身免费。`
        },
      },
      {
        title: {
          en: "2. See where work is tracked",
          vi: "2. Xem nơi theo dõi công việc",
          zh: "2. 查看任务的跟踪位置"
        },
        body: {
          en: "Queue brings jobs together so you can follow their status and open their results. Finished files appear in Library and are saved on your PC.",
          vi: "Hàng chờ tập hợp các lượt để bạn theo dõi trạng thái và mở kết quả. Tệp hoàn chỉnh xuất hiện trong Thư viện và được lưu trên máy.",
          zh: "队列把任务集中在一起，方便你查看状态、打开结果。已完成的文件会出现在素材库，并保存在你的电脑上。"
        },
        shot: "queue-list",
      },
      {
        title: {
          en: "3. Choose your starting point",
          vi: "3. Chọn cách bắt đầu",
          zh: "3. 选择从哪里开始"
        },
        body: {
          en: "Start with [installation](/docs/install), then [add a Muse account](/docs/add-muse-account). You can try Studio before following [Connect an agent](/docs/connect-overview). Agent access needs an API key.",
          vi: "Bắt đầu bằng [cài đặt](/docs/install), rồi [thêm tài khoản Muse](/docs/add-muse-account). Bạn có thể thử Studio trước khi xem [kết nối agent](/docs/connect-overview). Agent cần khoá API để truy cập.",
          zh: "先完成[安装](/docs/install)，再[添加 Muse 账号](/docs/add-muse-account)。可以先试试 Studio，再看[连接 AI agent](/docs/connect-overview)。连接 agent 需要 API 密钥。"
        },
      },
    ],
    success: {
      en: "You know which account supplies the results, where the files are saved, and whether to start in Studio or connect an agent.",
      vi: "Bạn biết kết quả được tạo bằng tài khoản nào, tệp lưu ở đâu và nên bắt đầu trong Studio hay kết nối agent.",
      zh: "你会知道结果由哪个账号提供、文件保存在哪里，以及该从 Studio 开始还是先连接 agent。"
    },
    troubleshoot: [
      {
        q: {
          en: "Do I need a separate Muse4AI account?",
          vi: "Tôi có cần tài khoản Muse4AI riêng không?",
          zh: "需要单独注册 Muse4AI 账号吗？"
        },
        a: {
          en: "No. There is no separate Muse4AI account. You sign in to your own Muse account inside the app.",
          vi: "Không. App không có tài khoản Muse4AI riêng. Bạn đăng nhập tài khoản Muse của mình trong app.",
          zh: "不需要。没有单独的 Muse4AI 账号，你在应用内登录自己的 Muse 账号即可。"
        },
      },
      {
        q: {
          en: "Why did creation stop if the app is free?",
          vi: "Vì sao app miễn phí nhưng không tạo tiếp được?",
          zh: "应用免费，为什么生成会停下来？"
        },
        a: {
          en: "Muse controls your account's usage limit and availability. The app pauses when Muse reports a limit, verification request, or unsupported region; it does not bypass these checks.",
          vi: "Muse quyết định hạn mức và khả năng sử dụng của tài khoản. App dừng khi Muse báo hết hạn mức, yêu cầu xác minh hoặc vùng không hỗ trợ; app không vượt các kiểm tra này.",
          zh: "Muse 掌控着账号的用量额度和可用性。当 Muse 提示额度用完、要求验证或地区不受支持时，应用会暂停，不会绕过这些检查。"
        },
      },
    ],
    related: ["install", "add-muse-account", "connect-overview"],
    appRoute: "/queue",
    updated: "2026-11-02",
  },
  {
    slug: "install",
    chapter: "start",
    order: 2,
    title: {
      en: `Install ${FACTS.productName}`,
      vi: `Cài đặt ${FACTS.productName}`,
      zh: `安装 ${FACTS.productName}`
    },
    summary: {
      en: "Install Muse4AI with the Windows EXE or ZIP package, handle SmartScreen safely, and keep your data when updating.",
      vi: "Cài Muse4AI bằng bộ cài EXE hoặc gói ZIP, xử lý cảnh báo SmartScreen và giữ dữ liệu khi cập nhật phiên bản mới.",
      zh: "使用 Windows EXE 或 ZIP 安装包安装 Muse4AI，安全处理 SmartScreen 提示，更新时保留数据。"
    },
    before: [
      {
        en: `Use ${FACTS.windows.en}.`,
        vi: `Dùng ${FACTS.windows.vi}.`,
        zh: `使用 ${FACTS.windows.en}。`
      },
      {
        en: "Have the Muse4AI EXE installer or ZIP package from a source you trust.",
        vi: "Chuẩn bị bộ cài EXE hoặc gói ZIP Muse4AI từ nguồn bạn tin cậy.",
        zh: "准备好来自可信来源的 Muse4AI EXE 安装程序或 ZIP 安装包。"
      },
      {
        en: "If updating with the EXE, you can leave the app open: setup closes it the normal way, like choosing Quit. With the ZIP, right-click the tray icon and choose Quit first; the window's X only minimizes it to the tray.",
        vi: "Nếu cập nhật bằng EXE, bạn cứ để app mở: bộ cài tự đóng app theo cách bình thường, như khi chọn Thoát. Nếu dùng ZIP, hãy nhấp phải biểu tượng ở khay hệ thống và chọn Thoát trước; nút X chỉ thu nhỏ app xuống khay.",
        zh: "用 EXE 更新时，可以不用关应用：安装程序会像选择「退出」那样正常关闭它。用 ZIP 时，要先右键点击托盘图标选择「退出」；窗口上的 X 只是把应用最小化到托盘。"
      },
    ],
    steps: [
      {
        title: {
          en: "1. Choose EXE or ZIP",
          vi: "1. Chọn bộ cài EXE hoặc ZIP",
          zh: "1. 选择 EXE 或 ZIP"
        },
        body: {
          en: "For the simplest route, open the EXE installer, choose English or Tiếng Việt, and follow its instructions. For ZIP installation, extract the whole package into a folder first.",
          vi: "Cách đơn giản nhất là mở bộ cài EXE, chọn English hoặc Tiếng Việt rồi làm theo hướng dẫn. Nếu dùng ZIP, hãy giải nén toàn bộ gói vào một thư mục trước.",
          zh: "最简单的方式是打开 EXE 安装程序，选择 English 或 Tiếng Việt，然后按提示操作。用 ZIP 安装时，先把整个安装包解压到一个文件夹。"
        },
      },
      {
        title: {
          en: "2. Check any Windows warning",
          vi: "2. Kiểm tra cảnh báo của Windows",
          zh: "2. 检查 Windows 警告"
        },
        body: {
          en: "The app is not code-signed, so SmartScreen may warn you. Only if you trust the package, choose **More info → Run anyway**. Do not continue with a package whose checksum check fails.",
          vi: "App chưa được ký số nên SmartScreen có thể cảnh báo. Chỉ khi tin cậy gói cài, bạn mới chọn **More info → Run anyway**. Không tiếp tục nếu bộ cài báo kiểm tra mã băm thất bại.",
          zh: "应用没有代码签名，SmartScreen 可能会发出警告。只有在信任这个安装包的情况下，才选择 **More info → Run anyway**。如果校验和检查失败，不要继续安装。"
        },
      },
      {
        title: {
          en: "3. Run PowerShell if using ZIP",
          vi: "3. Chạy PowerShell nếu dùng ZIP",
          zh: "3. 用 ZIP 时运行 PowerShell"
        },
        body: {
          en: "Skip this step if you used the EXE. In the extracted folder, type `powershell` in File Explorer's address bar and press Enter. Run the command below. It does not change the machine's saved execution policy.",
          vi: "Bỏ qua bước này nếu bạn dùng EXE. Trong thư mục đã giải nén, gõ `powershell` vào thanh địa chỉ File Explorer rồi nhấn Enter. Chạy lệnh dưới đây. Lệnh không đổi chính sách thực thi đã lưu của máy.",
          zh: "用 EXE 安装可跳过这一步。在解压后的文件夹里，在文件资源管理器的地址栏输入 `powershell` 并按回车，然后运行下面的命令。该命令不会更改这台电脑已保存的执行策略。"
        },
        code: {
          lang: "powershell",
          text: "powershell -ExecutionPolicy Bypass -File .\\install.ps1",
        },
      },
      {
        title: {
          en: "4. Check the install and data locations",
          vi: "4. Kiểm tra nơi cài và nơi lưu dữ liệu",
          zh: "4. 检查安装位置和数据位置"
        },
        body: {
          en: `The app installs to \`${FACTS.installDir}\`. Its data stays in \`${FACTS.dataDir}\` when you install an update, including accounts, settings, queue, and library records. Downloaded results use the library folder you choose.`,
          vi: `App được cài tại \`${FACTS.installDir}\`. Khi cài bản mới, dữ liệu trong \`${FACTS.dataDir}\` được giữ lại, gồm tài khoản, cài đặt, hàng chờ và thông tin thư viện. Tệp kết quả dùng thư mục thư viện bạn chọn.`,
          zh: `应用安装在 \`${FACTS.installDir}\`。更新安装时，数据保留在 \`${FACTS.dataDir}\`，包括账号、设置、队列和素材库记录。下载的结果使用你选择的素材库文件夹。`
        },
      },
      {
        title: {
          en: "5. Continue with first-run setup",
          vi: "5. Tiếp tục thiết lập lần đầu",
          zh: "5. 继续首次运行设置"
        },
        body: {
          en: "The installer opens the app. If this is your first installation, follow the welcome setup in [First open](/docs/first-open).",
          vi: "Bộ cài sẽ mở app. Nếu đây là lần cài đầu tiên, hãy làm theo màn chào trong bài [Lần đầu mở app](/docs/first-open).",
          zh: "安装程序会打开应用。如果是首次安装，请按 [首次打开](/docs/first-open) 中的欢迎设置操作。"
        },
        shot: "onboarding-welcome",
      },
    ],
    success: {
      en: "Muse4AI opens from its shortcut. A first installation shows the welcome setup; an update keeps your existing data.",
      vi: "Bạn mở được Muse4AI bằng lối tắt. Lần cài đầu hiện phần thiết lập; bản cập nhật giữ dữ liệu đang có.",
      zh: "Muse4AI 可以从快捷方式打开。首次安装会显示欢迎设置；更新会保留现有数据。"
    },
    troubleshoot: [
      {
        q: {
          en: "The installer says the app is still running. What now?",
          vi: "Bộ cài báo app vẫn chạy thì làm sao?",
          zh: "安装程序说应用仍在运行，该怎么办？"
        },
        a: {
          en: "The EXE asks the app to quit and waits about 45 seconds. If jobs are still running, Muse4AI first asks whether to quit. Answer it or let the jobs finish, quit from the tray icon (not the window's X button), then run the installer again.",
          vi: "Bộ cài EXE nhờ app tự thoát và chờ khoảng 45 giây. Nếu còn việc đang chạy, Muse4AI sẽ hỏi lại trước khi thoát. Hãy trả lời câu hỏi đó hoặc chờ việc xong, thoát từ biểu tượng ở khay hệ thống (không chỉ bấm X trên cửa sổ), rồi chạy lại bộ cài.",
          zh: "EXE 安装程序会请求应用退出，并等待约 45 秒。如果还有任务在运行，Muse4AI 会先询问是否退出。回答提示，或等任务完成，从托盘图标退出（不要只点窗口的 X 按钮），然后重新运行安装程序。"
        },
      },
      {
        q: {
          en: "The package does not match its checksums. Should I continue?",
          vi: "Gói cài không khớp mã băm. Tôi có nên tiếp tục?",
          zh: "安装包与校验和不符，还要继续吗？"
        },
        a: {
          en: "No. The package may be damaged or modified. Download a fresh copy from a trusted source.",
          vi: "Không. Gói có thể bị hỏng hoặc đã bị sửa. Hãy tải bản mới từ nguồn tin cậy.",
          zh: "不要继续。安装包可能已损坏或被改动，请从可信来源重新下载一份。"
        },
      },
      {
        q: {
          en: "The new version will not open. What can I do?",
          vi: "Bản mới không mở được thì xử lý thế nào?",
          zh: "新版本打不开，该怎么办？"
        },
        a: {
          en: "See [Updates and backups](/docs/updates-and-backups) before rolling back. Older versions may not read data upgraded by a newer version.",
          vi: "Xem [Cập nhật và sao lưu](/docs/updates-and-backups) trước khi quay về bản cũ. Bản cũ có thể không đọc được dữ liệu đã được bản mới nâng cấp.",
          zh: "回退之前，请先看 [更新与备份](/docs/updates-and-backups)。旧版本可能无法读取新版本升级后的数据。"
        },
      },
    ],
    related: ["first-open", "updates-and-backups", "troubleshooting"],
    updated: "2026-11-02",
  },
  {
    slug: "first-open",
    chapter: "start",
    order: 3,
    title: {
      en: "First open",
      vi: "Lần đầu mở app",
      zh: "首次打开"
    },
    summary: {
      en: "Complete first-run setup, choose where results are saved, and prepare a Muse account before sending your first request.",
      vi: "Hoàn tất thiết lập lần đầu, chọn thư mục lưu kết quả và chuẩn bị tài khoản Muse trước khi gửi yêu cầu đầu tiên.",
      zh: "完成首次运行设置，选择结果保存位置，并在发送第一个请求之前准备好 Muse 账号。"
    },
    before: [
      {
        en: `Install ${FACTS.productName} and open it.`,
        vi: `Cài ${FACTS.productName} rồi mở app.`,
        zh: `安装 ${FACTS.productName} 并打开它。`
      },
      {
        en: "Choose a local folder with space for downloaded results.",
        vi: "Chuẩn bị thư mục trên máy còn đủ chỗ lưu kết quả.",
        zh: "选择一个本地文件夹，要有足够空间存放下载的结果。"
      },
      {
        en: "Have your Muse sign-in details and a working proxy ready if you want to finish account setup now.",
        vi: "Chuẩn bị thông tin đăng nhập Muse và proxy hoạt động nếu muốn thiết lập tài khoản ngay.",
        zh: "如果你想现在就完成账号设置，请准备好 Muse 登录信息和一个可用的代理。"
      },
    ],
    steps: [
      {
        title: {
          en: "1. Read the notice",
          vi: "1. Đọc lưu ý trước khi dùng",
          zh: "1. 阅读提示"
        },
        body: {
          en: "Read the account-risk notice, then acknowledge it and choose Continue if you agree. Muse can limit or suspend accounts; the app stops for verification, usage limits, or unsupported regions.",
          vi: "Đọc lưu ý về rủi ro tài khoản, xác nhận rồi chọn Tiếp tục nếu đồng ý. Muse có thể giới hạn hoặc khoá tài khoản; app dừng khi gặp xác minh, hạn mức hoặc vùng không hỗ trợ.",
          zh: "阅读账号风险提示，确认后选择「继续」（如果你同意）。Muse 可能会限制或停用账号；遇到验证、用量额度或不受支持的地区时，应用会停下来。"
        },
        shot: "onboarding-welcome",
      },
      {
        title: {
          en: "2. Choose the results folder",
          vi: "2. Chọn thư mục lưu kết quả",
          zh: "2. 选择结果文件夹"
        },
        body: {
          en: "Keep the suggested folder or choose another folder, then confirm it. Images and videos are organized by month and batch.",
          vi: "Giữ thư mục được đề xuất hoặc bấm Chọn thư mục khác, rồi chọn Dùng thư mục này. Ảnh và video được chia theo tháng và theo lô.",
          zh: "保留建议的文件夹，或选择另一个文件夹并确认。图片和视频按月份和批次整理存放。"
        },
      },
      {
        title: {
          en: "3. Prepare a proxy and account",
          vi: "3. Chuẩn bị proxy và tài khoản",
          zh: "3. 准备代理和账号"
        },
        body: {
          en: "Add a working proxy, then add your Muse account and sign in in its separate window. You can skip setup, but jobs cannot run until an account is ready. See [Add a Muse account](/docs/add-muse-account).",
          vi: "Thêm proxy hoạt động, rồi thêm tài khoản Muse và đăng nhập trong cửa sổ riêng. Bạn có thể chọn Bỏ qua, nhưng cần tài khoản sẵn sàng thì lượt mới chạy được. Xem [Thêm tài khoản Muse](/docs/add-muse-account).",
          zh: "添加一个可用的代理，然后添加 Muse 账号，并在单独的窗口中登录。也可以跳过设置，但账号就绪之前任务无法运行。参见 [添加 Muse 账号](/docs/add-muse-account)。"
        },
      },
      {
        title: {
          en: "4. Enter Studio and check your preferences",
          vi: "4. Vào Studio và kiểm tra tuỳ chọn",
          zh: "4. 进入 Studio 并检查偏好设置"
        },
        body: {
          en: `Enter Studio when setup is complete. In Settings › General, choose your language and check the library folder. Changing the folder affects new files only; old files remain where they are. App data is separate, in \`${FACTS.dataDir}\`.`,
          vi: `Chọn Vào Studio khi hoàn tất. Trong Cài đặt › Chung, chọn ngôn ngữ và kiểm tra thư mục ở mục Thư viện. Đổi thư mục chỉ áp dụng cho tệp mới; tệp cũ giữ nguyên chỗ. Dữ liệu app nằm riêng tại \`${FACTS.dataDir}\`.`,
          zh: `设置完成后进入 Studio。在「设置 › 通用」里选择语言，并检查素材库文件夹。更换文件夹只影响新文件；旧文件留在原处。应用数据单独存放在 \`${FACTS.dataDir}\`。`
        },
        shot: "settings-general",
      },
    ],
    success: {
      en: "Studio opens, your language is correct, and your chosen library folder is shown in General settings.",
      vi: "Studio mở được, ngôn ngữ đúng ý bạn và mục Chung hiển thị thư mục thư viện bạn đã chọn.",
      zh: "Studio 可以打开，语言正确，「通用」设置里显示着你选择的素材库文件夹。"
    },
    troubleshoot: [
      {
        q: {
          en: "I skipped account setup. Can I return to it?",
          vi: "Tôi đã bỏ qua bước tài khoản. Có làm lại được không?",
          zh: "跳过了账号设置，还能回去补吗？"
        },
        a: {
          en: "Yes. Open Accounts and add an account when your proxy and Muse sign-in details are ready.",
          vi: "Có. Mở Tài khoản và thêm tài khoản khi bạn đã chuẩn bị proxy cùng thông tin đăng nhập Muse.",
          zh: "可以。准备好代理和 Muse 登录信息后，打开「账号」添加账号。"
        },
      },
      {
        q: {
          en: "Why did changing the folder not move my old files?",
          vi: "Vì sao đổi thư mục mà tệp cũ không chuyển theo?",
          zh: "为什么换了文件夹，旧文件没有跟着移动？"
        },
        a: {
          en: "The setting changes where new results are saved. It does not move existing files.",
          vi: "Cài đặt này đổi nơi lưu kết quả mới, không di chuyển tệp đang có.",
          zh: "该设置只改变新结果的保存位置，不会移动已有文件。"
        },
      },
    ],
    related: ["add-muse-account", "create-image", "settings-overview"],
    appRoute: "/settings/general",
    updated: "2026-11-02",
  },
];
