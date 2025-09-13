import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '../../src/app/page';

describe('Page', () => {
  const Component = () => render(<Home />);
  it('renders a heading', () => {
    Component();

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it('has a link to the Next.js documentation', async () => {
    Component();
    expect(await screen.findByText(/learn/i)).toHaveAttribute(
      'href',
      'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    );
  });
});
