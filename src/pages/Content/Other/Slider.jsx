import { useDispatch, useSelector } from "react-redux";
import { ArrowsDiv, CarouselDiv } from "../../../style/styled-components/ui";
import Slider from "react-slick";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { updateState } from "../../../redux/slices";

function CustomSlider() {
    const dispatch = useDispatch();
    const { products, store , cart } = useSelector(state => state.slices);
    const innerWidth = window.innerWidth;
    const [customArrow, setCustomArrow] = useState({ slickNext: null, slickPrev: null });

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
            modCard = [...cart, selectProduct];
        }

        dispatch(updateState({ cart: modCard }));
        console.log(cart);
    }

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
                    <CarouselDiv>
                        <img src={item.image} alt="..." />
                        <h2>
                            {item.productName}
                        </h2>
                        <h3>
                            {item.description}
                        </h3>
                        <h2 className='price'>
                            {new Intl.NumberFormat().format(item.price)} {store.currency}
                        </h2>
                        <button onClick={() => addToCart(item)}>
                            В корзину
                        </button>
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