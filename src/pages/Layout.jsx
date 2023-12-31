import { Outlet, useNavigate } from 'react-router-dom'
import { UserOutlined, ShoppingOutlined, DownOutlined, InstagramOutlined, FacebookOutlined, SendOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { updateState } from '../redux/slices';
import { useDispatch, useSelector } from 'react-redux';

import { Footer, Footer__About, Navbar, Navbar__About, Navbar__Profile, Line, ContactUs, Content, Cart__Button } from '../style/styled-components/ui'
import * as Icons from "../icons/index";

const items = [
    {
        key: '1',
        label: (
            <div className='drop__item'>
                <Icons.uzbek />
                O'zbekcha
            </div>
        ),

    },
    {
        key: '2',
        label: (
            <div className='drop__item'>
                <Icons.russian />
                Русский
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div className='drop__item'>
                <Icons.english />
                English
            </div>
        ),
    },
];

export default function Layout() {
    const { cart, store: { currency, image } } = useSelector(state => state.slices);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    return (
        <>
            <Navbar>
                <img src={image} width={110} height={40} onClick={() => navigation("/")} />
                <Navbar__About>
                    <ul>
                        <li onClick={() => { window.location.pathname == "/" ? window.scrollTo(0, 0) : navigation("/") }}>Главная</li>
                        <li>Филиалы</li>
                        <li>Вакансии</li>
                        <li>Новости</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </Navbar__About>
                <Navbar__Profile>
                    <Cart__Button className={cart?.length ? "full" : ""} onClick={() => dispatch(updateState({ openDrawer: true }))}>
                        <ShoppingOutlined /> {cart?.length ? Intl.NumberFormat().format(cart.reduce((acc, curr) => acc += (curr.quantity * curr.price), 0)) + ` ${currency ?? "..."}` : "Корзина"}
                    </Cart__Button>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomLeft"
                        arrow
                        className='dropdown'
                    >
                        <button><Icons.russian /><DownOutlined className='down' /></button>
                    </Dropdown>
                    <button><UserOutlined /></button>
                </Navbar__Profile>
            </Navbar>
            <Content>
                <Outlet />
            </Content>
            <Footer className='container_footer' >
                <div className='footer'>
                    <Icons.logo />
                    <Footer__About className='footer_about'>
                        <ul>
                            <li onClick={() => window.scrollTo(0, 0)}>Главная</li>
                            <li>Филиалы</li>
                            <li>Вакансии</li>
                            <li>Новости</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                        </ul>
                    </Footer__About>

                    <Icons.AppStore />

                </div>

                <Line />

                <ContactUs >
                    <h4>
                        © Evos 2006 - 2023 All rights reserved
                    </h4>
                    <div>
                        <InstagramOutlined />
                        <FacebookOutlined />
                        <SendOutlined />
                    </div>
                </ContactUs>

            </Footer >
        </>
    )
}
