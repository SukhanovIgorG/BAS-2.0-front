import { vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import { renderWithRouter } from '@/shared/helpers';

import { Component as SpacesPage } from './spaces.page';

vi.mock('@/shared/components', () => ({
  Page: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),
  CreateSpaceModal: () => <div>CreateSpaceModal</div>,
}));

vi.mock('@/shared/ui', () => ({
  Trigger: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('SpacesPage', () => {
  it('renders correctly with spaces list', () => {
    render(renderWithRouter(<SpacesPage />));

    expect(screen.getByText('Список пространств')).toBeInTheDocument();
    expect(screen.getByText('Создать пространство')).toBeInTheDocument();

    // Check for table content (First space)
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('planet Saturn')).toBeInTheDocument();
    expect(screen.getByText('Перейти')).toBeInTheDocument();
  });
});
