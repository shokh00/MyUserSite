import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { updateState } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import {AddToCardBtn, Counter} from "../../style/styled-components/ui";

const AddToCartBtn = ({item}) => {
    const { cart } = useSelector(state => state.slices);
    const dispatch = useDispatch();

    function addToCart(selectProduct) {
        let modCard = cart;
        let findProductIndex = modCard.findIndex(i => i.id === selectProduct.id);
        if (findProductIndex > -1) {
            modCard = modCard.map(i => {
                if (i.id === selectProduct.id) {
                    if (cart?.some(i => i.id === selectProduct.id)) {
                        i = { ...i, quantity: selectProduct.quantity }
                    } else {
                        i = { ...i, quantity: i.quantity + selectProduct.quantity }
                    }
                }
                return i
            });
        } else {
            modCard = [...cart, { ...selectProduct, quantity: 1 }];
        }
        dispatch(updateState({ cart: modCard }));
        localStorage.setItem('cart', JSON.stringify(modCard));
    }

    const Plus = (id) => {
        let modCart = cart.map((i, index) => {
            if (i.id === id)
                i = { ...i, quantity: i.quantity + 1 }
            return i
        });
        dispatch(updateState({ cart: modCart }));
        localStorage.setItem('cart', JSON.stringify(modCart));
    };

    const Minus = (id) => {
        let modCart = cart.map((i, index) => {
            if (i.id === id) {
                if (i.quantity <= 1) {
                    return;
                } else {
                    i = { ...i, quantity: i.quantity - 1 }
                }
            }
            return i;
        }).filter(i => i);
        dispatch(updateState({ cart: modCart }));
        localStorage.setItem('cart', JSON.stringify(modCart));
    }

    return (
        <>
            {cart?.some(p => p.id == item.id) ? <Counter>
                <MinusOutlined className="icon" onClick={() => Minus(item.id)} />
                {cart.find(i => i.id == item.id).quantity}
                <PlusOutlined className="icon" onClick={() => Plus(item.id)} />
            </Counter> : <>
                <AddToCardBtn onClick={() => {
                    addToCart(item);
                }} className="cart-btn">
                    В корзину
                </AddToCardBtn>
            </>}
        </>
    );
}

export default AddToCartBtn;
