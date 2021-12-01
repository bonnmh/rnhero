import React, {Suspense, useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import {Button, UIManager} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TrackPlayer from 'react-native-track-player';
import RNBootSplash from 'react-native-bootsplash';

import {isIos} from '@common';
import i18n from '@library/utils/i18n/i18n';
import {AppContainer} from '@navigation/AppNavigation';
import CodePush from 'react-native-code-push';
import {useRegisterFCM} from '@config/firebase/Hooks';

if (!isIos) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

if (isIos) {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(false);
  // KeyboardManager.setToolbarDoneBarButtonItemText("Done");
  // KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
  // KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  // KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
  // KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
  // KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(true);
  KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  KeyboardManager.reloadLayoutIfNeeded();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  KeyboardManager.isKeyboardShowing().then(isShowing => {});
}

const _App = () => {
  useRegisterFCM();

  useEffect(() => {
    const init = async () => {
      await TrackPlayer.setupPlayer({});
    };

    init().finally(() => {
      setTimeout(() => {
        (async () => {
          await RNBootSplash.hide({fade: true});
          console.log('Bootsplash has been hidden successfully');
        })();
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={null}>
          <AppContainer />
        </Suspense>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

const App = __DEV__
  ? _App
  : CodePush({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    })(_App);

export default App;
