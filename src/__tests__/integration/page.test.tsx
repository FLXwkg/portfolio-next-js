/**
 * Page Integration Test Suite
 * Tests that the entire page renders correctly with all sections
 */

import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page - Integration Tests', () => {
  it('should render the home page without crashing', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render Hero section', () => {
    render(<Home />);
    const names = screen.getAllByText(/ewen héas/i);
    expect(names.length).toBeGreaterThan(0);
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/développeur\s+fullstack/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should render About section', () => {
    render(<Home />);
    const aboutSection = screen.getByText(/à propos de/i).closest('section');
    expect(aboutSection).toHaveAttribute('id', 'about');
  });

  it('should render Skills section', () => {
    render(<Home />);
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/mes\s+compétences/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should render Projects section', () => {
    render(<Home />);
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/mes\s+projets/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should render Contact section', () => {
    render(<Home />);
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/travaillons\s+ensemble/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should render Footer', () => {
    render(<Home />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should have navigation anchors', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /voir mes projets/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /me contacter/i })).toHaveAttribute('href', '#contact');
  });

  it('should have proper section hierarchy', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    // Main heading should be h1
    expect(headings[0].tagName).toBe('H1');
  });

  it('should display all major sections content', () => {
    render(<Home />);
    // Hero - use getAllByText since it appears multiple times
    const experiences = screen.getAllByText(/5 ans d'expérience/i);
    expect(experiences.length).toBeGreaterThan(0);
    // About
    const masters = screen.getAllByText(/master 2/i);
    expect(masters.length).toBeGreaterThan(0);
    // Skills
    expect(screen.getAllByText(/react/i)[0]).toBeInTheDocument();
    // Projects
    expect(screen.getByText('PlateformeX')).toBeInTheDocument();
    // Contact
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
  });

  it('should have semantic structure', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    
    const sections = screen.getAllByRole('heading', { level: 2 });
    expect(sections.length).toBeGreaterThan(0);
  });
});
