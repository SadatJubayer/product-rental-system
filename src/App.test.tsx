import { render, screen } from '@testing-library/react';
import { ContextProvider } from 'contexts';
import App from './App';

describe('<App/>', () => {
    it('renders the app with empty products', () => {
        render(
            <ContextProvider>
                <App />
            </ContextProvider>
        );
        const textElement = screen.getByText(/You don't have any products/i);
        expect(textElement).toBeInTheDocument();
    });
});
