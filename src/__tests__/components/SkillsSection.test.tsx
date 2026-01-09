/**
 * SkillsSection Test Suite
 */

import { render, screen } from '@testing-library/react';
import SkillsSection from '@/components/SkillsSection';

describe('SkillsSection', () => {
  it('should render without crashing', () => {
    render(<SkillsSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should have proper id for navigation', () => {
    render(<SkillsSection />);
    const section = screen.getByRole('heading', { level: 2 }).closest('section');
    expect(section).toHaveAttribute('id', 'skills');
  });

  it('should display the skills heading', () => {
    render(<SkillsSection />);
    // Text is split across spans - use getAllByText to get first match
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.match(/mes\s+compétences/i) !== null;
    })[0]).toBeInTheDocument();
  });

  it('should render all three skill categories', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/backend/i)).toBeInTheDocument();
    expect(screen.getByText(/outils & devops/i)).toBeInTheDocument();
  });

  it('should display category icons', () => {
    render(<SkillsSection />);
    expect(screen.getByText('🎨')).toBeInTheDocument();
    expect(screen.getByText('⚙️')).toBeInTheDocument();
    expect(screen.getByText('🛠️')).toBeInTheDocument();
  });

  it('should list frontend technologies', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(screen.getByText(/next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
  });

  it('should list backend technologies', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/express/i)).toBeInTheDocument();
    expect(screen.getByText(/python/i)).toBeInTheDocument();
  });

  it('should list devops tools', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/docker/i)).toBeInTheDocument();
    expect(screen.getByText(/aws/i)).toBeInTheDocument();
    expect(screen.getByText(/git/i)).toBeInTheDocument();
  });

  it('should display additional skills section', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/autres compétences/i)).toBeInTheDocument();
  });
});
