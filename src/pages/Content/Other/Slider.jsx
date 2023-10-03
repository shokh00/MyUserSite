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
    const { products, store, total } = useSelector(state => state.slices);
    const innerWidth = window.innerWidth;
    const [customArrow, setCustomArrow] = useState({ slickNext: null, slickPrev: null });
    const navigate = useNavigate();
    const cart = JSON.parse(localStorage.getItem("cart"));

    console.log(cart);

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
            })
        } else {
            modCard = [...cart, {...selectProduct , quantity: 1}];
        }

        dispatch(updateState({ cart: modCard }));
    }

    const checkTotal = () => {
        // const total =  cart.reduce(
        //     (total, cartItem) => {
        //         const { price, stock } = cartItem;
        //         total.cartTotal += stock * price;
        //         return total;
        //     },
        //     {
        //         totalItems: 0,
        //         cartTotal: 0
        //     }
        // );
        // dispatch(updateState({ total: total }))
    }

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
            if (i.quantity != 1) {
                if (i.id === id)
                    i = { ...i, quantity: i.quantity - 1 }
            } else {
                console.log("0");
            }
            return i;
        });
        dispatch(updateState({ cart: modCart }));
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: innerWidth < 650 ? 1 : innerWidth < 850 ? 2 : innerWidth < 950 ? 3 : innerWidth < 2000 ? 4 : 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
    };

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
                        {cart.some(p => p.id == item.id) ? <button className="counter">
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