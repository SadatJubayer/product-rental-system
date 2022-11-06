import { dummyProducts } from 'data/dummyProducts';
import React, { createContext } from 'react';
import { IProduct } from 'types/IProduct';

/* Types */
type State = {
    loading: boolean;
    products: IProduct[];
};
type Action = { type: 'init' };

type Dispatch = (action: Action) => void;
type ProductsProviderProps = { children: React.ReactNode };

/* The context */
export const ProductsContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
    undefined
);

const defaultState = {
    loading: false,
    products: dummyProducts,
};

/* Reducer */
function productsReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'init': {
            return { ...state };
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

/* Context Provider */
export const ProductsContextProvider = ({ children }: ProductsProviderProps) => {
    const [state, dispatch] = React.useReducer(productsReducer, defaultState);
    const value = { state, dispatch };
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
