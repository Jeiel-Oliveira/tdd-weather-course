import { render } from "@testing-library/react-native"
import WeatherCoordinates from "../WeatherCoordinates"

describe('WeatherCoordinates', () => {
  test('Should Render correctly', () => {
    const wrapper = render(<WeatherCoordinates/>)
    wrapper.getByTestId('weather-coordinates')
  })
})