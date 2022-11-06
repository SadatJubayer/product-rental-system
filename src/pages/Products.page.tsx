import { Layout } from 'components';
import ProductActions from 'features/product-actions';
import ProductList from 'features/product-list';

export const ProductsPage = () => {
    return (
        <Layout>
            <ProductList />
            <ProductActions />
        </Layout>
    );
};
