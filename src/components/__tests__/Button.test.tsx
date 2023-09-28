import ButtonDefault from "../ButtonDefault"
import { fireEvent, render } from "@testing-library/react-native"

describe('button', () => {
  test('Should render correctly', () => {
    const wrapper = render(<ButtonDefault label='' onPress={jest.fn()}/>)
    const Button = wrapper.getByTestId('button-default')
    expect(Button).toBeTruthy
  })

  test('Should render loader when loading', () => {
    const wrapper = render (
      <ButtonDefault label='' onPress={jest.fn()} loading />
    )
    wrapper.getByTestId('button-loading')
  })

  test('Should call given onPress when clicked', () => {
    const mockOnpress = jest.fn()
    const wrapper = render(<ButtonDefault label='' onPress={mockOnpress}/>)
    const button = wrapper.getByTestId('button-default')

    fireEvent.press(button)
    expect(mockOnpress).toHaveBeenCalled
  })

  test('Should render label', () => {
    const wrapper = render(
      <ButtonDefault label='mock label' onPress={jest.fn()}/>
    )

    wrapper.getByText('mock label')
  })

  test('Should acccept custom view props', () => {
    const wrapper = render(
      <ButtonDefault testID='mock-test-id' label='' onPress={jest.fn()}/>
    )

    wrapper.getByTestId('mock-test-id')
  })

})