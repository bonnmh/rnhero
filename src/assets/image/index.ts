/* eslint-disable camelcase */
export const images = {
  bg_wallpaper: require('./source/bg.png'),
  default: require('./source/default.png'),
  wall: require('./source/wall.jpeg'),
};

export type ImageTypes = keyof typeof images;
