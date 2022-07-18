import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            if(state.slice().length === 0)
            action.payload.forEach((product) => {
                state.push(product);
            })
        }
    }
  })
  
  export const { setProducts } = productsSlice.actions
  
  export default productsSlice.reducer