import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/RestaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../features/CartSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';



export const CartScreen = () => {
  const [groupedItemsInCart, setGroupedItemsInCart ] = useState([])
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const total = useSelector(selectCartTotal)
  useState(() => {
    const groupedItems = items.reduce((acc, item) => {
      (acc[item.id] = acc[item.id] || []).push(item)
      return acc
    }, {})

    setGroupedItemsInCart(groupedItems)
  },[items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#ABC766] bh-white shadow-xs">
          <View>
            <Text className="text-lg text-center font-bold">Cart</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>

          </View>
          <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#ABC766" width={50} height={50} />
          </TouchableOpacity>

        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image className=" h-7 w-7 bg-gray-300 p-4  rounded-full" source={{
            uri: "https://thumbs.dreamstime.com/b/delivery-line-vector-icon-delivery-line-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-website-design-138134680.jpg"
          }} />
          <Text className="flex-1">Deliver in </Text>
          <TouchableOpacity>
            <Text className="text-[#ABC766]">Change</Text>
          </TouchableOpacity>
          
        </View>

         <ScrollView className=" divide-y divide-gray-200">
          {Object.entries(groupedItemsInCart).map(([key,items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className=" text-[#ABC766]">{items.length}x</Text>
              <Image className="w-12 h-12" source={{
                uri: items[0]?.image
              }}/>
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>${items[0]?.price}</Text>
              <TouchableOpacity>
                <Text 
                className="text-[#ABC766]  text-xs"
                onPress={()=> dispatch(removeFromCart({id : key}))} >
                  Remove
                </Text>
              </TouchableOpacity> 
            </View>
          ))}

        </ScrollView> 
          <SafeAreaView className=" w-full bg-white p-3" >
          <View>
          <View className="flex-row py-3" >
              <Text className="flex-1 text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">${total}</Text>
            </View>
            <View className="flex-row py-3" >
              <Text className="flex-1 text-gray-400">Fee</Text>
              <Text className="text-gray-400">$0.99</Text>
            </View>
            <View className="flex-row py-3" >
              <Text className="flex-1">Order total</Text>
              <Text className="font-bold">${total + 0.99}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} className="bg-[#ABC766] h-16 mx-5 items-center justify-center rounded-lg">
              <Text  className="text-white font-bold text-lg ">Place Order</Text>
          </TouchableOpacity>
          </SafeAreaView>
            
      </View>
    </SafeAreaView>
  )
}

 