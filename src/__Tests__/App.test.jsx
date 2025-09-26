import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a component', () => {
  render(<App />);
  const linkElement = screen.getByText(/vite \+ react/i); // Assuming "Hello World" text is present
  expect(linkElement).toBeInTheDocument();
});