import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import WeatherScreen from './WeatherScreen';

export type RootStackParamList = {
  home: undefined
  weather: {latitude: number, longitude: number} | undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

export default function NavigationWrapper () {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        screenOptions={{headerShown: false}}
      >
        <RootStack.Screen
          name='home'
          component={Home}
        />

        <RootStack.Screen
          name='weather'
          component={WeatherScreen}
          initialParams={{latitude: 0, longitude: 0}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
