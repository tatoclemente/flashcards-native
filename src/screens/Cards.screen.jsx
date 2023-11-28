import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AddNewCard from '../Components/AddNewCard'

const Cards = () => {
  const route = useRoute()
//   const { category } = route.params
  return (
    <View>
        
      <AddNewCard />
      <Text>Category: </Text>
    </View>
  )
}

export default Cards