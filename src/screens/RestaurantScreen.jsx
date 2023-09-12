import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { useRoute } from "@react-navigation/native";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { DishRows } from "../Components/DishRows.jsx";
import { ImageUrls } from "../assets/images";
import { CartIcon } from "../Components/CartIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setResturant } from "../features/RestaurantSlice.js";
import { selectCartItems } from "../features/CartSlice.js";

export const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: { id, image, short_description, title },
  } = useRoute();

  const items = useSelector(selectCartItems);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useState(() => {
    dispatch(
      setResturant({
        id,
        image,
        short_description,
        title, //TODO:   image,rating,genre,short_description,dishes
      })
    );
  }, []);

  return (
    <>
      <CartIcon />

      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray-300 "
            source={{
              uri: image,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-6 bg-gray-100 rounded-full p-2"
        >
          <ArrowLeftIcon size={20} color="#ABC766" />
        </TouchableOpacity>

        {/* Texts */}
        <View className=" p-3">
          <Text className="text-xl font-bold">Chrissie's</Text>
          <View className="flex-row py-2 gap-3 text-center">
            <StarIcon size={15} color="gray" />
            <Text className="text-green-900/70 text-xs">4.8</Text>

            <Text className="text-gray-500 text-xs">Offers</Text>
            <MapPinIcon size={20} color="gray" />

            <Text className="text-gray-500 text-xs">Nearby</Text>
            <Text className="text-gray-500 text-xs">Clark Street</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi optio, sed consequatur eius asperiores id!
            </Text>
          </View>
        </View>

        {/* Layout */}
        <View className=" w-full p-3 bg-white">
          <View className=" flex-row items-center space-x-5  ">
            <QuestionMarkCircleIcon size={20} color="#ABC766" />
            <View className=" flex-row justify-between  space-x-5 items-center">
              <Text className="font-bold ">Have a food allergy? </Text>

              <View className=" item-end">
                <ChevronRightIcon size={15} color={"#ABC766"} />
              </View>
            </View>
          </View>
        </View>

        {/* Menu */}
        <View className="pb-36">
          <Text className="text-lg font-bold"> Menu</Text>

          {/* Scroll V */}

          <View>
            <>
              {/* Item */}
              {ImageUrls?.map((food) => (
                <DishRows
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  description={food.short_description}
                  image={food.image}
                  price={food.price}
                />
              ))}
            </>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
