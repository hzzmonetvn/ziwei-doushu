import assert from 'node:assert/strict';
import { ACU_EXPERIENCES, TRANS_NEEDLING, HANTANG_FORMULAS, CLASSIC_FORMULAS } from '../../lib/nihai/renji';
import { STAR_IN_FUQI_GU, SIHUA_IN_FUQI_GU, HEMING_METHODOLOGY, MARRIAGE_STARS_BRIEF, HEMING_SCORE_CRITERIA } from '../../lib/ziwei/heming-knowledge';

const hasHan = (s: string) => /[\u3400-\u9fff]/.test(s);
function verifyVietnamese(vi: unknown, context: string) {
  assert.equal(typeof vi, 'string', context + ': translated value missing');
  assert.ok((vi as string).trim().length >= 2, context + ': translation is empty');
  assert.ok(!hasHan(vi as string), context + ': untranslated Han characters detected');
}

assert.equal(ACU_EXPERIENCES.length, 120);
for (const item of ACU_EXPERIENCES) {
  verifyVietnamese(item.conditionVi, 'condition at acupuncture entry ' + item.id);
  verifyVietnamese(item.acupointsVi, 'acupoints at entry ' + item.id);
  verifyVietnamese(item.categoryVi, 'category at entry ' + item.id);
  assert.ok(item.condition && item.acupoints, 'Original acupuncture entry must remain');
}

assert.equal(TRANS_NEEDLING.length, 31);
for (const item of TRANS_NEEDLING) {
  for (const key of ['comboVi', 'indicationVi', 'sourceVi'] as const) {
    verifyVietnamese(item[key], key + ' at penetrating-needle entry ' + item.id);
  }
  if (item.supporting) verifyVietnamese(item.supportingVi, 'supporting points at entry ' + item.id);
  assert.ok(item.combo && item.indication && item.source);
}

assert.equal(HANTANG_FORMULAS.length, 97);
for (const item of HANTANG_FORMULAS) {
  for (const key of ['nameVi', 'indicationVi', 'theoryVi'] as const) {
    verifyVietnamese(item[key], key + ' at Hantang formula ' + item.id);
  }
  if (item.ingredients) verifyVietnamese(item.ingredientsVi, 'ingredients at Hantang formula ' + item.id);
  assert.ok(item.name && item.indication);
}

assert.equal(CLASSIC_FORMULAS.length, 25);
for (const item of CLASSIC_FORMULAS) {
  for (const key of ['nameVi', 'indicationVi', 'compositionVi', 'niUsageVi'] as const) {
    verifyVietnamese(item[key], key + ' at classical formula ' + item.id);
  }
  assert.ok(item.name && item.composition);
}

assert.equal(Object.keys(STAR_IN_FUQI_GU).length, 14);
for (const [star, item] of Object.entries(STAR_IN_FUQI_GU)) {
  for (const key of ['summary','good','bad','spouse_traits','timing'] as const) {
    verifyVietnamese(item[key], 'couple knowledge ' + star + ' / ' + key);
  }
  if (item.ni_quote) verifyVietnamese(item.ni_quote, star + ' / ni_quote');
}
assert.equal(Object.keys(SIHUA_IN_FUQI_GU).length, 4);
for (const text of Object.values(SIHUA_IN_FUQI_GU)) verifyVietnamese(text, 'Si Hua relationship content');
assert.ok(HEMING_METHODOLOGY.includes('cung Phu Thê'));
assert.ok(!hasHan(HEMING_METHODOLOGY));
for (const value of Object.values(MARRIAGE_STARS_BRIEF)) verifyVietnamese(value, 'marriage star');
for (const value of Object.values(HEMING_SCORE_CRITERIA)) verifyVietnamese(value, 'marriage score');

console.log('Vietnamese medical corpus: 120 acupuncture records, 31 needling references, 97 Hantang and 25 classical formulas; relationship knowledge: 14 major stars, 4 Si Hua');
