import { waitFor } from "@testing-library/react-native"
import React from 'react';
import { View } from "react-native";
import Home from "../Home";
import NavigationWrapper from "../NavigationWrapper";
import { render } from "../../utils/test.utils";

jest.mock('../Home', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

jest.mock('../WeatherScreen', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual<object>('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn()
  }),
}));

describe('Index', () => {
  test('Should render App by default', async ()=> {
    (Home as jest.Mock).mockReturnValueOnce(<View testID='mock-home'/>)
    const wrappper = render(<NavigationWrapper />)

    await waitFor(() => {
      wrappper.getByTestId('mock-home')
    })
  })
})
