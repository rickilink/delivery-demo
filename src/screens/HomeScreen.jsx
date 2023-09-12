import React, { useLayoutEffect } from "react";
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, StarIcon } from "react-native-heroicons/solid";
import {
  UserIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  AdjustmentsVerticalIcon,
  ArrowSmallRightIcon,
} from "react-native-heroicons/outline";
import { ImageUrls } from "../assets/images";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleNavigation = (props) => {
    navigation.navigate("Restaurant", {
      id: props?.id, 
      image: props?.image , 
      short_description : props?.short_description, 
      price: props?.price,
      title: props?.title
      
    });
  };

  return (
    <SafeAreaView className="bg-gray-200 flex-1 pt-6">
      {/* Header */}
      <View className="flex-row w-full justify-between px-3 pb-2 items-center">
        <Image
          className="w-10 h-10 rounded-full"
          source={{
            uri: "https://thumbs.dreamstime.com/b/delivery-line-vector-icon-delivery-line-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-website-design-138134680.jpg",
          }}
        />
        <View>
          <Text className="font-light text-s">Deliver Name</Text>
          <Text className="font-bold text-xl ">
            Current Location <ChevronDownIcon color={"#ABC766"} />
          </Text>
        </View>

        <UserIcon color={"#ABC766"} width="40" height="40" />
      </View>

      {/* SearchBar */}
      <View>
        <View className=" flex-row p-3 items-center">
          <View className="bg-slate-300 flex-row h-8 w-11/12 text-center items-center rounded-sm">
            <View className="px-3">
              <MagnifyingGlassIcon color={"gray"} />
            </View>
            <Text className=" text-slate-600/60">Search bar</Text>
          </View>
          <View>
            <AdjustmentsVerticalIcon color={"#ABC766"} />
          </View>
        </View>
      </View>

      {/* Layout 1 */}
      <ScrollView>
        <View className="pt-3">
          <ScrollView horizontal>
            {/* Item 1*/}
            {ImageUrls?.map((food) => (
              <TouchableOpacity
               onPress={() => handleNavigation(food)}
                key={food.id}
                className="pl-3"
              >
                <Image
                  className="w-24 h-24 relative "
                  source={{
                    uri: food.image,
                  }}
                />
                <Text className="absolute bottom-2 left-4 font-bold italic text-gray-100  ">
                  {food.name || Textoo}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Layout  */}
        <View className=" p-3 bg-white">
          <View className="flex-row justify-between">
            <Text className="font-bold text-xl">Offers near you!</Text>
            <ArrowSmallRightIcon color={"#ABC766"} />
          </View>
          <Text className=" text-gray-400/70">
            Lorem ipsum dolor sit amet consectetur elit.
          </Text>
        </View>

        {/* ContentLayout */}
        <View className="p-3">
          <ScrollView horizontal className="gap-3">
            {/*Item  */}

            {ImageUrls?.map((food) => (
              <TouchableOpacity onPress={() => handleNavigation(food)} key={food.id} className="bg-white">
                <View>
                  <Image className="w-64 h-36 " source={{ uri: food.image }} />
                </View>
                <View className="px-3">
                  <Text className="font-bold text-lg">Chrissie's</Text>
                  <View className=" flex-row gap-3 text-center">
                    <StarIcon width={17} color={"gray"} />
                    <Text className="text-xs text-gray-500">2.4</Text>
                    <Text className="text-xs text-gray-500">Chinnesse</Text>
                  </View>
                  <View className=" flex-row gap-3 text-center pb-3">
                    <MapPinIcon color={"gray"} />
                    <Text className="text-xs text-gray-500">Nearby</Text>
                    <Text className="text-xs text-gray-500">Street 999</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/*Item  */}
          </ScrollView>
        </View>

        {/* Layout 2 */}
        <View className=" p-3 bg-white">
          <View className="flex-row justify-between">
            <Text className="font-bold text-xl">Featured</Text>
            <ArrowSmallRightIcon color={"#ABC766"} />
          </View>
          <Text className=" text-gray-400/70">
            Lorem ipsum dolor sit amet consectetur elit.
          </Text>
        </View>

        {/* ContentLayout 2*/}

        <View className="p-3">
          <ScrollView horizontal className="gap-3">
            {/*Item  */}
            {ImageUrls?.map((food) => (
              <TouchableOpacity onPress={() => handleNavigation(food)} key={food.id}  className="bg-white">
                <View>
                  <Image className="w-64 h-36 " source={{ uri: food.image }} />
                </View>
                <View className="px-3">
                  <Text className="font-bold text-lg">{food.name}</Text>
                  <View className=" flex-row gap-3 text-center">
                    <StarIcon width={17} color={"gray"} />
                    <Text className="text-xs text-gray-500">2.4</Text>
                    <Text className="text-xs text-gray-500">Chinnesse</Text>
                  </View>
                  <View className=" flex-row gap-3 text-center pb-3">
                    <MapPinIcon color={"gray"} />
                    <Text className="text-xs text-gray-500">Nearby</Text>
                    <Text className="text-xs text-gray-500">Street 999</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/*Item  */}
          </ScrollView>
        </View>
        {/* Layout  3*/}
        <View className=" p-3 bg-white">
          <View className="flex-row justify-between">
            <Text className="font-bold text-xl">Tasty Discounts</Text>
            <ArrowSmallRightIcon color={"#ABC766"} />
          </View>
          <Text className=" text-gray-400/70">
            Lorem ipsum dolor sit amet consectetur elit.
          </Text>
        </View>
        {/* ContentLayout 3*/}
        <View className="p-3">
          <ScrollView horizontal className="gap-3">
            {/*Item  */}
            {ImageUrls?.map((food) => (
              <TouchableOpacity onPress={() => handleNavigation(food)} key={food.id}  className="bg-white">
                <View>
                  <Image className="w-64 h-36 " source={{ uri: food.image }} />
                </View>
                <View className="px-3">
                  <Text className="font-bold text-lg">{food.name}</Text>
                  <View className=" flex-row gap-3 text-center">
                    <StarIcon width={17} color={"gray"} />
                    <Text className="text-xs text-gray-500">2.4</Text>
                    <Text className="text-xs text-gray-500">Chinnesse</Text>
                  </View>
                  <View className=" flex-row gap-3 text-center pb-3">
                    <MapPinIcon color={"gray"} />
                    <Text className="text-xs text-gray-500">Nearby</Text>
                    <Text className="text-xs text-gray-500">Street 999</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/*Item  */}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
