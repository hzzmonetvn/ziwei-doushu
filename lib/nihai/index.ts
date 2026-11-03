/**
 * 倪海厦 天纪 / 地纪 / 人纪 — 统一导出
 *
 * 倪海厦（1954-2012），美国汉唐中医学院创办人，
 * 当代少见的「命、相、卜、山、医」五术兼备之旷世奇人。
 *
 * 三纪体系：
 *   天纪 —— Thượng tri thiên văn（紫微斗数、易经、堪舆、推命、面相、测字）
 *   地纪 —— Hạ tri địa lý（国家地理志、风水与国运）
 *   人纪 —— Trung tri nhân sự（Châm cứu、Hoàng Đế Nội Kinh、Thần Nông Bản Thảo Kinh、Thương Hàn Luận、Kim Quỹ Yếu Lược）
 */

export * from './types';
export { TIANJI_MODULES, HEXAGRAMS, FENGSHUI_ENTRIES, TIANJI_EPISODES, TIANJI_QUOTES, TIANJI_STATS } from './tianji';
export { RENJI_MODULES, ACU_EXPERIENCES, TRANS_NEEDLING, HANTANG_FORMULAS, CLASSIC_FORMULAS, RENJI_STATS } from './renji';
export { DIJI_MODULES, DIJI_STATS } from './diji';

