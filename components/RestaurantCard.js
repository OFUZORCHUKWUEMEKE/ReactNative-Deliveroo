import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
    const navigation = useNavigation()
   return (
      <TouchableOpacity 
       onPress={()=>{
               navigation.navigate('Restaurants',{
                  id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat 
               })
       }}
      className="bg-white mr-3 shadow">
         <Image
            source={{
               uri: urlFor(imgUrl).url()
            }}
            className="h-36 w-64 rounded-sm"
         />
         <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
               <AntDesign name="star" opacity={0.5} size={24} color="green" />
               <Text>{rating} . {genre}</Text>
            </View>
            <View className="flex-row items-center space-x-2 pt-2">
               <Ionicons name="ios-location-sharp" size={24} color="black" />
               <Text className="text-xs text-gray-500">NearBy . {address}</Text>
            </View>
            {/* <View>
               <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            </View> */}
         </View>
      </TouchableOpacity>
   )
}

export default RestaurantCard