import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Product {
}

export interface CartState {
    products: [];
}

const initialState: CartState = {
    products: [],
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            let products: never[] = state.products;
            console.log(products);
            products = products.filter((product) => product?.id !== action.payload)
            console.log(products);
        },
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = counterSlice.actions

export default counterSlice.reducer