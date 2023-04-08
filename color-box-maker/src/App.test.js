import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NewBoxForm', () => {
  render(<App />);
  const formElement = screen.getByText('Color:');
  expect(formElement).toBeInTheDocument();
});
