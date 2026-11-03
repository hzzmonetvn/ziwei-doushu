import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PROVINCES } from '../../lib/ziwei/cities';
import { VI_LOCATION_NAMES } from '../../lib/i18n/china-locations-vi';

const root = path.resolve(import.meta.dirname, '../..');
const docs = path.join(root, 'docs/tianji-ziwei');
const han = /[\u3400-\u9fff]/;
const readLines = (filename: string): Record<string, unknown>[] =>
  fs.readFileSync(path.join(docs, filename), 'utf8').trim().split(/\n/).map(x => JSON.parse(x));

assert.equal(PROVINCES.length, 34, 'Province dataset changed');
const cities = PROVINCES.flatMap(p => p.cities.map(c => c.name));
assert.equal(cities.length, 484, 'Chinese city/district dataset changed');
const keys = new Set([...PROVINCES.map(p => p.name), ...cities]);
assert.equal(keys.size, 517);
for (const name of keys) {
  const label = VI_LOCATION_NAMES[name];
  assert.ok(label, 'Missing Vietnamese location label for ' + name);
  assert.ok(!han.test(label), 'Han character leaked into translated location: ' + name);
  assert.ok(label !== name, 'Location label is not translated: ' + name);
}

const source = readLines('entries.jsonl');
const translated = readLines('entries.vi.jsonl');
assert.equal(source.length, 1848);
assert.equal(translated.length, 1848);
const parts: Record<number, string> = {
  3:'2上', 5:'3上', 7:'4上', 9:'5上',
  11:'6上', 13:'7上', 15:'8上', 17:'9上',
  19:'10上', 21:'11上', 23:'12上', 25:'13上',
  27:'14上', 29:'15上', 37:'19上_补充1', 48:'24下_补充2',
};

const countByPart = new Map<number, number>();
for (let i = 0; i < source.length; i++) {
  const original = source[i];
  const vi = translated[i];
  for (const [key, value] of Object.entries(original)) {
    assert.deepEqual(vi[key], value, 'Source field modified at row ' + i + ': ' + key);
  }
  for (const field of ['quote_vi', 'h2_vi', 'h3_vi', 'note_vi']) {
    assert.equal(typeof vi[field], 'string', 'Missing Vietnamese field ' + field + ' at row ' + i);
  }
  assert.ok((vi.quote_vi as string).trim().length > 1, 'Blank translation at row ' + i);
  assert.notEqual(vi.quote_vi, original.quote, 'Source copied as translation at row ' + i);
  const part = Number(vi.part);
  assert.ok(parts[part], 'Unexpected video part ' + part);
  countByPart.set(part, (countByPart.get(part) ?? 0) + 1);
}

assert.equal(Object.keys(parts).length, 16);
for (const [id, stem] of Object.entries(parts)) {
  const text = fs.readFileSync(path.join(docs, 'vi', stem + '.md'), 'utf8');
  assert.ok(text.startsWith('# Thiên Kỷ'), 'Missing Vietnamese chapter title ' + stem);
  const sourceControls = text.match(/<summary>Nguyên văn Hán tự \(mở để đối chiếu\)<\/summary>/g) ?? [];
  assert.equal(sourceControls.length, countByPart.get(Number(id)), 'Original comparison blocks mismatch at ' + stem);
  assert.ok(text.includes('Bản dịch máy'), 'Machine translation label missing at ' + stem);
}

const report = JSON.parse(fs.readFileSync(path.join(docs, 'translation-report.vi.json'), 'utf8'));
assert.equal(report.translated_records, 1848);
assert.equal(report.original_preserved, true);
console.log('Vi coverage complete: 34 provinces + 484 places (517 unique), 1848 bilingual quotes, 16 chapters.');
