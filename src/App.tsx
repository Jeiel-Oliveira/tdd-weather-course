import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavigationWrapper from './screens/NavigationWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  )
}
