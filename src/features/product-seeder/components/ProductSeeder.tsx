import { Alert, Button } from 'components';
import { strings } from 'constants/strings';
import { useProducts } from 'hooks';

const ProductSeeder = () => {
    const { dispatch } = useProducts();

    const importDummy = () => {
        dispatch({ type: 'seedProducts' });
    };

    return (
        <div className="flex flex-col space-y-5 justify-center items-center min-h-screen">
            <Alert type="error" message={strings.no_products} />
            <Button label={strings.import_dummy} onClick={importDummy} />
        </div>
    );
};

export default ProductSeeder;
