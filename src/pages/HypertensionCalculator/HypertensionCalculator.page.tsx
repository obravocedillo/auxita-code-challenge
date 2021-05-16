import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { hypertensionData } from '../../data/mockHypertension';
import { hypertensionCalculator } from '../../utils/fns';
import { sortByDate } from '../../utils/auxiliary-fns';
import { BloodPresure } from '../../interfaces/BloodPresure';
import Navigation from '../../components/Navigation/Navigation.component';
import './HypertensionCalculator.css';

function HypertensionCalculatorPage(): JSX.Element {
  const [lastReadingResult, setLastReading] = useState<string>('');
  const [blodPressureReadings, setBlodPressureReadings] = useState<BloodPresure[]>([]);

  // Set data on initialization
  useEffect(() => {
    setLastReading(hypertensionCalculator(hypertensionData));
    setBlodPressureReadings(sortByDate(hypertensionData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @desc Renders an element depending if data is valid and has enough length
   * @param result result of hypertension calculation
   * @returns Returns an elements depending on the result of the calculation
   */
  const lastReadingRender = (result: string) => {
    if (result === 'Not enough data') {
      return (
        <div className='result'>
          <p>Not enough data</p>
        </div>
      );
    }
    if (result === 'Data not valid') {
      return (
        <div className='global-result'>
          <p>Data not valid</p>;
        </div>
      );
    }
    if (blodPressureReadings.length > 0) {
      return (
        <div className='global-result'>
          <span className='global-result-title'>Result of latest reading: </span>
          <span className='global-result-date'>({blodPressureReadings[0].atDate})</span>
          <p className='global-result-value'>{result}</p>
        </div>
      );
    }
    return '';
  };

  return (
    <div className='hypertension'>
      <Navigation />
      <h2 className='hypertension-title' data-testid='hypertension-title'>
        Hypertension Calculator
      </h2>
      <div className='hypertension-table-colors'>
        <span className='hypertension-latest-color'>Latest result</span>
      </div>
      <div className='hypertension-table-container'>
        <TableContainer>
          <Table stickyHeader aria-label='sticky table' className='hypertension-table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Systolic Blood Pressure</TableCell>
                <TableCell align='center'>Diastolic Blood Pressure</TableCell>
                <TableCell align='center'>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blodPressureReadings.map((singleReading: BloodPresure) => (
                <TableRow key={singleReading.atDate}>
                  <TableCell align='center'>{singleReading.SysBP}</TableCell>
                  <TableCell align='center'>{singleReading.DiaBP}</TableCell>
                  <TableCell align='center'>{singleReading.atDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {lastReadingRender(lastReadingResult)}
    </div>
  );
}

export default HypertensionCalculatorPage;
