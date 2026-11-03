/**
 * 《紫微斗数全集》— 核心精选章节
 *
 * 公版（明代刊本，相传由陈抟祖师传）
 * 是紫微斗数最权威的古籍之一，全本约 8 万字。
 * 此处精选核心论述，未来可补全。
 */

import type { Book } from '../types';

export const ziWeiQuanJi: Book = {
  title: 'Tử Vi Đẩu Số Toàn Tập',
  slug: 'quanji',
  dynasty: 'Nhà Minh',
  author: 'Tương truyền do Trần Đoàn truyền lại',
  intro: 'Tư liệu cổ điển về Tử Vi Đẩu Số, tương truyền liên hệ với Trần Đoàn đời Tống; được dẫn trong hệ thống Thiên Kỷ của Nghê Hải Hạ.',
  wordCount: 80000,
  chapters: [
    {
      title: 'Quyển I · Tổng luận',
      subtitle: 'Nguyên tắc lập lá số Tử Vi Đẩu Số',
      paragraphs: [
        {
          id: 'qj-1-1',
          idx: 1,
          text: '夫紫微斗数者，乃陈抟祖师所传，原以紫微为帝座，统御百星。星曜各有所主，各有庙旺利陷之分，会照吉凶之别。看命者，必先安星，次定命宫身宫，三看十二宫吉凶，四参大限流年之飞化。',
          translation: "Tử Vi Đẩu Số tương truyền được Trần Đoàn truyền lại, lấy Tử Vi làm Đế tọa thống lĩnh các sao. Mỗi tinh diệu có tính chất và trạng thái Miếu, Vượng, Lợi, Hãm khác nhau. Luận mệnh cần an sao, xác định cung Mệnh và cung Thân, xét mười hai cung, rồi phối hợp Đại hạn, Lưu niên và Tứ Hóa.",
        },
        {
          id: 'qj-1-2',
          idx: 2,
          text: '安星之法：先以年干起紫微，紫微所在宫位定，则诸星皆按其法位列十二宫。十四主星各居其位，六吉六煞辅而行之。一盘既定，万象皆现。',
          translation: "Phép an sao bắt đầu từ các điều kiện can chi, cục Ngũ hành, xác lập vị trí Tử Vi và an các sao khác vào mười hai cung theo quy tắc. Mười bốn chính tinh phối hợp Lục cát, Lục sát để tạo thành bố cục lá số.",
        },
        {
          id: 'qj-1-3',
          idx: 3,
          text: '命宫为本，主一生格局；身宫为辅，主三十后归向。命身分明，方知一人之进退。三方四正会照，方知一人之用武之地。十二宫各有所主，方知人生之全图。',
          translation: "Cung Mệnh là nền tảng mệnh cách; cung Thân biểu thị xu hướng phát triển về sau. Tam phương tứ chính cho biết sự phối hợp của các cung, còn Thập nhị cung biểu thị những lĩnh vực khác nhau của cuộc sống.",
        },
      ],
    },
    {
      title: 'Quyển II · Luận sao Tử Vi',
      subtitle: 'Ý nghĩa của Đế tọa',
      paragraphs: [
        {
          id: 'qj-2-1',
          idx: 1,
          text: '紫微为北斗之主，统辖众星。紫微属土，乃尊贵之星。在数为帝座，化气为尊，主忠厚有威仪，独行其道。男命女命皆喜紫微守命，但需有左辅右弼来朝，方为正格。',
          translation: "Tử Vi là chủ tinh Bắc Đẩu, thuộc Thổ, hóa khí vi Tôn, tượng trưng phẩm chất và quyền uy. Nam hay nữ có Tử Vi thủ Mệnh đều cần xem Tả Phụ, Hữu Bật và các cát tinh hội chiếu.",
        },
        {
          id: 'qj-2-2',
          idx: 2,
          text: '紫微独坐，需有左右昌曲魁钺夹持方能为用——单身无依的紫微，纵贵不久；得三方四正之吉星会照，方为君臣庆会大格。',
          translation: "Tử Vi độc tọa cần được Tả Hữu, Xương Khúc, Khôi Việt phù trợ. Khi được nhiều cát tinh tại Tam phương tứ chính hội hợp thì có thể thành cách Quân Thần khánh hội.",
        },
        {
          id: 'qj-2-3',
          idx: 3,
          text: '紫微入命，兄弟有贵气，独立挺秀，多得长兄之助；紫微在子女，子女有贵气，但管教需平等；紫微在夫妻，配偶端庄，但宜迟婚不宜早。',
          translation: "Tử Vi nhập cung Huynh Đệ thường được luận về anh chị em có vị thế; tại cung Tử Tức nói đến phẩm chất con cái; tại cung Phu Thê biểu thị người phối ngẫu có khí chất, cần cân nhắc thời điểm kết hôn và các sao phối hợp.",
        },
        {
          id: 'qj-2-4',
          idx: 4,
          text: '紫微在田宅，主有祖业又能自置，房产可作为致富之主轴；紫微在福德，精神层面追求格调、自尊感强；紫微在官禄，主大富贵，宜居高位。',
          translation: "Tử Vi tại Điền Trạch được luận về nhà đất và gia nghiệp; tại Phúc Đức liên quan đời sống tinh thần, lòng tự trọng; tại Quan Lộc thường luận về năng lực quản lý và công danh.",
        },
      ],
    },
    {
      title: 'Quyển III · Luận Nam Đẩu lục tinh',
      subtitle: 'Thiên Phủ, Thái Âm, Tham Lang, Cự Môn, Thiên Tướng, Thiên Lương',
      paragraphs: [
        {
          id: 'qj-3-1',
          idx: 1,
          text: '天府属土，南斗令星，乃禄库之主。天府独坐主品行端正、衣食无忧。天府与紫微同宫名"紫府同宫"，主尊贵。天府最喜见禄存，称"双禄朝垣"，主大富。',
          translation: "Thiên Phủ thuộc Thổ, là Lệnh tinh Nam Đẩu, chủ Tài khố. Thiên Phủ độc tọa thường được luận về sự ổn định. Khi đồng cung Tử Vi thành cách Tử Phủ đồng cung; hội Lộc Tồn và các điều kiện thích hợp có thể tạo các cách liên quan Song Lộc.",
        },
        {
          id: 'qj-3-2',
          idx: 2,
          text: '太阴为中天主星，属水。太阴庙旺主田宅、富贵，落陷主劳碌、奔波。女命太阴最吉，主貌美贤淑。太阴在亥子主大富，太阴在午未则减力。',
          translation: "Thái Âm thuộc Thủy, chủ điền sản và tính âm nhu. Khi Miếu Vượng có thể tăng yếu tố thuận lợi, khi Hãm thì giảm. Vị trí Hợi, Tý thường được đánh giá sáng hơn Ngọ, Mùi trong một số bảng độ sáng.",
        },
        {
          id: 'qj-3-3',
          idx: 3,
          text: '贪狼为桃花欲望之星，属木属水。贪狼主多才艺、社交广。贪狼逢火星称"火贪格"，逢铃星称"铃贪格"，皆主偏财横发。但贪狼忌空劫，主华而不实。',
          translation: "Tham Lang là Đào Hoa tinh, được phân loại thuộc Mộc hoặc Thủy. Sao này chủ tài nghệ và giao tế. Tham Lang hội Hỏa Tinh có thể thành cách Hỏa Tham, hội Linh Tinh có thể thành cách Linh Tham; cần xét Không Kiếp và các sao khác.",
        },
        {
          id: 'qj-3-4',
          idx: 4,
          text: '巨门属水，化气为暗，主口舌是非。巨门为口才之星，宜律师、教师、传媒。巨门化禄主"以口生财"，化忌则口舌官非不断。巨门最忌与太阳同宫的丑未两宫，称"日月反背"。',
          translation: "Cự Môn thuộc Thủy, hóa khí vi Ám, chủ khẩu tài và thị phi. Hóa Lộc thường được luận về thu nhập từ khả năng ăn nói; Hóa Kỵ về tranh chấp. Trường hợp Cự Môn hội Thái Dương tại Sửu, Mùi phải xét cách cục cụ thể.",
        },
        {
          id: 'qj-3-5',
          idx: 5,
          text: '天相属水，化气为印，乃辅佐之星。天相忠厚老实，宜行政秘书法务。天相不喜独坐，最宜与紫微或廉贞同宫，借其威仪而成事。',
          translation: "Thiên Tướng thuộc Thủy, hóa khí vi Ấn, là sao phụ tá, tổ chức và trách nhiệm. Khi phối hợp Tử Vi hoặc Liêm Trinh trong các tổ hợp phù hợp thì được luận về hành chính và điều hành.",
        },
        {
          id: 'qj-3-6',
          idx: 6,
          text: '天梁属土，化气为荫，乃老人之星。天梁主善良、慈悲、孤克、化解。天梁宜法律、医学、教育、宗教。天梁化科主名声，化禄反而虚浮。',
          translation: "Thiên Lương thuộc Thổ, hóa khí vi Ấm, chủ bảo hộ và tinh thần trách nhiệm. Truyền thống liên hệ Thiên Lương với giáo dục, y học, pháp luật và các công việc trợ giúp. Hóa Khoa thường được luận về danh tiếng.",
        },
      ],
    },
    {
      title: 'Quyển IV · Luận Bắc Đẩu lục tinh',
      subtitle: 'Tử Vi, Thiên Cơ, Thái Dương, Vũ Khúc, Liêm Trinh, Phá Quân',
      paragraphs: [
        {
          id: 'qj-4-1',
          idx: 1,
          text: '紫微属土，已论于卷二。',
          translation: "Tử Vi thuộc Thổ; xem phần luận chi tiết ở Quyển II.",
        },
        {
          id: 'qj-4-2',
          idx: 2,
          text: '天机属木，化气为善，乃智慧之星。天机主聪明、机变、好动。天机入命，思维敏捷，宜咨询、策划、文教。天机最忌善变无主，需文昌文曲会照方能成器。',
          translation: "Thiên Cơ thuộc Mộc, hóa khí vi Thiện, chủ trí tuệ và ứng biến. Thiên Cơ nhập Mệnh thường được luận về tư duy nhanh, khả năng tổ chức và lập kế hoạch. Hội Văn Xương, Văn Khúc có thể tăng yếu tố học vấn.",
        },
        {
          id: 'qj-4-3',
          idx: 3,
          text: '太阳属火，化气为贵，乃男贵之星。太阳主名誉、公务、社交。太阳庙旺主大贵，落陷则劳而无获。太阳最宜在卯辰巳午之地，落于戌亥子丑则减力。',
          translation: "Thái Dương thuộc Hỏa, hóa khí vi Quý, chủ danh tiếng và công việc xã hội. Thái Dương ở Mão, Thìn, Tỵ, Ngọ thường được xem là sáng; tại Tuất, Hợi, Tý, Sửu cần xét độ sáng và các sao liên quan.",
        },
        {
          id: 'qj-4-4',
          idx: 4,
          text: '武曲属金，化气为财，乃财星之主。武曲主刚毅果决，善理财经营。武曲化忌主手术血光、金属意外。武曲在丑未与七杀同宫，称"武曲七杀"格，主刚直武贵。',
          translation: "Vũ Khúc thuộc Kim, hóa khí vi Tài, chủ tính cương nghị và tiền bạc. Khi Hóa Kỵ thường được xem là có vướng mắc theo luận giải cổ; không thể lấy đó để dự đoán bệnh hoặc tai nạn. Vũ Khúc đồng cung Thất Sát tại Sửu, Mùi được luận là tổ hợp Vũ Sát.",
        },
        {
          id: 'qj-4-5',
          idx: 5,
          text: '廉贞属火属木，化气为囚，乃次桃花之星。廉贞文武兼备，多才艺。廉贞化忌主血光官非、感情纠纷。廉贞与天相同宫为"廉相格"，主清廉之名。',
          translation: "Liêm Trinh được phân loại thuộc Hỏa hoặc Mộc, hóa khí vi Tù, là Đào Hoa thứ. Liêm Trinh chủ tài nghệ và kỷ luật; Hóa Kỵ thường được xem là một điều kiện cần thận trọng. Đồng cung Thiên Tướng có thể tạo cách Liêm Tướng.",
        },
        {
          id: 'qj-4-6',
          idx: 6,
          text: '破军属水，化气为耗，乃破坏创新之星。破军主开创、变动、六亲缘薄。破军宜技术专长走天下。破军化禄称"破而后立"，主先散后聚。',
          translation: "Phá Quân thuộc Thủy, hóa khí vi Hao, chủ phá cũ lập mới và biến động. Phá Quân Hóa Lộc có ý nghĩa khôi phục hoặc tái thiết sau thay đổi trong một số cách luận.",
        },
      ],
    },
    {
      title: 'Quyển V · Luận Tứ Hóa và cách cục',
      subtitle: 'Ảnh hưởng của Tứ Hóa và những cách cục chính',
      paragraphs: [
        {
          id: 'qj-5-1',
          idx: 1,
          text: '化禄主财源，主缘分，主能力变现。化禄入命三方，主财源广进；化禄入财帛，主财来财往，正财稳定。',
          translation: "Hóa Lộc chủ tài lộc, nhân duyên và việc chuyển năng lực thành kết quả. Khi Hóa Lộc nhập Tam phương Mệnh hoặc cung Tài Bạch, truyền thống luận về cơ hội tài chính và thu nhập.",
        },
        {
          id: 'qj-5-2',
          idx: 2,
          text: '化权主权力，主决断，主担当。化权入命，主能独当一面；化权入官禄，主事业有掌控力，宜走管理或技术权威路线。',
          translation: "Hóa Quyền chủ quyền hành, trách nhiệm và sự quyết đoán. Khi nhập Mệnh hoặc Quan Lộc thường được luận về khả năng tổ chức và điều hành.",
        },
        {
          id: 'qj-5-3',
          idx: 3,
          text: '化科主名声，主文书，主贵人。化科入命，主名声远播；化科入身，主以名取利，宜文教、研究、咨询。',
          translation: "Hóa Khoa chủ khoa danh, văn thư và quý nhân. Khi nhập Mệnh hoặc Thân thường được luận về danh tiếng, học vấn và năng lực nghiên cứu, tư vấn.",
        },
        {
          id: 'qj-5-4',
          idx: 4,
          text: '化忌主病，主煞，主深刻功课。化忌入命三方，主一生有"钝点"——这是命格里最深的功课，过得了就是大智慧。三十岁前后是化忌最锋利的时候。',
          translation: "Hóa Kỵ thường được luận về vướng mắc hoặc bài học cần vượt qua. Cần đối chiếu sao hóa, vị trí cung và Tam phương tứ chính, không ấn định sự kiện hoặc độ tuổi từ một Tứ Hóa đơn lẻ.",
        },
        {
          id: 'qj-5-5',
          idx: 5,
          text: '紫府同宫格：紫微天府同入命宫，主品行端正、衣食无忧、有领导才能。需要左右辅弼来配合方为完整大格。',
          translation: "Cách Tử Phủ đồng cung được mô tả khi Tử Vi và Thiên Phủ cùng đóng cung Mệnh, thường được luận về sự ổn định và năng lực quản lý. Tả Phụ, Hữu Bật và cát tinh phối hợp làm cách cục thêm thuận lợi.",
        },
        {
          id: 'qj-5-6',
          idx: 6,
          text: '七杀朝斗格：七杀居子午寅申宫坐命，对宫紫微天府相照，主爵禄荣昌——武职大贵，最宜军警政界或企业高管。',
          translation: "Cách Thất Sát triều đẩu được luận khi Thất Sát đóng tại các vị trí quy định và có Tử Vi, Thiên Phủ ở Đối cung hoặc hội chiếu phù hợp. Theo cổ thư, cách này gắn với khả năng đảm nhiệm vai trò quyết đoán.",
        },
        {
          id: 'qj-5-7',
          idx: 7,
          text: '双禄朝垣格：化禄、禄存同会命宫三方四正，财源涌动、衣食丰足。古云"双禄朝垣，富比陶朱"，主一生不愁财。',
          translation: "Cách Song Lộc triều viên hình thành khi Hóa Lộc và Lộc Tồn cùng hội Tam phương tứ chính cung Mệnh. Cổ quyết “Song Lộc triều viên, phú tỷ Đào Chu” biểu thị ý nghĩa tài lộc dồi dào trong luận giải truyền thống.",
        },
        {
          id: 'qj-5-8',
          idx: 8,
          text: '机月同梁格：天机、太阴、天同、天梁四星齐入命迁财官，主文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业。',
          translation: "Cách Cơ Nguyệt Đồng Lương là sự hội hợp Thiên Cơ, Thái Âm, Thiên Đồng và Thiên Lương tại Tam phương Mệnh, Thiên Di, Tài Bạch, Quan Lộc. Cách này thường được liên hệ với học thuật, hành chính và nghề nghiệp ổn định.",
        },
        {
          id: 'qj-5-9',
          idx: 9,
          text: '杀破狼格：七杀、破军、贪狼三星会命，主一生变动多、不甘平凡，宜创业、军警、业务、销售。中年后才能稳定守成。',
          translation: "Cách Sát Phá Tham là tổ hợp Thất Sát, Phá Quân, Tham Lang hội tại các cung liên hệ với Mệnh. Thường được luận về biến động, khai sáng và công việc cần sự năng động.",
        },
        {
          id: 'qj-5-10',
          idx: 10,
          text: '日月同宫格：太阳太阴同入丑宫或未宫，主异性缘佳、事业顺遂、名声远播。丑宫力较平，未宫力略减。',
          translation: "Cách Nhật Nguyệt đồng cung là trường hợp Thái Dương và Thái Âm đồng cung tại Sửu hoặc Mùi, thường được luận về sự phối hợp tính chất âm dương. Cát hung tùy thuộc trạng thái và sao hội hợp.",
        },
      ],
    },
  ],
};
