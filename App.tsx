import { isIos } from '@common';
import i18n from '@library/utils/i18n/i18n';
import { AppContainer } from '@navigation/AppNavigation';
import { translate } from '@utils';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Text, UIManager, View } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
  KeyboardManager.isKeyboardShowing().then((isShowing) => { });
}

export const MyApp = () => {
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
