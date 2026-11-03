'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ZiweiChart, Palace } from '@/lib/ziwei/types';
import type { TimeView } from './TimeNav';
import { VI_TEXT } from '@/lib/i18n/vi';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  hidden?: boolean; // don't show user bubble for auto/topic messages
}

interface SelectedSiHua {
  starName: string;
  siHua: string;
  view: TimeView;
}

interface InsightPanelProps {
  chart: ZiweiChart;
  selectedPalace?: Palace | null;
  selectedSiHua?: SelectedSiHua | null;
}

const TOPICS = [
  { key: 'overview',     label: 'Mệnh cách' },
  { key: 'love',        label: 'Tình duyên' },
  { key: 'career',      label: 'Sự nghiệp' },
  { key: 'wealth',      label: 'Tài vận' },
  { key: 'health',      label: 'Sức khỏe' },
  { key: 'personality', label: 'Tính cách' },
] as const;

const TOPIC_PROMPTS: Record<string, string> = {
  overview: `Hãy luận giải tổng quan mệnh cách bằng tiếng Việt, dùng thuật ngữ Tử Vi Hán–Việt theo bố cục sau:

**【Tổng quan mệnh cách】**
Tóm tắt cách cục chủ đạo và khí chất mệnh chủ trong một câu.

**Luận giải chính tinh**
Phân tích đặc điểm chính tinh thủ Mệnh theo các quan điểm được ghi nhận trong hệ thống Nghê Hải Hạ; không tạo trích dẫn giả.

**【Tam phương tứ chính】**
Phân tích Tam phương của cung Tài Bạch, Quan Lộc và Thiên Di, phối hợp toàn bộ cách cục.

**【Đại hạn hiện tại】**
Nhận định xu hướng Đại hạn hiện tại và các vấn đề cần lưu ý.

**【Ưu thế và lưu ý】**
Ưu thế tiên thiên và những điều cần thận trọng.`,

  love: `Hãy luận giải vận tình duyên và hôn nhân bằng tiếng Việt theo bố cục sau:

**【Tổng quan tình cảm】**
Tóm tắt đặc điểm tình duyên của mệnh chủ.

**【Phân tích cung Phu Thê】**
Luận chính tinh, Tứ Hóa tại cung Phu Thê theo hệ thống Nghê Hải Hạ.

**【Liên hệ Tam phương】**
Phối hợp những cung liên quan đến tình cảm.

**【Tình cảm trong Đại hạn hiện tại】**
Phân tích diễn biến tình cảm trong Đại hạn mười năm hiện tại.

**Gợi ý ứng dụng thực tế**
Đưa ra gợi ý ứng xử thực tế.`,

  career: `Hãy luận giải vận công danh, sự nghiệp bằng tiếng Việt theo bố cục sau:

**【Tổng quan sự nghiệp】**
Tóm tắt mệnh cách công danh, xu hướng làm công hay tự kinh doanh.

**【Phân tích cung Quan Lộc】**
Luận chính tinh, Tứ Hóa tại cung Quan Lộc theo hệ thống Nghê Hải Hạ.

**【Liên hệ cung Tài Bạch】**
Phối hợp cung Tài Bạch với Quan Lộc và nguồn thu nhập.

**【Sự nghiệp trong Đại hạn】**
Phân tích xu hướng sự nghiệp trong Đại hạn hiện tại.

**【Gợi ý thực tế】**
Đề xuất các ngành nghề và định hướng phù hợp.`,

  wealth: `Hãy luận giải tài vận bằng tiếng Việt theo bố cục sau:

**【Tổng quan tài vận】**
Tóm tắt đặc điểm tài vận, nguồn thu chủ động hay thụ động.

**【Phân tích cung Tài Bạch】**
Luận chính tinh và Tứ Hóa tại cung Tài Bạch, nguồn và dòng tiền.

**【Cung Điền Trạch và tích lũy】**
Đánh giá khả năng tích lũy và cung Điền Trạch.

**【Tài vận trong Đại hạn】**
Nhận định xu hướng tài vận hiện tại và lưu ý.

**【Gợi ý quản lý tài chính】**
Đưa ra gợi ý quản lý tài chính thận trọng, không đưa khuyến nghị đầu tư chắc chắn.`,

  health: `Hãy luận các quan niệm truyền thống về sức khỏe bằng tiếng Việt, không chẩn đoán bệnh, theo bố cục sau:

**【Chính tinh tại cung Tật Ách】**
Luận các sao ở cung Tật Ách theo ý nghĩa truyền thống.

**【Các vấn đề cần lưu ý】**
Giải thích quan niệm Tý Ngọ lưu chú của Nghê Hải Hạ như một hệ thống tham khảo, không suy luận bệnh từ lá số.

**【Sức khỏe và Đại hạn theo quan niệm truyền thống】**
Nêu những lưu ý về sức khỏe tổng quát, không dự báo bệnh tật theo thời điểm.

**【Gợi ý chăm sóc sức khỏe】**
Đề xuất thói quen chăm sóc sức khỏe chung.`,

  personality: `Hãy luận giải tính cách theo Tử Vi bằng tiếng Việt, với bố cục sau:

**【Đặc điểm chính tinh tại Mệnh】**
Nêu tính chất chính tinh cung Mệnh theo quan niệm Nghê Hải Hạ, không bịa nguyên văn trích dẫn.

**【Phối hợp tính chất các cung】**
Phối hợp Tài Bạch, Quan Lộc, Thiên Di để diễn giải tính cách.

**【Quan hệ và giao tiếp】**
Phong cách ứng xử và quan hệ xã hội.

**【Thế mạnh và bài học cuộc sống】**
Điểm mạnh và những bài học có thể suy ngẫm.`,
};

