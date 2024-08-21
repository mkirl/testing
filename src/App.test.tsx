import { render } from '@testing-library/react';
import App from '../src/App';

import { describe, expect, it } from 'bun:test';

describe('App', () => {
  it('renders text', () => {
    const { getByText } = render(<App />);
    const app = getByText('Welcome to Our Bank');
    expect(app).toBeInTheDocument();
  });
})

describe('Newsletter Form', () => {
  it('renders a form', () => {
    const { getByRole } = render(<App />);
    const form = getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('renders a newsletter signup input', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('Enter your email address');
    expect(input).toBeInTheDocument();
  });

  it('renders a newsletter signup submit button', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button', { name: 'Subscribe' });
    expect(button).toBeInTheDocument();
  });
})
