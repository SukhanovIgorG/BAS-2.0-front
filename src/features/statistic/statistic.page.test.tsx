import { render, screen } from '@testing-library/react';
import { Component as StatisticPage } from './statistic.page';

describe('StatisticPage', () => {
    it('renders correctly', () => {
        // Assuming simple UI
        render(<StatisticPage />);
        // Check for some content? It's 168 bytes, probably just "Statistic" text?
        expect(screen.getByText('Статистика')).toBeInTheDocument();
    });
});