const PALACE_ROLES: Record<string, string> = {
  '命宫':   'Bản thân, tính cách, cách cục tiên thiên',
  '兄弟宫': 'Anh chị em, đối tác',
  '夫妻宫': 'Tình cảm, hôn nhân',
  '子女宫': 'Con cái, cấp dưới',
  '财帛宫': 'Nguồn tài vận, thu nhập',
  '疾厄宫': 'Sức khỏe và vấn đề cần lưu ý',
  '迁移宫': 'Cơ hội đi xa, quan hệ xã hội',
  '交友宫': 'Bạn bè, quý nhân, tiểu nhân',
  '官禄宫': 'Công danh, địa vị xã hội',
  '田宅宫': 'Điền sản, môi trường gia đình',
  '福德宫': 'Đời sống tinh thần, phúc đức',
  '父母宫': 'Cha mẹ, giấy tờ',
};

/** Render AI markdown: **【Title】** → gold header, **bold** → strong */
function AiContent({ text, streaming }: { text: string; streaming?: boolean }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        const sectionMatch = line.match(/^\*\*【(.+?)】\*\*$/);
        if (sectionMatch) {
          return (
            <div key={i} className="pt-3 pb-0.5 first:pt-0">
              <span className="text-[11px] font-semibold tracking-wide" style={{ color: 'var(--t-gold)' }}>
                【{sectionMatch[1]}】
              </span>
            </div>
          );
        }
        if (line.trim() === '') return <div key={i} className="h-1" />;
        const parts = line.split(/\*\*(.+?)\*\*/);
        return (
          <div key={i} className="text-[11px] leading-relaxed" style={{ color: 'var(--t-text2)' }}>
            {parts.map((part, j) =>
              j % 2 === 0
                ? part
                : <strong key={j} className="font-medium" style={{ color: 'var(--t-text)' }}>{part}</strong>
            )}
          </div>
        );
      })}
      {streaming && (
        <span
          className="inline-block w-1.5 h-3 ml-0.5 animate-pulse rounded-sm align-middle"
          style={{ background: 'var(--t-gold)', opacity: 0.6 }}
        />
      )}
    </div>
  );
}

