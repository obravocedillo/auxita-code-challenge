/**
 * Auxiliary functions
 */

/**
 *
 * @param readings An Array with data containing a field called atDate
 * @param type The type of validation that will be done 0 = only integers in date, 1 = only integers and floats in the date
 * @returns A boolean representing if the data is valid, true = data is valid, false = data is not valid
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateData(readings: any[], type: number): boolean {
  try {
    let validateFlag = true;
    for (let i = 0; i < readings.length; i += 1) {
      const dateComponents = readings[i].atDate.split('/');
      const year: number = dateComponents[0];
      const month: number = dateComponents[1];
      const day: number = dateComponents[2];

      // Validate date components type according to type variable
      if (type === 0) {
        // Validate integers only in the date
        if (
          !Number.isInteger(Number(year)) ||
          !Number.isInteger(Number(month)) ||
          !Number.isInteger(Number(day))
        ) {
          validateFlag = false;
          break;
        }
      } else if (type === 1) {
        // Validate integers and floats only in the date
        if (
          typeof Number(year) !== 'number' ||
          Number.isNaN(Number(year)) ||
          typeof Number(month) !== 'number' ||
          Number.isNaN(Number(month)) ||
          typeof Number(day) !== 'number' ||
          Number.isNaN(Number(day))
        ) {
          validateFlag = false;
          break;
        }
      }

      // Validate the correct range of the date
      if (
        year < 1890 ||
        year > 2021 ||
        month <= 0 ||
        month > 12 ||
        day <= 0 ||
        day > 31
      ) {
        validateFlag = false;
        break;
      }
    }
    return validateFlag;
  } catch (error) {
    return false;
  }
}

/**
 * @desc - orders an unsorted array by date
 * @param readings - an unsorted array containing a date in a field called atDate
 * @returns - a sorted array by date
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sortByDate(readings: any[]): any {
  try {
    const sortdeData = readings.sort(
      (a, b) => new Date(b.atDate).getTime() - new Date(a.atDate).getTime(),
    );
    return sortdeData;
  } catch (error) {
    return [];
  }
}
