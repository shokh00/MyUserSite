import { updateState } from "../../redux/slices/index";
import call from "../../components/call";

export const getProduct = () => {
    return (dispatch) => {
        call.get("/product")
            .then(res => dispatch(updateState({ products: res.data })))
    }
};

export const getStoreSetting = () => {
    return (dispatch) => {
        call.get("/store")
            .then(res => dispatch(updateState({ store: res.data })))
    }
};

export const getOneProduct = id => {
    return (dispatch) => {
        call.get(`/product/${id}`)
            .then(res => dispatch(updateState({ oneProduct: res.data })));
    }
};