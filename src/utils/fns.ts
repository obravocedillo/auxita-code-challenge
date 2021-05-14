import { BloodPresure } from "../interfaces/BloodPresure";
import {
  GlomerularFiltrationRate,
  GlomerularFiltrationDrops,
} from "../interfaces/GlomerularFiltrationRate";
import { sortByDate, valiateData } from "./auxiliary-fns";

/**
 * Functions used in the main flow of the application
 */

/**
 * @desc Classifies the blood pressure stage according to an array of Blood Pressure
 * @param bpReadings - an unsorted array of Blood Pressure Data
 * @returns - a classification string
 */
function hypertensionCalculator(bpReadings: BloodPresure[]): string {
  if (bpReadings.length === 0) {
    return "Not enough data";
  }

  if (!valiateData(bpReadings, 0)) {
    return "Data not valid";
  }

  const sortedReadings = sortByDate(bpReadings);

  if (sortedReadings[0].SysBP >= 180 && sortedReadings[0].DiaBP >= 120) {
    return "Stage 3";
  }

  if (
    (sortedReadings[0].SysBP >= 160 && sortedReadings[0].SysBP < 180) ||
    (sortedReadings[0].DiaBP >= 100 && sortedReadings[0].DiaBP < 110)
  ) {
    return "Stage 2";
  }

  if (
    (sortedReadings[0].SysBP >= 140 && sortedReadings[0].SysBP < 160) ||
    (sortedReadings[0].DiaBP >= 90 && sortedReadings[0].DiaBP < 100)
  ) {
    return "Stage 1";
  }

  return "No Hypertension";
}

/**
 * @desc - Classifies the kidney status according to an array of Estimated glomerular filtration rate (eGFR)
 * @param eGFRReadings - an unsorted array of Estimated glomerular filtration rate (eGFR) Data
 * @returns - a string with the kidney status
 */
function kidneyDiseaseCalculator(
  eGFRReadings: GlomerularFiltrationRate[]
): string {
  if (eGFRReadings.length === 0) {
    return "Not enough data";
  }

  if (!valiateData(eGFRReadings, 1)) {
    return "Data not valid";
  }

  const sortedReadings = sortByDate(eGFRReadings);

  if (sortedReadings[0].eGFR >= 90) {
    return "normal";
  }

  if (sortedReadings[0].eGFR >= 60 && sortedReadings[0].eGFR <= 89) {
    return "Mildly Decreased";
  }

  if (sortedReadings[0].eGFR >= 45 && sortedReadings[0].eGFR <= 59) {
    return "Mild to Moderate";
  }

  if (sortedReadings[0].eGFR >= 30 && sortedReadings[0].eGFR <= 44) {
    return "Moderate to Severe";
  }

  if (sortedReadings[0].eGFR >= 15 && sortedReadings[0].eGFR <= 29) {
    return "Severely Decreased";
  }

  return "Kidney Failure";
}

function calculateDropsKidney(
  eGFRReadings: GlomerularFiltrationRate[]
): GlomerularFiltrationDrops[] {
  const allDrops: GlomerularFiltrationDrops[] = [];
  if (eGFRReadings.length >= 3) {
    if (!valiateData(eGFRReadings, 1)) {
      return [];
    }

    const sortedReadings = sortByDate(eGFRReadings);

    const percentageDrop: number = Math.abs(
      (sortedReadings[0].eGFR * 100) / sortedReadings[1].eGFR - 100
    );
    const secondPercentageDrop: number = Math.abs(
      (sortedReadings[0].eGFR * 100) / sortedReadings[2].eGFR - 100
    );

    // Push elements with more than 20% of drop and remove decimals
    if (percentageDrop >= 20) {
      allDrops.push({
        eGFR: sortedReadings[1].eGFR,
        atDate: sortedReadings[1].atDate,
        drop: `${Math.trunc(percentageDrop)}%`,
      });
    }

    if (secondPercentageDrop >= 20) {
      allDrops.push({
        eGFR: sortedReadings[2].eGFR,
        atDate: sortedReadings[2].atDate,
        drop: `${Math.trunc(secondPercentageDrop)}%`,
      });
    }
  }

  return allDrops;
}

export {
  hypertensionCalculator,
  kidneyDiseaseCalculator,
  calculateDropsKidney,
};
