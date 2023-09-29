import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import LocationService from '../services/LocationServices'
import { RootStackParamList } from '../screens/Index'
import ButtonDefault from './ButtonDefault'
import {StyleSheet} from 'react-native'
import { Colors } from '../constants'

export default function WeatherCurrent () {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleFechWeather = useCallback(async () => {
    setError(false)
    setLoading(true)
    try {
      const position = await LocationService.getCurrentPosition()
      navigation.navigate('weather', position)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  },[navigation])

  return (
    <ButtonDefault 
      loading={loading}
      testID='weather-current' 
      label='weather at my position' 
      onPress={handleFechWeather} 
      style={error && styles.error}
    />
  )
}

const styles = StyleSheet.create({
  error: {
    borderColor: Colors.ERROR,
    borderWidth: 1,
    borderRadius: 10
  }
})