import { render } from "@testing-library/react-native"
import WeatherCurrent from "../WeatherCurrent"

describe('WeatherCurrent', () => {
  test('Should Render correctly', () => {
    const wrapper = render(<WeatherCurrent/>)
    wrapper.getByTestId('weather-current')
  })

  test('Should navigate to weather screen with location', () => {
    throw new Error('Test mot implemented')
  })
})
