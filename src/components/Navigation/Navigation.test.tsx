import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Navigation from './Navigation.component';
import HypertensionCalculatorPage from '../../pages/HypertensionCalculator/HypertensionCalculator.page';
import KidneyDisease from '../../pages/KidneyDisease/KidneyDisease.page';

describe('Navigation component testing', () => {
  test('Navigation should render a title with Health Care Assistant text', async () => {
    render(<Navigation />);
    const navigationTitle = await screen.getByTestId('navigation-title');
    expect(navigationTitle.innerHTML).toEqual('Health Care Assistant');
  });

  test('Navigation should render two navigation items', async () => {
    render(<Navigation />);
    const navigationItems = await screen.getAllByTestId('navigation-item');
    expect(navigationItems.length).toEqual(2);
  });

  test('Navigation should change the route when navigation items are clicked', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/hypertension-calculator' }]}>
        <Route path='/hypertension-calculator'>
          <HypertensionCalculatorPage />
        </Route>
        <Route path='/kidney-disease'>
          <KidneyDisease />
        </Route>
      </MemoryRouter>,
    );
    // Change the view to hypertension calculator
    const navigationItemsHypertension = await screen.getAllByTestId('navigation-item');
    fireEvent.click(navigationItemsHypertension[1]);
    const kidneyTitle = await screen.getByTestId('kidney-title');
    expect(kidneyTitle).toBeInTheDocument();

    // Change the view to kidney disease calculator
    const navigationItemsKidney = await screen.getAllByTestId('navigation-item');
    fireEvent.click(navigationItemsKidney[0]);
    const hypertensionTitle = await screen.getByTestId('hypertension-title');
    expect(hypertensionTitle).toBeInTheDocument();
  });
});
