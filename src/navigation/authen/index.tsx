import React from 'react';
import {Home} from '@features/authentication/home';
import {APP_SCREEN} from '@navigation/screenTypes';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@features/authentication/splash';

const Main = createStackNavigator();

export const MainScreen = () => (
  <Main.Navigator
    initialRouteName={APP_SCREEN.HOME}
    screenOptions={{headerShown: false}}>
    <Main.Screen name={APP_SCREEN.HOME} component={Home} />
    <Main.Screen name={APP_SCREEN.SPLASH} component={SplashScreen} />
  </Main.Navigator>
);
