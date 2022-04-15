import { render, screen } from '@testing-library/react';
import App from './index.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
