import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('<Input/>', () => {
    it('Should render Input with a name', () => {
        render(<Input name="test" placeholder="input test" />);
        const tets = screen.getByPlaceholderText(/input test/i);
        expect(tets).toBeVisible();
    });

    it('Should render Input with value', () => {
        const mockHandleChange = jest.fn();
        render(
            <Input
                data-testid="test"
                placeholder="input test"
                name="test"
                value="helloWorld"
                onChange={mockHandleChange}
            />
        );
        const inputNode = screen.queryByPlaceholderText('input test');
        expect(inputNode).toHaveDisplayValue('helloWorld');
    });
});
