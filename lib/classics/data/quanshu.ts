/**
 * 《紫微斗数全书》— 核心精选
 *
 * 公版（明代罗洪先编）
 * 是紫微斗数最系统的古籍，强调宫位关系与四化，全本约 10 万字。
 */

import type { Book } from '../types';

export const ziWeiQuanShu: Book = {
  title: 'Tử Vi Đẩu Số Toàn Thư',
  slug: 'quanshu',
  dynasty: 'Nhà Minh',
  author: 'La Hồng Tiên (biên soạn, theo tư liệu nguồn)',
  intro: 'Tư liệu truyền thống về Tử Vi Đẩu Số, trình bày quan hệ giữa Thập nhị cung và Tứ Hóa.',
  wordCount: 100000,
  chapters: [
    {
      title: 'Thập nhị cung · Cung Mệnh',
      subtitle: 'Cơ sở luận Mệnh',
      paragraphs: [
        {
          id: 'qs-1-1',
          idx: 1,
          text: '命宫者，一身之根本，万事之枢纽。命宫定，则一生格局定。看命宫先看主星，次看辅煞，再看四化与三方四正之会照。',
          translation: "Cung Mệnh là nền tảng của một lá số. Khi luận cung Mệnh, trước hết xem chính tinh, tiếp đến phụ tinh và sát tinh, rồi xét Tứ Hóa cùng Tam phương tứ chính.",
        },
        {
          id: 'qs-1-2',
          idx: 2,
          text: '命宫主星庙旺，主先天优势，做事事半功倍；落陷则主先天劣势，但反主大成——落陷之人有"不甘"二字推动，反能爆发出庙旺命格做不到的逆袭。',
          translation: "Chính tinh tại cung Mệnh ở trạng thái Miếu, Vượng thường được xem là lợi thế tiên thiên; khi lạc Hãm, cách luận cần xét thêm ý chí, hoàn cảnh và các sao hội chiếu, không thể kết luận một chiều.",
        },
        {
          id: 'qs-1-3',
          idx: 3,
          text: '命宫见六吉星（左辅右弼文昌文曲天魁天钺），主一生贵人不绝；命宫见六煞星（擎羊陀罗火星铃星地空地劫），主多波折磨砺，但若能忍过，反成大器。',
          translation: "Cung Mệnh hội Lục cát tinh gồm Tả Phụ, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt thường được luận là tăng trợ lực. Hội Lục sát tinh gồm Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp thì cần xem xét trở lực và cách cục.",
        },
      ],
    },
    {
      title: 'Thập nhị cung · Cung Tài Bạch',
      subtitle: 'Nguồn tài lộc',
      paragraphs: [
        {
          id: 'qs-2-1',
          idx: 1,
          text: '财帛宫主一生之财源、收入、理财方式。财帛宫主星不同，赚钱方式各异：紫微在财主官财，武曲在财主商财，太阴在财主田宅财，巨门在财主口才财。',
          translation: "Cung Tài Bạch chủ nguồn tài lộc, thu nhập và cách quản lý tiền bạc. Tử Vi tại Tài Bạch thường được luận về tài chính gắn chức vụ; Vũ Khúc thiên về kinh doanh; Thái Âm liên hệ điền sản; Cự Môn liên hệ nghề nghiệp dùng khẩu tài.",
        },
        {
          id: 'qs-2-2',
          idx: 2,
          text: '财帛宫化禄入命，主财源广进；财帛宫化忌，主财来财去；财帛宫见禄存，主稳定积累；财帛宫遇空劫，主财耗虚名。',
          translation: "Cung Tài Bạch hội Hóa Lộc thường được xem là yếu tố thuận lợi về nguồn thu; Hóa Kỵ liên hệ vướng mắc tiền bạc; Lộc Tồn chủ tích lũy; Không Kiếp chủ nguy cơ hao tổn theo cách luận truyền thống.",
        },
      ],
    },
    {
      title: 'Thập nhị cung · Cung Quan Lộc',
      subtitle: 'Công danh, sự nghiệp',
      paragraphs: [
        {
          id: 'qs-3-1',
          idx: 1,
          text: '官禄宫主事业、地位、社会成就。官禄宫主星不同，事业方向各异：紫微在官宜大平台高位，太阳在官宜公务名声，武曲在官宜金融实业，廉贞在官宜文武兼备。',
          translation: "Cung Quan Lộc chủ công danh, sự nghiệp và vị thế xã hội. Tử Vi tại Quan Lộc thường liên hệ quản lý, Thái Dương liên hệ danh tiếng và hoạt động công chúng, Vũ Khúc liên hệ tài chính, Liêm Trinh liên hệ kỷ luật và nghệ thuật.",
        },
        {
          id: 'qs-3-2',
          idx: 2,
          text: '官禄宫化权入命，主能独当一面；化禄入官，主财从职业来；化忌入官，主职场波折。',
          translation: "Hóa Quyền nhập cung Quan Lộc hoặc hội cung Mệnh thường được luận về quyền hành; Hóa Lộc nhập Quan Lộc chủ nguồn thu từ sự nghiệp; Hóa Kỵ chủ những trở lực cần cân nhắc.",
        },
      ],
    },
    {
      title: 'Thập nhị cung · Cung Phu Thê',
      subtitle: 'Người phối ngẫu',
      paragraphs: [
        {
          id: 'qs-4-1',
          idx: 1,
          text: '夫妻宫主配偶气质、婚姻状态。夫妻宫紫微主配偶端庄威权，宜迟婚；夫妻宫贪狼主配偶多情，桃花重；夫妻宫天梁主配偶成熟稳重，年长。',
          translation: "Cung Phu Thê dùng để luận về người phối ngẫu và quan hệ hôn nhân. Tử Vi được gắn với phẩm chất tự trọng, Tham Lang với sức hút và cảm xúc, Thiên Lương với sự chín chắn. Cần phối hợp cả hai lá số và hoàn cảnh thực tế.",
        },
        {
          id: 'qs-4-2',
          idx: 2,
          text: '夫妻宫化忌冲命，主婚姻多波折。夫妻宫见六煞，需特别注意感情之磨砺。夫妻宫见六吉，主配偶贵人。',
          translation: "Hóa Kỵ xung Mệnh từ cung Phu Thê được luận là có vướng mắc trong quan hệ. Hội Lục sát cần thận trọng, hội Lục cát tinh có thể tăng ý nghĩa hỗ trợ; không nên suy luận hôn nhân chắc chắn từ một sao.",
        },
      ],
    },
    {
      title: 'Luận Tứ Hóa',
      subtitle: 'Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ',
      paragraphs: [
        {
          id: 'qs-5-1',
          idx: 1,
          text: '四化为命盘之精华——化禄主财、化权主势、化科主名、化忌主病。四化所在宫位，决定一生重大事件之节点。',
          translation: "Tứ Hóa gồm Hóa Lộc chủ tài lộc, Hóa Quyền chủ quyền hành, Hóa Khoa chủ khoa danh, Hóa Kỵ chủ trở ngại trong cách luận truyền thống. Các cung chứa Tứ Hóa là một thành tố quan trọng khi xét Đại hạn và Lưu niên.",
        },
        {
          id: 'qs-5-2',
          idx: 2,
          text: '生年四化为本命四化，永远固定；倪师强调四化星不动，只看大限流年走到何处。北派飞星派之自化、宫干飞化、来因宫等，倪师不主张使用。',
          translation: "Sinh niên Tứ Hóa cố định theo thiên can năm sinh. Theo cách trình bày của Nghê Hải Hạ, cần xét Đại hạn và Lưu niên tương tác với Tứ Hóa bản mệnh. Những phương pháp Tự Hóa, cung can Phi Hóa và Lai nhân cung có cách sử dụng khác giữa các phái.",
        },
        {
          id: 'qs-5-3',
          idx: 3,
          text: '化禄入命三方四正：财源稳定，缘分广，能力可变现。化禄入夫妻：婚姻甜蜜。化禄入官禄：事业财源相应。',
          translation: "Hóa Lộc nhập Tam phương tứ chính cung Mệnh thường được luận là có cơ hội tài lộc và nhân duyên; nhập cung Phu Thê liên hệ sự hòa hợp; nhập cung Quan Lộc liên hệ nguồn thu từ công việc.",
        },
        {
          id: 'qs-5-4',
          idx: 4,
          text: '化忌入命三方四正：一生有深刻功课，宜面对而非逃避。化忌入夫妻：婚姻多磨砺。化忌入官禄：事业多波折，但磨练后反成专业人才。',
          translation: "Hóa Kỵ nhập Tam phương Mệnh được luận là trở lực cần giải quyết; nhập Phu Thê liên hệ khó khăn hôn nhân; nhập Quan Lộc liên hệ thử thách nghề nghiệp. Những nhận định này không phải kết luận chắc chắn.",
        },
      ],
    },
    {
      title: 'Cách Cơ Nguyệt Đồng Lương',
      subtitle: 'Ổn định và tích lũy',
      paragraphs: [
        {
          id: 'qs-6-1',
          idx: 1,
          text: '天机太阴天同天梁四星齐入命三方四正，称机月同梁格。文质彬彬、聪慧善谋，最适合公职、学术、文艺、医疗、服务等需稳定累积的行业。',
          translation: "Bốn sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương hội tại Tam phương tứ chính cung Mệnh được gọi là cách Cơ Nguyệt Đồng Lương. Cách này thường liên hệ tính nhã nhặn, mưu lược và công việc hành chính, học thuật, văn nghệ hay dịch vụ.",
        },
        {
          id: 'qs-6-2',
          idx: 2,
          text: '机月同梁作吏人——古云此格者宜担任公职、行政文书工作，安稳一生。再会昌曲化科，主名声远播。最忌煞星过多，则反主多变难安。',
          translation: "Cổ quyết “Cơ Nguyệt Đồng Lương tác lại nhân” gắn cách cục này với công chức và công việc văn thư. Hội Văn Xương, Văn Khúc, Hóa Khoa có thể tăng yếu tố khoa danh; hội nhiều sát tinh cần xét sự ổn định.",
        },
      ],
    },
    {
      title: 'Cách Song Lộc triều viên',
      subtitle: 'Phú tỷ Đào Chu',
      paragraphs: [
        {
          id: 'qs-7-1',
          idx: 1,
          text: '化禄与禄存同会命宫三方四正，称双禄朝垣格。古云"双禄朝垣，富比陶朱"，主一生不愁财，多有正财横财兼得。',
          translation: "Hóa Lộc và Lộc Tồn cùng hội Tam phương tứ chính cung Mệnh hình thành cách Song Lộc triều viên. Cổ quyết “Song Lộc triều viên, phú tỷ Đào Chu” mang ý nghĩa tài lộc dồi dào.",
        },
        {
          id: 'qs-7-2',
          idx: 2,
          text: '双禄朝垣最忌空劫——空劫一冲，则双禄成虚名。需见左辅右弼或文昌文曲，方为正格。',
          translation: "Cách Song Lộc triều viên khi gặp Không Kiếp có thể giảm tính cát lợi theo cổ thư. Hội Tả Phụ, Hữu Bật, Văn Xương, Văn Khúc thường được xem là bổ trợ tốt.",
        },
      ],
    },
  ],
};
