import { useProducts } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader';
import ProductListTable from './ProductListTable';
import _ from 'lodash';
import { IProduct } from 'types/IProduct';

const ProductList = () => {
    const { state } = useProducts();
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(state.products);

    const onSearchProducts = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        if (searchValue === '') {
            setFilteredProducts(state.products);
        } else {
            const filteredItems = state.products.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    product.code.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProducts(filteredItems);
        }
    }, [searchValue, state.products]);

    const sortProducts = (sortType: keyof IProduct) => {
        const sortedProducts = _.sortBy(state.products, (product) => product[sortType]);
        setFilteredProducts(sortedProducts);
    };

    return (
        <>
            <ProductListHeader searchValue={searchValue} onSearch={onSearchProducts} />
            <ProductListTable onSort={sortProducts} products={filteredProducts} />
        </>
    );
};

export default ProductList;
