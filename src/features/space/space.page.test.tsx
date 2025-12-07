import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Component as SpacePage } from './space.page';

describe('SpacePage', () => {
    it('renders correctly with spaceId', () => {
        render(
            <MemoryRouter initialEntries={['/space/123']}>
                <Routes>
                    <Route path="/space/:spaceId" element={<SpacePage />} />
                </Routes>
            </MemoryRouter>
        );

        // Check for "Пространство" title provided by Page wrapper
        // Since Page wrapper probably renders children and title, let's assume "Пространство" is visible
        expect(screen.getByText(/пространство/i)).toBeInTheDocument();

        // Check for "Все пространства" link
        expect(screen.getByText(/все пространства/i)).toBeInTheDocument();

        // Check for grid items (just check for some number)
        expect(screen.getByText('1')).toBeInTheDocument();
    });
});
