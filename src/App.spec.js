import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('renders successfully', () => {
    render(<App />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('shows error for wrong image type', async () => {
    const name = 'testFile.jpeg';
    const file = new File(['test'], name, { type: 'image/jpeg' });
    render(<App />);

    userEvent.upload(screen.getByTestId('upload'), file);
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    expect(screen.queryByTestId(name)).not.toBeInTheDocument();
  });

  it('uploads png successfully', async () => {
    const name = 'testFile.png';
    const file = new File(['test'], name, { type: 'image/png' });
    render(<App />);

    userEvent.upload(screen.getByTestId('upload'), file);
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.queryByTestId('error-text')).not.toBeInTheDocument();
    expect(await screen.findByTestId(name)).toBeInTheDocument();
  });
});
