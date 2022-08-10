import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity'

const FeaturedRow = ({ title, description, id }) => {
    const [restaurants, setRestaurants] = useState([])
    const color = "#00CCBB"
    useEffect(() => {
        const fetch = async () => {
            await sanityClient.fetch(`
            *[_type=="featured" && _id ==  $id]{
                ...,
                restaurants[]->{
                 ...,
                 dishes[]->,
                 type->{
                   name
                 }
                }
             }[0]
              `, { id }).then((data) => {
                setRestaurants(data?.restaurants)
            })
        }
        fetch()

    }, [])
    // console.log(restaurants)
    // console.log(restaurants)
    return (
        <View>
            <View className="mt-4 flex-row itemx-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <AntDesign name="arrowright" size={24} color={color} />
            </View>  
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}   
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="pt-4"
            >
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}

            </ScrollView>
        </View>
    )
}
export default FeaturedRow;