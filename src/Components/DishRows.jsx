import { View, Text, Image,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../features/CartSlice";
import { addToCart , removeFromCart } from "../features/CartSlice";

export const DishRows = ({ id, name, price, description, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectCartItemById(state, id))
  const dispatch = useDispatch()

  const addItemsToCart = () => {
    dispatch(addToCart({id,name,price,description,image}))
  }

  const removeItemFromCart = () => {
    if(!items.length > 0) return

    dispatch(removeFromCart({ id }))
  }

 


  return (
    <TouchableOpacity
      
      onPress={() => setIsPressed(!isPressed)}
      className=" my-2 p-3 bg-white"
    >
      <View className="flex-row">
        <View className="w-4/5 text-center">
          <Text className="text-lg">{name}</Text>
          <Text className="text-gray-500 text-xs ">{description}</Text>

          <Text className="text-gray-500 text-xs py-2">${price}</Text>
        </View>
        <View>
          <Image
            className="w-14 h-14 bg-gray-300 "
            source={{
              uri: image,
            }}
          ></Image>
        </View>
      </View>

      {isPressed && (
        <View className="flex-row items-center text-center justify-center p-1">
          <TouchableOpacity disabled={!items.length } onPress={removeItemFromCart} >
            <MinusCircleIcon  size={30} color={items.length <= 0 ? "gray" : "#ABC766"} />

          </TouchableOpacity>
          <Text>{items.length}</Text>

          <TouchableOpacity onPress={addItemsToCart} >
            <PlusCircleIcon size={30} color="#ABC766" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
