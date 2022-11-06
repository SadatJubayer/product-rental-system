import { strings } from 'constants/strings';
import { IProduct } from 'types/IProduct';
import ProductListTableRow from './ProductListTableRow';

interface IProductTableProps {
    products: IProduct[];
}

export const ProductListTable = ({ products }: IProductTableProps) => {
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
                    {products.map((product, idx) => (
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
