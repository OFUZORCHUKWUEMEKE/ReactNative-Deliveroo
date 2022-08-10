import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
const CategotyCard = ({imgUrl,title}) => {

  return (
    <TouchableOpacity className="mr-2 relative">
        <Image 
          source={{
            uri:imgUrl
          }}
          className="h-20 w-20"
        />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
export default CategotyCard;