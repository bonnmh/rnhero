import { AppTheme } from '@config/type';

import { ColorDefault, ColorDark } from './color';
import { SpacingDefault } from './spacing';

const Default: AppTheme = {
  dark: false,
  colors: ColorDefault,
  spacing: SpacingDefault
};

const Dark: AppTheme = {
  dark: true,
  colors: ColorDark,
  spacing: SpacingDefault
};

export const MyAppTheme = {
  default: Default,
  dark: Dark,
};

export type ThemeType = keyof typeof MyAppTheme;
