import { useProducts } from 'hooks';
import { ProductsPage } from 'pages';

const App = () => {
    const { state } = useProducts();
    const haveProducts = state.products.length > 0;

    if (haveProducts) {
        return <ProductsPage />;
    }
    return <h1>No Products found</h1>;
};

export default App;
