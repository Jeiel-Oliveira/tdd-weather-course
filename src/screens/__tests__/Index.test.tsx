import { render, waitFor } from "@testing-library/react-native"
import Index, { RootStackParamList } from "../Index"
import React, { useEffect } from 'react';
import { View } from "react-native";
import Home from "../Home";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import WeatherScreen from "../WeatherScreen";

jest.mock('../Home', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

jest.mock('../Home', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Index', () => {
  test('Should render App by default', async ()=> {
    (Home as jest.Mock).mockReturnValueOnce(<View testID='mock-home'/>)
    const wrappper = render(<Index/>)

    await waitFor(() => {
      wrappper.getByTestId('mock-home')
    })
  })

  test('Should render weather screen on "weather route"', async () => {
    (Home as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation<NavigationProp<RootStackParamList>>()

      useEffect(() => {
        navigation.navigate('weather', {latitude: 0, longitude: 0})
      }, [navigation])

      return null
    })

    (WeatherScreen as jest.Mock).mockReturnValueOnce(<View testID='mock-weather'/>)
    const wrappper = render(<Index/>)
    
    await waitFor(() => {
      wrappper.getByTestId('mock-weather')
    })
  })
})