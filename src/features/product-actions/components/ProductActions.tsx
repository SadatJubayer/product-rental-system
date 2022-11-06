import { Button, Modal } from 'components';
import { strings } from 'constants/strings';
import { useProducts } from 'hooks';
import { useState } from 'react';
import ProductBookForm from './ProductBookForm';
import ProductReturnForm from './ProductReturnForm';

const ProductActions = () => {
    const { dispatch } = useProducts();

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);

    const onCancelBooking = () => {
        setIsBookModalOpen(false);
    };

    const onCrateABooking = (productId: string) => {
        dispatch({ type: 'bookProduct', payload: productId });
        setIsBookModalOpen(false);
    };

    const onCancelCancelling = () => {
        setIsReturnModalOpen(false);
    };

    const onProceedToCancel = (
        productCode: string,
        needRepair: boolean,
        daysUsed: number,
        mileage: number
    ) => {
        dispatch({
            type: 'returnProduct',
            payload: { productCode, needRepair, daysUsed, mileage },
        });
        setIsReturnModalOpen(false);
    };

    return (
        <div className="py-8 flex items-center justify-end space-x-5">
            {/* Book button and modal */}
            <Button label={strings.book} onClick={() => setIsBookModalOpen(true)} />
            <Modal
                isOpen={isBookModalOpen}
                onClose={() => setIsBookModalOpen(false)}
                heading={strings.book_a_product}
            >
                <ProductBookForm onBook={onCrateABooking} onCancel={onCancelBooking} />
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
                <ProductReturnForm onCancel={onCancelCancelling} onProceed={onProceedToCancel} />
            </Modal>
        </div>
    );
};

export default ProductActions;
