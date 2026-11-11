import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_CREDITS: DocArticle[] = [
  {
    slug: "open-source",
    chapter: "credits",
    order: 1,
    title: { en: "Open source and acknowledgments", vi: "Mã nguồn mở và lời cảm ơn", zh: "开源与致谢" },
    summary: {
      en: "See the projects behind Muse4AI, starting with muse2api, and find acknowledgments and installed license texts.",
      vi: "Xem các dự án góp phần xây dựng Muse4AI, bắt đầu từ muse2api, cùng danh sách ghi nguồn và nơi chứa giấy phép khi cài đặt.",
      zh: "了解 Muse4AI 背后的项目，从 muse2api 开始，并找到致谢内容和安装时附带的许可文本。"
    },
    before: [
      {
        en: "This page explains project acknowledgments, not instructions for connecting an agent.",
        vi: "Trang này giải thích ghi nguồn dự án, không phải hướng dẫn kết nối agent.",
        zh: "本页说明项目致谢，不是连接 agent 的操作指南。"
      },
      {
        en: `${FACTS.productName} is an independent project by Andrew Babo, not affiliated with or endorsed by Meta.`,
        vi: `${FACTS.productName} là dự án độc lập của Andrew Babo, không liên kết với Meta và không được Meta bảo chứng.`,
        zh: `${FACTS.productName} 是 Andrew Babo 的独立项目，与 Meta 没有关联，也未获得 Meta 的认可。`
      },
    ],
    steps: [
      {
        title: { en: "Thank the muse2api projects first", vi: "Trước hết, cảm ơn các dự án muse2api", zh: "先感谢 muse2api 项目" },
        body: {
          en: "The Muse web integration builds on work from [muse2api by czg86389-hub](https://github.com/czg86389-hub/muse2api) and [muse2api by www222fff](https://github.com/www222fff/muse2api). Thank you to their authors for the foundations used in page interaction and result handling.",
          vi: "Phần làm việc với web Muse dựa trên đóng góp từ [muse2api của czg86389-hub](https://github.com/czg86389-hub/muse2api) và [muse2api của www222fff](https://github.com/www222fff/muse2api). Cảm ơn các tác giả đã đặt nền tảng cho việc tương tác với trang và xử lý kết quả.",
          zh: "与 Muse 网页的集成建立在以下项目的工作之上：[czg86389-hub 的 muse2api](https://github.com/czg86389-hub/muse2api) 和 [www222fff 的 muse2api](https://github.com/www222fff/muse2api)。感谢这些作者为页面交互和结果处理打下的基础。"
        },
        shot: "settings-about",
      },
      {
        title: { en: "Read the complete acknowledgments", vi: "Xem đầy đủ danh sách ghi nguồn", zh: "阅读完整致谢" },
        body: {
          en: "The complete list of libraries, fonts, tools and app components, with what each one does and its license, is on the [Open source page](/open-source). In the app, the same list also appears right below this guide.",
          vi: "Danh sách đầy đủ gồm thư viện, phông chữ, công cụ và thành phần của app, kèm vai trò và giấy phép từng mục, nằm ở [trang Mã mở](/open-source). Trong app, danh sách này còn hiện ngay bên dưới bài hướng dẫn.",
          zh: "完整的库、字体、工具和应用组件列表，含各自的作用和许可，见 [开源页面](/open-source)。在应用内，同一列表也会显示在这篇指南下方。"
        },
      },
      {
        title: { en: "Find the installed license text", vi: "Tìm giấy phép trong bản cài", zh: "在安装中找到许可文本" },
        body: {
          en: "Open Settings › About for the app’s acknowledgments. The muse2api license text is also shipped in the installation folder at the path below.",
          vi: "Mở Cài đặt › Giới thiệu để xem ghi nguồn trong app. Toàn văn giấy phép muse2api cũng được kèm trong thư mục cài tại đường dẫn dưới đây.",
          zh: "打开「设置 › 关于」查看应用内的致谢。muse2api 的许可文本也随安装附带，路径如下。"
        },
        code: {
          lang: "text",
          text: `${FACTS.installDir}\\resources\\muse2api.txt`,
        },
      },
    ],
    success: {
      en: "You can identify the upstream projects and locate their acknowledgments and shipped license text.",
      vi: "Bạn biết các dự án nền tảng và tìm được phần ghi nguồn cùng giấy phép đi kèm.",
      zh: "你可以确认上游项目，并找到它们的致谢内容和附带的许可文本。"
    },
    troubleshoot: [
      {
        q: { en: "Does an acknowledgment mean a partnership?", vi: "Ghi nguồn có nghĩa là hợp tác không?", zh: "致谢意味着合作关系吗？" },
        a: {
          en: "No. Acknowledgments credit work used by the project; they do not imply an affiliation or endorsement.",
          vi: "Không. Ghi nguồn là ghi nhận công sức được dự án sử dụng, không có nghĩa là liên kết hay bảo chứng.",
          zh: "不是。致谢是感谢项目所使用的工作，并不意味着存在关联或认可。"
        },
      },
      {
        q: { en: "Where is the full dependency list?", vi: "Danh sách thành phần đầy đủ ở đâu?", zh: "完整的依赖列表在哪里？" },
        a: {
          en: "Read the automatically rendered credits below this article. Consult each entry’s linked project and license for details.",
          vi: "Xem danh sách ghi nguồn tự hiển thị bên dưới bài này. Mở liên kết dự án và giấy phép của từng mục để biết chi tiết.",
          zh: "请阅读这篇文章下方自动呈现的致谢内容。详情请查看每个条目的项目链接和许可。"
        },
      },
    ],
    related: ["what-is-muse4ai", "privacy-and-data", "settings-overview"],
    appRoute: "/settings/about",
    updated: "2026-11-02",
  },
];
