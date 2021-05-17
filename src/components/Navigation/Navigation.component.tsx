import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navigation.css';
import { useHistory } from 'react-router-dom';

function Navigation(): JSX.Element {
  const history = useHistory();

  const redirectHypertensionCalculator = () => {
    history.push('/hypertension-calculator');
  };

  const redirectKidneyDisease = () => {
    history.push('/kidney-disease');
  };
  return (
    <div className='Navigation'>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            className='navigation-title'
            data-testid='navigation-title'
          >
            Health Care Assistant
          </Typography>
          <button
            data-testid='navigation-item'
            type='button'
            className='navigation-item'
            onClick={() => redirectHypertensionCalculator()}
          >
            Hypertension calculator
          </button>
          <button
            data-testid='navigation-item'
            type='button'
            className='navigation-item'
            onClick={() => redirectKidneyDisease()}
          >
            Kidney disease calculator
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
