import { useSelector } from 'react-redux';
import { ProductDiv, Title } from '../../style/styled-components/ui';
import AddToCartBtn from '../UI/AddToCartBtn';

const ProductList = () => {
    
    const { products , store } = useSelector(state => state.slices);

    return (
        <>
            <Title>
                <h1>Продукты</h1>
            </Title>
            <ProductDiv>
                {
                    products.map(item => {
                        return (
                            <div>
                                <img src={item.image} alt="" />
                                <h2>{item.productName}</h2>
                                <h4>{item.description}</h4>
                                <h3>{item.price} {store.currency}</h3>
                                <AddToCartBtn item={item} />
                            </div>
                        )
                    })
                }
            </ProductDiv>
        </>
    );
}

export default ProductList;