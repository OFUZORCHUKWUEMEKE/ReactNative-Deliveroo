import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
        //   console.log(groupedItems)  
        //   console.log(restaurant)
    }, [items])

    return (
        <SafeAreaView className="py-4 flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <MaterialIcons name="cancel" size={40} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center py-3 px-4 space-x-4 bg-white my-5">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map((key, items) => (
                        <>
                            <View key="2122" className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text>{restaurant.length} </Text>
                                <Image
                                    source={{
                                        uri: urlFor(restaurant?.imgUrl).url()
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">{restaurant.title}</Text>
                                <TouchableOpacity>
                                    <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View key="123" className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text>{restaurant.length} </Text>
                                <Image
                                    source={{
                                        uri: urlFor(restaurant?.imgUrl).url()
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">{restaurant.title}</Text>
                                <TouchableOpacity>
                                    <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View key="1452" className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text>{restaurant.length} </Text>
                                <Image
                                    source={{
                                        uri: urlFor(restaurant?.imgUrl).url()
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">{restaurant.title}</Text>
                                <TouchableOpacity>
                                    <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>

                    ))}

                </ScrollView>
                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">{basketTotal}</Text>
                    </View>
                </View>
                <View className="p-5 bg-white  space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">{basketTotal}</Text>
                    </View>
                </View>
                <View className="p-5 bg-white  space-y-4">
                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="text-gray-400 font-extrabold">{basketTotal + 100}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen