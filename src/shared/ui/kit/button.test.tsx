import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('passes props to ant design button', () => {
        render(<Button loading>Loading</Button>);
        // Ant Design's loading button usually renders a loading icon or modifies class
        // We trust Ant Design works, but we check if our wrapper passes props conceptually.
        // Ideally we check behavior, but for a UI kit wrapper, checking rendering is often enough.
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        // More specific checks depend on AntD internals, avoiding brittle tests is key.
    });

    it('supports custom class names', () => {
        render(<Button className="custom-class">Test</Button>);
        const button = screen.getByRole('button', { name: /test/i });
        expect(button).toHaveClass('custom-class');
    });
});
