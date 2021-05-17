import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import KidneyDisease from '../../pages/KidneyDisease/KidneyDisease.page';
import HypertensionCalculator from '../../pages/HypertensionCalculator/HypertensionCalculator.page';
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/hypertension-calculator'>
          <HypertensionCalculator />
        </Route>
        <Route exact path='/kidney-disease'>
          <KidneyDisease />
        </Route>
        <Route exact path='*'>
          <Redirect to='/hypertension-calculator' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
