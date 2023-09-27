import { render } from "@testing-library/react-native"
import WeatherCurrent from "../WeatherCurrent"

describe('WeatherCurrent', () => {
  test('Should Render correctly', () => {
    const wrapper = render(<WeatherCurrent/>)
    wrapper.getByTestId('weather-current')
  })
})