/** 倪海厦完整传记 */
export const NI_HAIXIA_BIO = {
  name: 'Nghê Hải Hạ',
  nameVariant: 'Nghê Hải Hạ',
  alias: 'Phạn Vũ Long',
  birth: '01/01/1954',
  death: '31/01/2012',
  birthPlace: 'Đài Bắc',
  ancestry: 'Thụy An, Chiết Giang',
  family: 'Gia đình có bảy anh chị em, đứng thứ năm',
  education: 'Khoa Chính trị, Đại học Đông Ngô',
  title: 'Người sáng lập Học viện Trung y Hán Đường (Hoa Kỳ)',
  titles: [
    'Người nghiên cứu năm thuật Mệnh, Tướng, Bốc, Sơn, Y',
    'Viện trưởng Học viện Trung y Hán Đường tại Hoa Kỳ',
    'Giáo sư hướng dẫn tiến sĩ tại trường Trung y Dược California',
    'Thành viên cấp cao Hội đồng Trung y thuộc cơ quan y tế Florida (2000–2003)',
    'Thành viên, Phó chủ tịch Hội đồng Châm cứu Florida',
    'Người kế thừa trường phái Kinh phương thời hiện đại',
    'Người xây dựng hệ thống giảng dạy Thiên Kỷ và Nhân Kỷ',
    'Người nhận giải thưởng Hoa kiều xuất sắc',
  ],
  /** 师承关系 */
  teachers: [
    { name: 'Chu Tả Vũ', nameOriginal: '周左宇', background: 'Danh y gia truyền bốn đời ở Bắc Kinh, chuyển đến Đài Loan sau năm 1949', subject: 'Châm cứu', period: '1977-1981' },
    { name: 'Từ Tế Dân', nameOriginal: '徐济民', background: 'Danh y tại Thượng Hải, quê Giang Tô', subject: 'Châm cứu', period: '1970s' },
    { name: 'Truyền thừa Khương Tá Cảnh', nameOriginal: '姜佐景传承', background: 'Truyền nhân Kinh phương theo dòng Tào Dĩnh Phủ', subject: 'Kinh phương', period: 'Thời gian học nghề tại hiệu thuốc Bắc ở Cơ Long' },
  ],
  /** 核心理念 */
  corePhilosophy: [
    'Đại đạo chí giản; phương pháp Phi Tinh phức tạp không phải trọng tâm của hệ thống này',
    'Cung Mệnh làm thể, Tam phương làm dụng',
    'Nỗ lực con người và môi trường địa lý có vai trò lớn hơn yếu tố tiên thiên',
    'Xem Trung y theo quan điểm vật lý học và hoạt động cơ thể',
    'Biện chứng, không chỉ dựa trên tên bệnh — chú trọng chứng trạng',
    'Kinh phương: một thang nhận biết tác dụng, hai thang điều chỉnh (quan điểm cổ truyền)',
    'Mong muốn truyền bá văn hóa truyền thống để không bị mai một',
    'Mệnh lý là cách suy ngẫm về kết quả và nhân duyên',
    'Văn tự chỉ là chiếc thuyền, chân lý mới là bờ bên kia',
  ],
  /** 人生大事记 */
  timeline: [
    { year: '1954', event: 'Sinh tại Đài Bắc, nguyên quán Thụy An (Chiết Giang)' },
    { year: '1970s', event: 'Theo tiểu sử, thời trung học nghiên cứu Y Tông Kim Giám rồi quyết tâm theo ngành y' },
    { year: '1977-1981', event: 'Học châm cứu với thầy thuốc Chu Tả Vũ' },
    { year: '1978', event: 'Phục vụ tại đơn vị quân y Mã Tổ, được gọi là “Thần y Mã Tổ” khi 24 tuổi' },
    { year: '1979', event: 'Sau khi xuất ngũ, dùng tên Phạn Vũ Long để hoạt động nghiên cứu mệnh tướng' },
    { year: '1980', event: 'Di cư sang Hoa Kỳ' },
    { year: '1988', event: 'Mở lớp Thiên văn Địa lý tại Đài Bắc, giảng Tử Vi Đẩu Số và phong thủy Dương trạch' },
    { year: '1991', event: 'Được cấp phép hành nghề châm cứu tại Florida, Hoa Kỳ' },
    { year: '1993', event: 'Chọn địa điểm xây Học viện Hán Đường tại Merritt Island, Florida' },
    { year: '1994', event: 'Hoàn thành ghi hình Thiên Kỷ, tổng cộng 24 tập' },
    { year: '1995', event: 'Thành lập Học viện Trung y Hán Đường' },
    { year: '2000-2003', event: 'Giữ chức vụ tại Hội đồng Trung y thuộc cơ quan y tế Florida' },
    { year: '2004', event: 'Mở lớp Trung y Nhân Kỷ tại Đài Bắc' },
    { year: '2005', event: 'Phát hành bộ DVD giảng dạy Nhân Kỷ' },
    { year: '2007', event: 'Bắt đầu biên soạn Địa Kỷ' },
    { year: '2010', event: 'Thành lập phòng khám Hán Đường Kinh Phương tại Đài Bắc; diễn giảng tại diễn đàn Phù Dương lần thứ ba' },
    { year: '2011', event: 'Thành lập Trung y quán Hán Đường Kinh Phương tại Thâm Quyến' },
    { year: '2012', event: 'Qua đời tại Đài Bắc ngày 31/1 do suy tim phổi, hưởng thọ 59 tuổi (theo nguồn gốc)' },
  ],
  /** 著作体系 */
  publications: {
    originalBooks8: ['Hoàng Đế Nội Kinh Tố Vấn', 'Hoàng Đế Nội Kinh', 'Thần Nông Bản Thảo Kinh', 'Châm cứu', 'Thương Hàn Luận', 'Kim Quỹ', 'Nhân Gian Đạo', 'Thiên Cơ Đạo · Địa Mạch Đạo'],
    totalBooks: '26–44 tập (gồm bản chú giải, y án và tài liệu huyệt vị)',
    hantangFormulas: 'Hán Đường 100 phương',
    classicFormulas: '259 bài thuốc cổ phương',
    medicalCases: 'Bảy tập y án',
    totalVideoHours: 'Hơn 200 giờ',
  },
  /** 三纪体系 */
  sanJi: {
    tianji: {
      name: 'Thiên Kỷ',
      meaning: 'Thượng tri thiên văn',
      content: 'Tử Vi Đẩu Số, 64 quẻ Kinh Dịch, Kham Dư, Mệnh lý, Tướng pháp và Trắc tự',
      recordYear: 1994,
      episodes: 24,
      hdEpisodes: 83,
      hoursPerEpisode: 2,
      totalHours: 48,
      books: ['Thiên Cơ Đạo', 'Nhân Gian Đạo', 'Địa Mạch Đạo', 'Đồ hình 64 quẻ Dịch'],
      schools: ['Phái Tam Hợp (Tử Vi Đẩu Số)', 'Phái Tượng Số (Kinh Dịch)', 'Phái Cửu Tinh (Kham Dư)', 'Phái Hà Lạc Số Lý (Mệnh lý)'],
      structure: 'Giờ đầu giảng mệnh lý, giờ tiếp theo giảng Kinh Dịch',
    },
    renji: {
      name: 'Nhân Kỷ',
      meaning: 'Trung tri nhân sự',
      content: 'Châm Cứu Đại Thành (44 tập), Hoàng Đế Nội Kinh (20 tập), Thần Nông Bản Thảo Kinh (46 tập), Thương Hàn Luận và Kim Quỹ Yếu Lược (20 tập)',
      completionYear: '2004-2005',
      totalLessons: 'Hơn 150 bài giảng',
      learningOrder: 'Châm Cứu → Hoàng Đế Nội Kinh → Thần Nông Bản Thảo Kinh → Thương Hàn Luận → Kim Quỹ Yếu Lược',
      acuExperience: 215,
      transNeedling: 31,
      hantangFormulas: 100,
    },
    diji: {
      name: 'Địa Kỷ',
      meaning: 'Hạ tri địa lý',
      content: 'Quốc Gia Địa Lý Chí (chưa hoàn tất)',
      status: 'Di cảo chưa hoàn tất của Nghê Hải Hạ',
      note: 'Dự kiến biên soạn sau tuổi 60, nhưng qua đời năm 2012',
      startYear: 2007,
      existingContent: 'Phần Kham Dư trong Thiên Kỷ cùng di cảo do hậu học biên tập',
    },
  },
  /** Mô tả nhân cách trong tư liệu gốc (khóa Hán tự giữ để tương thích). */
  personalityVi: {
    'Phong cách luận mệnh': 'Luận đoán thẳng thắn, quyết đoán',
    'Sở thích âm nhạc': 'Yêu thích ban nhạc Eagles và Hotel California',
    'Kỹ năng sinh hoạt': 'Giỏi nấu nướng và công việc gia đình',
    'Phong cách làm việc': 'Chú trọng ghi chép và tham vấn kinh nghiệm tiền bối',
    'Giấc ngủ': 'Theo tiểu sử, từng nhiều năm ngủ ít',
    'Đánh giá của bệnh nhân': 'Được một số bệnh nhân gọi là niềm hy vọng cuối cùng (theo tiểu sử)',
  },
  personality: {
    算命风格: 'Luận đoán thẳng thắn, quyết đoán',
    音乐爱好: 'Yêu thích ban nhạc Eagles và ca khúc Hotel California',
    生活技能: 'Giỏi việc nấu nướng, giặt giũ và làm các món bột',
    工作态度: 'Giữ giấy bút bên giường; cầu nguyện tiền bối khi gặp ca bệnh khó (theo tiểu sử)',
    睡眠: 'Nhiều năm ngủ dưới ba giờ mỗi đêm (theo tiểu sử)',
    患者评价: 'Được một số bệnh nhân tại Mỹ gọi là “niềm hy vọng cuối cùng” (theo tiểu sử)',
  },
  /** 传人选拔标准 */
  discipleStandards: [
    'Tâm tính tốt',
    'Cá tính mạnh',
    'Có chính kiến',
    'Quan sát nhạy bén',
    'Dám phản biện quan điểm sai',
  ],
};

/** 三纪导航 */
export const SANJI_CATEGORIES = [
  { key: 'tianji' as const, name: 'Thiên Kỷ', nameEn: 'Tian Ji', icon: '⊙', meaning: 'Thượng tri thiên văn', color: '#d4a843', href: '/tianji' },
  { key: 'diji' as const, name: 'Địa Kỷ', nameEn: 'Di Ji', icon: '⊞', meaning: 'Hạ tri địa lý', color: '#6b8a5e', href: '/diji' },
  { key: 'renji' as const, name: 'Nhân Kỷ', nameEn: 'Ren Ji', icon: '⊕', meaning: 'Trung tri nhân sự', color: '#8b6b9e', href: '/renji' },
] as const;
