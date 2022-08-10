import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectBasketTotal } from '../features/basketSlice'

const BasktetIcon = () => {
    const items = useSelector((state)=>state.basket.items)
    const basketTotal = useSelector(selectBasketTotal)
    const navigation = useNavigation()
    if(items.length===0) return null
  return (
    <View className="absolute bottom-10 w-full z-50">
       <TouchableOpacity onPress={()=>navigation.navigate('Basket')} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center text-white space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
          <Text className="text-white flex-1 text-center">View Basket</Text>
          <Text className="text-lg text-white font-extrebold">$ {basketTotal}</Text>
       </TouchableOpacity>
    </View>
  )
}

export default BasktetIcon