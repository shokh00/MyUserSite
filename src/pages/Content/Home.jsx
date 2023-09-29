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
    const { openDrawer, openModal, cart } = useSelector(state => state.slices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
        dispatch(getStoreSetting());
    }, []);

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
                        <h1>19 000 сум</h1>
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
                                                <h3>19 000 сум</h3>
                                                <ButtonGroup style={{ alignItems: "center" }}>
                                                    <Button icon={<MinusOutlined />} />
                                                    <Button> 1 </Button>
                                                    <Button icon={<PlusOutlined />} />
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
