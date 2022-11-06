import { ProductsContext } from 'contexts/ProductsContext';
import React from 'react';

export const useProducts = () => {
    const product = React.useContext(ProductsContext);
    if (typeof product === 'undefined') {
        throw new Error('useProductState must be used within a ProductsContext');
    }
    return product;
};
