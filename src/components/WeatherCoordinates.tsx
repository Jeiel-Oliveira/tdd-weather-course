import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { RootStackParamList } from '../screens/Index'
import ButtonDefault from './ButtonDefault'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../constants'
import * as yup  from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  latitude: string
  longitude: string
}

const defaultValues: FormValues = {
  latitude: '',
  longitude: ''
}

const validationSchema = yup.object().shape({
  latitude: yup.number(),
  longitude: yup.number()
})

export default function WeatherCoordinates () {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const form = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onChange'
  })

  const handleSubmit = form.handleSubmit(values => {
    navigation.navigate('weather', values)
  })

  return (
    <View 
      testID='weather-coordinates'
    >
      <View
        style={styles.imputs}
      >
        <Controller 
          control={form.control}
          render={({ field: { onChange, ...p }, fieldState }) => (
            <TextInput
              {...p}
              testID='weather-coordinates-latitude'
              onChangeText={onChange}
              style={styles.imput}
              placeholder='Latitude'
              placeholderTextColor={Colors.GRAY}
            />
          )}
          name='latitude'
        />

        <Controller 
          control={form.control}
          render={({ field: { onChange, ...p }, fieldState }) => (
            <TextInput
              {...p}
              testID='weather-coordinates-longitude'
              onChangeText={onChange}
              style={styles.imput}
              placeholder='Longitude'
              placeholderTextColor={Colors.GRAY}
            />
          )}
          name='longitude'
        />
      </View>

      <ButtonDefault onPress={handleSubmit} label='find'/>

    </View>
  )
}

const styles = StyleSheet.create({
  imputs: {
    flexDirection: 'column',
    marginBottom: 15
  },
  imput: {
    backgroundColor: Colors.TRANSPARENT,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: Colors.WHITE
  }
})