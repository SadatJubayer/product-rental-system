import classNames from 'classnames';
import { strings } from 'constants/strings';
import { IProduct } from 'types/IProduct';
import ProductListTableRow from './ProductListTableRow';

interface IProductTableProps {
    products: IProduct[];
    onSort: (sortType: keyof IProduct) => void;
}
interface IProductHeader {
    key: string;
    title: string;
    sortKey?: keyof IProduct;
}

const productHeaders: IProductHeader[] = [
    { key: '1', title: strings.serial },
    { key: '2', title: strings.name, sortKey: 'name' },
    { key: '3', title: strings.code, sortKey: 'availability' },
    { key: '4', title: strings.available, sortKey: 'availability' },
    { key: '4', title: strings.need_to_repair, sortKey: 'needing_repair' },
    { key: '5', title: strings.durability },
    { key: '6', title: strings.mileage },
];

export const ProductListTable = ({ products, onSort }: IProductTableProps) => {
    const handleSort = (type: keyof IProduct) => {
        console.log(type);
        onSort(type);
    };

    return (
        <div className="max-h-[70vh] overflow-scroll">
            <table>
                <thead>
                    <tr>
                        {productHeaders.map(({ sortKey, title }, idx) => (
                            <th
                                className={classNames({
                                    'cursor-pointer text-blue-500': !!sortKey,
                                })}
                                onClick={sortKey ? () => handleSort(sortKey) : undefined}
                                key={idx}
                            >
                                {title}
                            </th>
                        ))}
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
