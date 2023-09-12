import { createSlice } from '@reduxjs/toolkit'



 const initialState = {
  items: [],
} 
export const cartSlice = createSlice({
  
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {

        state.items = [...state.items, action.payload]
      },
      removeFromCart: (state, action) => {
        
        const index = state.items.findIndex((item) => item.id == action.payload.id)
       

        let newCart = [...state.items]

        if(index >= 0) {
          newCart.splice(index, 1)

        } else {
          console.warn(`cant remove id: ${action.payload.id}`)
        }

        state.items = newCart
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart, removeFromCart } = cartSlice.actions

  export const selectCartItems = (state) => state.cart.items 
  
  export const selectCartItemById = (state, id) => state.cart.items.filter(item => item.id === id)

  export const selectCartTotal = (state) => state.cart.items.reduce((acc, elem) => acc += elem.price , 0)  
  
  export default cartSlice.reducer