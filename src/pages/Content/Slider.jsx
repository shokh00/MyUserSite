import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

import { updateState } from "../../redux/slices";
import { ArrowsDiv, CarouselDiv, Title } from "../../style/styled-components/ui";
import AddToCartBtn from "../UI/AddToCartBtn";

function CustomSlider() {
    const dispatch = useDispatch();
    const { products, store, cart } = useSelector(state => state.slices);
    const [customArrow, setCustomArrow] = useState({ slickNext: null, slickPrev: null });
    const navigate = useNavigate();
    const size = useWindowSize();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: size.width > 1000 ? 4 : size.width > 750 ? 3 : size.width > 550 ? 2 : 1,
        autoplay: true,
        speed: 550,
        style: {
            padding: "8px 0"
        }
    };

    useEffect(() => {
        dispatch(updateState({ cart: JSON.parse(localStorage.getItem('cart')) ?? [] }));
    }, []);

    return (
        <>
            <Title>
                <h1>
                    Хиты Продаж
                </h1>
            </Title>
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
                        <AddToCartBtn item={item} />
                    </CarouselDiv>
                ))}
            </Slider >
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