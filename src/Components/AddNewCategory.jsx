import { TextInput } from 'react-native'
import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FAB, Overlay } from '@rneui/base'

const AddNewCategory = () => {
  const [categoryName, setCategoryName] = useState("")
  const [visible, setVisible] = useState(false)
  const [valid, setValid] = useState(false)

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const createNewCategory = () => {
    dcCategories.add({
        name: categoryName,
        userId: user.uid,
    })
    hide()
  }

  useEffect(() => {
    setValid(categoryName.length >= 3)
  }, [categoryName])

  return (
    <View>
      <FAB
        icon={{ name: 'add', color: 'white' }}
        buttonStyle={{ backgroundColor: 'red' }}
        onPress={show}
      ></FAB>
      <Overlay
        overlayStyle={{backgroundColor: 'white'}}
        isVisible={visible}
        onBackdropPress={hide}
      >
        <View>
            <TextInput 
            placeholder='Category Name...' 
            onChangeText={setCategoryName}
            ></TextInput>
            <View>
              <Button 
                title='Add' 
                disabled={!valid} 
                onPress={createNewCategory}
              ></Button>
              <Button title='Close' onPress={hide}></Button>
            </View>
        </View>

      </Overlay>
    </View>
  )
}

export default AddNewCategory