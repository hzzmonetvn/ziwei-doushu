export const metadata = { title: 'Điều khoản dịch vụ · Lá số Tử Vi', description: 'Điều khoản dịch vụ và thỏa thuận người dùng' };

export default function TermsPage() {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-0)', borderBottom: '1px solid var(--bdr)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--tx-3)', textDecoration: 'none' }}>
          <span style={{ fontSize: '16px' }}>‹</span>
          <span>Về trang chủ</span>
        </a>
        <div style={{ width: '1px', height: '20px', background: 'var(--bdr-med)' }} />
        <span style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.2em' }}>Lá số Tử Vi</span>
      </header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px', color: 'var(--tx-1)', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Điều khoản dịch vụ</h1>
        <p style={{ fontSize: 12, color: 'var(--tx-3)', marginBottom: 32 }}>Cập nhật lần cuối: Tháng 4 năm 2026</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>1. Giới thiệu dịch vụ</h2>
      <p>Lá số Tử Vi (sau đây gọi là “nền tảng”) cung cấp dịch vụ lập và luận giải lá số dựa trên hệ thống Tử Vi Đẩu Số được trình bày trong Thiên Kỷ của Nghê Hải Hạ. Mọi nội dung mệnh lý chỉ mang tính tham khảo, <strong>không phải lời khuyên về y tế, đầu tư, pháp lý, tâm lý hoặc các quyết định quan trọng trong cuộc sống</strong>。</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>2. Quy định đối với người dùng</h2>
      <p>Khi sử dụng nền tảng, bạn đồng ý:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Chỉ sử dụng nền tảng vào mục đích hợp pháp và tham khảo cá nhân</li>
        <li>Không phát tán nội dung của nền tảng để bán, đăng lại hoặc công bố rộng rãi vì mục đích thương mại</li>
        <li>Không thực hiện hành vi gây gián đoạn hoạt động của nền tảng</li>
        <li>Cung cấp thông tin sinh chính xác; nền tảng không chịu trách nhiệm đối với sai lệch luận giải do dữ liệu nhập sai</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>3. Sở hữu trí tuệ và các hành vi bị cấm · Chống thu thập dữ liệu và huấn luyện</h2>
      <p style={{ background: 'rgba(168,50,40,0.06)', border: '1px solid rgba(168,50,40,0.2)', padding: 16, borderRadius: 8 }}>
        <strong>Toàn bộ nội dung mệnh lý, kho kiến thức (gồm các bản luận giải theo 14 chính tinh × 12 cung × nam/nữ × Tứ Hóa × Đại hạn và Lưu niên), thiết kế UI, giải pháp tích hợp thuật toán và kho ví dụ do nền tảng sáng tạo hoặc biên soạn hợp pháp.</strong><br/><br/>
        Nghiêm cấm các hành vi sau. Nền tảng bảo lưu quyền yêu cầu bồi thường dân sự hoặc truy cứu trách nhiệm hình sự theo quy định:<br/>
        ① Thu thập nội dung của nền tảng bằng crawler, script tự động, gọi API hàng loạt hoặc cách kỹ thuật tương tự;<br/>
        ② Sử dụng bản luận giải, văn bản hoặc phản hồi API do nền tảng tạo ra **để huấn luyện bất kỳ mô hình học máy nào** (bao gồm mô hình ngôn ngữ lớn, mô hình tạo nội dung mệnh lý và mô hình tạo văn bản);<br/>
        ③ Bán lại hoặc đăng tải nội dung do nền tảng tạo ra trên trang web, ứng dụng hoặc tài khoản mạng xã hội khác;<br/>
        ④ Dịch ngược, sao chép hoặc sửa đổi mã frontend/backend của nền tảng để cung cấp dịch vụ tương tự dưới danh nghĩa tự vận hành.<br/><br/>
        Văn bản đầu ra có gắn dấu vết nhận dạng để truy xuất nguồn gốc. Các bản sao hoặc kết quả huấn luyện trái phép có thể bị phát hiện. Khi phát hiện vi phạm, nền tảng có quyền yêu cầu <strong>bồi thường 1 triệu nhân dân tệ cho mỗi trường hợp vi phạm</strong>, đồng thời bảo lưu quyền khởi kiện và phối hợp với cơ quan chức năng điều tra.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>4. Tuyên bố miễn trừ trách nhiệm</h2>
      <p>Nội dung mệnh lý được biên soạn dựa trên Tử Vi Đẩu Số truyền thống và hệ thống Nghê Hải Hạ, <strong>không bảo đảm chính xác 100%</strong>. Vận mệnh được xem là chịu ảnh hưởng của Thiên – Địa – Nhân. Người dùng nên coi kết quả là tài liệu tham khảo để tự tìm hiểu và không lệ thuộc vào bất kỳ nhận định mệnh lý nào.</p>
      <p>Nền tảng không chịu trách nhiệm pháp lý đối với các hệ quả từ việc sử dụng nội dung, bao gồm nhưng không giới hạn ở quyết định sai, ảnh hưởng tâm lý hoặc thay đổi quan hệ.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>5. Thay đổi và chấm dứt dịch vụ</h2>
      <p>Nền tảng bảo lưu quyền điều chỉnh, tạm ngừng hoặc chấm dứt một phần hay toàn bộ dịch vụ. Các thay đổi quan trọng sẽ được thông báo trên trang web hoặc qua email.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>6. Luật áp dụng và giải quyết tranh chấp</h2>
      <p>Các điều khoản này chịu sự điều chỉnh của pháp luật Cộng hòa Nhân dân Trung Hoa. Tranh chấp trước hết được giải quyết bằng thương lượng; nếu không thành, vụ việc được đưa ra tòa án nhân dân có thẩm quyền tại nơi chủ thể vận hành nền tảng đặt trụ sở.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>7. Liên hệ</h2>
      <p>Nếu có câu hỏi, vui lòng liên hệ tài khoản WeChat hoặc email hỗ trợ được công bố trên nền tảng.</p>

        <p style={{ marginTop: 48, fontSize: 12, color: 'var(--tx-3)' }}>
          <a href="/privacy" style={{ color: 'var(--ac)' }}>Chính sách quyền riêng tư</a> · <a href="/" style={{ color: 'var(--ac)' }}>Về trang chủ</a>
        </p>
      </main>
    </>
  );
}
