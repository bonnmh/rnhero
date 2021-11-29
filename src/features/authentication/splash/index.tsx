import {Block, Img, Screen, Wallpaper} from '@components';
import React from 'react';

const SplashScreen = () => {
  return (
    <Screen hiddenStatusBar statusBarStyle={'light-content'}>
      <Block position={'absolute'} top={0} left={0} bottom={0}>
        <Wallpaper backgroundImage={'tet_3'} />
      </Block>
    </Screen>
  );
};

export default SplashScreen;
