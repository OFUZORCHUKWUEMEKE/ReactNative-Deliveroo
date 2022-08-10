import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
// import {ChevronDownIcon} from 'react-native-heroicons/outline'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'
const HomeScreen = () => {
  const [categories, setFeaturedCategories] = useState([])
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"]{
       ...,
       restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
       }
    }
    `).then((data) => {
      setFeaturedCategories(data)
    })
  }, [])

  // console.log(categories)    




  const color = "#00CCBB"
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-4 items-center m-4 px-1 space-x-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-7 w-7 bg-gray-300  p-4 rounded-full"
        />
        <View className="flex-1">
          {/* <Text className="font-bold text-gray-400 text-xs">Chop Life</Text> */}
          <Text className="font-bold text-xl text-center text-[#00CCBB]">CHOP LIFE
            {/* <AntDesign name="down" size={24} color="#00CCBB" /> */}
          </Text>
        </View>
        <AntDesign name="adduser" size={24} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center pb-2 space-x-2 mx-4">
        <View className="flex-row flex-1 p-3 bg-gray-300 space-x-3">
          <AntDesign name="search1" size={24} color={color} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' className="rounded-md" />
        </View>
        <Ionicons name="settings" size={24} color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <Categories />
        {/* Featured Rows */}
        {categories?.map((category) => (
          <FeaturedRow
            key={category?._id}
            id={category?._id}
            title={category?.name}
            description={category?.short_description}
          />
        ))}

        {/* Tasty Discounts */}
      
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeScreen;