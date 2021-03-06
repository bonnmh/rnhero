import React from 'react';
import { Home } from '@features/authentication/home';
import { APP_SCREEN } from '@navigation/screenTypes';
import { createStackNavigator } from '@react-navigation/stack';

const Main = createStackNavigator();

export const MainScreen = () => (
  <Main.Navigator screenOptions={{ headerShown: false }}>
    <Main.Screen name={APP_SCREEN.HOME} component={Home} />
  </Main.Navigator>
);
