import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        products: [],
        openDrawer: false,
        openModal: false
    },
    reducers: {
        updateState: (state, action) => {
            return { ...state, ...action.payload };
        },
    }
});

export default slice.reducer;
export const { updateState } = slice.actions;