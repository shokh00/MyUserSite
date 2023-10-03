import { Drawer__Body, Drawer__Content, Drawer__Footer, Drawer__Head, Title } from '../../style/styled-components/ui';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Badge, Button, Drawer } from 'antd';
import { updateState } from '../../redux/slices';
import { CloseOutlined, RightOutlined, LeftOutlined, DeleteOutlined, MinusOutlined, QuestionOutlined, PlusOutlined } from '@ant-design/icons';
import { getProduct, getStoreSetting } from '../../components/actions';
import CustomSlider from './Other/Slider';
import CustomBlock from './Other/Block';
import CustomModal from './Other/Modal';
import ButtonGroup from 'antd/es/button/button-group';

export default function Home() {
    const { openDrawer, openModal, cart, store } = useSelector(state => state.slices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
        dispatch(getStoreSetting());
    }, []);

    const Plus = (id) => {
        let modCart = cart.map((i, index) => {
            if (i.id === id)
                i = { ...i, quantity: i.quantity + 1 }
            return i
        });
        dispatch(updateState({ cart: modCart }));
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
    };

    console.log(cart);

    return (
        <div>
            <Title>
                <h1>
                    Хиты Продаж
                </h1>
            </Title>
            <CustomSlider />
            <Title>
                <h1>
                    Почему Эвос?
                </h1>
            </Title>
            <CustomBlock />
            <Drawer footer={
                <Drawer__Footer>
                    <div>
                        <h1>Итого</h1>
                        <h1>{Intl.NumberFormat().format(cart.reduce((acc, curr) => acc += (curr.quantity * curr.price), 0))} {store.currency}</h1>
                    </div>
                    <button onClick={() => dispatch(updateState({ openModal: !openModal }))} disabled={!cart.length}>Оформить заказ</button>
                </Drawer__Footer>
            } placement="right" zIndex={5} closeIcon={<CloseOutlined />} width={500} open={openDrawer} onClose={() => dispatch(updateState({ openDrawer: !openDrawer }))}>
                <Drawer__Content>
                    <div>
                        <Drawer__Head>
                            <h3>Ваш Заказ</h3>
                            <h3 onClick={() => {
                                dispatch(updateState({ cart: [] }));
                                dispatch(updateState({ openDrawer: !openDrawer }));
                            }}>Очистить Корзинку</h3>
                        </Drawer__Head>
                        <div className='hr' />
                        <Drawer__Body>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div className="drawerDiv" key={index}>
                                            <div className='img'>
                                                <DeleteOutlined onClick={() => dispatch(updateState({ cart: cart.filter(cartId => cartId.id != item.id) }))} />
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className='productInfo'>
                                                <h4>{item.productName}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className='endInfo'>
                                                <h3>{Intl.NumberFormat().format(item.price * item.quantity)} {store.currency}</h3>
                                                <ButtonGroup style={{ alignItems: "center" }}>
                                                    <Button onClick={() => Minus(item.id)} icon={<MinusOutlined />} />
                                                    <Button> {item.quantity} </Button>
                                                    <Button onClick={() => Plus(item.id)} icon={<PlusOutlined />} />
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Drawer__Body>
                    </div>

                </Drawer__Content>
            </Drawer>
            <CustomModal />
        </div>
    )
}
