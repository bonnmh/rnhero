import { Platform } from 'react-native';

import { FontFamily as FontType } from '../config/type';

export const FontDefault: FontType = {
  primary: Platform.select({
    ios: 'Roboto-Medium',
    android: 'Roboto-Medium',
  }) as string,
  secondary: Platform.select({
    ios: 'Roboto-Medium',
    android: 'Roboto-Medium',
  }) as string,
  viaoda: Platform.select({
    ios: 'ViaodaLibre-Regular',
    android: 'ViaodaLibre-Regular',
  }) as string,
  ruthie: Platform.select({
    ios: 'Ruthie-Regular',
    android: 'Ruthie-Regular',
  }) as string

};
export type FontFamily = keyof typeof FontDefault;
