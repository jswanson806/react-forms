import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NewTodoForm', () => {
  render(<App />);
  const formElement = screen.getByText("Task:");
  expect(formElement).toBeInTheDocument();
});
