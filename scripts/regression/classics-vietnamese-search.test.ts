import assert from 'node:assert/strict';
import { ALL_BOOKS, searchClassics } from '../../lib/classics';
import { translateVisibleText, VI_TEXT } from '../../lib/i18n/vi';

assert.equal(VI_TEXT['紫微'], 'Tử Vi');
assert.equal(VI_TEXT['七杀'], 'Thất Sát');
assert.equal(VI_TEXT['化忌'], 'Hóa Kỵ');
assert.equal(translateVisibleText('紫微'), 'Tử Vi');
assert.equal(translateVisibleText('财帛宫'), 'Cung Tài Bạch');

for (const book of ALL_BOOKS) {
  assert.ok(book.title.length > 0);
  for (const chapter of book.chapters) {
    for (const p of chapter.paragraphs) {
      assert.ok(p.translation, 'Missing Vietnamese classical translation: ' + p.id);
      assert.ok(p.text, 'Missing original classical excerpt: ' + p.id);
    }
  }
}

assert.ok(searchClassics('Tử Vi').length > 0, 'Vietnamese text search should work');
assert.ok(searchClassics('Hóa Lộc').length > 0, 'Sino-Vietnamese technical term search should work');
assert.ok(searchClassics('紫微').length > 0, 'Chinese source search must remain supported');

console.log('Vietnamese classics and terminology regression passed');
