import { View, Text, TextInput, Alert } from 'react-native'
import { Button, FAB, Overlay } from '@rneui/base'
import { useState } from 'react';
import useForm from '../api/Hooks/useForm';

const baseState = () => ({
    front: '',
    back: '',
    detail: '',
})

const AddNewCard = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useForm(baseState())

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const addNewCard = () => {
Alert.alert(`${form.back}, ${form.detail}, ${form.front}`)
  }

  return (
    <View>
      <FAB
        icon={{ name: 'add', color: 'white' }}
        buttonStyle={{ backgroundColor: 'red' }}
        onPress={show}
      ></FAB>
      <Overlay 
        isVisible={visible} 
        onBackdropPress={hide} 
        overlayStyle={{backgroundColor: 'white'}}
      >
        <View>
            <TextInput 
              placeholder='Front...'
              value={form.front}
              onChangeText={(value) => setForm({
                name: 'front',
                value
              })}
            ></TextInput>
            <TextInput 
              value={form.back}
              onChangeText={(value) => setForm({
                name: 'back',
                value
              })}
              placeholder='Back...'
            ></TextInput>
            <TextInput 
              value={form.detail}
              onChangeText={(value) => setForm({
                name: 'detail',
                value
              })}
              placeholder='Detail...'
            ></TextInput>

            <View>
                <Button title='Add' onPress={addNewCard}></Button>
                <Button title='Close' onPress={hide}></Button>
            </View>
        </View>
      </Overlay>
    </View>
  )
}

export default AddNewCard