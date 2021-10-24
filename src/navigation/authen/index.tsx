import React from 'react';
import { Home } from '@features/authentication/home';
import { APP_SCREEN } from '@navigation/screenTypes';
import { createStackNavigator } from '@react-navigation/stack';
import { Landing } from '@features/landing';

const Main = createStackNavigator();

export const MainScreen = () => (
  <Main.Navigator
    initialRouteName={APP_SCREEN.LANDING}
    screenOptions={{ headerShown: false }}>
    <Main.Screen name={APP_SCREEN.LANDING} component={Landing} />
    <Main.Screen name={APP_SCREEN.HOME} component={Home} />
  </Main.Navigator>
);
