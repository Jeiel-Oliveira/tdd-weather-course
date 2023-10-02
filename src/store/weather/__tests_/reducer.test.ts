import Status from "../../../types/Status"
import { WeatherType, nullWeather } from "../../../types/Weather"
import { fetchWeather, fetchWeatherFailure, fetchWeatherReset, fetchWeatherSuccess } from "../actions"
import reducer from "../reducer"

describe('Store/weather', () => {
  const initialState = {
    status: Status.START,
    error: '',
    weather: nullWeather
  }

  describe('Reducer', () => {
    const mockWeather: WeatherType = {
      city: 'mock-city',
      description: 'mock-description',
      humidity: 100,
      icon: 'mock-icon',
      pressure: 1000,
      temperature: 10,
      windspeed: 10
    }

    test('Should return initialState', () => {
      const state = reducer(undefined, {type: '@@init'})
      expect(state).toEqual(initialState)
    })

    test('Should handle fethcWeather action', () => {
      const state = reducer(undefined, fetchWeather(0, 0))
      expect(state).toEqual({
        status: Status.LOADING,
        error: '',
        weather: nullWeather
      })
    })

    test('Should handle fethcWeatherSuccess action', () => {
      const state = reducer(undefined, fetchWeatherSuccess(mockWeather))
      expect(state).toEqual({
        status: Status.SUCCESS,
        error: '',
        weather: mockWeather
      })
    })

    test('Should handle fetchWeatherFailure action', () => {
      const state = reducer(undefined, fetchWeatherFailure('mock-error'))
      expect(state).toEqual({
        status: Status.FAILURE,
        error: 'mock-error',
        weather: nullWeather
      })
    })

    test('Should handle fetchWeatherReset action', () => {
      const success = reducer(undefined, fetchWeatherSuccess(mockWeather))
      const state = reducer(success, fetchWeatherReset())
      expect(state).toEqual(initialState)
    })
  })
})