import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Navigation from '../../components/Navigation/Navigation.component';

import { kidneyDiseaseLongData } from '../../data/mockKidneyDisease';
import { kidneyDiseaseCalculator, calculateDropsKidney } from '../../utils/fns';
import { sortByDate } from '../../utils/auxiliary-fns';
import {
  GlomerularFiltrationRate,
  GlomerularFiltrationDrops,
} from '../../interfaces/GlomerularFiltrationRate';

import './KidneyDisease.css';

function KidneyDisease(): JSX.Element {
  const [lastReadingResult, setLastReading] = useState<string>('');
  const [kidneyDiseaseReadings, setBlodkidneyDiseaseReadings] = useState<
    GlomerularFiltrationRate[]
  >([]);
  const [dropsKidney, setDropsKidney] = useState<GlomerularFiltrationDrops[]>([]);

  const isInDropArray = (arrayElement: GlomerularFiltrationRate): boolean => {
    let itemFoundFLag = false;
    for (let i = 0; i < dropsKidney.length; i += 1) {
      if (
        dropsKidney[i].eGFR === arrayElement.eGFR &&
        dropsKidney[i].atDate === arrayElement.atDate
      ) {
        itemFoundFLag = true;
        break;
      }
    }
    return itemFoundFLag;
  };

  /**
   * @desc Renders an element depending if data is valid and has enough length
   * @param result result of kidney calculation
   * @returns Returns an elements depending on the result of the calculation
   */
  const lastReadingRender = (result: string) => {
    if (result === 'Not enough data') {
      return (
        <div className='global-result'>
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
    if (kidneyDiseaseReadings.length > 0) {
      return (
        <div className='global-result'>
          <span className='global-result-title'>Result of latest reading: </span>
          <span className='global-result-date'>({kidneyDiseaseReadings[0].atDate})</span>
          <p className='global-result-value'>{result}</p>
        </div>
      );
    }
    return '';
  };

  // Set data on initialization
  useEffect(() => {
    setLastReading(kidneyDiseaseCalculator(kidneyDiseaseLongData));
    setBlodkidneyDiseaseReadings(sortByDate(kidneyDiseaseLongData));
    setDropsKidney(calculateDropsKidney(kidneyDiseaseLongData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='kidney'>
      <Navigation />
      <h2 className='kidney-title' data-testid='kidney-title'>
        Kidney Disease Calculator
      </h2>
      <div className='kidney-table-colors'>
        <span className='kidney-latest-color'>Latest result</span>
        <span className='kidney-drop-color'>20% or more eGFR drop</span>
      </div>
      <div className='kidney-table-container'>
        <TableContainer>
          <Table stickyHeader aria-label='sticky table' className='kidney-table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Estimated glomerular filtration rate</TableCell>
                <TableCell align='center'>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kidneyDiseaseReadings.map((singleReading: GlomerularFiltrationRate) => (
                <TableRow
                  key={singleReading.atDate}
                  className={
                    isInDropArray(singleReading) ? 'kidney-drop-row' : 'kidney-row'
                  }
                >
                  <TableCell align='center'>{singleReading.eGFR}</TableCell>
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

export default KidneyDisease;
