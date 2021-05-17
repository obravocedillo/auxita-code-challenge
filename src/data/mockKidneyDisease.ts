import { GlomerularFiltrationRate } from '../interfaces/GlomerularFiltrationRate';

/**
 * Mocked data for testing purposes
 */

export const kidneyDiseaseData: GlomerularFiltrationRate[] = [
  { eGFR: 65, atDate: '2018/10/31' },
  { eGFR: 70, atDate: '2018/10/20' },
];

export const kidneyDiseaseSecondData: GlomerularFiltrationRate[] = [
  { eGFR: 70, atDate: '2018/10/20' },
  { eGFR: 65, atDate: '2018/10/31' },
];
export const kidneyDiseaseLongData: GlomerularFiltrationRate[] = [
  { eGFR: 77, atDate: '2018/10/23' },
  { eGFR: 60, atDate: '2018/10/26' },
  { eGFR: 75, atDate: '2018/10/20' },
  { eGFR: 50, atDate: '2018/10/25' },
  { eGFR: 70, atDate: '2018/10/22' },
  { eGFR: 74, atDate: '2018/10/21' },
  { eGFR: 65, atDate: '2018/10/31' },
];

export const kidneyDiseaseWrongData: GlomerularFiltrationRate[] = [
  { eGFR: 70, atDate: '2018/10/20' },
  { eGFR: 65, atDate: '20%&/10/31' },
];

export const kidneyDiseaseKidneyFailureData: GlomerularFiltrationRate[] = [
  { eGFR: 70, atDate: '2018/10/20' },
  { eGFR: 14, atDate: '2018/10/31' },
];

export const kidneyDiseaseNormalData: GlomerularFiltrationRate[] = [
  { eGFR: 77, atDate: '2018/10/23' },
  { eGFR: 60, atDate: '2018/10/26' },
  { eGFR: 75, atDate: '2018/10/20' },
  { eGFR: 50, atDate: '2018/10/25' },
  { eGFR: 70, atDate: '2018/10/22' },
  { eGFR: 74, atDate: '2018/10/21' },
  { eGFR: 92, atDate: '2018/10/31' },
];
