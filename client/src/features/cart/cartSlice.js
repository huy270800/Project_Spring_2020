import { createSlice } from '@reduxjs/toolkit'
import cart from '../../reducers/cartReducer';

const initialState = { 
    cart: [
        {
            id_cart: "cart_16073577248070.4606123465718026",
            id_product: 2,
            img: "../assets/img/Tropical_Seafood_Pizza.png ",
            name: "Tropical Seafood Pizza ",
            price: "14",
            quantity: 1,
            size: "Small",
            toppings: (2) ["pepperoni", "onion"]
        }
    ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log(action.payload);
        const productIndex = state.cart.findIndex((product) => {
            return product.id_product === action.payload.id_product;
        });

        if (
            productIndex >= 0 &&
            action.payload.size === state.cart[productIndex].size
        ) {
            state.cart[productIndex].quantity++;
        } else {
            state.cart.push(action.payload);
        }
    },
    increase(state, action) {
        let itemIndex = state.cart.findIndex((product) => {
            return product.id_product == action.payload.productId;
        })

        if (itemIndex >= 0) {
            state.cart[itemIndex].quantity++;
        } else {
            console.log("Product is not available in cart");
        }
    },
    decrease(state, action) {
        let itemIndex = state.cart.findIndex((product) => {
            return product.id_product == action.payload.productId;
        })
       
        if (itemIndex >= 0) {
            state.cart[itemIndex].quantity--;
        } else {
            console.log("Product is not available in cart");
        }
    },
    removeAllQuantity(state, action) {
        let itemIndex = state.cart.findIndex((product) => {
            return product.id_product == action.payload.productId;
        })

        if (itemIndex >= 0) {
            state.cart[itemIndex].quantity = 0;
        } else {
            console.log("Product is not available in cart");
        }
    }
  },
    deleteCart(state, action) {
        let deleteItem = state.cart.filter((product) => {
            return product.id_cart !== action.payload.id_cart;
        })
        return state.cart[deleteItem] ;
        }
});

export const { addToCart, increase, decrease, removeAllQuantity, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;