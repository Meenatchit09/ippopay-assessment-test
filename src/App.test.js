import { render, screen } from '@testing-library/react';
import App from './App';

test('renders password check', () => {
  render(<App />);
  const textElement = screen.getByText(/Password check/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Passwrod should have at least 6 characters and at most 20 characters. message', () => {
  render(<App />);
  const textElement = screen.getByText(/Passwrod should have at least 6 characters and at most 20 characters./i);
  expect(textElement).toBeInTheDocument();
});

test('renders Password should have at least one lower case message', () => {
  render(<App />);
  const textElement = screen.getByText(/Password should have at least one lower case/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Password should have at least one upper case message', () => {
  render(<App />);
  const textElement = screen.getByText(/Password should have at least one upper case/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Password should not contain three repeating characters message', () => {
  render(<App />);
  const textElement = screen.getByText(/Password should not contain three repeating characters/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Input', () => {
  render(<App />);
  const textElement = screen.getByTestId(/password/i);
  expect(textElement).toBeInTheDocument();
});
