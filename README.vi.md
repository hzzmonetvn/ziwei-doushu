# Tử Vi Đẩu Số — Bản địa hóa tiếng Việt

> Dự án Việt hóa giao diện và thuật ngữ của [ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu). Bản nguồn và dữ liệu gốc thuộc các tác giả tương ứng. Đây là dự án ứng dụng nghiên cứu truyền thống, không phải công cụ dự đoán có bảo đảm.

**Ngôn ngữ giao diện mặc định: Tiếng Việt (vi-VN).** Cách gọi sao, cung, Tứ Hóa và cách cục được đối chiếu theo thuật ngữ Hán–Việt dùng trong Tử Vi Việt Nam.

## Chạy trên máy

Yêu cầu Node.js theo phiên bản tương thích với Next.js 16.

```bash
npm install
npm run dev
```

Truy cập `http://localhost:3000` để mở ứng dụng.

```bash
npm run typecheck
npm test
npm run build
```

Trang `/chart` dùng bộ máy tính lá số chạy tại trình duyệt. Các chức năng luận giải AI tại `/api/interpret` và `/api/heming` **không có backend trong bản mã nguồn mở**; muốn sử dụng phải tự triển khai API. Các chức năng AI không tự hoạt động chỉ bằng cách điền khóa API.

## Hệ thống thuật ngữ

| Hán tự | Hán–Việt | Hán tự | Hán–Việt |
|---|---|---|---|
| 紫微 | Tử Vi | 天机 | Thiên Cơ |
| 太阳 | Thái Dương | 武曲 | Vũ Khúc |
| 天同 | Thiên Đồng | 廉贞 | Liêm Trinh |
| 天府 | Thiên Phủ | 太阴 | Thái Âm |
| 贪狼 | Tham Lang | 巨门 | Cự Môn |
| 天相 | Thiên Tướng | 天梁 | Thiên Lương |
| 七杀 | Thất Sát | 破军 | Phá Quân |
| 命宫 | Cung Mệnh | 兄弟宫 | Cung Huynh Đệ |
| 夫妻宫 | Cung Phu Thê | 子女宫 | Cung Tử Tức |
| 财帛宫 | Cung Tài Bạch | 疾厄宫 | Cung Tật Ách |
| 迁移宫 | Cung Thiên Di | 交友宫 | Cung Nô Bộc |
| 官禄宫 | Cung Quan Lộc | 田宅宫 | Cung Điền Trạch |
| 福德宫 | Cung Phúc Đức | 父母宫 | Cung Phụ Mẫu |
| 化禄 | Hóa Lộc | 化权 | Hóa Quyền |
| 化科 | Hóa Khoa | 化忌 | Hóa Kỵ |
| 三方四正 | Tam phương tứ chính | 杀破狼 | Sát Phá Tham |
| 机月同梁 | Cơ Nguyệt Đồng Lương | 自化 | Tự hóa |
| 大限 | Đại hạn | 流年 | Lưu niên |
| 庙 | Miếu | 旺 | Vượng |
| 得 | Đắc | 利 | Lợi |
| 平 | Bình | 陷 | Hãm |

Các chữ **廟/庙, 旺, 得, 利, 平, 不, 陷** trong dữ liệu thuật toán là mã trạng thái, không được đổi trực tiếp; việc chuyển sang Hán–Việt chỉ thực hiện ở lớp trình bày.

## Phạm vi Việt hóa

- `lib/i18n/vi.ts`: bảng từ vựng chuyên môn và nhãn giao diện.
- `components/VietnameseLocalization.tsx`: lớp chuyển nhãn DOM ở phía trình duyệt, bao gồm giao diện được render động. Những cụm chưa được xác nhận vẫn có thể còn nguyên văn gốc; đây chỉ là lớp dự phòng hiển thị; nội dung chi tiết Thiên Kỷ đã có bản dịch song ngữ riêng.
- `app/layout.tsx`: nhãn ngôn ngữ, tiêu đề, mô tả và Open Graph tiếng Việt.
- **Không thay khóa thuật toán, tên thuộc tính JSON, đường dẫn hoặc phương pháp an sao**. Bảng tên tiếng Trung vẫn là dữ liệu nguồn cho bộ máy Tử Vi.
- **Các bản dịch lời giảng/kinh điển là tài liệu tham khảo**: đã có [bản dịch máy song ngữ 1.848 đoạn Thiên Kỷ](./docs/tianji-ziwei/README.vi.md). Giữ nguyên văn, mốc video, giấy phép và không trích dẫn bản dịch như lời nói đã được hiệu đính.

## Nguồn tham khảo đối chiếu thuật ngữ

- [14 chính tinh trong Tử Vi — Tử Vi Thiên Cơ](https://tuvithienco.com/14-chinh-tinh-trong-tu-vi)
- [Phân tích vị trí 12 cung — Học Viện Lý Số](https://hocvienlyso.org/phan-tich-vi-tri-12-cung.html)
- [Đẩu Số Phi Tinh Giải Mã — bản dịch tham khảo](https://khosachquy.com/pdf-doc-thu/khosachquy_com_dau_so_phi_tinh_giai_ma_ong_phu_du.pdf)

Các tài liệu là nguồn đối chiếu thuật ngữ, không phải giấy phép tái sử dụng toàn văn.

## Quyền tác giả và giấy phép

Phần mã nguồn chịu điều khoản trong [LICENSE](./LICENSE); các dữ liệu đi kèm có thể thuộc [DATASET-LICENSE](./DATASET-LICENSE) hoặc giấy phép riêng. Không tự động xem toàn bộ tư liệu gốc là có thể dịch, tái phân phối hay khai thác thương mại không giới hạn.
