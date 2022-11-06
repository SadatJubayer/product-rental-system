import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('<Modal/>', () => {
    it('Children should not visible when the modal is closed', async () => {
        const { container } = render(
            <Modal heading="Test" isOpen={false} onClose={() => null}>
                <p>Modal Children</p>
            </Modal>
        );
        const item = container.getElementsByClassName('hidden');
        expect(item.length).toBe(1);
    });

    it('Children should be visible when the modal is open', async () => {
        render(
            <Modal heading="Test" isOpen={true} onClose={() => null}>
                <p>Modal Children</p>
            </Modal>
        );
        const item = screen.getByText(/modal children/i);
        expect(item).toBeVisible();
    });
});
