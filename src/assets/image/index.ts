/* eslint-disable camelcase */
export const images = {
  bg_wallpaper: require('./source/bg.png'),
  default: require('./source/default.png'),
  wall: require('./source/wall.jpeg'),
  tet_1: require('./source/tet_1.jpeg'),
  tet_2: require('./source/tet_2.jpeg'),
  tet_3: require('./source/tet_3.jpeg'),
  logo: require('./source/logo.png'),
};

export type ImageTypes = keyof typeof images;
