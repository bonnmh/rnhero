import React, { memo, useRef, useState } from 'react';
import { FlatList, Animated } from 'react-native';
import isEqual from 'react-fast-compare';

import { Block, Button, Icon, Img, Screen, Text } from '@components';
import { AppTheme } from '@config/type';
import { useTheme } from '@react-navigation/native';
import { images, ImageTypes } from '@assets/image';
import { OnboardingItem, Paginator } from './Components';
import { scale } from '@common';
import { textPresets } from '@library/components/Text/Text.presets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { navigate } from '@navigation/navigationService';
import { APP_SCREEN } from '@navigation/screenTypes';
import { spacing } from '@theme/spacing';

export type SLIDE_TYPE = {
    id: String;
    source: any
}

export const SLIDES: SLIDE_TYPE[] = [
    {
        id: '0',
        source: images.bg_wallpaper
    },
    {
        id: '1',
        source: images.bg_wallpaper
    },
    {
        id: '2',
        source: images.bg_wallpaper
    }
]

const LandingComponent = () => {
    const slideRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const _onViewableItemChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const _onViewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const insets = useSafeAreaInsets();

    // render
    return (
        <Screen unsafe>
            <Block
                paddingTop={spacing.page + insets.top}
                padding={spacing.page}>
                <Text
                    fontFamily={'primary'}
                    fontSize={'FONT_30'}>
                    {`New Collection\nSpring 2021`}
                </Text>
            </Block>
            <Block
                block>
                <Block
                    direction={'row'}
                    height={scale(100)} >
                    <Block
                        block
                        justifyContent={'center'}
                    >
                        <Paginator data={SLIDES} scrollX={scrollX} />
                    </Block>
                    <Block
                        block
                        alignItems={'flex-end'}
                        paddingRight={spacing.page}
                        justifyContent={'center'}>
                        <Button
                            onPress={() => {
                                if (currentIndex < SLIDES.length - 1) {
                                    slideRef.current?.scrollToIndex({ index: currentIndex + 1 })
                                } else {
                                    navigate(APP_SCREEN.HOME)
                                }
                            }}
                            style={{
                                height: scale(62),
                                width: scale(62),
                                backgroundColor: 'black',
                                borderRadius: scale(42),
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Icon
                                size={scale(16)}
                                color={'white'}
                                icon={'right'} />

                        </Button>
                    </Block>
                </Block>
                <Block block>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SLIDES}
                        renderItem={({ item, index }) => {
                            return (
                                <OnboardingItem source={item.source} />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                        pagingEnabled
                        bounces={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={_onViewableItemChanged}
                        viewabilityConfig={_onViewConfig}
                        ref={slideRef}
                    />
                </Block>
            </Block>
        </Screen>
    );
};

export const Landing = memo(LandingComponent, isEqual);
