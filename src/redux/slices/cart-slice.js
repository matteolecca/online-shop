import {  createSlice } from "@reduxjs/toolkit";
import { addProductToCart, initialState, getInitialState, removeProductFromCart } from "../actions/cart-actions";
const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: addProductToCart,
        removeFromCart : removeProductFromCart,
        resetCart : getInitialState
    }
})


export const { addToCart, removeFromCart, resetCart } = slice.actions
export const getCartState = state => state.cart
export const getCartLength = state => state.cart.count
export default slice.reducer