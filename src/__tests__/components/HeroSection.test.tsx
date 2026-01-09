/**
 * HeroSection Test Suite
 */

import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/HeroSection';

describe('HeroSection', () => {
  it('should render without crashing', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should display the developer name', () => {
    render(<HeroSection />);
    expect(screen.getByText(/ewen héas/i)).toBeInTheDocument();
  });

  it('should display fullstack developer description', () => {
    render(<HeroSection />);
    // Text is split across spans, use a more flexible matcher
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/développeur\s+fullstack/i) !== null;
    })[0]).toBeInTheDocument();
    const experiences = screen.getAllByText(/5 ans d'expérience/i);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('should display Master 2 badge', () => {
    render(<HeroSection />);
    expect(screen.getByText(/en master 2/i)).toBeInTheDocument();
  });

  it('should render both CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /voir mes projets/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /me contacter/i })).toBeInTheDocument();
  });

  it('should have correct href for CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /voir mes projets/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /me contacter/i })).toHaveAttribute('href', '#contact');
  });
});
