import { useProducts } from 'hooks';
import { ProductsPage, ProductSeederPage } from 'pages';

const App = () => {
    const { state } = useProducts();
    const haveProducts = state.products.length > 0;

    if (haveProducts) {
        return <ProductsPage />;
    }
    return <ProductSeederPage />;
};

export default App;
