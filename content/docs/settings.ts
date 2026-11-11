import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_SETTINGS: DocArticle[] = [
  {
    slug: "remote-access",
    chapter: "settings",
    order: 1,
    title: { en: "Remote access", vi: "Truy cập từ xa", zh: "远程访问" },
    summary: {
      en: "Let a cloud agent reach your PC through a tunnel or HTTPS domain, or share only within a trusted private network.",
      vi: "Cho agent đám mây gọi tới máy qua đường hầm hoặc tên miền HTTPS, hay chỉ chia sẻ trong một mạng riêng đáng tin cậy.",
      zh: "让云端 agent 通过隧道或 HTTPS 域名访问你的电脑，或仅在受信任的专用网络内共享。"
    },
    before: [
      {
        en: "Enable API for agents and create a separate key for the remote agent.",
        vi: "Bật API cho agent và tạo khoá riêng cho agent từ xa.",
        zh: "开启面向 agent 的 API，并为远程 agent 创建一个独立的密钥。"
      },
      {
        en: "Keep this PC awake and the app running while remote agents need it.",
        vi: "Giữ máy thức và app hoạt động trong lúc agent từ xa cần kết nối.",
        zh: "在远程 agent 需要访问期间，保持本电脑唤醒、应用运行。"
      },
      {
        en: "A public address makes the server reachable; it does not remove key requirements.",
        vi: "Địa chỉ công khai giúp gọi được máy chủ; nó không bỏ yêu cầu dùng khoá.",
        zh: "公开地址让服务器可以被访问；它不会取消密钥要求。"
      },
    ],
    steps: [
      {
        title: { en: "Choose who can connect", vi: "Chọn nơi được kết nối", zh: "选择谁可以连接" },
        body: {
          en: "Open Settings › API & agent. The access choices are This machine only, Private network, Quick tunnel, and Named tunnel.",
          vi: "Mở Cài đặt › API & agent. Các lựa chọn là Chỉ máy này, Mạng riêng, Đường hầm tạm thời và Đường hầm có tên.",
          zh: "打开「设置 › API 与 agent」。访问选项有「仅本机」「专用网络」「临时隧道」和「命名隧道」。"
        },
        shot: "settings-remote",
      },
      {
        title: { en: "Use a Quick tunnel for a temporary link", vi: "Dùng đường hầm tạm thời", zh: "用临时隧道获得临时链接" },
        body: {
          en: "Confirm public sharing and wait for the tunnel to be online. The app uses cloudflared. The address changes each time the app starts, so update your cloud agent after a restart.",
          vi: "Xác nhận chia sẻ công khai và chờ đường hầm trực tuyến. App dùng cloudflared. Địa chỉ thay đổi mỗi lần app khởi động, nên bạn cần cập nhật agent đám mây sau khi mở lại.",
          zh: "确认公开共享，等待隧道上线。应用使用 cloudflared。地址每次随应用启动而变化，所以重启后请更新云端 agent。"
        },
      },
      {
        title: { en: "Choose a fixed address if needed", vi: "Chọn địa chỉ cố định khi cần", zh: "需要时选择固定地址" },
        body: {
          en: "A named tunnel uses your Cloudflare setup and domain. The separate domain section can provide direct HTTPS using App-managed HTTPS with Caddy, or an Existing HTTPS proxy such as Caddy, nginx, or IIS. Follow its DNS and connectivity checks; these routes can coexist with a tunnel.",
          vi: "Đường hầm có tên dùng cấu hình Cloudflare và tên miền của bạn. Phần tên miền riêng có thể phục vụ HTTPS trực tiếp bằng App tự chạy HTTPS với Caddy, hoặc Proxy HTTPS có sẵn như Caddy, nginx hay IIS. Làm theo bước kiểm tra DNS và kết nối; các cách này có thể chạy cùng đường hầm.",
          zh: "命名隧道使用你的 Cloudflare 设置和域名。单独的域名部分可以直接提供 HTTPS：使用 Caddy 的「应用管理 HTTPS」，或使用「已有 HTTPS 代理」（如 Caddy、nginx 或 IIS）。请按其中的 DNS 和连通性检查操作；这些方式可以与隧道共存。"
        },
      },
      {
        title: { en: "Use private sharing only where reachable", vi: "Chỉ chia sẻ riêng khi có đường kết nối", zh: "仅在可达时使用专用共享" },
        body: {
          en: "Private network is for devices that can reach your PC through a LAN or private network such as Tailscale. It is not automatically a public link for a cloud service.",
          vi: "Mạng riêng dành cho thiết bị có thể gọi tới máy bạn qua LAN hoặc mạng riêng như Tailscale. Nó không tự trở thành liên kết công khai cho dịch vụ đám mây.",
          zh: "专用网络适用于能通过局域网或 Tailscale 这类专用网络访问你电脑的设备。它不会自动成为云端服务的公开链接。"
        },
      },
      {
        title: { en: "Copy the address and limit exposure", vi: "Chép địa chỉ và hạn chế chia sẻ", zh: "复制地址并限制暴露范围" },
        body: {
          en: `Use the current public base with ${FACTS.mcpPath} for MCP or ${FACTS.restBase} for REST, plus the agent’s key. Turn off sharing when it is not needed; disable a separately enabled domain too.`,
          vi: `Dùng địa chỉ công khai hiện tại với ${FACTS.mcpPath} cho MCP hoặc ${FACTS.restBase} cho REST, kèm khoá của agent. Tắt chia sẻ khi không cần; nếu đã bật tên miền riêng, hãy tắt cả phần đó.`,
          zh: `MCP 使用当前公开基础地址加 ${FACTS.mcpPath}，REST 加 ${FACTS.restBase}，再附上 agent 的密钥。不需要共享时请关闭共享；如果还单独启用了域名，也要一并关闭。`
        },
        code: {
          lang: "text",
          text: `https://your-tunnel.trycloudflare.com${FACTS.mcpPath}\nAuthorization: Bearer ${FACTS.placeholderKey}`,
        },
      },
    ],
    success: {
      en: "The intended remote agent can read status with its key, and unnecessary sharing is off.",
      vi: "Agent từ xa cần dùng đọc được trạng thái bằng khoá riêng, còn các cách chia sẻ không cần thiết đã tắt.",
      zh: "目标远程 agent 可以用自己的密钥读取状态，不必要的共享已关闭。"
    },
    troubleshoot: [
      {
        q: { en: "Why did yesterday’s link stop working?", vi: "Vì sao liên kết hôm qua không còn dùng được?", zh: "为什么昨天的链接失效了？" },
        a: {
          en: "Quick tunnel addresses change at app startup. Copy the current address into the agent again.",
          vi: "Địa chỉ đường hầm tạm thời đổi khi app khởi động. Chép địa chỉ hiện tại vào agent lần nữa.",
          zh: "临时隧道地址在应用启动时变化。请把当前地址再次复制到 agent 中。"
        },
      },
      {
        q: { en: "Why does a public URL still need a key?", vi: "Vì sao URL công khai vẫn cần khoá?", zh: "为什么公开 URL 仍需要密钥？" },
        a: {
          en: "The tunnel changes reachability, not authorization. Protected operations still require an active key.",
          vi: "Đường hầm chỉ đổi khả năng kết nối, không đổi quyền truy cập. Thao tác được bảo vệ vẫn cần khoá còn hiệu lực.",
          zh: "隧道改变的是可达性，而不是授权。受保护的操作仍然需要有效的密钥。"
        },
      },
      {
        q: { en: "Does turning off the tunnel stop my domain?", vi: "Tắt đường hầm có tắt tên miền không?", zh: "关闭隧道会停用我的域名吗？" },
        a: {
          en: "The domain is configured separately and can run alongside a tunnel. Check both, or disable the API entirely.",
          vi: "Tên miền được cấu hình riêng và có thể chạy cùng đường hầm. Kiểm tra cả hai hoặc tắt toàn bộ API.",
          zh: "域名是单独配置的，可以与隧道并行运行。请同时检查两者，或完全关闭 API。"
        },
      },
    ],
    related: ["connect-overview", "api-keys", "privacy-and-data"],
    appRoute: "/settings/api",
    updated: "2026-11-02",
  },
  {
    slug: "settings-overview",
    chapter: "settings",
    order: 2,
    title: { en: "Find the right setting", vi: "Tìm đúng phần cài đặt", zh: "找到正确的设置" },
    summary: {
      en: "Find language, output folders, job controls, notifications, agent access, security, and diagnostics in Settings.",
      vi: "Tìm ngôn ngữ, thư mục kết quả, điều khiển công việc, thông báo, kết nối agent, bảo mật và chẩn đoán trong Cài đặt.",
      zh: "在设置中找到语言、输出文件夹、任务控制、通知、agent 访问、安全和诊断。"
    },
    before: [
      {
        en: "Decide what you want to change before changing several settings at once.",
        vi: "Xác định điều cần đổi trước khi thay nhiều cài đặt cùng lúc.",
        zh: "一次更改多项设置之前，先确定要改什么。"
      },
      {
        en: `Keep ${FACTS.productName} open so you can check the result of each change.`,
        vi: `Giữ ${FACTS.productName} mở để kiểm tra kết quả sau mỗi thay đổi.`,
        zh: `保持 ${FACTS.productName} 打开，以便检查每次更改的结果。`
      },
    ],
    steps: [
      {
        title: { en: "Start with General", vi: "Bắt đầu từ Chung", zh: "从「通用」开始" },
        body: {
          en: "Open Settings › General for language and the Library folder. English is the default; Vietnamese is also available.",
          vi: "Mở Cài đặt › Chung để chọn ngôn ngữ và thư mục Thư viện. Mặc định là tiếng Anh; bạn cũng có thể chọn tiếng Việt.",
          zh: "打开「设置 › 通用」，设置语言和素材库文件夹。默认是英文；也可以选择越南语。"
        },
        shot: "settings-general",
      },
      {
        title: { en: "Find work and connection controls", vi: "Tìm cài đặt công việc và kết nối", zh: "找到任务与连接控制" },
        body: {
          en: "Use Proxy for proxy management, Job execution for the direct channel and app-wide limits, Queue for retries, and Notifications for alerts. Each account’s execution method is on its card in Accounts.",
          vi: "Dùng Proxy để quản lý proxy, Chạy việc cho kênh trực tiếp và giới hạn toàn app, Hàng chờ cho số lần thử lại, Thông báo cho cảnh báo. Cách chạy của từng tài khoản nằm trên thẻ của nó trong Tài khoản.",
          zh: "「代理」用于管理代理，「任务执行」用于直接通道和应用级限制，「队列」用于重试，「通知」用于提醒。每个账号的执行方式在「账号」中该账号的卡片上。"
        },
      },
      {
        title: { en: "Manage agent access", vi: "Quản lý kết nối agent", zh: "管理 agent 访问" },
        body: {
          en: "API & agent contains the server switch, port, keys, agent configuration, and remote sharing. Leave remote sharing off unless another machine needs access.",
          vi: "API & agent có công tắc máy chủ, cổng, khoá, cấu hình agent và chia sẻ từ xa. Giữ chia sẻ từ xa tắt nếu máy khác không cần truy cập.",
          zh: "「API 与 agent」包含服务器开关、端口、密钥、agent 配置和远程共享。除非其他机器需要访问，否则保持远程共享关闭。"
        },
      },
      {
        title: { en: "Find support information", vi: "Tìm thông tin hỗ trợ", zh: "查找支持信息" },
        body: {
          en: "Check Security for security settings, Diagnostics for an exportable diagnostics ZIP, and About for the installed version, maker, and acknowledgments.",
          vi: "Xem Bảo mật để chỉnh bảo mật, Chẩn đoán để xuất ZIP chẩn đoán và Giới thiệu để xem phiên bản, tác giả cùng ghi nguồn.",
          zh: "「安全」用于安全设置，「诊断」用于导出诊断 ZIP，「关于」用于查看已安装版本、作者和致谢。"
        },
      },
    ],
    success: {
      en: "You can find the setting you need without changing unrelated controls.",
      vi: "Bạn tìm được phần cần dùng mà không phải đổi các cài đặt không liên quan.",
      zh: "你可以找到需要的设置，而不用更改不相关的控件。"
    },
    troubleshoot: [
      {
        q: { en: "Where is the account’s connection mode?", vi: "Chế độ kết nối tài khoản ở đâu?", zh: "账号的连接方式在哪里？" },
        a: {
          en: "Open that account’s settings in Accounts, not the API server settings.",
          vi: "Mở cài đặt của tài khoản trong Tài khoản, không phải cài đặt máy chủ API.",
          zh: "请在「账号」中打开该账号的设置，而不是 API 服务器设置。"
        },
      },
      {
        q: { en: "Where can I check the installed version?", vi: "Xem phiên bản đã cài ở đâu?", zh: "在哪里查看已安装的版本？" },
        a: {
          en: "Open Settings › About before reporting a problem.",
          vi: "Mở Cài đặt › Giới thiệu trước khi báo lỗi.",
          zh: "报告问题之前，请先打开「设置 › 关于」。"
        },
      },
    ],
    related: ["proxies-and-modes", "remote-access", "updates-and-backups"],
    appRoute: "/settings/general",
    updated: "2026-11-02",
  },
  {
    slug: "updates-and-backups",
    chapter: "settings",
    order: 3,
    title: { en: "Updates, rollback, uninstall, and backups", vi: "Cập nhật, quay lại, gỡ cài và sao lưu", zh: "更新、回退、卸载与备份" },
    summary: {
      en: "Update from inside the app without losing data, go back to the kept previous version, uninstall cleanly from Windows Settings, and recover from a backup.",
      vi: "Cập nhật ngay trong app mà không mất dữ liệu, quay lại bản trước còn giữ, gỡ cài gọn từ Cài đặt Windows và khôi phục từ bản sao lưu đã kiểm tra.",
      zh: "在应用内更新而不丢失数据，回退到保留的上一个版本，从 Windows 设置中干净卸载，并从备份恢复。"
    },
    before: [
      {
        en: "Finish or inspect active jobs before quitting. Do not delete the data folder to update.",
        vi: "Hoàn tất hoặc kiểm tra việc đang chạy trước khi thoát. Không xoá thư mục dữ liệu để cập nhật.",
        zh: "退出前，先完成或检查正在运行的任务。不要为了更新而删除数据文件夹。"
      },
      {
        en: `The app installs in ${FACTS.installDir}; its roaming data is in ${FACTS.dataDir}. Output files live separately.`,
        vi: `App được cài tại ${FACTS.installDir}; dữ liệu roaming nằm tại ${FACTS.dataDir}. Tệp kết quả được lưu riêng.`,
        zh: `应用安装在 ${FACTS.installDir}；漫游数据在 ${FACTS.dataDir}。输出文件单独存放。`
      },
    ],
    steps: [
      {
        title: { en: "See your version and the update check", vi: "Xem phiên bản và việc kiểm tra bản mới", zh: "查看版本与更新检查" },
        body: {
          en: "Settings › About shows the version you use and an Updates card. When the app opens and every 12 hours it reads one small file on the Muse4AI website to see whether a newer version exists; it sends none of your data. Turn the switch off to stop checking, or press Check now at any time.",
          vi: "Cài đặt › Giới thiệu hiện phiên bản đang dùng và thẻ Cập nhật. Lúc mở app và mỗi 12 giờ, app đọc một tệp nhỏ trên website Muse4AI để biết có bản mới không; không gửi dữ liệu nào của bạn. Tắt công tắc nếu không muốn app kiểm tra, hoặc bấm Kiểm tra ngay bất cứ lúc nào.",
          zh: "「设置 › 关于」显示你使用的版本和一张更新卡片。应用打开时以及每 12 小时，会读取 Muse4AI 网站上的一个小文件，查看是否有新版本；不会发送你的任何数据。关闭开关可停止检查，也可以随时按「立即检查」。"
        },
        shot: "settings-about",
      },
      {
        title: { en: "Update from inside the app", vi: "Cập nhật ngay trong app", zh: "在应用内更新" },
        body: {
          en: "When a newer version is out, a dot appears next to Settings and the app tells you once. Open Settings › About and choose Download and install: the app downloads the installer, checks its SHA-256 fingerprint, then closes, installs, and opens again in about a minute. Sign-ins, settings, queue, and library are kept. If jobs are running it asks first: jobs already sent are reconciled when the app reopens, jobs not yet sent stay in the queue.",
          vi: "Khi có bản mới, Cài đặt có một chấm nhỏ và app báo bạn một lần. Mở Cài đặt › Giới thiệu rồi chọn Tải và cài: app tải bộ cài, kiểm dấu vân tay SHA-256, rồi tự đóng, cài và mở lại sau khoảng một phút. Phiên đăng nhập, cài đặt, hàng chờ và thư viện được giữ nguyên. Nếu còn việc đang chạy, app hỏi trước: việc đã gửi sẽ được đối soát khi mở lại, việc chưa gửi vẫn nằm trong hàng chờ.",
          zh: "有新版本时，「设置」旁边会出现一个圆点，应用会通知你一次。打开「设置 › 关于」，选择「下载并安装」：应用下载安装程序，校验 SHA-256 指纹，然后关闭、安装，并在约一分钟后重新打开。登录状态、设置、队列和素材库都会保留。如果有任务在运行，应用会先询问：已发送的任务在应用重新打开时会对账，未发送的任务留在队列中。"
        },
      },
      {
        title: { en: "Or install the newer package yourself", vi: "Hoặc tự cài gói phiên bản mới", zh: "或自行安装新版安装包" },
        body: {
          en: "You can still run a new EXE installer from the website (it closes the app for you), or extract the new ZIP, quit from the tray icon, and run install.ps1. Installing over the current version keeps your data the same way.",
          vi: "Bạn vẫn có thể chạy bộ cài EXE mới tải từ website (bộ cài tự đóng app), hoặc giải nén ZIP mới, thoát app từ biểu tượng ở khay rồi chạy install.ps1. Cài đè vẫn giữ dữ liệu như trên.",
          zh: "你仍然可以运行从网站下载的新版 EXE 安装程序（它会帮你关闭应用），或解压新的 ZIP，从托盘图标退出应用，再运行 install.ps1。覆盖安装同样会保留数据。"
        },
      },
      {
        title: { en: "Understand automatic backups", vi: "Hiểu sao lưu tự động", zh: "了解自动备份" },
        body: {
          en: `Database backups are stored under ${FACTS.dataDir}\\backups. The app keeps daily backups and makes a backup before a data-schema upgrade. These database copies are not a backup of your output files or every sign-in file.`,
          vi: `Bản sao lưu cơ sở dữ liệu nằm trong ${FACTS.dataDir}\\backups. App giữ bản sao lưu hằng ngày và tạo bản trước khi nâng cấu trúc dữ liệu. Đây không phải bản sao của tệp kết quả hay toàn bộ tệp phiên đăng nhập.`,
          zh: `数据库备份保存在 ${FACTS.dataDir}\\backups 下。应用保留每日备份，并在数据结构升级前创建备份。这些数据库副本不是输出文件或每个登录文件的备份。`
        },
      },
      {
        title: { en: "Restore only when needed", vi: "Chỉ khôi phục khi cần", zh: "仅在需要时恢复" },
        body: {
          en: "At startup the app checks the database. If it is corrupt, it offers the newest backup that passes its check and keeps the damaged files for diagnosis. Changes after the backup may be lost; library files remain separate.",
          vi: "Khi khởi động, app kiểm tra cơ sở dữ liệu. Nếu dữ liệu hỏng, app đề nghị dùng bản sao mới nhất vượt qua kiểm tra và giữ tệp hỏng để chẩn đoán. Thay đổi sau thời điểm sao lưu có thể mất; tệp thư viện được lưu riêng.",
          zh: "启动时，应用会检查数据库。如果数据库损坏，它会提供通过检查的最新备份，并保留损坏的文件用于诊断。备份之后的变化可能会丢失；素材库文件单独存放。"
        },
      },
      {
        title: { en: "Go back to the previous version", vi: "Quay lại bản trước", zh: "回退到上一个版本" },
        body: {
          en: "Each update keeps one previous version on the PC. If the new one has a problem, open Settings › About › Previous version and choose Go back to this version; the app closes and opens the older one with the same data. It only offers this when that version can read your current data — after a data-store upgrade an older version cannot, and the card says so. Without the app, the uninstall window offers the same rollback, or run the command below.",
          vi: "Mỗi lần cập nhật, máy giữ lại một bản trước. Nếu bản mới có vấn đề, mở Cài đặt › Giới thiệu › Bản trước rồi chọn Quay lại bản này; app đóng và mở bản cũ với cùng dữ liệu. App chỉ mời quay lại khi bản đó đọc được dữ liệu hiện tại — sau khi kho dữ liệu đã nâng cấp thì bản cũ không đọc được, và thẻ sẽ nói rõ. Khi không mở được app, cửa sổ gỡ cài có cùng lựa chọn quay lại, hoặc chạy lệnh dưới đây.",
          zh: "每次更新都会在电脑上保留一个上一个版本。如果新版有问题，打开「设置 › 关于 › 上一个版本」，选择「回退到此版本」；应用会关闭，并用相同的数据打开旧版本。只有当该版本能读取当前数据时才提供此选项——数据存储升级后，旧版本无法读取，卡片上会说明。如果打不开应用，卸载窗口提供同样的回退选项，或运行下面的命令。"
        },
        code: {
          lang: "powershell",
          text: "powershell -ExecutionPolicy Bypass -File \"$env:LOCALAPPDATA\\Programs\\Muse4AI\\tools\\install.ps1\" -Rollback",
        },
      },
      {
        title: { en: "Uninstall from Windows Settings", vi: "Gỡ cài từ Cài đặt Windows", zh: "从 Windows 设置卸载" },
        body: {
          en: "Open Windows Settings › Apps › Installed apps, find Muse4AI and choose Uninstall. A small window asks whether to also delete accounts, proxies, settings, and sign-ins saved on this PC; leave it unticked to keep them for a later reinstall. Images and videos in your library are always kept. If the app is open, it is asked to quit the normal way first.",
          vi: "Mở Cài đặt Windows › Ứng dụng › Ứng dụng đã cài, tìm Muse4AI rồi chọn Gỡ cài đặt. Một cửa sổ nhỏ hỏi có xoá luôn tài khoản, proxy, cài đặt và phiên đăng nhập lưu trên máy không; để trống nếu muốn giữ lại cho lần cài sau. Ảnh và video trong thư viện luôn được giữ. Nếu app đang mở, app được nhờ tự thoát theo cách bình thường trước.",
          zh: "打开「Windows 设置 › 应用 › 已安装的应用」，找到 Muse4AI，选择「卸载」。一个小窗口会询问是否同时删除本电脑上保存的账号、代理、设置和登录状态；不勾选可留待以后重装时使用。素材库中的图片和视频始终保留。如果应用正在运行，会先按正常方式请求它退出。"
        },
      },
      {
        title: { en: "Export diagnostics for support", vi: "Xuất chẩn đoán khi cần hỗ trợ", zh: "导出诊断信息以寻求支持" },
        body: {
          en: "Open Settings › Diagnostics and export the diagnostics ZIP. Review what you share. If the app cannot start, preserve its logs and describe the startup error.",
          vi: "Mở Cài đặt › Chẩn đoán và xuất ZIP chẩn đoán. Xem lại nội dung trước khi chia sẻ. Nếu app không mở được, giữ nhật ký và mô tả lỗi khởi động.",
          zh: "打开「设置 › 诊断」，导出诊断 ZIP。分享前请检查内容。如果应用无法启动，请保留它的日志并描述启动错误。"
        },
        shot: "settings-diagnostics",
      },
    ],
    success: {
      en: "The intended version opens with your data, or you have a preserved backup and diagnostics for recovery.",
      vi: "Phiên bản cần dùng mở được cùng dữ liệu, hoặc bạn đã giữ bản sao và thông tin chẩn đoán để khôi phục.",
      zh: "目标版本已带着你的数据打开，或你已保留备份和诊断信息用于恢复。"
    },
    troubleshoot: [
      {
        q: { en: "The installer says the app is still running.", vi: "Bộ cài báo app vẫn đang chạy.", zh: "安装程序说应用仍在运行。" },
        a: {
          en: "The EXE waits about 45 seconds for the app to quit. If jobs are still running, Muse4AI first asks whether to quit. Answer it or let the jobs finish, quit from the tray icon (closing the window alone does not stop the app), then run the installer again.",
          vi: "Bộ cài EXE chờ app thoát khoảng 45 giây. Nếu còn việc đang chạy, Muse4AI sẽ hỏi lại trước khi thoát. Hãy trả lời câu hỏi đó hoặc chờ việc xong, thoát bằng biểu tượng ở khay hệ thống (chỉ đóng cửa sổ chưa dừng app), rồi chạy lại bộ cài.",
          zh: "EXE 安装程序会等待应用退出约 45 秒。如果有任务在运行，Muse4AI 会先询问是否退出。请回答提示，或等任务完成，从托盘图标退出（只关闭窗口并不会停止应用），然后重新运行安装程序。"
        },
      },
      {
        q: { en: "The Updates card says this copy cannot install by itself.", vi: "Thẻ Cập nhật báo bản này không tự cài được.", zh: "更新卡片说此副本无法自行安装。" },
        a: {
          en: "That copy was not installed with the EXE or install.ps1 (for example it runs from another folder). Open the download page, run the installer once, and later updates work from inside the app.",
          vi: "Bản đó không được cài bằng bộ cài EXE hay install.ps1 (ví dụ chạy từ một thư mục khác). Mở trang tải về, chạy bộ cài một lần, các lần cập nhật sau sẽ làm được ngay trong app.",
          zh: "该副本不是用 EXE 或 install.ps1 安装的（例如它在另一个文件夹中运行）。请打开下载页面，运行一次安装程序，之后的更新就可以在应用内完成。"
        },
      },
      {
        q: { en: "Checking for updates failed.", vi: "Kiểm tra bản mới bị lỗi.", zh: "检查更新失败。" },
        a: {
          en: "Usually the PC is offline or the website could not be reached. Nothing else is affected and the app keeps working; it tries again in 12 hours, or press Check now. A download that does not match its SHA-256 fingerprint is deleted and never run.",
          vi: "Thường do máy mất mạng hoặc không vào được website. Không ảnh hưởng gì khác, app vẫn chạy bình thường; app thử lại sau 12 giờ, hoặc bấm Kiểm tra ngay. Tệp tải về không khớp dấu vân tay SHA-256 sẽ bị xoá và không bao giờ được chạy.",
          zh: "通常是电脑离线，或无法访问网站。其他功能不受影响，应用继续正常运行；它会在 12 小时后重试，也可以按「立即检查」。下载文件如果与 SHA-256 指纹不符，会被删除且永远不会运行。"
        },
      },
      {
        q: { en: "Will restoring a backup keep recent changes?", vi: "Khôi phục có giữ thay đổi mới không?", zh: "恢复备份会保留最近的更改吗？" },
        a: {
          en: "Not necessarily. Jobs and settings changed after that backup can be lost. Keep the current files before manual recovery.",
          vi: "Không chắc. Công việc và cài đặt thay đổi sau bản sao có thể mất. Giữ tệp hiện tại trước khi tự khôi phục.",
          zh: "不一定。备份之后更改的任务和设置可能会丢失。手动恢复之前，请保留当前文件。"
        },
      },
      {
        q: { en: "Are my videos inside the database backup?", vi: "Video có nằm trong bản sao cơ sở dữ liệu không?", zh: "我的视频在数据库备份里吗？" },
        a: {
          en: "No. Back up the output folder separately if you need an independent copy of your media.",
          vi: "Không. Hãy sao lưu riêng thư mục kết quả nếu cần bản sao độc lập của ảnh và video.",
          zh: "不在。如果需要媒体的独立副本，请单独备份输出文件夹。"
        },
      },
    ],
    related: ["install", "troubleshooting", "privacy-and-data"],
    appRoute: "/settings/about",
    updated: "2026-11-06",
  },
  {
    slug: "privacy-and-data",
    chapter: "settings",
    order: 4,
    title: { en: "Privacy and your data", vi: "Quyền riêng tư và dữ liệu", zh: "隐私与你的数据" },
    summary: {
      en: "See what stays on your PC, what your prompts and attached files send to Muse, and how to limit agent access safely.",
      vi: "Biết dữ liệu nào ở trên máy, prompt và tệp đính kèm nào được gửi tới Muse, cùng cách giới hạn quyền truy cập của agent.",
      zh: "了解哪些内容留在你的电脑上，提示词和附加文件会发送给 Muse 什么内容，以及如何安全地限制 agent 访问。"
    },
    before: [
      {
        en: "Only attach files you are allowed to send to Muse.",
        vi: "Chỉ đính kèm tệp bạn được phép gửi tới Muse.",
        zh: "只附加你有权发送给 Muse 的文件。"
      },
      {
        en: "Review your agent provider’s data practices separately; its service is outside the app.",
        vi: "Xem riêng cách nhà cung cấp agent xử lý dữ liệu; dịch vụ đó nằm ngoài app.",
        zh: "请单独查看 agent 提供方的数据处理方式；它的服务在应用之外。"
      },
    ],
    steps: [
      {
        title: { en: "Know what stays on this PC", vi: "Biết dữ liệu lưu trên máy", zh: "了解哪些数据留在本电脑上" },
        body: {
          en: `${FACTS.productName} keeps jobs, settings, API-key records, downloaded files, and account sign-in sessions in its own local storage. It does not store your Muse password. Roaming data is under ${FACTS.dataDir}; media uses your chosen output folder.`,
          vi: `${FACTS.productName} lưu công việc, cài đặt, bản ghi khoá API, tệp đã tải và phiên đăng nhập trong vùng lưu trữ riêng trên máy. App không lưu mật khẩu Muse. Dữ liệu roaming nằm tại ${FACTS.dataDir}; nội dung tải về dùng thư mục kết quả bạn chọn.`,
          zh: `${FACTS.productName} 把任务、设置、API 密钥记录、下载的文件和账号登录会话保存在自己的本地存储中。它不保存 Muse 密码。漫游数据在 ${FACTS.dataDir} 下；媒体使用你选择的输出文件夹。`
        },
        shot: "settings-general",
      },
      {
        title: { en: "Know what is sent to Muse", vi: "Biết nội dung gửi tới Muse", zh: "了解发送给 Muse 的内容" },
        body: {
          en: "Your prompts and attached files are sent to Muse through your own account so it can answer or generate results. Jobs on one account share its Muse memory and history. Avoid sending confidential material without permission.",
          vi: "Prompt và tệp bạn đính kèm được gửi tới Muse qua tài khoản của bạn để trả lời hoặc tạo kết quả. Các việc trên một tài khoản dùng chung bộ nhớ và lịch sử Muse. Không gửi tài liệu mật khi chưa được phép.",
          zh: "提示词和附加文件会通过你自己的账号发送给 Muse，以便它回答问题或生成结果。同一账号上的任务共享它的 Muse 记忆和历史记录。未经许可，不要发送保密资料。"
        },
      },
      {
        title: { en: "Understand the project boundary", vi: "Hiểu ranh giới của dự án", zh: "了解项目的边界" },
        body: {
          en: "The app does not send your jobs, files, keys, or sign-in sessions to Andrew Babo or the Muse4AI website. Its update check only downloads a small public file from the website (you can turn it off in Settings › About). Connecting an agent or enabling a tunnel introduces the separate providers you choose.",
          vi: "App không gửi công việc, tệp, khoá hoặc phiên đăng nhập của bạn tới Andrew Babo hay website Muse4AI. Việc kiểm tra bản mới chỉ tải một tệp công khai nhỏ từ website (tắt được trong Cài đặt › Giới thiệu). Khi kết nối agent hoặc bật đường hầm, bạn sử dụng thêm các nhà cung cấp riêng do mình chọn.",
          zh: "应用不会把你的任务、文件、密钥或登录会话发送给 Andrew Babo 或 Muse4AI 网站。更新检查只从网站下载一个小的公开文件（可以在「设置 › 关于」中关闭）。连接 agent 或启用隧道时，会引入你自己选择的其他提供方。"
        },
      },
      {
        title: { en: "Limit access and shared material", vi: "Giới hạn truy cập và nội dung chia sẻ", zh: "限制访问与共享内容" },
        body: {
          en: "Use one key per agent, keep sharing off when unnecessary, and revoke unused keys. Review diagnostics and screenshots before sending them. Never include a full API key in a screenshot or URL.",
          vi: "Dùng khoá riêng cho từng agent, tắt chia sẻ khi không cần và thu hồi khoá không còn dùng. Xem lại chẩn đoán và ảnh chụp trước khi gửi. Không để toàn bộ khoá API trong ảnh hoặc URL.",
          zh: "每个 agent 使用一个密钥，不需要共享时保持关闭，并撤销不用的密钥。发送诊断信息和截图之前请先检查。永远不要在截图或 URL 中包含完整的 API 密钥。"
        },
        shot: "settings-security",
      },
    ],
    success: {
      en: "You know which data stays local, which goes to Muse, and who can access the app through your keys.",
      vi: "Bạn biết dữ liệu nào ở trên máy, nội dung nào gửi tới Muse và ai có thể truy cập app bằng khoá.",
      zh: "你知道哪些数据留在本地、哪些发送给 Muse，以及谁能通过你的密钥访问应用。"
    },
    troubleshoot: [
      {
        q: { en: "Does no password storage mean no session storage?", vi: "Không lưu mật khẩu có nghĩa là không lưu phiên không?", zh: "不保存密码意味着也不保存会话吗？" },
        a: {
          en: "No. The app retains sign-in sessions in its own storage so accounts can stay signed in.",
          vi: "Không. App giữ phiên đăng nhập trong vùng lưu trữ riêng để tài khoản có thể tiếp tục đăng nhập.",
          zh: "不是。应用会在自己的存储中保留登录会话，以便账号保持登录状态。"
        },
      },
      {
        q: { en: "Can I isolate research between agents?", vi: "Có thể tách nghiên cứu giữa các agent không?", zh: "能在 agent 之间隔离研究内容吗？" },
        a: {
          en: "Separate API keys control access, but jobs on one Muse account still share that account’s memory. Use separate accounts when separation matters.",
          vi: "Khoá API riêng giúp quản lý truy cập, nhưng các việc trên cùng tài khoản Muse vẫn dùng chung bộ nhớ. Dùng tài khoản riêng khi cần tách biệt.",
          zh: "单独的 API 密钥可以控制访问，但同一 Muse 账号上的任务仍然共享该账号的记忆。需要隔离时，请使用单独的账号。"
        },
      },
    ],
    related: ["api-keys", "remote-access", "accounts-and-limits"],
    appRoute: "/settings/security",
    updated: "2026-11-06",
  },
];
