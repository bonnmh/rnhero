import React, {memo, useEffect, useMemo, useRef, useState} from 'react';
import isEqual from 'react-fast-compare';
import {Block, Screen, Text, Wallpaper, Button} from '@components';
import {AppTheme} from '@config/type';
import {useTheme} from '@react-navigation/native';
import TAnimator from '@library/components/TAnimator';
import {textPresets} from '@library/components/Text/Text.presets';
import AnimatedLottieView from 'lottie-react-native';
import {lottiesComponents} from '@assets/lotties';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Dimensions, Pressable, View} from 'react-native';
import moment from 'moment';
import {images} from '@assets/image';

import TrackPlayer, {
  RepeatMode,
  TrackType,
  useProgress,
} from 'react-native-track-player';
import {Mp3Component} from '@assets/mp3';
import {LinearTextGradient} from 'react-native-text-gradient';
import {FontDefault} from '@theme/typography';

const {width} = Dimensions.get('window');

const tracks: any = [
  {
    id: '1',
    url: Mp3Component.xuanquetoi,
    type: TrackType.Default,
    title: 'Xuân Quê Tôi',
    album: '',
    artist: ' Khánh Bình, Dương Hồng Loan',
    artwork:
      'https://avatar-ex-swe.nixcdn.com/song/2021/01/19/8/d/c/7/1611032883888_500.jpg',
  },
  ,
];

const CHUC_TET: [string] = [
  'Chúc mừng năm mới 2022. Chúc gia đình hạnh phúc, tấn tài tấn lộc tấn tấn an khang.',
  'Chúc Tết đến trăm điều như ý - Mừng xuân sang vạn sự thành công.',
  'Chúc ông bà dồi dào sức khỏe, chúc cha mẹ năm mới an khang, chúc anh chị tiền tài như nước.',
  'Năm cũ qua đi, năm mới đã tới. Chúc bạn bầu trời sức khỏe, biển cả tình thương, đại dương tình bạn, sự nghiệp sáng ngời, gia đình thịnh vượng.',
  'Năm mới chúc bạn thực hiện được những dự định còn dang dở, quen thêm những người bạn mới, đến những vùng đất mới.',
  'Chúc bạn có nhiều người để ý. Tỏ tình nhiều ý. Tiền nhiều nặng ký. Công việc vừa ý. Miệng cười mắt ti hí. Sống lâu một tí.',
  'Chúc năm mới đau đầu vì nhà giàu. Mệt mỏi vì học giỏi. Buồn phiền vì nhiều tiền. Ngang trái vì xinh gái. Mệt mỏi vì đẹp trai. Và mất ngủ vì không có đối thủ.',
  'Năm hết Tết đến, rước lộc vào nhà, quà cáp bao la, mọi nhà no đủ, vàng bạc đầy tủ, gia chủ phát tài, già trẻ gái trai sum vầy hạnh phúc.',
  'Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8.760 giờ sung túc, 525.600 phút thành công và 31.536.000 giây mã đáo.',
];

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

  const {position, buffered, duration} = useProgress();
  const [chucTet, setChucTet] = useState(CHUC_TET[0]);

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1048576,
    });
    return true;
  };

  useEffect(() => {
    trackPlayerInit();
    TrackPlayer.setRepeatMode(RepeatMode.Track);
    TrackPlayer.updateOptions({
      stopWithApp: false,
      alwaysPauseOnInterruption: true,
    });
  }, []);

  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = Date.parse(deadline) / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  useEffect(() => {
    (async () => {
      await TrackPlayer.add(tracks);
      await TrackPlayer.play();
    })();
    return () => {
      TrackPlayer.remove(tracks);
    };
  }, []);

  const TextAnimation = useMemo(() => {
    return (
      <TAnimator
        content={chucTet + ' 🎉'}
        textStyle={[
          textPresets.textTET1,
          {
            fontSize: 40,
          },
        ]}
        duration={500}
        onFinish={() => {
          try {
            setTimeout(() => {
              console.log("__")
              setChucTet(CHUC_TET[Math.floor(Math.random() * 8) || 0]);
            }, 3000);
          } catch (error) {}
        }}
      />
    );
  }, [chucTet]);

  // render
  return (
    <Screen
      hiddenStatusBar
      statusBarStyle={'light-content'}
      statusColor={colors.red}>
      <Block
        block
        padding={24}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}>
        <Block position={'absolute'} top={0} left={0} bottom={0}>
          <Wallpaper backgroundImage={'wall'} />
        </Block>

        {TextAnimation}

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
