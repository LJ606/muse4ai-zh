import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_LIBRARY: DocArticle[] = [
  {
    slug: "library",
    chapter: "library",
    order: 1,
    title: { en: "Find and reuse results", vi: "Tìm và dùng lại kết quả", zh: "查找与重复使用结果" },
    summary: {
      en: "Find finished results in Library, filter by prompt or batch, open local files, and reuse an image as a Studio reference.",
      vi: "Tìm kết quả trong Thư viện, lọc theo prompt hoặc lô, mở tệp trên máy và dùng lại ảnh làm tham chiếu trong Studio.",
      zh: "在素材库中查找已完成的结果，按提示词或批量任务筛选，打开本地文件，并把图片用作 Studio 参考图。"
    },
    before: [
      {
        en: "Finish a job and allow its result to download.",
        vi: "Hoàn tất một lượt và chờ tải kết quả về máy.",
        zh: "完成一个任务，并等待结果下载。"
      },
      {
        en: "Keep the downloaded files available in their saved locations.",
        vi: "Giữ các tệp đã tải tại vị trí lưu để app mở được.",
        zh: "把下载的文件保留在保存位置，方便应用打开。"
      },
    ],
    steps: [
      {
        title: { en: "1. Open Library", vi: "1. Mở Thư viện", zh: "1. 打开素材库" },
        body: {
          en: `Open Library in ${FACTS.productName}. Browse the finished results, or narrow the view by type, batch, account, or favorites.`,
          vi: `Mở Thư viện trong ${FACTS.productName}. Duyệt kết quả hoàn chỉnh hoặc lọc theo loại, lô, tài khoản hay Yêu thích.`,
          zh: `在 ${FACTS.productName} 中打开素材库。浏览已完成的结果，或按类型、批量任务、账号或收藏筛选。`
        },
        shot: "library-grid",
      },
      {
        title: { en: "2. Search by prompt", vi: "2. Tìm theo prompt", zh: "2. 按提示词搜索" },
        body: {
          en: "Use the prompt search to find words from the original request. If nothing appears, clear other filters and try a shorter phrase.",
          vi: "Dùng Tìm theo prompt để tìm từ có trong yêu cầu gốc. Nếu không thấy kết quả, bỏ các bộ lọc khác và thử cụm từ ngắn hơn.",
          zh: "使用提示词搜索，查找原始请求中的词语。如果没有结果，清除其他筛选条件，试一个更短的词组。"
        },
      },
      {
        title: { en: "3. Preview and open the file", vi: "3. Xem và mở tệp", zh: "3. 预览并打开文件" },
        body: {
          en: "Open an item to inspect it and its details. Use Open file to launch the saved file or the folder action to locate it on your PC.",
          vi: "Mở tác phẩm để xem kết quả và thông tin chi tiết. Chọn Mở file để mở tệp đã lưu hoặc Hiện trong thư mục để tìm vị trí trên máy.",
          zh: "打开一个条目，查看内容和详情。使用「打开文件」启动已保存的文件，或使用文件夹操作在电脑上找到它。"
        },
        shot: "library-detail",
      },
      {
        title: { en: "4. Reuse an image in Studio", vi: "4. Dùng lại ảnh trong Studio", zh: "4. 在 Studio 中重复使用图片" },
        body: {
          en: "For an image, choose Use as reference image. Check the attachment in Studio, describe the changes you want, and send only when ready. Reuse creates a new request; it does not change the original file.",
          vi: "Với ảnh, chọn Dùng làm ảnh tham chiếu. Kiểm tra ảnh đính kèm trong Studio, mô tả phần muốn đổi rồi mới gửi. Dùng lại sẽ tạo yêu cầu mới, không sửa tệp gốc.",
          zh: "对于图片，选择「用作参考图」。在 Studio 中检查附加内容，描述想要的改动，准备好后再发送。重复使用会创建一个新请求，不会更改原始文件。"
        },
      },
    ],
    success: {
      en: "You can find a finished result, open its local file, and bring a saved image into Studio as a reference.",
      vi: "Bạn tìm được kết quả hoàn chỉnh, mở được tệp trên máy và đưa ảnh đã lưu vào Studio làm tham chiếu.",
      zh: "你可以找到已完成的结果，打开本地文件，并把保存的图片带入 Studio 用作参考图。"
    },
    troubleshoot: [
      {
        q: {
          en: "Why is Library empty?",
          vi: "Vì sao Thư viện trống?",
          zh: "素材库为什么是空的？"
        },
        a: {
          en: "Check that a job finished and its result downloaded. Clear search and filters, then inspect the job in Queue if the file is still missing.",
          vi: "Kiểm tra lượt đã xong và kết quả đã tải về chưa. Xoá tìm kiếm cùng bộ lọc, rồi mở lượt trong Hàng chờ nếu vẫn thiếu tệp.",
          zh: "检查任务是否已完成、结果是否已下载。清除搜索和筛选条件，如果文件仍然缺失，再到队列中检查该任务。"
        },
      },
      {
        q: {
          en: "The app says the file is missing. What should I check?",
          vi: "App báo không tìm thấy tệp thì kiểm tra gì?",
          zh: "应用说找不到文件，该检查什么？"
        },
        a: {
          en: "The file may have been moved or deleted. Restore it to its saved location if possible, then use Rescan to refresh the library's file status.",
          vi: "Tệp có thể đã bị chuyển hoặc xoá. Nếu được, đưa tệp về vị trí đã lưu rồi chọn Quét lại để cập nhật tình trạng tệp trong thư viện.",
          zh: "文件可能已被移动或删除。如果可以，把文件恢复到保存位置，然后使用「重新扫描」刷新素材库的文件状态。"
        },
      },
      {
        q: {
          en: "Will changing the library folder move existing results?",
          vi: "Đổi thư mục thư viện có chuyển kết quả cũ không?",
          zh: "更换素材库文件夹会移动已有结果吗？"
        },
        a: {
          en: "No. General settings changes the destination for new files only. Existing files remain in their original locations.",
          vi: "Không. Thay đổi trong Cài đặt › Chung chỉ áp dụng cho tệp mới. Tệp đang có vẫn nằm ở vị trí cũ.",
          zh: "不会。「通用」设置只改变新文件的保存位置。已有文件保留在原来的位置。"
        },
      },
    ],
    related: ["extend-video", "reference-files", "queue", "batches", "settings-overview"],
    appRoute: "/library",
    updated: "2026-11-03",
  },
  {
    slug: "extend-video",
    chapter: "library",
    order: 2,
    title: { en: "Extend a video", vi: "Kéo dài video", zh: "续写视频" },
    summary: {
      en: `Continue a Muse video from Library about ${FACTS.extend.stepSeconds} seconds per step, up to ${FACTS.extend.maxSteps} steps (about ${FACTS.extend.maxSeconds} seconds), and get one longer video each time.`,
      vi: `Nối tiếp một video Muse trong Thư viện, mỗi lần khoảng ${FACTS.extend.stepSeconds} giây, tối đa ${FACTS.extend.maxSteps} lần (khoảng ${FACTS.extend.maxSeconds} giây), mỗi lần ra một video dài hơn.`,
      zh: `从素材库续写一段 Muse 视频，每步约 ${FACTS.extend.stepSeconds} 秒，最多 ${FACTS.extend.maxSteps} 步（总计约 ${FACTS.extend.maxSeconds} 秒），每次得到一条更长的视频。`
    },
    before: [
      {
        en: "Pick a video Muse made through Muse4AI: from Studio, a batch or an AI agent.",
        vi: "Chọn video do Muse tạo qua Muse4AI: từ Studio, Hàng loạt hay AI agent.",
        zh: "选择一段通过 Muse4AI 由 Muse 生成的视频：来自 Studio、批量任务或 AI agent。"
      },
      {
        en: "The Muse account that made the video must still be in Accounts, ready, with usage limit remaining.",
        vi: "Tài khoản Muse đã tạo video vẫn phải còn trong Tài khoản, đang sẵn sàng và còn hạn mức.",
        zh: "生成该视频的 Muse 账号必须仍在「账号」中，保持就绪且剩余额度。"
      },
    ],
    steps: [
      {
        title: { en: "1. Open the video and choose Extend video", vi: "1. Mở video và chọn Kéo dài video", zh: "1. 打开视频并选择「续写视频」" },
        body: {
          en: "Open Library, click the video, and choose Extend video. If the button is grey, the line under it says why, for example that the account is missing or the video has no Muse conversation.",
          vi: "Mở Thư viện, bấm vào video rồi chọn Kéo dài video. Nếu nút bị mờ, dòng chữ bên dưới cho biết lý do, ví dụ thiếu tài khoản hoặc video chưa có hội thoại Muse.",
          zh: "打开素材库，点击视频，选择「续写视频」。如果按钮是灰色，按钮下方的文字会说明原因，例如账号缺失或视频没有关联的 Muse 会话。"
        },
        shot: "library-extend",
      },
      {
        title: { en: "2. Choose how to continue", vi: "2. Chọn cách nối tiếp", zh: "2. 选择续写方式" },
        body: {
          en: "Auto lets Muse continue the same scene. Based on description lets you write what should happen next, for example “the boat drifts under a small wooden bridge”.",
          vi: "Tự động để Muse nối tiếp đúng cảnh đang có. Theo mô tả cho bạn viết cảnh tiếp theo, ví dụ “chiếc thuyền trôi qua dưới một cây cầu gỗ nhỏ”.",
          zh: "「自动」让 Muse 接着同一个场景继续。「按描述」可以写出接下来应发生什么，例如“小船从一座小木桥下漂过”。"
        },
        shot: "extend-sheet",
      },
      {
        title: { en: "3. Set how long", vi: "3. Chọn dài bao nhiêu", zh: "3. 设置时长" },
        body: {
          en: `Steps sets how many times to extend (1–${FACTS.extend.maxSteps}); Target length stops near the length you pick (up to ${FACTS.extend.maxSeconds} seconds). Each step is one Muse request and may use usage limit.`,
          vi: `Số lần là số lần kéo dài (1–${FACTS.extend.maxSteps}); Đến khoảng dừng khi gần tới độ dài bạn chọn (tối đa ${FACTS.extend.maxSeconds} giây). Mỗi lần là một yêu cầu Muse và có thể dùng hạn mức.`,
          zh: `「步数」设置续写次数（1–${FACTS.extend.maxSteps}）；「目标时长」在接近你选择的长度时停止（最长 ${FACTS.extend.maxSeconds} 秒）。每一步都是一次 Muse 请求，可能会消耗用量额度。`
        },
      },
      {
        title: { en: "4. Start and follow the chain", vi: "4. Bắt đầu và theo dõi chuỗi", zh: "4. 开始并跟进续写链" },
        body: {
          en: "Choose Start extending. Each finished step adds one new, longer video to Library; the original stays as it was. Use View chain to see every step or to stop the chain.",
          vi: "Bấm Bắt đầu kéo dài. Mỗi lần xong sẽ thêm một video mới, dài hơn vào Thư viện; video gốc vẫn giữ nguyên. Chọn Xem chuỗi để xem từng lần hoặc dừng chuỗi.",
          zh: "选择「开始续写」。每完成一步，素材库中就会新增一条更长的视频；原始视频保持原样。使用「查看续写链」查看每一步，或停止续写链。"
        },
      },
    ],
    success: {
      en: "Library shows a new video longer than the original, and the chain lists each finished step.",
      vi: "Thư viện có video mới dài hơn bản gốc và chuỗi liệt kê từng lần đã xong.",
      zh: "素材库中会出现一条比原始视频更长的新视频，续写链会列出每个已完成的步骤。"
    },
    troubleshoot: [
      {
        q: { en: "Why is Extend video greyed out?", vi: "Vì sao nút Kéo dài video bị mờ?", zh: "为什么「续写视频」是灰色不可点？" },
        a: {
          en: "Read the line under the button. Common reasons: the account that made the video was removed, the video was made before this version saved its Muse conversation, or a newer video now continues that conversation. Make a new video, or extend the newest one.",
          vi: "Đọc dòng chữ dưới nút. Lý do hay gặp: tài khoản tạo video đã bị xoá, video được tạo trước khi bản này lưu hội thoại Muse, hoặc đã có video mới hơn nối tiếp hội thoại đó. Hãy tạo video mới hoặc kéo dài video mới nhất.",
          zh: "请阅读按钮下方的文字。常见原因：生成视频的账号已被删除；视频是在当前版本开始保存 Muse 会话之前生成的；或已有更新的视频在继续该会话。请生成一段新视频，或续写最新的一段。"
        },
      },
      {
        q: { en: "Does the account's run method matter?", vi: "Cách chạy của tài khoản có ảnh hưởng không?", zh: "账号的运行方式有影响吗？" },
        a: {
          en: "Yes. A video keeps the way it was made: one made over HTTP continues over HTTP, one made through the Muse page continues through the page. Keep the account on Auto and both work; the app tells you if the current setting blocks it.",
          vi: "Có. Video giữ cách nó được tạo: video tạo qua HTTP thì kéo dài qua HTTP, video tạo qua giao diện Muse thì kéo dài qua giao diện. Để tài khoản ở Tự động thì cả hai đều chạy; nếu cài đặt hiện tại chặn, app sẽ báo.",
          zh: "有。视频会保持它生成时的方式：通过 HTTP 生成的视频继续走 HTTP，通过 Muse 页面生成的视频继续走页面。把账号设为「自动」，两种方式都可用；如果当前设置会阻止续写，应用会提示你。"
        },
      },
      {
        q: { en: "The join between steps is not smooth.", vi: "Chỗ nối giữa các lần chưa liền mạch.", zh: "步骤之间的衔接不够顺滑。" },
        a: {
          en: "Muse decides each continuation, so a seamless join is not guaranteed. Try Auto for the same scene, or describe the next moment more precisely.",
          vi: "Muse tự quyết định từng đoạn nối, nên không bảo đảm mọi chỗ nối đều liền. Thử Tự động để giữ cùng cảnh, hoặc mô tả khoảnh khắc tiếp theo cụ thể hơn.",
          zh: "Muse 自行决定每段续写内容，所以无法保证衔接处完全顺滑。可以试试「自动」以保持同一场景，或把接下来的画面描述得更精确。"
        },
      },
    ],
    related: ["library", "edit-video", "create-video", "accounts-and-limits"],
    appRoute: "/library",
    updated: "2026-11-03",
  },
];
