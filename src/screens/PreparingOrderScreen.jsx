import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  setTimeout(()=> {
    navigation.navigate('DeliveryScreen') 
  }, 4000)
  return (

   
    <SafeAreaView className="bg-[#ABC766] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/deliveroo.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center" >
          Waiting for confirmation...
        </Animatable.Text>
        <Progress.Circle size={60} indeterminate={true} />
      
      
    </SafeAreaView>
  )
}
