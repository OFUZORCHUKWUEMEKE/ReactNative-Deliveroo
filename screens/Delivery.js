import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import { MaterialIcons } from '@expo/vector-icons';
import MapView , {Marker} from 'react-native-maps'

const Delivery = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    return (
        <View className="bg-[#00CCBB] flex-1 py-4">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={()=>navigation.goBack}>
                        <MaterialIcons name="cancel" size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg font-bolder">Order Help</Text>
                </View>
                <View className="bg-white mx-white rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text>Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: 'https://links.papareact.com/fls'
                            }}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar size={20} color="#00CCBB" indeterminate={true}/>
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being Prepared
                    </Text>

                </View>
            </SafeAreaView>
            <MapView
              initialRegion={{
                latitude:6.465422,
                longitude:3.406448,
                latitudeDelta:0.005,
                longitudeDelta:0.005
              }}
              className="flex-1 -mt-10 z-0"
              mapType='mutedStandard'
            >
              <Marker
                coordinate={{
                    latitude: 6.524,
                    longitude:3.37
                }}
                title={restaurant.title}
                description={restaurant.short_description}
                identifier="origin"
                pinColor='#00CCBB'
              />
            </MapView>
            <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
                <Image source={{uri:"https://links.papareact.com/wru"}} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"/>
                <View className="flex-1">
                    <Text className="text-lg">Ofuzor Emeke</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] TE==text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default Delivery