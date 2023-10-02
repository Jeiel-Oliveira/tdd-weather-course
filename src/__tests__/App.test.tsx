import { render } from "@testing-library/react-native"
import App from "../App"
import { View } from "react-native"
import { Provider } from "react-redux"
import Index from "../screens/Index"
import store from "../store"

jest.mock('../screens/Index', () => jest.fn())
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual<object>('react-redux'),
    Provider: jest.fn()
  }
})

describe('App', () => {
  test('Should render routes', () => {
    (Provider as jest.Mock).mockImplementationOnce(({children}) => children)

    const mockIndex = Index as jest.Mock

    mockIndex.mockReturnValueOnce(<View testID='mock-routes'/>)
    const wrapper = render(<App/>)
    wrapper.getByTestId('mock-routes')
  })

  test('Should render Provider', () => {
    let providerStore!: typeof store

    const mockProvider = Provider as jest.Mock
    mockProvider.mockImplementationOnce(({store}) => {
      providerStore = store
      return <View testID="mock-provider"/>
    })

    const wrapper = render(<App/>)
    wrapper.getByTestId('mock-provider')
    expect(providerStore).toBe(store)
  })
})