import React from 'react';
import { ProductsContextProvider } from './ProductsContext';

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <ProductsContextProvider>{children}</ProductsContextProvider>;
};
