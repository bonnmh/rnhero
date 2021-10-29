import { Block } from '@components';
import { AppTheme } from '@config/type';
import { useTheme } from '@react-navigation/native';
import { spacing } from '@theme/spacing';
import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { SLIDE_TYPE } from '..';

const SIZE_ICON = 40;

const Paginator = ({ data, scrollX }: { data: SLIDE_TYPE[], scrollX: any }) => {

    const { width: windowW } = useWindowDimensions();

    return (
        <Block
            direction='row'
            justifyContent='center'
            position='absolute'
            paddingLeft={spacing.page}
        >
            {data.map((_, i) => {
                const inputRange = [(i - 1) * windowW, i * windowW, (i + 1) * windowW];
                const width = scrollX.interpolate({
                    inputRange,
                    outputRange: [SIZE_ICON / 4, SIZE_ICON, SIZE_ICON / 4],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })
                return <Animated.View
                    key={String(i)}
                    style={[{
                        height: SIZE_ICON / 4,
                        width: SIZE_ICON,
                        backgroundColor: 'black',
                        marginHorizontal: SIZE_ICON / 8,
                        borderRadius: SIZE_ICON,
                    }, {
                        width,
                        opacity
                    }]}

                />
            })}
        </Block>
    )
}

export default Paginator;
