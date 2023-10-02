import { createStore } from 'redux'
import rootReducer from '../store/reducers'
import { ElementType, ReactElement, ReactNode } from 'react'
import { RenderOptions, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import React from 'react'

const store = createStore(rootReducer)

type CustomRenderOptions = {
  store?: typeof store
}

const AlltheProviders = (options: CustomRenderOptions) => ({
    children,
  } : {
    children: ReactNode
  }) => {
  return <Provider store={options.store || store}>{children}</Provider> 
}

const customRender = (ui: ReactElement, options: CustomRenderOptions & Omit<RenderOptions, 'queries'> = {}, ) => {
  const { store, ...others} = options
  return render(ui, {
    wrapper: AlltheProviders({store}) as React.ComponentType,
    ...others,
  })

}

export * from '@testing-library/react-native'
export {customRender as render}