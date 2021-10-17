import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from './authen/index';
import {APP_SCREEN, RootStackParamList} from './screenTypes';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = ({token}: {token?: string}) => {

  // render
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {token === undefined ? (
        <RootStack.Screen
          options={{animationTypeForReplace: 'pop', gestureEnabled: false}}
          name={APP_SCREEN.UN_AUTHORIZE}
          component={MainScreen}
        />
      ) : (
        <RootStack.Screen
          options={{gestureEnabled: false}}
          name={APP_SCREEN.AUTHORIZE}
          component={MainScreen}
        />
      )}
    </RootStack.Navigator>
  );
};
