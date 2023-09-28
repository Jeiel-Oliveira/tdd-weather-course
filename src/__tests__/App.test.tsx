import { render } from "@testing-library/react-native"
import App from "../App"
import Index from "../screens/Index"
import { View } from "react-native"

jest.mock('../screens/Index')

describe('App', () => {
  test('Should render routes', () => {
    (Index as jest.Mock).mockReturnValueOnce(<View testID='mock-routes'/>)
    const wrapper = render(<App/>)
    wrapper.getByTestId('mock-routes')
  })
})