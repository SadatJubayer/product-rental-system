import { Layout } from 'components';
import ProductList from 'features/product-list';
import { useProducts } from 'hooks';

const App = () => {
    const { state } = useProducts();
    const haveProducts = state.products.length > 0;

    if (haveProducts) {
        return (
            <Layout>
                <ProductList />
            </Layout>
        );
    }
    return <h1>No Products found</h1>;
};

export default App;
