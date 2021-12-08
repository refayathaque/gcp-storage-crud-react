import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text LLC', () => {
  render(<App />);
  const textElement = screen.getByText('LLC');
  expect(textElement).toBeInTheDocument();
});

test('renders text hello again twice', () => {
  render(<App />);
  const textElements = screen.getAllByText('hello again');
  expect(textElements[0]).toBeInTheDocument();
  expect(textElements[1]).toBeInTheDocument();
});