import { strings } from 'constants/strings';
import { useProducts } from 'hooks';
import ProductListTableRow from './ProductListTableRow';

export const ProductListTable = () => {
    const { state } = useProducts();

    return (
        <div className="max-h-[70vh] overflow-scroll">
            <table>
                <thead>
                    <tr>
                        <th>{strings.serial}</th>
                        <th>{strings.name}</th>
                        <th>{strings.code}</th>
                        <th>{strings.available}?</th>
                        <th>{strings.need_to_repair}?</th>
                        <th>{strings.durability}</th>
                        <th>{strings.mileage}</th>
                    </tr>
                </thead>
                <tbody>
                    {state.products.map((product, idx) => (
                        <ProductListTableRow
                            key={product.code}
                            product={product}
                            serial={idx + 1}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductListTable;
