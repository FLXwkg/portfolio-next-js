/**
 * ProjectsSection Test Suite
 */

import { render, screen } from '@testing-library/react';
import ProjectsSection from '@/components/ProjectsSection';

describe('ProjectsSection', () => {
  it('should render without crashing', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should have proper id for navigation', () => {
    render(<ProjectsSection />);
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveAttribute('id', 'projects');
  });

  it('should display the projects heading', () => {
    render(<ProjectsSection />);
    // Text is split across spans - use getAllByText to get first match
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/mes\s+projets/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should display all 4 project titles', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('PlateformeX')).toBeInTheDocument();
    expect(screen.getByText('Dashboard Analytics')).toBeInTheDocument();
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('App Mobile Native')).toBeInTheDocument();
  });

  it('should display project emojis', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
    expect(screen.getByText('📊')).toBeInTheDocument();
    expect(screen.getByText('🛍️')).toBeInTheDocument();
    expect(screen.getByText('📱')).toBeInTheDocument();
  });

  it('should display project descriptions', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/plateforme saas/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard interactif/i)).toBeInTheDocument();
  });

  it('should display CTA button', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('link', { name: /démarrer un projet/i })).toBeInTheDocument();
  });

  it('should have correct href for CTA button', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('link', { name: /démarrer un projet/i })).toHaveAttribute('href', '#contact');
  });
});
