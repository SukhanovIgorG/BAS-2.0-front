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

        expect(screen.getByText(/пространство/i)).toBeInTheDocument();
        expect(screen.getByText(/все пространства/i)).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });
});
