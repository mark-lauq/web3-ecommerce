import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MARK_LINK, GITHUB_LINK } from '../links';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);

    expect(screen.getByText(/Built with love by/i)).toBeInTheDocument();

    const markLink = screen.getByTitle('Mark');
    expect(markLink).toBeInTheDocument();
    expect(markLink).toHaveAttribute('href', MARK_LINK);
  });

  it('renders all doc links correctly', () => {
    render(<Footer />);

    const links = [{ href: GITHUB_LINK, title: 'Github' }];

    for (const { href, title } of links) {
      const link = screen.getByTitle(title);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });
});
