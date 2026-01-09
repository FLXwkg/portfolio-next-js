/**
 * ContactSection Test Suite
 */

import { render, screen } from '@testing-library/react';
import ContactSection from '@/components/ContactSection';

describe('ContactSection', () => {
  it('should render without crashing', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should have proper id for navigation', () => {
    render(<ContactSection />);
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveAttribute('id', 'contact');
  });

  it('should display the contact heading', () => {
    render(<ContactSection />);
    // Text is split across spans - use getAllByText to get first match
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/travaillons\s+ensemble/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should display contact description', () => {
    render(<ContactSection />);
    expect(screen.getByText(/vous avez une question/i)).toBeInTheDocument();
  });

  it('should display contact information', () => {
    render(<ContactSection />);
    expect(screen.getByText(/localisation/i)).toBeInTheDocument();
    expect(screen.getByText(/france/i)).toBeInTheDocument();
    expect(screen.getByText(/réactivité/i)).toBeInTheDocument();
    expect(screen.getByText(/< 24h/i)).toBeInTheDocument();
  });

  it('should display social media links', () => {
    render(<ContactSection />);
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
  });

  it('should render contact form', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});
