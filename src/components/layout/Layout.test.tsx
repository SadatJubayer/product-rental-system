import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('<Layout/>', () => {
    it('Should render Layout with children', () => {
        render(
            <Layout>
                <h1>Hello</h1>
            </Layout>
        );
        const result = screen.getByText(/Hello/i);
        expect(result).toBeInTheDocument();
    });
});
