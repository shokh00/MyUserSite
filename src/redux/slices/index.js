import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        oneProduct: {},
        products: [],
        store: [],
        cart: [],
        total: 0,
        openModal: false,
        openDrawer: false,
    },
    reducers: {
        updateState: (state, action) => {
            return { ...state, ...action.payload };
        },
    }
});

export default slice.reducer;
export const { updateState } = slice.actions;