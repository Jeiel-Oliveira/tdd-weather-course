import { act, fireEvent, render, waitFor } from "@testing-library/react-native"
import WeatherCurrent from "../WeatherCurrent"
import { useNavigation } from "@react-navigation/native"
import LocationService from "../../services/LocationServices"

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()})
  }
})

describe('WeatherCurrent', () => {
  test('Should Render correctly', () => {
    const wrapper = render(<WeatherCurrent/>)
    wrapper.getByTestId('weather-current')
  })

  test('Should render label', () => {
    const wrapper = render(<WeatherCurrent/>)
    wrapper.getByText('weather at my position')
  })

  test('Should navigate to weather screen with location', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate})

    const wrapper = render(<WeatherCurrent/>)
    const button = wrapper.getByTestId('weather-current')
    fireEvent.press(button)

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('weather', {
        latitude: 0,
        longitude: 0
      })
    })
  })

  describe('loader', () => {
    test('Should be rendered whem position is being fetched', async () => {
      let mockResolve!: (position: {latitude: number, longitude: number}) => void
      jest.spyOn(LocationService, 'getCurrentPosition').mockImplementationOnce(
        () => 
          new Promise((resolve) => {
            mockResolve = resolve
          })
      )

      const wrapper = render(<WeatherCurrent/>)
      const button = wrapper.getByTestId('weather-current')
      fireEvent.press(button)
      
      await expect(wrapper.findByTestId('button-loading')).resolves.toBeDefined()

      await act(async () => {
        await mockResolve({latitude: 0, longitude: 0})
      })
    })
  })
})
