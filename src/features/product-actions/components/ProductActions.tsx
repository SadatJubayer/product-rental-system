import { Button, Modal } from 'components';
import { strings } from 'constants/strings';
import { useState } from 'react';
import ProductBookForm from './ProductBookForm';
import ProductReturnForm from './ProductReturnForm';

const ProductActions = () => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);

    return (
        <div className="py-8 flex items-center justify-end space-x-5">
            {/* Book button and modal */}
            <Button label={strings.book} onClick={() => setIsBookModalOpen(true)} />
            <Modal
                isOpen={isBookModalOpen}
                onClose={() => setIsBookModalOpen(false)}
                heading={strings.book_a_product}
            >
                <ProductBookForm />
            </Modal>

            {/* Return button and modal */}
            <Button
                label={strings.return}
                variant="secondary"
                onClick={() => setIsReturnModalOpen(true)}
            />
            <Modal
                isOpen={isReturnModalOpen}
                onClose={() => setIsReturnModalOpen(false)}
                heading={strings.return_a_product}
            >
                <ProductReturnForm />
            </Modal>
        </div>
    );
};

export default ProductActions;
