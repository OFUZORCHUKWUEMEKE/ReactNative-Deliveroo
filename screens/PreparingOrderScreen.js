import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import  * as Animatable from "react-native-animatable"
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },4000)   
    })
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
         source={{uri:'https://i.gifer.com/TwuB.gif'}}
         animatiom="slideInUp"
         iterationCount={1}
         className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant To acccept Order
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;