import { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/db'
import { ROUTES } from '../constants/navigation.constant'
import { TextInput } from 'react-native-gesture-handler'
import useForm from '../api/Hooks/useForm'

const baseState = () => ({
  email: '',
  password: '',
  confirmation: '',
})

const SingUp = () => {
  const navifation = useNavigation()
  const [user, setUser] = useState()
  const [form, setForm] = useForm(baseState())
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(null)


  const handleChange = ({ value, name }) => {
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const createUser = useCallback(async () => {
    const { password, email } = form

    const [error, userCredentials] = await to(
      createUserWithEmailAndPassword(auth, email, password)
    )

    if (error) {
      setError(MESSAGES[error.code] || MESSAGES.default)
    } else {
      setForm(baseState())
      auth.currentUser = userCredentials.user
      setUser(userCredentials.user)
    }
  }, [form])

  useEffect(() => {
    
  }, [form])

  useEffect(() => {
    setError(null)
  }, [form])

  useEffect(() => {
    if (user) {
      navifation.navigate(ROUTES.categories)
    }
  
  }, [user])
  return (
    <View>
      <View>
        <View>
          <TextInput
            placeholder='Email address'
            textContentType='emailAddress'
            value={form.email}
            onChangeText={(value) => setForm({
              name: 'email',
              value,
            })}
          ></TextInput>
          <TextInput
            placeholder='Password'
            textContentType='newPassword'
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm({
              name: 'password',
              value,
            })}  
          ></TextInput>
          <TextInput
            placeholder='Confirmation'
            textContentType='newPassword'
            secureTextEntry
            value={form.confirmation}
            onChangeText={(value) => setForm({
              name: 'confirmation',
              value
            })}
          ></TextInput>
        </View>
      </View>
    </View>
  )
}

export default SingUp