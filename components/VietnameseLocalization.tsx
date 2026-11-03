'use client';

import { useEffect } from 'react';
import { translateVisibleText } from '@/lib/i18n/vi';

const ATTRIBUTES = ['placeholder', 'title', 'aria-label', 'alt'] as const;
const SKIP_SELECTOR = 'script, style, noscript, pre, code, textarea, [data-vi-skip]';

/**
 * Việt hóa các nhãn giao diện, kể cả dữ liệu được render động từ thuật toán.
 * Không ghi đè chuỗi trong React state, không đổi tên sao/cung được dùng làm khóa.
 * Nguyên văn cổ thư và đoạn không có bản dịch đáng tin cậy được giữ nguyên.
 */
export default function VietnameseLocalization() {
  useEffect(() => {
    const shouldSkip = (el: Element | null) => !el || !!el.closest(SKIP_SELECTOR);

    function translateText(node: Text) {
      if (shouldSkip(node.parentElement)) return;
      const original = node.nodeValue;
      if (!original) return;
      const next = translateVisibleText(original);
      if (next !== original) node.nodeValue = next;
    }

    function translateAttributes(el: Element) {
      if (shouldSkip(el)) return;
      for (const attr of ATTRIBUTES) {
        const original = el.getAttribute(attr);
        if (!original) continue;
        const next = translateVisibleText(original);
        if (next !== original) el.setAttribute(attr, next);
      }
    }

    function scan(root: Node) {
      if (root.nodeType === Node.TEXT_NODE) {
        translateText(root as Text);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const el = root as Element;
      if (shouldSkip(el)) return;
      translateAttributes(el);
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const child = walker.currentNode;
        if (child.nodeType === Node.TEXT_NODE) translateText(child as Text);
        else translateAttributes(child as Element);
      }
    }

    // Chạy sau hydration để không làm lệch HTML do React quản lý.
    // MutationObserver xử lý nội dung xuất hiện từ điều hướng, biểu đồ và form.
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'characterData') scan(record.target);
        else if (record.type === 'attributes') scan(record.target);
        else for (const node of Array.from(record.addedNodes)) scan(node);
      }
    });
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRIBUTES],
      subtree: true,
    });
    scan(document.body);
    return () => observer.disconnect();
  }, []);

  return null;
}
