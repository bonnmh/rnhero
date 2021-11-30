/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['source.uri', 'nested']);

AppRegistry.registerComponent(appName, () => App);

//add this line to register the TrackPlayer
TrackPlayer.registerPlaybackService(() => require('./service.js'));
