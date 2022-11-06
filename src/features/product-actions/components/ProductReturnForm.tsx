import { Alert, Input } from 'components';
import { Button } from 'components/button/Button';
import { DISCOUNT } from 'constants/common';
import { strings } from 'constants/strings';
import { useProducts } from 'hooks';
import { useEffect, useState } from 'react';
import { daysBetween } from 'utils/helpers';

interface IReturnProps {
    onCancel: () => void;
    onProceed: (productId: string, needRepair: boolean, daysUsed: number, mileage: number) => void;
}

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const ProductReturnForm = ({ onCancel, onProceed }: IReturnProps) => {
    const {
        state: { products },
    } = useProducts();

    const [price, setPrice] = useState<number | null>();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [fromDate, setFromDate] = useState<Date | null>(today);
    const [toDate, setToDate] = useState<Date | null>(tomorrow);
    const [mileage, setMileage] = useState<string>('');
    const [daysUsed, setDaysUsed] = useState<number>(0);
    const [needRepair, setNeedRepair] = useState(false);

    const handleReturn = () => {
        setSelectedProduct('');
        setPrice(null);
        onProceed(selectedProduct, needRepair, daysUsed, parseInt(mileage));
    };

    useEffect(() => {
        if (selectedProduct && fromDate && toDate && mileage) {
            setErrorMessage('');
            setDiscountApplied(false);

            const theProduct = products.find((product) => product.code === selectedProduct);

            if (theProduct) {
                const totalDays = daysBetween(fromDate, toDate) + 1; // including the from date
                setDaysUsed(totalDays);
                if (totalDays < theProduct.minimum_rent_period) {
                    // Can't select less then minimum period
                    setPrice(null);
                    return setErrorMessage(
                        `${strings.this_product_required} ${theProduct.minimum_rent_period} ${strings.days_to_rent}`
                    );
                }
                if (totalDays === theProduct.minimum_rent_period) {
                    // regular price
                    setPrice(theProduct.price * totalDays);
                }
                if (totalDays > theProduct.minimum_rent_period) {
                    // discounted price
                    const discountedPrice = theProduct.price - theProduct.price * 0.1;
                    setPrice(discountedPrice);
                    setDiscountApplied(true);
                }
            }
        }
    }, [fromDate, products, selectedProduct, toDate, mileage]);

    return (
        <div className="flex flex-col mx-auto">
            <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                <option value="" disabled>
                    {strings.select_a_product}
                </option>
                {products.map((product) => (
                    <option
                        value={product.code}
                        key={product.code}
                        disabled={product.availability || product.durability <= 0}
                    >
                        {product.name}
                    </option>
                ))}
            </select>
            <form className="mb-5 flex flex-col space-y-2.5">
                <div className="flex justify-between space-x-1 items-center">
                    <span>{strings.from}:</span>
                    <Input
                        name="from"
                        value={fromDate?.toLocaleDateString('en-CA')}
                        onChange={(e) => setFromDate(e.target.valueAsDate)}
                        type="date"
                    />
                    <span>{strings.to}:</span>
                    <Input
                        name="to"
                        value={toDate?.toLocaleDateString('en-CA')}
                        onChange={(e) => setToDate(e.target.valueAsDate)}
                        type="date"
                    />
                </div>
                <Input
                    name="mileage"
                    type="number"
                    placeholder={strings.mileage}
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                />
                <div className="flex justify-start items-center space-x-2.5">
                    <Input
                        defaultChecked={needRepair}
                        onChange={() => setNeedRepair(!needRepair)}
                        type="checkbox"
                        fullWidth={false}
                        id="needRepair"
                        name="need-to-repair"
                    />
                    <label htmlFor="needRepair">
                        <span>Need Repairing</span>
                    </label>
                </div>
            </form>
            {errorMessage && <Alert type="error" message={errorMessage} />}
            {price && (
                <>
                    {discountApplied && (
                        <p className="bg-primary text-white px-2.5 py-1 rounded self-center">
                            {DISCOUNT * 100}% {strings.discount_applied}
                        </p>
                    )}
                    <div className="my-5 text-text p-5 text-center border border-primary border-dashed rounded">
                        <p>
                            {strings.total_price} <b>{price}</b>
                        </p>
                    </div>
                    <div className="text-right py-2.5">
                        <p>{strings.proceed}</p>
                        <div className="flex items-center justify-end space-x-2.5 mt-2.5">
                            <Button variant="secondary" onClick={onCancel} label={strings.no} />
                            <Button onClick={handleReturn} label={strings.yes} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductReturnForm;
