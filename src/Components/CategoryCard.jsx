import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ROUTES } from '../constants/navigation.constant'

const CategoryCard = ({ category }) => {
  const navigation = useNavigation()
  const { name } = category
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.cards, { category })}
      style={{ padding: 24, backgroundColor: '#D7D7D7', marginBottom: 24 }}
    >
        <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard