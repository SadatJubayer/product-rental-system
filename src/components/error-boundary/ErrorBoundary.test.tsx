import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const renderProviders = (ui: React.ReactElement) => render(ui, {});

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('<ErrorBoundary/>', () => {
    it('Should render ErroredContentPresentation Fallback if error', () => {
        const Child = () => {
            useEffect(() => {
                throw new Error('Errored!');
            }, []);
            return null;
        };
        const { getByText } = renderProviders(
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        );
        const errorMessage = getByText(/there was an error/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
