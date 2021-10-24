/* eslint-disable camelcase */
export const images = {
  bg_wallpaper: require('./source/bg.png'),
  default: require('./source/default.png'),
  man_model: require('./source/man_model.png'),
};

export type ImageTypes = keyof typeof images;
