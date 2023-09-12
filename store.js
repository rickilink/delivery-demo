import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './src/features/CartSlice'
import restaurantReducer from './src/features/RestaurantSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer
  }
})


