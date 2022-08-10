import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import BasktetIcon from '../components/BasktetIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectRestaurant, setRestaurant } from '../features/restaurantSlice';
const RestaurantScreen = () => {
    const dispatch = useDispatch()
    const { params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } } = useRoute()
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    useEffect(()=>{
        dispatch(setRestaurant({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }))
        console.log(restaurant)

    },[dispatch])
    return (
        <>
        <BasktetIcon/>
            <ScrollView>
                <View className="relative">
                    <Image source={{
                        uri: urlFor(imgUrl).url()
                    }} className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                        className="absolute top-14 left-5 bg-gray-100 rounded-full">
                        <Ionicons name="arrow-back" size={24} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-2">
                                <Ionicons name="star" size={22} color="green" opacity={0.5} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">
                                        {rating}
                                    </Text> . {genre}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-2">
                                <Ionicons name="ios-location" size={24} color="gray" />
                                <Text className="text-xs text-gray-500">
                                    NearBy . {address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <AntDesign name="questioncircleo" size={24} color="gray" />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a food allergy?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            nmae={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>

            </ScrollView>
        </>
    )
}

export default RestaurantScreen;    