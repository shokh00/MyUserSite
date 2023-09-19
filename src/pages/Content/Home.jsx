import { Block, CarouselDiv, Drawer__Body, Drawer__Content, Drawer__Footer, Drawer__Head, Modal__Content, Opposite, Title } from '../../style/styled-components/ui';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import * as Icons from "../../icons/index";
import { useState } from 'react';
import { Button, Card, Drawer, Form, Input, Modal } from 'antd';
import { updateState } from '../../redux/slices';
import { CloseOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Home() {
    const [customArrow, setCustomArrow] = useState({ slickNext: null, slickPrev: null });
    const { openDrawer, openModal } = useSelector(state => state.slices);
    const dispatch = useDispatch();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const innerWidth = window.innerWidth;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: innerWidth < 650 ? 1 : innerWidth < 850 ? 2 : innerWidth < 950 ? 3 : innerWidth < 2000 ? 4 : 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
    };
    const [form] = Form.useForm();

    const onFinish = value => {
        console.log(value);
    }

    console.log(window);

    return (
        <>
            <Title>
                <h1>
                    Хиты Продаж
                </h1>
            </Title>
            <Slider {...settings} ref={c => setCustomArrow(c)}>
                <CarouselDiv>
                    <img src="https://cp.ectn.uz/files//0622/shaurma_ostraya_s_kurochkoy_big_evos.png" alt="..." />
                    <h2>Шаурма острая с курицей</h2>
                    <h3>
                        Румянное куринное мясо гриль , ломтики свежего огурцы и сочного
                    </h3>
                    <h2 className='price'>
                        24 000 сум
                    </h2>
                    <button>
                        В корзину
                    </button>
                </CarouselDiv>
                <CarouselDiv>
                    <img src="https://cp.ectn.uz/files//0622/sub_s_govyadinoy_evos.png" alt="..." />
                    <h2>Саб с говядиной</h2>
                    <h3>
                        Сочная говядина гриль, кольца свежего красного лука, соус "барбекю" с дымком в удлиненной пышной булочке
                    </h3>
                    <h2 className='price'>
                        19 000 сум
                    </h2>
                    <button>
                        В корзину
                    </button>
                </CarouselDiv>
                <CarouselDiv>
                    <img src="https://cp.ectn.uz/files//0622/sub_s_kurochkoy_evos.png" alt="..." />
                    <h2>
                        Саб с курицей</h2>
                    <h3>
                        Куриное мясо гриль, кольца свежего красного лука, соус "барбекю" с дымком в удлиненной и пышной булочке
                    </h3>
                    <h2 className='price'>
                        17 000 сум
                    </h2>
                    <button>
                        В корзину
                    </button>
                </CarouselDiv>
                <CarouselDiv>
                    <img src="https://cp.ectn.uz/files//donar_s_govyadinoy_evos.png" alt="..." />
                    <h2>
                        Донар с говядиной
                    </h2>
                    <h3>
                        Кусочки сочной говядины гриль, золотистая картошка "фри", рис, натуральный фирменный салат, специальный соус и ароматная лепешка на комбинированном блюде
                    </h3>
                    <h2 className='price'>43 000 сум</h2>
                    <button>
                        В корзину
                    </button>
                </CarouselDiv>
                <CarouselDiv>
                    <img src="https://cp.ectn.uz/files//0622/shaurma_s_kurochkoy_biq_evos.png" alt="..." />
                    <h2>
                        Шаурма с курицей
                    </h2>
                    <h3>
                        Румяное куриное мясо гриль, кусочки свежего огурцы и сочного помидора, хрустящие чипсы, томатный восточный соус со свежим луком и зеленью в ароматной полукруглой булочке с кунжутными семечками.
                    </h3>
                    <h2 className='price'>
                        24 000 сум
                    </h2>
                    <button>
                        В корзину
                    </button>
                </CarouselDiv>
            </Slider>
            <div >
                <button onClick={customArrow.slickNext}>
                    Next
                </button>
                <button onClick={customArrow.slickPrev}>
                    Prev
                </button>
            </div>
            <Title>
                <h1>
                    Почему Эвос?
                </h1>
            </Title>
            <Block>
                <div className="box">
                    <Icons.shield />
                    <h2>
                        Контроль качества блюд
                    </h2>
                    <h3>
                        Безопасность и удовольствие от еды для наших гостей –
                        наша основная задача. Мы внедрили HАССP – свод правил
                        организации производства, гарантирующий обеспечение
                        на выходе качественного и безопасного для потребителя
                        продукта. Процессы на кухне и в залах автоматизированы.
                    </h3>
                </div>
                <div className="box">
                    <Icons.geo />
                    <h2>
                        Всегда рядом с вами
                    </h2>
                    <h3>
                        71 филиал по всей республике Узбекистан.
                        Какой ресторан EVOS рядом в Вашим домом или офисом?
                        Расположение каждого филиала
                        <span> здесь.</span>
                    </h3>
                </div>
                <div className="box">
                    <Icons.people />
                    <h2>
                        Восточное гостеприимство
                    </h2>
                    <h3>
                        В чем секрет наших вкусных блюд? Все очень просто.
                        Мы готовим для вас как для своих любимых и близких,
                        с заботой и теплотой!
                    </h3>
                </div>
                <div className="box">
                    <Icons.chart />
                    <h2>
                        Быстро, вкусно, натурально
                    </h2>
                    <h3>
                        Быстрая подача ваших любимых блюд, приготовленных
                        исключительно из натуральных продуктов
                    </h3>
                </div>
                <div className="box">
                    <Icons.todo />
                    <h2>
                        Разнообразное меню
                    </h2>
                    <h3>
                        Мы убеждены, что каждый посетитель ресторана найдет
                        в меню любимые блюда на любой вкус и уж точно
                        не уйдет от нас голодным!
                    </h3>
                </div>
                <div className="box">
                    <Icons.time />
                    <h2>
                        Быстрая доставка
                    </h2>
                    <h3>
                        Среднее время доставки по городу Ташкент не привышает 15-20 минут
                    </h3>
                </div>
            </Block>
            <Drawer placement="right" zIndex={5} closeIcon={<CloseOutlined />} width={500} open={openDrawer} onClose={() => dispatch(updateState({ openDrawer: !openDrawer }))}>
                <Drawer__Content>
                    <Opposite>
                        <Drawer__Head>
                            <h3>Ваш Заказ</h3>
                            <h3>Очистить Корзинку</h3>
                        </Drawer__Head>
                        <div className='hr' />
                        <Drawer__Body>
                            {/* Drawer Body */}
                        </Drawer__Body>
                    </Opposite>
                    <Drawer__Footer>
                        <div>
                            <h1>Итого</h1>
                            <h1>19 000 сум</h1>
                        </div>
                        <button onClick={() => dispatch(updateState({ openModal: !openModal }))}>Оформить заказ</button>
                    </Drawer__Footer>
                </Drawer__Content>
            </Drawer>
            <Modal
                width={400}
                open={openModal}
                onOk={() => dispatch(updateState({ openModal: !openModal }))}
                onCancel={() => dispatch(updateState({ openModal: !openModal }))}
                footer={null}
            >
                <Modal__Content>
                    <h1>
                        Вход на сайт
                    </h1>
                    <Form form={form} layout='vertical' onFinish={onFinish} >
                        <Form.Item label="Номер телефона" name={"phone"} rules={[{ required: true, message: "Checking is required" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={"checked"} rules={[{ required: true, message: "Checking is required" }]}>
                            <ReCAPTCHA
                                className='captcha'
                                sitekey="6Lev3i8oAAAAAG0m3fuM8SHiW3vTXg-CG1tqgUxj"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary' block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal__Content>
            </Modal>
        </>
    )
}
