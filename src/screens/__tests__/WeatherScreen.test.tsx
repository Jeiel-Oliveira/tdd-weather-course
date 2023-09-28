import { render } from "@testing-library/react-native"
import WeatherScreen from "../WeatherScreen"

describe('Weather Screen', () => {
  test('Should render correclty 2', () => {
    const wrapper = render(<WeatherScreen />)
    wrapper.getByTestId('weather-escreen')
  })
})