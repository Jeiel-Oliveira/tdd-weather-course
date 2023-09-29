import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import LocationService from '../services/LocationServices'
import { RootStackParamList } from '../screens/Index'
import ButtonDefault from './ButtonDefault'

export default function WeatherCurrent () {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [loading, setLoading] = useState(false)

  const handleFechWeather = useCallback(async () => {
    setLoading(true)
    try {
      const position = await LocationService.getCurrentPosition()
      navigation.navigate('weather', position)
    } catch (err) {
      console.warn('err')
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
    />
  )
}