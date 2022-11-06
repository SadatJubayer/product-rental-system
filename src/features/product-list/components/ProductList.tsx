import { useProducts } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader';
import ProductListTable from './ProductListTable';

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

    return (
        <>
            <ProductListHeader searchValue={searchValue} onSearch={onSearchProducts} />
            <ProductListTable products={filteredProducts} />
        </>
    );
};

export default ProductList;
