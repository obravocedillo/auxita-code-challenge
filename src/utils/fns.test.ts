import {
  hypertensionCalculator,
  kidneyDiseaseCalculator,
  calculateDropsKidney,
} from './fns';
import { kidneyDiseaseData, kidneyDiseaseLongData } from '../data/mockKidneyDisease';
import { hypertensionData, hypertensionWrongData } from '../data/mockHypertension';

describe('Utils functions testing', () => {
  test('Hypertension calculator with SysBP: 120, DiaBP: 90 should return stage 1', () => {
    const hypertensionResult = hypertensionCalculator(hypertensionData);
    expect(hypertensionResult).toEqual('Stage 1');
  });

  test('Hypertension calculator with empty array', () => {
    const hypertensionResult = hypertensionCalculator([]);
    expect(hypertensionResult).toEqual('Not enough data');
  });

  test('Hypertension calculator with wrong data input', () => {
    const hypertensionResult = hypertensionCalculator(hypertensionWrongData);
    expect(hypertensionResult).toEqual('Data not valid');
  });

  test('Kidney disease calculator with eGFR: 65 should return Mildly Decreased', () => {
    const kidneyResult = kidneyDiseaseCalculator(kidneyDiseaseData);
    expect(kidneyResult).toEqual('Mildly Decreased');
  });

  test('Kidney disease calculator with empty array', () => {
    const kidneyResult = kidneyDiseaseCalculator([]);
    expect(kidneyResult).toEqual('Not enough data');
  });

  test('Drop in kidneys readings should return values with drops bigger than 20% in an array', () => {
    const kidneyDropsResult = calculateDropsKidney(kidneyDiseaseLongData);
    expect(kidneyDropsResult).toEqual([{ eGFR: 50, atDate: '2018/10/25', drop: '30%' }]);
  });

  test('Drop in kidneys readings should return an empty array if the array used is to small', () => {
    const kidneyDropsResult = calculateDropsKidney(kidneyDiseaseData);
    expect(kidneyDropsResult).toEqual([]);
  });
});
