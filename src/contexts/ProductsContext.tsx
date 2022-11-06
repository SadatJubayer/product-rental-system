import { dummyProducts } from 'data/dummyProducts';
import React, { createContext } from 'react';
import { IProduct } from 'types/IProduct';

/* Types */
type State = {
    loading: boolean;
    products: IProduct[];
};
type Action =
    | { type: 'init' }
    | { type: 'bookProduct'; payload: string }
    | {
          type: 'returnProduct';
          payload: { productCode: string; needRepair: boolean; daysUsed: number; mileage: number };
      };

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
        case 'bookProduct': {
            const theProduct = state.products.find((product) => product.code === action.payload);
            if (theProduct) {
                // make the product unavailable
                const updatedProducts: IProduct[] = state.products.map((product) => {
                    if (product.code !== action.payload) return product;
                    return { ...product, availability: false };
                });
                return { ...state, products: updatedProducts };
            }
            return { ...state };
        }
        case 'returnProduct': {
            const { productCode, needRepair, daysUsed, mileage } = action.payload;

            const theProduct = state.products.find((product) => product.code === productCode);
            if (theProduct) {
                // make the product unavailable
                const updatedProducts: IProduct[] = state.products.map((product) => {
                    if (product.code !== productCode) return product;

                    /* Adjust mileage - 10 miles per day */
                    const adjustedMileage = product.mileage || 0 + daysUsed * 10;

                    /* Adjust durability */
                    let durability = product.durability;
                    if (product.type === 'plain') {
                        // 1 point per day
                        durability -= daysUsed;
                    }
                    if (product.type === 'meter') {
                        // 2 points per day + 10 points per mile
                        durability -= daysUsed * 2 + mileage * 10;
                    }

                    /* Make available only if durability is not zero */
                    const availability = durability > 0;

                    return {
                        ...product,
                        availability,
                        needing_repair: needRepair,
                        mileage: adjustedMileage,
                        durability,
                    };
                });
                return { ...state, products: updatedProducts };
            }
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
