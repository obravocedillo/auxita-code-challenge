import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App component testing', () => {
  test('App component should render hypertension page initially', async () => {
    render(<App />);
    const hypertensionTitle = await screen.getByTestId('hypertension-title');
    expect(hypertensionTitle).toBeInTheDocument();
  });
});
