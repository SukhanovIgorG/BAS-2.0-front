import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { Component as SpacePage } from './space.page';

describe('SpacePage', () => {
  const spaceId = 'mock space id';
  it('renders correctly with spaceId', () => {
    render(
      <MemoryRouter initialEntries={[`/space/${spaceId}`]}>
        <Routes>
          <Route path="/space/:spaceId" element={<SpacePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Пространство/i)).toBeInTheDocument();
    expect(screen.getByText(/Все пространства/i)).toBeInTheDocument();
  });
});
