import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneProduct } from '../../redux/actions';

export default function OneProductPage() {
  const { id } = useParams();
  const { oneProduct, store } = useSelector(state => state.slices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))
  }, []);

  console.log(oneProduct);

  return (
    <div className='oneProduct'>
      <Card>
        <div className='card_container'>
          <div className='img_side'>
            <img src={oneProduct.image} alt="" />
          </div>
          <div className='text_side'>
            <h1>{oneProduct.productName}</h1>
            <h4>{oneProduct.description}</h4>
            <button>В корзину <span>{Intl.NumberFormat().format(oneProduct.price)} {store.currency}</span></button>
          </div>
        </div>
      </Card>
    </div>
  )
}