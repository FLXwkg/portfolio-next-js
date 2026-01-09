/**
 * ProjectCard Test Suite
 */

import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/ProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'This is a test project',
  tags: ['React', 'Node.js'],
  emoji: '🚀',
  link: '#',
};

describe('ProjectCard', () => {
  it('should render without crashing', () => {
    render(
      <ProjectCard
        title={mockProject.title}
        description={mockProject.description}
        tags={mockProject.tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
  });

  it('should be a link element', () => {
    render(
      <ProjectCard
        title={mockProject.title}
        description={mockProject.description}
        tags={mockProject.tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProject.link);
  });

  it('should display project title', () => {
    render(
      <ProjectCard
        title="My Awesome Project"
        description={mockProject.description}
        tags={mockProject.tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    expect(screen.getByText('My Awesome Project')).toBeInTheDocument();
  });

  it('should display project description', () => {
    render(
      <ProjectCard
        title={mockProject.title}
        description="Unique description text"
        tags={mockProject.tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    expect(screen.getByText('Unique description text')).toBeInTheDocument();
  });

  it('should display emoji', () => {
    render(
      <ProjectCard
        title={mockProject.title}
        description={mockProject.description}
        tags={mockProject.tags}
        emoji="🎨"
        link={mockProject.link}
      />
    );
    expect(screen.getByText('🎨')).toBeInTheDocument();
  });

  it('should render all tags', () => {
    const tags = ['React', 'TypeScript', 'Docker'];
    render(
      <ProjectCard
        title={mockProject.title}
        description={mockProject.description}
        tags={tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('should display "En savoir plus" link', () => {
    render(
      <ProjectCard
        title={mockProject.title}
        description={mockProject.description}
        tags={mockProject.tags}
        emoji={mockProject.emoji}
        link={mockProject.link}
      />
    );
    expect(screen.getByText(/en savoir plus/i)).toBeInTheDocument();
  });
});
