import { validateData, sortByDate } from './auxiliary-fns';
import { kidneyDiseaseData, kidneyDiseaseWrongData } from '../data/mockKidneyDisease';
import { hypertensionData, hypertensionWrongData } from '../data/mockHypertension';

describe('Utils axiliary functions testing', () => {
  test('ValidateData should return true if integers are used in type 0', () => {
    const valiateDataResult = validateData(hypertensionData, 0);
    expect(valiateDataResult).toBeTruthy();
  });

  test('ValidateData should return false if integers are not used in type 0', () => {
    const valiateDataResult = validateData(hypertensionWrongData, 0);
    expect(valiateDataResult).toBeFalsy();
  });

  test('ValidateData should return true if integers or floats are used in type 1', () => {
    const valiateDataResult = validateData(kidneyDiseaseData, 1);
    expect(valiateDataResult).toBeTruthy();
  });

  test('ValidateData should return false if integers or floats are not used in type 1', () => {
    const valiateDataResult = validateData(kidneyDiseaseWrongData, 1);
    expect(valiateDataResult).toBeFalsy();
  });

  test('sortByDate should return the latest date in an array', () => {
    const vsortByDateResult = sortByDate(hypertensionData);
    expect(vsortByDateResult[0]).toEqual({
      SysBP: 120,
      DiaBP: 90,
      atDate: '2018/10/31',
    });
  });
});
