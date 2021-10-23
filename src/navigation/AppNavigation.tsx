
import { isIos } from '@common';
import { AppTheme } from '@config/type';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { MyAppTheme } from '@theme';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

import { navigationRef } from './navigationService';
import { RootNavigation } from './RootNavigator';

export const AppContainer = () => {

  // render
  return (
    <NavigationContainer ref={navigationRef} theme={MyAppTheme['default']} >
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <RootNavigation token={'token'} />
      </>
    </NavigationContainer>
  );
};
