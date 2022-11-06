import { Input } from 'components';
import { strings } from 'constants/strings';
import React from 'react';

interface IProductsHeaderProps {
    searchValue: string;
    onSearch: (value: string) => void;
}

const ProductListHeader = ({ searchValue, onSearch }: IProductsHeaderProps) => {
    return (
        <div className="flex justify-between items-center pb-2.5 space-x-5 border-b">
            <h1 className="text-xl font-semibold text-text flex-1">All Products</h1>
            <Input
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
                type="search"
                name="search"
                placeholder={strings.search_product}
            />
        </div>
    );
};

export default ProductListHeader;
