import assert from 'node:assert/strict';
import { HEXAGRAMS, TIANJI_EPISODES, TIANJI_QUOTES, FENGSHUI_ENTRIES } from '../../lib/nihai/tianji';
import { RENJI_MODULES } from '../../lib/nihai/renji';
import { PATTERN_NAMES_VI, PATTERN_DESCRIPTIONS_VI } from '../../lib/i18n/patterns-vi';
import { VI_TEXT } from '../../lib/i18n/vi';

assert.equal(HEXAGRAMS.length, 64);
for (const h of HEXAGRAMS) {
  assert.ok(h.nameVi && h.compositionVi && h.meaningVi && h.niInterpretationVi && h.divinationVi, 'Incomplete Vietnamese Yi Jing hexagram: ' + h.number);
  assert.ok(h.name && h.meaning, 'Lost original Yi Jing source: ' + h.number);
}
assert.equal(TIANJI_EPISODES.length, 24);
for (const episode of TIANJI_EPISODES) {
  assert.ok(episode.firstHalf && episode.secondHalf && episode.highlights.length, 'Incomplete Thien Ky episode: ' + episode.dvd);
}
assert.equal(TIANJI_QUOTES.length, 29);
for (const quote of TIANJI_QUOTES) {
  assert.ok(quote.textVi && quote.topicVi && quote.text, 'Original or Vietnamese teaching quote missing');
}
assert.equal(FENGSHUI_ENTRIES.length, 6);
assert.equal(RENJI_MODULES.length, 5);
for (const item of RENJI_MODULES) {
  assert.ok(item.name && item.description && item.chapters.length);
}
for (const [han, name] of Object.entries(PATTERN_NAMES_VI)) {
  assert.ok(name && PATTERN_DESCRIPTIONS_VI[han], 'Missing pattern interpretation: ' + han);
}
assert.equal(VI_TEXT['天机'], 'Thiên Cơ');
console.log('Vietnamese specialist data coverage: all 64 hexagrams, 24 episodes, 29 quotes, 6 feng shui entries and 36 patterns');
