import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/RestaurantSlice';
import MapView, { Marker} from 'react-native-maps';


export const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)

   return (

  
    <View className="bg-[#ABC766] flex-1 ">
    <SafeAreaView className="z-50">
        <View className="flex-row items-center px-3 pt-6">
          <Text className="text-white font-bold flex-1">Order Help</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} className="rounded-full bg-gray-100  ">
            <XCircleIcon color="#ABC766" width={50} height={50} />
          </TouchableOpacity>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
                <Text className="text-lg text-gray-400 ">Estimated Arrival</Text>
                <Text className="text-3xl font-bold "> 45 - 55 Minutes</Text>
            </View>
            <Image className="w-20 h-20"
              source={{
                uri : "https://thumbs.dreamstime.com/b/delivery-line-vector-icon-delivery-line-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-website-design-138134680.jpg"
            }}/>
          </View>
          <Progress.Bar progress={0.3} width={200} color="#ABC766" indeterminate={true} />


          <Text className="mt-3 text-gray-500">
          Your order at <Text className="font-bold text-lg text-[#ABC766]">{ restaurant?.title} </Text>is being prepared

          </Text>
        </View>
      </SafeAreaView> 

      <MapView
      initialRegion={{
        latitude: -14.070000,
        longitude: -75.725281,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
       
      }}
      className=" flex-1 -mt-10 z-0"
     
      >
        <Marker  coordinate={{
          latitude: -14.070000,
          longitude: -75.725281,
          
        }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier="origin"
          pinColor="#ABC766"
        />
      </MapView>

      <SafeAreaView className="bg-white  flex-row items-center  space-x-5 h-28 ">
        <Image source={{
          uri: "https://thumbs.dreamstime.com/b/delivery-line-vector-icon-delivery-line-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-website-design-138134680.jpg"
        
        }}

        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className=" text-lg ">Cristobal Matute</Text>
        <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#ABC766] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}
