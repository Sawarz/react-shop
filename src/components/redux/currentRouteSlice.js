import { createSlice } from "@reduxjs/toolkit";

export const currentRouteSlice = createSlice({
    name: 'currentRoute',
    initialState: {
      value: '/',
    },
    reducers: {
      change: (state, action) => {
        state.value = action.payload; 
      }
    }
  })
  
  export const { change } = currentRouteSlice.actions
  
  export default currentRouteSlice.reducer