import { createSlice } from '@reduxjs/toolkit'



 const initialState = {
  restaurant: {
    id: null,
    image: null,
    title: null,
    rating: null,
    genre:null,
    short_description: null,
    dishes:null
  },
} 
export const restaurantSlice = createSlice({
  
    name: 'restaurant',
    initialState,
    reducers: {
      setResturant:( state , action) => {
        state.restaurant = action.payload
        
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setResturant } = restaurantSlice.actions

  export const selectRestaurant = (state) => state.restaurant.restaurant 
  
  
  export default restaurantSlice.reducer