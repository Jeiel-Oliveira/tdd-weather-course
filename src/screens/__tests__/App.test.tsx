import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { render } from '@testing-library/react-native'
import moment from 'moment';
import WeatherCurrent from '../../components/WeatherCurrent';
import { View } from 'react-native';
import WeatherCoordinates from '../../components/WeatherCoordinates';

function add(a: number, b: number) {
  return a + b
}

jest.mock('../../components/WeatherCoordinates', () => jest.fn().mockReturnValue(null))
jest.mock('../../components/WeatherCurrent', () => jest.fn().mockReturnValue(null))

describe('App', () => {
  test('Should add two numbers correctly', () => {
    expect(add(2, 2)).toBe(4)
  })

  test('Should render correclty 1', () => {
    renderer.create(<App />)
  })

  test('Should render correclty 2', () => {
    const wrapper = render(<App />)
    wrapper.getByTestId('app')
  })

  describe('Title section', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.useFakeTimers()
      jest.setSystemTime(946684800000)
    })
  
    afterEach(() => {
      jest.useRealTimers()
    })
  
    test('should display current date', () => {
      const { getByText } = render(<App />)
      expect(getByText('Dec 31, 1999')).toBeTruthy()
    })
  
    test('should display current day', () => {
      const { getByText } = render(<App />)
      expect(getByText('Friday')).toBeTruthy()
    })
  })

  test('Should contain a section to get current weather with WeatherCurrent', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID={'mock-weather-current'}/>
    )
    const wrapper = render(<App/>)
    const weatherCurrent = wrapper.getByTestId('mock-weather-current')
    expect(weatherCurrent).toBeTruthy()
  })
  
  test('Should contain a section to get current weather with WeatherCoordinates', () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(
      <View testID={'mock-weather-coordinates'}/>
    )
    const wrapper = render(<App/>)
    const weatherCoordinates = wrapper.getByTestId('mock-weather-coordinates')
    expect(weatherCoordinates).toBeTruthy()
  })

  test('Should contain a divider', () => {
    const wrapper = render(<App/>)
    const divider = wrapper.getByTestId('app-divider')
    expect(divider).toBeTruthy()
  })
})