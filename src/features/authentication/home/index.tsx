import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Block, Screen, Text, Wallpaper} from '@components';
import {AppTheme} from '@config/type';
import {useTheme} from '@react-navigation/native';
import {textPresets} from '@library/components/Text/Text.presets';
import AnimatedLottieView from 'lottie-react-native';
import {lottiesComponents} from '@assets/lotties';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Dimensions} from 'react-native';
import moment from 'moment';
import {images} from '@assets/image';

const {width} = Dimensions.get('window');

const deadline = '2022-02-01T00:00:00+07:00';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: (width - 24 * 5) / 4,
  strokeWidth: 2,
  trailColor: '#D5C5B2',
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const renderTime = (
  dimension: {} | null | undefined,
  time: {} | null | undefined,
) => {
  return (
    <Block alignItems={'center'} justifyContent={'center'}>
      <Text style={textPresets.textTET}>{time}</Text>
      <Text style={textPresets.textTET1}>{dimension}</Text>
    </Block>
  );
};

const HomeComponent = () => {
  const {colors}: AppTheme = useTheme();

  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = Date.parse(deadline) / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  console.log(moment().format());
  // render
  return (
    <Screen statusBarStyle={'light-content'} statusColor={colors.red}>
      <Block
        block
        padding={24}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}>
        <Block position={'absolute'} top={0} left={0}>
          <Wallpaper backgroundImage={'wall'} />
        </Block>
        <Block zIndex={2} position={'absolute'} top={100} left={24} right={0}>
          <AnimatedLottieView
            source={lottiesComponents.firework}
            autoPlay
            loop
            style={{
              height: 200,
              width: '100%',
            }}
          />
          <Text style={textPresets.textTET1}>2022</Text>
        </Block>
        <Block
          position={'absolute'}
          bottom={24}
          right={24}
          left={24}
          direction={'row'}
          width={'100%'}
          justifyContent={'space-between'}>
          <CountdownCircleTimer
            {...timerProps}
            colors={[['#7E2E84']]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}>
            {({elapsedTime}) =>
              renderTime('Ngày', getTimeDays(daysDuration - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[['#D14081']]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={totalElapsedTime => [
              remainingTime - totalElapsedTime > hourSeconds,
            ]}>
            {({elapsedTime}) =>
              renderTime('Giờ', getTimeHours(daySeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[['#EF798A']]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={totalElapsedTime => [
              remainingTime - totalElapsedTime > minuteSeconds,
            ]}>
            {({elapsedTime}) =>
              renderTime('Phút', getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[['#218380']]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={totalElapsedTime => [
              remainingTime - totalElapsedTime > 0,
            ]}>
            {({elapsedTime}) => renderTime('Giây', getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        </Block>
      </Block>
    </Screen>
  );
};

export const Home = memo(HomeComponent, isEqual);
