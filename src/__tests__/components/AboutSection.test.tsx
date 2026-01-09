/**
 * AboutSection Test Suite
 */

import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection';

describe('AboutSection', () => {
  it('should render without crashing', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should have proper id for navigation', () => {
    render(<AboutSection />);
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveAttribute('id', 'about');
  });

  it('should display the about heading', () => {
    render(<AboutSection />);
    expect(screen.getByText(/à propos de/i)).toBeInTheDocument();
  });

  it('should display experience information', () => {
    render(<AboutSection />);
    const experiences = screen.getAllByText(/5 ans d'expérience/i);
    expect(experiences.length).toBeGreaterThan(0);
    const masters = screen.getAllByText(/master 2/i);
    expect(masters.length).toBeGreaterThan(0);
  });

  it('should display education card', () => {
    render(<AboutSection />);
    expect(screen.getByText(/formation/i)).toBeInTheDocument();
    expect(screen.getByText(/informatique/i)).toBeInTheDocument();
  });

  it('should display experience card', () => {
    render(<AboutSection />);
    expect(screen.getByText(/développeur fullstack/i)).toBeInTheDocument();
  });

  it('should display approach card', () => {
    render(<AboutSection />);
    // Query for the heading text instead of just emoji
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Mon approche') === true;
    })[0]).toBeInTheDocument();
    const approachCards = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Mon approche') === true;
    });
    expect(approachCards.length).toBeGreaterThan(0);
  });

  it('should display statistics', () => {
    render(<AboutSection />);
    expect(screen.getByText(/5\+/)).toBeInTheDocument();
    expect(screen.getByText(/30\+/)).toBeInTheDocument();
  });
});
