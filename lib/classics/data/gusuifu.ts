/**
 * 《骨髓赋》— 紫微斗数核心口诀
 *
 * 公版（明代刊本）。是紫微斗数最权威、最浓缩的口诀，长约 1500 字。
 * 倪师在《天纪》中多次援引此赋。
 */

import type { Book } from '../types';

export const guSuiFu: Book = {
  title: 'Cốt Tủy Phú',
  slug: 'gusuifu',
  dynasty: 'Nhà Minh',
  author: 'Cổ thư Tử Vi, chưa xác định tác giả',
  intro: 'Tuyển tập khẩu quyết Cốt Tủy Phú, khoảng 1.500 chữ. Được nhắc đến trong các bài giảng Thiên Kỷ và tài liệu nghiên cứu Tử Vi.',
  wordCount: 1500,
  chapters: [
    {
      title: 'Thiên Tổng luận',
      subtitle: 'Cơ sở lập luận của Tử Vi Đẩu Số',
      paragraphs: [
        {
          id: 'gsf-1-1',
          idx: 1,
          text: '太极星曜，乃群星之主。紫微帝座，为众星之尊。天府令星，南北斗化禄、化权、令星；左辅右弼，主祭祀之星。',
          translation: "Các tinh diệu trong Thái Cực được xem là nền tảng của quần tinh. Tử Vi là Đế tọa, đứng đầu các sao; Thiên Phủ là Lệnh tinh, chủ kho tàng. Tả Phụ, Hữu Bật là các sao phụ tá.",
        },
        {
          id: 'gsf-1-2',
          idx: 2,
          text: '紫微为君，以左辅右弼为相。天府为臣，以禄存为府库。天机为善，天梁为荫，遇之则吉；廉贞为囚，破军为耗，逢之则凶。',
          translation: "Tử Vi ví như vua, Tả Phụ và Hữu Bật như bề tôi; Thiên Phủ là quan giữ kho, Lộc Tồn là kho tài. Thiên Cơ hóa khí vi Thiện, Thiên Lương hóa khí vi Ấm; Liêm Trinh hóa khí vi Tù, Phá Quân hóa khí vi Hao. Cần phối hợp cát hung toàn cục.",
        },
        {
          id: 'gsf-1-3',
          idx: 3,
          text: '看命之要，先看命宫。命宫主星定其格局，三方四正定其用武。次看身宫，身宫定其晚景与依归。再看大限流年，定其一生进退之节。',
          translation: "Khi luận mệnh trước hết xem cung Mệnh, chính tinh tại cung Mệnh và Tam phương tứ chính; tiếp theo xem cung Thân để xét xu hướng hậu vận, rồi phối hợp Đại hạn và Lưu niên.",
        },
      ],
    },
    {
      title: 'Luận sao Tử Vi',
      subtitle: 'Đế tọa được phù trợ tăng cát lợi',
      paragraphs: [
        {
          id: 'gsf-2-1',
          idx: 1,
          text: '紫微为帝座之星，得辅弼则贵，得昌曲则秀，得魁钺则贵人扶持。紫微独坐无辅，纵贵不久；得三方四正之吉星会照，方为正宗大格。',
          translation: "Tử Vi là Đế tinh. Khi được Tả Phụ, Hữu Bật, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt hội chiếu thì tăng thêm cát lợi. Tử Vi độc tọa ít sao phụ trợ thường bị luận là thế cô; cần xét Tam phương tứ chính để định cách cục.",
        },
        {
          id: 'gsf-2-2',
          idx: 2,
          text: '紫微在子午为「面南背北」之贵，主大富大贵；紫微在丑未与破军同宫，主刚毅果决；紫微在寅申与天府同宫，称「紫府同宫」格，主品端衣食丰足。',
          translation: "Tử Vi tại Tý, Ngọ được gọi là thế “diện Nam bối Bắc”; tại Sửu, Mùi khi đồng cung Phá Quân biểu thị tính quyết đoán. Tử Vi và Thiên Phủ đồng cung tại Dần, Thân là cách Tử Phủ đồng cung, truyền thống luận về sự ổn định và tài lộc.",
        },
        {
          id: 'gsf-2-3',
          idx: 3,
          text: '紫微居官禄，无煞冲破，必为高官；紫微居田宅，主有祖业，又能自置；紫微居夫妻，主配偶端庄，气质不凡，但宜迟婚不宜早。',
          translation: "Tử Vi đóng cung Quan Lộc, không bị sát tinh xung phá, được luận về công danh; ở cung Điền Trạch liên hệ điền sản, gia nghiệp; ở cung Phu Thê biểu thị người phối ngẫu có phẩm chất và lòng tự trọng, cần xét thêm các sao khác.",
        },
        {
          id: 'gsf-2-4',
          idx: 4,
          text: '紫微忌空劫，主有位无禄。紫微忌孤君无辅，主孤峰独峙，难成大事。紫微化权主独断，紫微化科主名声，紫微化忌主受制于人。',
          translation: "Tử Vi gặp Địa Không, Địa Kiếp thường bị luận là có danh mà thiếu thực lực. Tử Vi thiếu phụ tá dễ thành thế Đế tinh cô độc. Khi gặp Hóa Quyền, Hóa Khoa hoặc các Tứ Hóa khác, cần đối chiếu bảng Tứ Hóa hợp lệ của từng trường phái thay vì giả định mọi sao đều có thể hóa.",
        },
      ],
    },
    {
      title: 'Luận sao Thất Sát',
      subtitle: 'Tướng tinh, chủ quyết đoán',
      paragraphs: [
        {
          id: 'gsf-3-1',
          idx: 1,
          text: '七杀为将星，性刚毅果决。七杀守命，不喜与诸吉同宫，独行其道方为本格。七杀逢空劫，主孤独漂泊，事业难成。',
          translation: "Thất Sát là Tướng tinh, chủ cương nghị và quả quyết. Thất Sát thủ Mệnh có xu hướng hành động độc lập; khi hội Không Kiếp cần xem thêm sự phù trợ của cát tinh và ảnh hưởng của các cung liên quan.",
        },
        {
          id: 'gsf-3-2',
          idx: 2,
          text: '七杀朝斗格：七杀居子午、寅申，对宫紫微天府相照，主爵禄荣昌。最宜军警武职、开疆拓土。一生贵气难挡，但需经磨炼方成大器。',
          translation: "Cách Thất Sát triều đẩu được luận khi Thất Sát tọa các vị trí quy định và có Tử Vi, Thiên Phủ đối chiếu thích hợp. Cổ thư liên hệ cách này với võ chức, sự quyết đoán và thành tựu sau thử thách.",
        },
        {
          id: 'gsf-3-3',
          idx: 3,
          text: '七杀逢羊陀，主刑伤血光；七杀逢火铃，主威武刚烈；七杀逢化禄，主一身武贵；七杀逢化忌，反主消沉，事业多败。',
          translation: "Thất Sát hội Kình Dương, Đà La, Hỏa Tinh, Linh Tinh thường được xếp vào các tổ hợp sát tinh mạnh. Các trường hợp Hóa Lộc hay Hóa Kỵ phải tuân thủ bảng Tứ Hóa hợp lệ; không nên suy diễn trực tiếp tai nạn hay bệnh tật từ sao.",
        },
      ],
    },
    {
      title: 'Cách Sát Phá Tham',
      subtitle: 'Khai phá và biến động',
      paragraphs: [
        {
          id: 'gsf-4-1',
          idx: 1,
          text: '七杀、破军、贪狼三星会命迁财官，称「杀破狼格」。主一生变动多、不甘平凡，宜创业、军警、业务。年轻易冲动失利，中年后方能稳定守成。',
          translation: "Thất Sát, Phá Quân, Tham Lang cùng hội tại Tam phương Mệnh, Thiên Di, Tài Bạch, Quan Lộc được gọi là cách Sát Phá Tham. Truyền thống liên hệ tổ hợp này với tính khai sáng, biến động và nghề nghiệp cần quyết đoán.",
        },
        {
          id: 'gsf-4-2',
          idx: 2,
          text: '杀破狼三方有化禄或化权，主动得有力，可成大事；若三方煞星过重（羊陀火铃齐照），主动而无成，宜静守。',
          translation: "Khi Tam phương của Sát Phá Tham hội Hóa Lộc hoặc Hóa Quyền hợp lệ, cổ thư thường luận cát lợi; hội nhiều sát tinh thì cần thận trọng trong việc đánh giá khả năng ổn định.",
        },
      ],
    },
    {
      title: 'Cơ Nguyệt Đồng Lương',
      subtitle: 'Ổn định và tích lũy',
      paragraphs: [
        {
          id: 'gsf-5-1',
          idx: 1,
          text: '天机、太阴、天同、天梁四星齐入命迁财官，称「机月同梁格」。主文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业，不宜大冒险大投机。',
          translation: "Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương cùng hội tại Mệnh, Thiên Di, Tài Bạch, Quan Lộc tạo thành cách Cơ Nguyệt Đồng Lương. Cách này được luận về sự nhã nhặn, mưu trí và hợp công việc hành chính, học thuật, nghệ thuật hoặc dịch vụ ổn định.",
        },
        {
          id: 'gsf-5-2',
          idx: 2,
          text: '机月同梁作吏人——古云此格者宜担任公职、行政文书工作，安稳一生。再会昌曲化科，主名声远播。最忌煞星过多，则反主多变难安。',
          translation: "Cổ quyết “Cơ Nguyệt Đồng Lương tác lại nhân” chỉ xu hướng phù hợp với quan chức, văn thư. Khi có Văn Xương, Văn Khúc, Hóa Khoa hội hợp có thể tăng yếu tố khoa danh; nhiều sát tinh có thể làm cách cục kém ổn định.",
        },
      ],
    },
    {
      title: 'Luận Tứ Hóa',
      subtitle: 'Cát hung của Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ',
      paragraphs: [
        {
          id: 'gsf-6-1',
          idx: 1,
          text: '化禄主财、主缘、主能力变现；化权主权、主决断、主独当一面；化科主名、主贵人、主文书；化忌主病、主煞、主深刻功课。',
          translation: "Hóa Lộc chủ tài lộc và nhân duyên; Hóa Quyền chủ quyền hành, quyết đoán; Hóa Khoa chủ danh tiếng, khoa cử và quý nhân; Hóa Kỵ chủ vướng mắc, trở lực và những vấn đề cần lưu ý theo luận giải truyền thống.",
        },
        {
          id: 'gsf-6-2',
          idx: 2,
          text: '化禄入命，财源广进；化权入命，能担大任；化科入命，名声远播；化忌入命，须经磨炼方能成器。',
          translation: "Hóa Lộc nhập Mệnh thường được luận về tài lộc; Hóa Quyền nhập Mệnh về quyền hành; Hóa Khoa nhập Mệnh về khoa danh; Hóa Kỵ nhập Mệnh về thử thách cần vượt qua. Phải xem thêm sao nào hóa và tổ hợp cung.",
        },
        {
          id: 'gsf-6-3',
          idx: 3,
          text: '化忌入财，主财来财去；化忌入官，主事业受挫；化忌入夫妻，主婚姻多波折；化忌入子女，主子女缘薄或亲子摩擦。',
          translation: "Hóa Kỵ tại Tài Bạch thường luận về biến động tiền bạc; tại Quan Lộc về trở lực công danh; tại Phu Thê về khúc mắc hôn nhân; tại Tử Tức về khó khăn trong quan hệ với con cái.",
        },
        {
          id: 'gsf-6-4',
          idx: 4,
          text: '禄存与化禄同会命三方，称「双禄朝垣」，主富比陶朱；化科与化权同会，称「科权双会」，主名权双美。',
          translation: "Lộc Tồn và Hóa Lộc cùng hội Tam phương cung Mệnh được gọi là Song Lộc triều viên, thường luận về khả năng tích lũy. Hóa Khoa hội Hóa Quyền là cách Khoa Quyền song hội, gắn với danh tiếng và quyền hành.",
        },
      ],
    },
    {
      title: 'Luận Phụ Bật Khôi Việt',
      subtitle: 'Ý nghĩa Lục cát tinh',
      paragraphs: [
        {
          id: 'gsf-7-1',
          idx: 1,
          text: '左辅右弼为「相星」，主助力贵人；文昌文曲为「文星」，主聪明俊秀；天魁天钺为「贵人星」，主关键时刻有人扶持。',
          translation: "Tả Phụ, Hữu Bật là Phụ tinh, chủ trợ lực; Văn Xương, Văn Khúc là Văn tinh, chủ văn chương và trí tuệ; Thiên Khôi, Thiên Việt là Quý nhân tinh, chủ sự nâng đỡ.",
        },
        {
          id: 'gsf-7-2',
          idx: 2,
          text: '六吉星齐会命宫三方四正，主一生贵人不绝、人缘极佳。即使命格平常，亦能借六吉之力达成不凡之业。',
          translation: "Lục cát tinh hội tại Tam phương tứ chính cung Mệnh được luận là tăng sự hỗ trợ và nhân duyên. Dù mệnh cách bình thường, cát tinh có thể làm dịu bớt những tổ hợp bất lợi.",
        },
        {
          id: 'gsf-7-3',
          idx: 3,
          text: '辅弼夹命：左辅右弼夹于命宫前后两宫，主一生贵人扶持，遇困有助。最宜与紫微同宫，称「君臣庆会」格。',
          translation: "Phụ Bật giáp Mệnh là cách Tả Phụ, Hữu Bật đóng hai cung kề cung Mệnh, biểu thị sự trợ giúp. Khi phối hợp Tử Vi và các điều kiện thích hợp, cổ thư gọi là Quân Thần khánh hội.",
        },
      ],
    },
    {
      title: 'Luận Lục sát tinh',
      subtitle: 'Kình Đà, Hỏa Linh và Không Kiếp',
      paragraphs: [
        {
          id: 'gsf-8-1',
          idx: 1,
          text: '擎羊陀罗为「煞星」，主血光、是非、阻碍；火星铃星为「燥星」，主冲动、急躁、伤灾；地空地劫为「空亡」，主财耗、虚名、不实。',
          translation: "Kình Dương, Đà La là các Sát tinh; Hỏa Tinh, Linh Tinh chủ tính nóng, nhanh; Địa Không, Địa Kiếp thường được luận về hao tổn và hư không. Cát hung tùy theo vị trí và các sao phối hợp.",
        },
        {
          id: 'gsf-8-2',
          idx: 2,
          text: '煞星不全是凶——煞星犹如磨刀石，能炼出常人没有的破局力。年轻时易冲动伤己，中年后方能化煞为权。',
          translation: "Sát tinh không hoàn toàn chỉ mang nghĩa xấu. Theo cách nhìn truyền thống, nghịch cảnh và thử thách có thể thúc đẩy khả năng ứng biến, nhưng không quyết định vận mệnh của một người.",
        },
        {
          id: 'gsf-8-3',
          idx: 3,
          text: '羊陀夹忌：擎羊陀罗夹于化忌星所在宫，主大凶。其年其大限须特别警觉血光、官非、重大变故。',
          translation: "Kình Đà giáp Kỵ là cách Kình Dương và Đà La giáp cung có Hóa Kỵ. Cổ thư xem đây là tổ hợp cần thận trọng khi luận, song không thể dùng để khẳng định tai nạn hoặc kiện tụng chắc chắn.",
        },
        {
          id: 'gsf-8-4',
          idx: 4,
          text: '空劫夹命：地空地劫夹于命宫前后两宫，主一生宜务虚不务实，宜从事文艺、宗教、玄学等"非实"行业，不宜经商投资。',
          translation: "Không Kiếp giáp Mệnh là cách Địa Không, Địa Kiếp nằm hai cung kề Mệnh. Một số cách luận liên hệ cách này với nghề nghiệp thiên về nghệ thuật, tinh thần hoặc nghiên cứu; cần xét toàn lá số trước khi kết luận.",
        },
      ],
    },
    {
      title: 'Luận Thập nhị cung',
      subtitle: 'Ý nghĩa các cung và cát hung',
      paragraphs: [
        {
          id: 'gsf-9-1',
          idx: 1,
          text: '命宫为本，三方为用：财帛主财源、官禄主事业、迁移主外缘。三方四正吉星会照，命格方能完整发用。',
          translation: "Cung Mệnh là gốc, Tam phương là dụng: Tài Bạch chủ nguồn tài lộc, Quan Lộc chủ sự nghiệp, Thiên Di chủ môi trường bên ngoài. Cần phối hợp Tam phương tứ chính để luận hoàn chỉnh.",
        },
        {
          id: 'gsf-9-2',
          idx: 2,
          text: '夫妻宫看配偶气质，子女宫看子女缘分，疾厄宫看身体罩门，迁移宫看外出运势。各宫主星与四化决定该领域之吉凶进退。',
          translation: "Cung Phu Thê xem về người phối ngẫu và hôn nhân; Tử Tức xem quan hệ con cái; Tật Ách theo truyền thống xem sức khỏe; Thiên Di xem cơ hội ra ngoài. Không dùng Tử Vi thay thế chẩn đoán y khoa.",
        },
        {
          id: 'gsf-9-3',
          idx: 3,
          text: '田宅宫为命盘财库，正财能否守住看此宫；福德宫为精神享受，心安与否看此宫；父母宫为长辈关系，亦主文书契约。',
          translation: "Cung Điền Trạch chủ nhà cửa, tài sản; Phúc Đức chủ đời sống tinh thần và phúc phần; Phụ Mẫu chủ quan hệ với cha mẹ, trưởng bối và cũng liên hệ giấy tờ, khế ước.",
        },
        {
          id: 'gsf-9-4',
          idx: 4,
          text: '空宫借对宫论事——某宫无主星时，借其对宫主星论该宫之事。如命宫空宫，借迁移宫主星定命格。',
          translation: "Cung vô chính diệu có thể mượn chính tinh ở Đối cung để luận. Ví dụ cung Mệnh vô chính diệu thì tham khảo các sao tại cung Thiên Di, kết hợp những cung còn lại.",
        },
      ],
    },
  ],
};