export default function InsightPanel({ chart, selectedPalace, selectedSiHua }: InsightPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string>('overview');
  const messagesRef = useRef<Message[]>([]); // always-current copy for closures
  const loadingRef = useRef(false);
  const autoLoaded = useRef(false);
  const lastPalaceBranch = useRef<number | undefined>(undefined);
  const lastSiHuaKey = useRef<string | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep refs in sync
  useEffect(() => { messagesRef.current = messages; }, [messages]);
  useEffect(() => { loadingRef.current = loading; }, [loading]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-generate 命格总览 on mount
  useEffect(() => {
    if (autoLoaded.current) return;
    autoLoaded.current = true;
    sendMessage(TOPIC_PROMPTS.overview, true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Inject palace analysis when palace selected
  useEffect(() => {
    if (!selectedPalace || selectedPalace.branch === lastPalaceBranch.current) return;
    lastPalaceBranch.current = selectedPalace.branch;

    const majorStars = selectedPalace.stars.filter(s => s.type === 'major');
    const starDesc = majorStars.length > 0
      ? majorStars.map(s => `${VI_TEXT[s.name] ?? s.name}${s.siHua ? ' Hóa ' + (VI_TEXT[s.siHua] ?? s.siHua) : ''}`).join(', ')
      : 'Vô chính diệu (mượn Đối cung)';
    const role = PALACE_ROLES[selectedPalace.name] ?? '';
    const palaceVi = VI_TEXT[selectedPalace.name] ?? selectedPalace.name;

    const prompt = `Hãy luận giải bằng tiếng Việt về cung 【${palaceVi}】 (chủ về ${role}), chính tinh ${starDesc}, theo bố cục:

**Đặc điểm cung**
Ý nghĩa của ${palaceVi} và tổ hợp tinh diệu tại cung này.

**【Luận giải chính tinh】**
Luận chính tinh theo hệ thống Nghê Hải Hạ, chỉ dẫn các quan điểm có căn cứ.

**Tác động của Tam phương tứ chính**
Ảnh hưởng của Tam phương tứ chính đối với cung này.

**【Gợi ý thực tế】**
Gợi ý tham khảo dựa trên cấu trúc cung.`;

    sendMessage(prompt, true);
  }, [selectedPalace]); // eslint-disable-line react-hooks/exhaustive-deps

  // 注入四化飞化分析
  useEffect(() => {
    if (!selectedSiHua) return;
    const key = `${starVi}-${siHuaVi}-${selectedSiHua.view}`;
    if (key === lastSiHuaKey.current) return;
    lastSiHuaKey.current = key;

    // 找出该星所在宫位
    const palaceOfStar = chart.palaces.find(p =>
      p.stars.some(s => s.name === selectedSiHua.starName)
    );
    const palaceName = palaceOfStar?.name ?? 'Chưa rõ cung';
    const viewLabel = selectedSiHua.view === 'daxian' ? 'Đại hạn' : 'Lưu niên';
    const starVi = VI_TEXT[selectedSiHua.starName] ?? selectedSiHua.starName;
    const siHuaVi = VI_TEXT[selectedSiHua.siHua] ?? selectedSiHua.siHua;
    const palaceVi = VI_TEXT[palaceName] ?? palaceName;

    const prompt = `Hãy luận bằng tiếng Việt ảnh hưởng Phi Hóa của 【${viewLabel} ${starVi} Hóa ${siHuaVi}】 theo bố cục:

**Ý nghĩa Hóa ${siHuaVi}**
Ý nghĩa Hóa ${siHuaVi} trong hệ thống Nghê Hải Hạ và trường hợp ${starVi} Hóa ${siHuaVi}.

**Ảnh hưởng tại cung đóng**
${starVi} Hóa ${siHuaVi} đóng tại 【${palaceVi}】, luận sự ảnh hưởng đến lĩnh vực cung này theo Nghê Hải Hạ.

**Đường tác động qua Tam phương tứ chính**
Ảnh hưởng của Hóa ${siHuaVi} nhập ${palaceVi} lên Tam phương tứ chính (Đối cung và hai cung tam hợp).

**Ảnh hưởng trong thời kỳ đang xét**
Đối chiếu Hóa ${siHuaVi} trong thời kỳ ${viewLabel} đối với vận hạn gần đây.

**【Gợi ý thực tế】**
Gợi ý ứng xử cụ thể trên cơ sở Tứ Hóa.`;

    sendMessage(prompt, true);
  }, [selectedSiHua]); // eslint-disable-line react-hooks/exhaustive-deps

  const streamResponse = async (apiMessages: { role: 'user' | 'assistant'; content: string }[]) => {
    try {
      const res = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chart, messages: apiMessages }),
      });
      if (res.status === 404) throw new Error('api-missing');
      if (!res.ok) throw new Error('Yêu cầu thất bại');
      if (!res.body) throw new Error('Không có luồng phản hồi');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') break;
          try {
            const delta = JSON.parse(data).delta?.text ?? '';
            assistantText += delta;
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'assistant', content: assistantText };
              return updated;
            });
          } catch { /* skip */ }
        }
      }
    } catch (e) {
      const missing = e instanceof Error && e.message === 'api-missing';
      setMessages(prev => [...prev, { role: 'assistant', content: missing ? 'Bản mã nguồn mở không có API luận giải AI (/api/interpret). Bạn cần tự triển khai; xem README mục Bắt đầu nhanh. Lập lá số không cần khóa API.' : 'Luận giải thất bại, vui lòng thử lại sau.' }]);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  const sendMessage = (text: string, hidden = false) => {
    if (!text.trim() || loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    const userMsg: Message = { role: 'user', content: text, hidden };
    // Capture current messages synchronously via ref (avoids stale closure)
    const apiMessages = [...messagesRef.current, userMsg].map(m => ({
      role: m.role,
      content: m.content,
    }));

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    streamResponse(apiMessages);
  };

  const handleTopicClick = (topicKey: string) => {
    if (loadingRef.current) return;
    setActiveTopic(topicKey);
    sendMessage(TOPIC_PROMPTS[topicKey], true);
  };

  const handleSend = () => {
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden card-glass">

      {/* ── Topic buttons ── */}
      <div className="flex-shrink-0 px-2 pt-2.5 pb-2" style={{ borderBottom: '1px solid var(--t-border)' }}>
        <div className="grid grid-cols-6 gap-1">
          {TOPICS.map(t => {
            const isActive = activeTopic === t.key;
            return (
              <button
                key={t.key}
                onClick={() => handleTopicClick(t.key)}
                disabled={loading}
                className="py-1.5 text-[10px] font-medium rounded-lg transition-all duration-150 disabled:opacity-40"
                style={{
                  background: isActive ? 'rgba(212,168,67,0.12)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(212,168,67,0.3)' : 'var(--t-border)'}`,
                  color: isActive ? 'var(--t-gold)' : 'var(--t-faint)',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Messages ── */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">

        {/* Loading state before first message */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl mb-3" style={{ color: 'var(--t-gold)', opacity: 0.1 }}>✦</div>
            <p className="text-[10px] animate-pulse" style={{ color: 'var(--t-faint)' }}>Đang tạo luận giải mệnh cách…</p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, i) => {
            if (msg.role === 'user' && msg.hidden) return null;

            if (msg.role === 'user') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div
                    className="max-w-[85%] rounded-xl px-3 py-2 text-[11px]"
                    style={{
                      background: 'rgba(212,168,67,0.08)',
                      border: '1px solid rgba(212,168,67,0.18)',
                      color: 'var(--t-gold)',
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              );
            }

            // Assistant message
            const isLastMsg = i === messages.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div
                  className="text-[9px] tracking-widest mb-2 flex items-center gap-1.5"
                  style={{ color: 'var(--t-faint)' }}
                >
                  <span style={{ color: 'var(--t-gold)', opacity: 0.4 }}>✦</span>
                  Luận giải mệnh lý
                </div>
                <AiContent text={msg.content} streaming={loading && isLastMsg} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Input ── */}
      <div className="flex-shrink-0 px-3 pb-3 pt-2" style={{ borderTop: '1px solid var(--t-border)' }}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Hỏi tiếp, ví dụ: Năm nay có nên đổi việc không?"
            disabled={loading}
            className="flex-1 rounded-lg px-3 py-2 text-[11px] focus:outline-none transition-colors"
            style={{
              background: 'var(--t-card)',
              border: '1px solid var(--t-border)',
              color: 'var(--t-text)',
            }}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="px-3 py-2 rounded-lg text-[11px] font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: 'rgba(212,168,67,0.15)',
              border: '1px solid rgba(212,168,67,0.25)',
              color: 'var(--t-gold)',
            }}
          >
            {loading ? '…' : 'Hỏi tiếp'}
          </button>
        </div>
      </div>

    </div>
  );
}
