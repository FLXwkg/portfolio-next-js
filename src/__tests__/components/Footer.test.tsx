/**
 * Footer Test Suite
 */

import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    const footers = screen.getAllByText(/ewen héas/i);
    expect(footers.length).toBeGreaterThan(0);
  });

  it('should display brand name', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    const names = screen.getAllByText(/ewen héas/i);
    expect(names.length).toBeGreaterThan(0);
  });

  it('should display brand abbreviation EH', () => {
    render(<Footer />);
    expect(screen.getByText('EH')).toBeInTheDocument();
  });

  it('should display navigation links', () => {
    render(<Footer />);
    expect(screen.getByText(/accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/à propos/i)).toBeInTheDocument();
    expect(screen.getByText(/compétences/i)).toBeInTheDocument();
    expect(screen.getByText(/projets/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('should display resources section', () => {
    render(<Footer />);
    expect(screen.getByText(/ressources/i)).toBeInTheDocument();
  });

  it('should display copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('should display legal links', () => {
    render(<Footer />);
    expect(screen.getByText(/mentions légales/i)).toBeInTheDocument();
    expect(screen.getByText(/politique de confidentialité/i)).toBeInTheDocument();
  });

  it('should have proper link structure', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should display developer description', () => {
    render(<Footer />);
    expect(screen.getByText(/développeur fullstack passionné/i)).toBeInTheDocument();
  });
});
