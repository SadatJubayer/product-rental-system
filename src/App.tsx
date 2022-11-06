import HelloWorld from 'components/HelloWorld';
import { useProducts } from 'hooks';

const App = () => {
    const { state } = useProducts();
    const haveProducts = state.products.length > 0;

    if (haveProducts) {
        return <HelloWorld />;
    }
    return <h1>No Products found</h1>;
};

export default App;
