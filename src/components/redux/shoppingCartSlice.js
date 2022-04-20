import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload); 
        },
        remove: (state, action) => {
           state = "xd"
        }
    }
  })
  
  export const { add, remove } = shoppingCartSlice.actions
  
  export default shoppingCartSlice.reducer