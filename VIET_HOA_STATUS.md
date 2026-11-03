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
- Nhân Kỷ: nội dung giới thiệu năm chuyên đề y học cổ truyền và 15 chương cơ bản.
- Tài liệu chính: README tiếng Việt, bảng thuật ngữ, hướng dẫn đóng góp, quy tắc ứng xử, các mẫu Issue/PR.
- Danh mục 1.848 đoạn ghi lời giảng Thiên Kỷ có mục lục tiếng Việt tại [README.vi.md](./docs/tianji-ziwei/README.vi.md).

## Chưa dịch hoàn toàn

- **1.848 đoạn nguyên văn Thiên Kỷ** ở `docs/tianji-ziwei/*.md` và `entries.jsonl`: mới có danh mục tiếng Việt, **chưa có bản dịch từng đoạn**. Cần dịch và đối chiếu riêng theo mốc video; không nên biến nội dung lịch sử thành suy đoán mới.
- Phần còn lại của `lib/nihai/renji.ts`: 120 mục kinh nghiệm huyệt vị và các đoạn chuyên sâu y học cổ truyền. Không tự ý rút gọn tên huyệt, thay đổi phương thang hoặc biến tư liệu thành hướng dẫn tự điều trị.
- Một số tên thành phố Trung Quốc, văn bản chú giải dài, nội dung máy đọc và bình luận gốc trong mã nguồn chưa được Việt hóa trực tiếp.
- Một số chuỗi tiếng Trung trong bộ máy `lib/ziwei/` **phải giữ nguyên**: tên sao/cung là định danh đối chiếu hoặc dữ liệu nguồn, không phải lỗi sót bản dịch. Không thay nguyên văn cổ thư hay trường JSON `name`, `siHua` nếu thuật toán đang phụ thuộc.
- Các câu chữ trong điều khoản, chính sách riêng tư là bản dịch tham khảo; cần rà soát pháp lý nếu dùng trong dịch vụ thực tế.

## Kiểm thử trước khi merge

```bash
npm ci
npm run typecheck
npm test
npm run build
```

Cần kiểm tra trực quan trang chủ, biểu mẫu sinh, bảng 12 cung, Hán–Việt tên sao, các bộ lọc tìm kiếm, trang cổ thư, chức năng chia sẻ ảnh và các trang SEO.

**Tình trạng kiểm chứng:** những lệnh này chưa được chạy thành công trong môi trường thực hiện thay đổi, vì không thể tải toàn bộ repo để cài dependencies. Chưa xác nhận build hoặc test xanh. Nhánh Việt hóa được giữ dưới dạng Draft PR cho đến khi chạy kiểm thử.

## Nguyên tắc đối chiếu

- Dịch Hán–Việt chuẩn thuật ngữ, ví dụ `七杀` → **Thất Sát**, `财帛宫` → **Cung Tài Bạch**, `化忌` → **Hóa Kỵ**, `三方四正` → **Tam phương tứ chính**.
- Dịch ý câu giảng và lời luận thành văn phong tiếng Việt tự nhiên; **không trình bày bản diễn giải là nguyên văn đã được chứng thực**.
- Giữ bản gốc để tra cứu, ghi nguồn và giấy phép (CC BY-NC-SA cho lời giảng Thiên Kỷ).
- Không dự đoán chắc chắn sức khỏe, tính cách, sự an toàn hay giá trị con người từ các sao, hình tướng hoặc quan niệm cổ.
