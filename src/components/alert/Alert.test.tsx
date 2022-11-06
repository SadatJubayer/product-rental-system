import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('<Alert/>', () => {
    it('Should render alert with a message and type', () => {
        render(<Alert type="error" message="Test Label" />);
        const alert = screen.getByText(/Test Label/i);
        expect(alert).toBeVisible();
    });

    it('Should have a red color on error type alert', () => {
        render(<Alert message="Test Label" type="error" />);
        const alert = screen.getByText(/Test Label/i);
        expect(alert).toHaveClass('text-red-800');
    });
});
