/**
 * Địa Kỷ — 倪海厦地理Phong thủy体系数据库
 *
 * 「下知地理」—— 地之纪，是Địa lý chí的体系化研究。
 * 倪海厦原计划60岁后著述，利用天文地理知识与医学素养
 * Biên soạn lại địa lý chí các nước，研究国家Nhân tính、Sản vật与其Phong thủy地理的关系。
 *
 * 倪师于2012年辞世，Địa Kỷ未能完成，为「倪师未竟之业」。
 * 现有内容来自Thiên Kỷ课程中的Kham Dư学部分以及后人整理的Di cảo。
 */

import type { NiModule } from './types';

// ─── Địa Kỷ模块 ────────────────────────────────────────────
export const DIJI_MODULES: NiModule[] = [
  {
    id: 'dj-guojiadili',
    category: 'diji',
    name: 'Quốc Gia Địa Lý Chí',
    nameEn: 'National Geography',
    subtitle: 'Di cảo Nghê Hải Hạ · Nghiên cứu bổ sung',
    description: 'Theo tư liệu, Nghê Hải Hạ dự định nghiên cứu môi trường địa lý các nước qua góc nhìn phong thủy, khảo sát quan hệ giữa địa hình, tài nguyên, văn hóa và lịch sử. Công trình này chưa được hoàn thành.',
    details: [
      'Địa Kỷ là phần cuối trong hệ thống Tam Kỷ của Nghê Hải Hạ, dự định biên soạn sau tuổi 60.',
      'Ý tưởng chính là biên soạn địa lý chí các nước theo cách tiếp cận Kham Dư học, khảo sát ở phạm vi quốc gia.',
      'Các chủ đề dự kiến gồm địa hình, núi sông, tài nguyên và những thay đổi lịch sử; việc liên hệ đặc điểm dân cư với phong thủy là quan điểm truyền thống, không phải kết luận khoa học.',
      'Nghê Hải Hạ qua đời năm 2012, Địa Kỷ mới dừng ở ý tưởng và một số kiến thức Kham Dư trong Thiên Kỷ. Những tư liệu còn lại có thể phục vụ nghiên cứu lịch sử tư tưởng.',
    ],
    references: [
      'Phần Kham Dư trong Thiên Kỷ của Nghê Hải Hạ',
      'Ý tưởng địa lý chí trong các bài giảng Nghê Hải Hạ',
    ],
    keywords: ['Địa Kỷ', 'Địa lý quốc gia', 'Phong thủy', 'Địa lý chí', 'Quốc vận', 'Sản vật', 'Nhân tính', 'Kham Dư'],
    icon: '⊞',
    status: 'preview',
    order: 1,
    slug: 'geography',
    chapters: [
      {
        id: 'dj-dl-01',
        title: 'Đề cương Địa Kỷ',
        subtitle: 'Dự định và đề cương của Nghê Hải Hạ',
        description: 'Khái quát ý tưởng Địa Kỷ: phân tích địa lý quốc gia dưới góc nhìn Kham Dư truyền thống.',
        keyPoints: [
          'Dự kiến biên soạn sau tuổi 60 (Nghê Hải Hạ sinh năm 1954)',
          'Kết hợp tri thức thiên văn, địa lý và y học cổ truyền',
          'Biên soạn lại địa lý chí các nước',
          'Nghiên cứu quan niệm liên hệ giữa con người, tài nguyên và phong thủy địa lý',
        ],
        quotes: ['Tôi muốn sau tuổi sáu mươi vận dụng kiến thức thiên văn, địa lý và y học để biên soạn lại địa lý chí (bản dịch ý).'],
        order: 1,
      },
      {
        id: 'dj-dl-02',
        title: 'Địa lý và con người',
        subtitle: 'Mỗi vùng đất nuôi dưỡng một cách sống',
        description: 'Khảo sát ảnh hưởng của môi trường địa lý đối với văn hóa và điều kiện sống của từng cộng đồng.',
        keyPoints: [
          'So sánh đời sống cộng đồng vùng núi và đồng bằng',
          'Ảnh hưởng của hệ thống sông ngòi đối với văn minh nông nghiệp',
          'Mối liên hệ giữa khí hậu và môi trường sinh hoạt của con người',
          'Quan niệm phong thủy truyền thống về địa linh nhân kiệt',
        ],
        order: 2,
      },
    ],
  },
  {
    id: 'dj-kanyu-theory',
    category: 'diji',
    name: 'Nền tảng lý luận Kham Dư',
    nameEn: 'Feng Shui Theory',
    subtitle: 'Kham Dư học trong Thiên Kỷ · Tổng hợp lý luận',
    description: 'Tổng hợp các nội dung Kham Dư học trong Thiên Kỷ làm cơ sở lý luận cho Địa Kỷ, bao gồm Loan Đầu, Lý Khí và Dương Trạch.',
    details: [
      'Dù Địa Kỷ chưa thành sách riêng, Thiên Kỷ đã trình bày nhiều khái niệm thuộc Kham Dư học.',
      'Các lý luận này bao quát nhiều cấp độ từ nhà ở đến đô thị và quốc gia theo quan niệm phong thủy.',
      'Nghê Hải Hạ sử dụng cách tiếp cận Cửu Tinh phái, kết hợp Loan Đầu và Lý Khí.',
      'Đây có thể xem là nền tảng lý thuyết dự kiến cho nghiên cứu địa lý chí về sau.',
    ],
    school: 'Cửu Tinh phái (dòng Dương Cứu Bần)',
    references: [
      'Nghê Hải Hạ, Thiên Kỷ · Địa Mạch Đạo',
      'Cổ thư phong thủy thuộc dòng Dương Cứu Bần',
    ],
    keywords: ['Kham Dư', 'Lý luận phong thủy', 'Loan Đầu', 'Lý Khí', 'Cửu Tinh phái', 'Dương Cứu Bần', 'Dương Trạch', 'Âm Trạch'],
    icon: '◫',
    status: 'active',
    order: 2,
    slug: 'kanyu-theory',
    chapters: [
      {
        id: 'dj-kt-01',
        title: 'Loan Đầu học',
        subtitle: 'Xét hình núi và thế nước',
        description: 'Trong Kham Dư truyền thống, Loan Đầu học xem xét hình thế núi, hướng núi và dòng nước để luận cát hung.',
        keyPoints: [
          'Long mạch: thế chạy của dãy núi và khí mạch',
          'Huyệt vị: nơi được coi là tàng phong tụ khí',
          'Sa thủ: thế núi bao bọc hai bên huyệt',
          'Thủy khẩu: hướng nước đi vào, chảy ra',
        ],
        order: 1,
      },
      {
        id: 'dj-kt-02',
        title: 'Lý Khí học',
        subtitle: 'Xét cát hung theo phương vị',
        description: 'Sử dụng la bàn xác định phương vị, phối hợp Cửu Tinh phi bố và Bát Sát Hoàng Tuyền theo thuật phong thủy.',
        keyPoints: [
          'Phương pháp dùng la bàn',
          'Nguyên lý Cửu Tinh phi bố',
          'Các phương vị Bát Sát Hoàng Tuyền',
          'Các phương vị Tam Cát Lục Tú',
        ],
        order: 2,
      },
      {
        id: 'dj-kt-03',
        title: 'Ứng dụng Dương Trạch',
        subtitle: 'Quan niệm phong thủy trong bố trí nhà ở',
        description: 'Vận dụng cách nhìn Kham Dư truyền thống vào lựa chọn, bố trí nhà ở.',
        keyPoints: [
          'Nguyên tắc chọn tọa hướng nhà',
          'Bố trí phương vị các khu vực trong nhà',
          'Đánh giá môi trường xung quanh theo quan niệm cát hung',
          'Các cách hóa giải phong thủy bất lợi theo truyền thống',
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'dj-yigao',
    category: 'diji',
    name: 'Di cảo và hậu học',
    nameEn: 'Legacy & Continuation',
    subtitle: 'Hậu học bổ chú · Tiếp nối truyền thừa',
    description: 'Tổng hợp lời giảng rải rác về Địa Kỷ, ghi chép nghiên cứu của hậu học và những cách diễn giải hiện đại.',
    details: [
      'Nghê Hải Hạ chưa hoàn thành Địa Kỷ nhưng từng nhắc đến đề cương trong các bài giảng.',
      'Hậu học và người nghiên cứu đã sưu tầm, chú thích một số bài giảng và tư liệu còn lại.',
      'Có thể nghiên cứu Địa Kỷ dưới góc độ lịch sử phong thủy, quy hoạch và quan hệ con người với môi trường, nhưng không đồng nhất với khoa học môi trường.',
      'Mục này thu thập và hệ thống hóa tư liệu về Địa Kỷ phục vụ nghiên cứu sau này.',
    ],
    references: [
      'Bản ghi bài giảng Nghê Hải Hạ',
      'Ghi chép và nghiên cứu của hậu học',
    ],
    keywords: ['Di cảo', 'Hậu học', 'Bổ chú', 'Truyền thừa', 'Ứng dụng hiện đại'],
    icon: '⊟',
    status: 'coming',
    order: 3,
    slug: 'legacy',
    chapters: [
      {
        id: 'dj-yg-01',
        title: 'Trích đoạn nói về Địa Kỷ',
        subtitle: 'Các quan điểm Địa Kỷ rải rác trong bài giảng',
        description: 'Tuyển chọn những đoạn nói về Địa Kỷ từ Thiên Kỷ, Nhân Kỷ và các buổi giảng khác.',
        keyPoints: [
          'Động cơ và kế hoạch biên soạn Địa Kỷ',
          'Nhận xét về địa lý các nước',
          'Quan điểm liên hệ phong thủy và quốc vận',
          'Quan hệ giữa Địa Kỷ, Thiên Kỷ và Nhân Kỷ',
        ],
        quotes: [
          'Nỗ lực của con người kết hợp điều chỉnh môi trường có thể có vai trò lớn hơn yếu tố tiên thiên (bản dịch ý).',
          'Hai phần ba lớn hơn một phần ba: Nhân sự và Địa lý chiếm hai phần, thiên mệnh chiếm một phần (quan niệm truyền thống).',
        ],
        order: 1,
      },
    ],
  },
];

// ─── 统计 ────────────────────────────────────────────────
export const DIJI_STATS = {
  totalModules: DIJI_MODULES.length,
  totalChapters: DIJI_MODULES.reduce((sum, m) => sum + m.chapters.length, 0),
  status: 'Di cảo chưa hoàn tất · Hậu học tiếp tục nghiên cứu',
  note: 'Nghê Hải Hạ dự định biên soạn Địa Kỷ sau tuổi 60, nhưng qua đời năm 2012; chỉ còn đề cương và lý luận sơ bộ',
};
