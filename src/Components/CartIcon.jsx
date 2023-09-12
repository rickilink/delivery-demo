import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/CartSlice'
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';

export const CartIcon = () => {
    const items = useSelector(selectCartItems)
    const navigation = useNavigation()
    const cartTotal = useSelector(selectCartTotal)

    if(items.length === 0) return null
    
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} className=" mx-5 items-center space-x-1  p-4 flex-row bg-[#ABC766] rounded-lg">
        
            <Text className="text-white font-bold text-lg bg-[#628c4a] py-1 px-2 rounded-sm">{items.length}</Text>
            <Text className="text-lg font-bold flex-1 text-center text-white">View Cart</Text>
            <Text className="text-white font-bold text-lg  py-1 px-2 ">$ {cartTotal}</Text>
        
      </TouchableOpacity>
    </View>
  )
}

