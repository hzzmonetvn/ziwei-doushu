# Tình trạng Việt hóa repo

> Bản dịch sử dụng các thuật ngữ Hán–Việt trong Tử Vi Đẩu Số. Mục tiêu là **mọi chữ hiển thị với người dùng đều có bản tiếng Việt**, đồng thời giữ lại bản Hán tự gốc để kiểm chứng học thuật và giữ nguyên khóa thuật toán.

## Đã chuyển sang tiếng Việt

- Giao diện Next.js: các trang chủ, lập lá số, ghép lá số, thư viện cổ thư, kho kiến thức, tìm kiếm, trang điều khoản và quyền riêng tư, cùng các component tương ứng.
- Metadata SEO mặc định `vi` và `vi_VN`.
- Bảng thuật ngữ Hán–Việt: thiên can, địa chi, 14 chính tinh, 12 cung, các sao phụ, Tứ Hóa, Đại hạn, Lưu niên, các cách cục chính.
- 36 cách cục với tên, lời giải thích bằng tiếng Việt; giữ nguyên các quy tắc `detectPatterns`.
- 14 hồ sơ chính tinh và các mô tả phụ tinh dùng trong ứng dụng.
- Các đoạn cổ thư tuyển chọn: 29 đoạn Cốt Tủy Phú, 29 đoạn Tử Vi Đẩu Số Toàn Tập và 17 đoạn Tử Vi Đẩu Số Toàn Thư (**75 đoạn**, bản *dịch ý*), trong đó nguyên văn Hán tự vẫn được lưu.
- Dữ liệu Thiên Kỷ: 24 đề mục bài giảng, 29 trích dẫn có bản tiếng Việt song song, 64 quẻ Kinh Dịch có tên và diễn giải tiếng Việt, sáu mục Kham Dư.
- Nhân Kỷ: năm chuyên đề và 15 chương cơ bản; dữ liệu song ngữ cho **120 mục châm cứu**, **31 mục châm xuyên huyệt**, **97 phương Hán Đường**, **25 phương cổ điển**; phần mô tả, tên huyệt, tên bài thuốc, thành phần có bản tiếng Việt, nguyên văn Hán tự lưu để đối chiếu.
- Kho ghép hai lá số: nội dung trực tiếp bằng tiếng Việt cho 14 chính tinh tại Phu Thê, 4 Tứ Hóa, 9 sao liên quan, 5 mức điểm và bản phương pháp luận dài; nguyên bản lưu tại `lib/ziwei/heming-knowledge.zh.ts`.
- Tài liệu chính: README tiếng Việt, bảng thuật ngữ, hướng dẫn đóng góp, quy tắc ứng xử, các mẫu Issue/PR.
- Danh mục 1.848 đoạn ghi lời giảng Thiên Kỷ có mục lục tiếng Việt tại [README.vi.md](./docs/tianji-ziwei/README.vi.md).

## Chưa dịch hoàn toàn

- **1.848 đoạn nguyên văn Thiên Kỷ** ở `docs/tianji-ziwei/*.md` và `entries.jsonl` **chưa có bản dịch từng đoạn đã sinh ra**. Đã thêm script `scripts/translate_tianji_vi.py` và GitHub Actions `.github/workflows/translate-tianji-vi.yml` để dịch và tạo **16 chương Markdown song ngữ** cùng `entries.vi.jsonl`; nhưng chưa chạy thành công. **Có script không đồng nghĩa với việc đã dịch đủ 1.848 đoạn**. Khi chạy, đầu ra là dịch máy, vẫn cần hiệu đính ngôn ngữ và thuật ngữ.
- Bản dịch toàn bộ trích đoạn phải đối chiếu riêng theo mốc video; không biến nội dung lịch sử thành suy đoán mới.
- Dữ liệu y học `lib/nihai/renji.ts` đã có các trường tiếng Việt tương ứng nhưng vẫn giữ trường Hán tự làm dữ liệu nguồn. Các câu chữ y học do trường phái diễn giải **không được hiểu thành hiệu quả điều trị đã được xác minh**. Không tự ý thay đổi liều lượng hay biến tư liệu thành hướng dẫn tự điều trị.
- Một số tên thành phố Trung Quốc, văn bản chú giải dài, nội dung máy đọc và bình luận gốc trong mã nguồn chưa được Việt hóa trực tiếp.
- Một số chuỗi tiếng Trung trong bộ máy `lib/ziwei/` **phải giữ nguyên**: tên sao/cung là định danh đối chiếu hoặc dữ liệu nguồn, không phải lỗi sót bản dịch. Không thay nguyên văn cổ thư hay trường JSON `name`, `siHua` nếu thuật toán đang phụ thuộc.
- Các câu chữ trong điều khoản, chính sách riêng tư là bản dịch tham khảo; cần rà soát pháp lý nếu dùng trong dịch vụ thực tế.

## Chạy dịch toàn bộ Thiên Kỷ

Từ máy có Internet, dùng Python 3.12 (không cần gói ngoài chuẩn):

```bash
python3 scripts/translate_tianji_vi.py
python3 scripts/translate_tianji_vi.py --check
```

Script sử dụng endpoint Google Translate không chính thức, có thể bị giới hạn truy cập, tạm ngưng hoặc thay đổi. Việc truyền nội dung cho dịch vụ bên thứ ba cần tuân thủ giấy phép và chính sách áp dụng. Nếu repo GitHub fork chưa bật **Actions**, chủ repo cần bật Actions rồi chạy workflow `Việt hóa 1.848 trích đoạn Thiên Kỷ`, hoặc chạy script trên máy và commit các tệp dịch sang nhánh. **Đầu ra phải đạt kiểm tra đúng 1.848 dòng, đủ 16 chương, không làm sai nguyên văn nguồn**. Không tự đánh dấu xong khi chưa thấy các tệp `entries.vi.jsonl` và `vi/*.md` được commit.

## Kiểm thử trước khi merge

```bash
npm ci
npm run typecheck
npm test
npm run build
```

Đã thêm kiểm thử dữ liệu tiếng Việt cho phần cổ thư, Thiên Kỷ, Nhân Kỷ và ghép lá số. Các kiểm thử này được đăng ký trong `npm test`, nhưng chưa có kết quả thực thi xác nhận.

Cần kiểm tra trực quan trang chủ, biểu mẫu sinh, bảng 12 cung, Hán–Việt tên sao, các bộ lọc tìm kiếm, trang cổ thư, chức năng chia sẻ ảnh và các trang SEO.

**Tình trạng kiểm chứng:** những lệnh này chưa được chạy thành công trong môi trường thực hiện thay đổi, vì không thể tải toàn bộ repo để cài dependencies. Chưa xác nhận build hoặc test xanh. Nhánh Việt hóa được giữ dưới dạng Draft PR cho đến khi chạy kiểm thử.

## Nguyên tắc đối chiếu

- Dịch Hán–Việt chuẩn thuật ngữ, ví dụ `七杀` → **Thất Sát**, `财帛宫` → **Cung Tài Bạch**, `化忌` → **Hóa Kỵ**, `三方四正` → **Tam phương tứ chính**.
- Dịch ý câu giảng và lời luận thành văn phong tiếng Việt tự nhiên; **không trình bày bản diễn giải là nguyên văn đã được chứng thực**.
- Giữ bản gốc để tra cứu, ghi nguồn và giấy phép (CC BY-NC-SA cho lời giảng Thiên Kỷ).
- Không dự đoán chắc chắn sức khỏe, tính cách, sự an toàn hay giá trị con người từ các sao, hình tướng hoặc quan niệm cổ.
