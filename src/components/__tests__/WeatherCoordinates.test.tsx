import { fireEvent, render, waitFor } from "@testing-library/react-native"
import WeatherCoordinates from "../WeatherCoordinates"
import { useNavigation } from "@react-navigation/native"

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn()
  }
})

describe('WeatherCoordinates', () => {
  test('Should Render correctly', () => {
    const wrapper = render(<WeatherCoordinates/>)
    wrapper.getByTestId('weather-coordinates')
  })

  test('Should navigate to weather screen with given coordinates when valid form is submit', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate})

    const wrapper = render(<WeatherCoordinates/>)

    const fields = {
      latitude: wrapper.getByTestId('weather-coordinates-latitude'),
      longitude: wrapper.getByTestId('weather-coordinates-longitude')
    }

    fireEvent.changeText(fields.latitude, '0')
    fireEvent.changeText(fields.longitude, '0')

    const button = wrapper.getByTestId('button-default')
    fireEvent.press(button)

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('weather', {
        latitude: 0,
        longitude: 0
      })
    })
  })
})