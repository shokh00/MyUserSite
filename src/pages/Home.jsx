import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getProduct, getStoreSetting } from '../redux/actions';
import CustomSlider from './Content/Slider';
import CustomBlock from './Content/Block';
import CustomModal from './Content/Modal';
import CustomDrawer from "./Content/Drawer";
import ProductList from "./Content/ProductList";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
        dispatch(getStoreSetting());
    }, []);

    return (
        <>
            <CustomSlider />

            <ProductList />

            <CustomBlock />
            
            <CustomDrawer />

            <CustomModal />
        </>
    )
}
