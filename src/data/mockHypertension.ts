import { BloodPresure } from "../interfaces/BloodPresure";

/**
 * Mocked data for testing purposes
 */

export const hypertensionData: BloodPresure[] = [
  { SysBP: 120, DiaBP: 90, atDate: "2018/10/31" },
  { SysBP: 115, DiaBP: 100, atDate: "2018/10/20" },
];

export const hypertensionSecondData: BloodPresure[] = [
  { SysBP: 120, DiaBP: 90, atDate: "2018/10/31" },
  { SysBP: 115, DiaBP: 100, atDate: "2018/11/20" },
];

export const hypertensionWrongData: BloodPresure[] = [
  { SysBP: 120, DiaBP: 90, atDate: "2018/10/31" },
  { SysBP: 115, DiaBP: 100, atDate: "2018.1/11/20" },
];
