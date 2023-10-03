import { useDispatch, useSelector } from "react-redux";
import { ArrowsDiv, CarouselDiv } from "../../../style/styled-components/ui";
import Slider from "react-slick";
import { useState } from "react";
import { LeftOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import { updateState } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function CustomSlider() {
    const dispatch = useDispatch();
    const { products, store, cart } = useSelector(state => state.slices);
    const innerWidth = window.innerWidth;
    const [customArrow, setCustomArrow] = useState({ slickNext: null, slickPrev: null });
    const navigate = useNavigate();

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
            modCard = [...cart, {...selectProduct , quantity: 1}];
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
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: innerWidth < 650 ? 1 : innerWidth < 850 ? 2 : innerWidth < 950 ? 3 : innerWidth < 2000 ? 4 : 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
    };

    useEffect(() => {
        dispatch(updateState({cart: JSON.parse(localStorage.getItem('cart'))}));
    }, []);

    return (
        <>
            <Slider {...settings} ref={c => setCustomArrow(c)}>
                {products.map(item => (
                    <CarouselDiv key={item.id}>
                        <img src={item.image} alt="..." onClick={() => navigate(`/product/${item.id}`)} />
                        <h2>
                            {item.productName}
                        </h2>
                        <h3>
                            {item.description}
                        </h3>
                        <h2 className='price'>
                            {new Intl.NumberFormat().format(item.price)} {store.currency}
                        </h2>
                        {cart?.some(p => p.id == item.id) ? <button className="counter">
                            <MinusOutlined className="icon" onClick={() => Minus(item.id)} />
                            {cart.find(i => i.id == item.id).quantity}
                            <PlusOutlined className="icon" onClick={() => Plus(item.id)} />
                        </button> : <>
                            <button onClick={() => {
                                addToCart(item);
                            }} className="cart-btn">
                                В корзину
                            </button>
                        </>}
                    </CarouselDiv>
                ))}
            </Slider>
            <ArrowsDiv>
                <button className='prev' onClick={customArrow.slickPrev}>
                    <LeftOutlined />
                </button>
                <button className='next' onClick={customArrow.slickNext}>
                    <RightOutlined />
                </button>
            </ArrowsDiv>
        </>

    )
};

export default CustomSlider;