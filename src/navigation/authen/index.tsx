import React from 'react';
import {Home} from '@features/authentication/home';
import {APP_SCREEN} from '@navigation/screenTypes';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@features/authentication/splash';
import BlessingsScreen from '@features/authentication/blessings';

const Main = createStackNavigator();

export const MainScreen = () => (
  <Main.Navigator
    initialRouteName={APP_SCREEN.HOME}
    screenOptions={{headerShown: false}}>
    <Main.Screen name={APP_SCREEN.HOME} component={Home} />
    <Main.Screen name={APP_SCREEN.SPLASH} component={SplashScreen} />
    <Main.Screen name={APP_SCREEN.BLESSINGS} component={BlessingsScreen} />
  </Main.Navigator>
);
