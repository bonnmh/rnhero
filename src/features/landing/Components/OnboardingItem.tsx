import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useWindowDimensions } from 'react-native';
import { Block, Img } from '@components';
import { ImageTypes } from '@assets/image';

const OnboardingItemComponent = ({ source }: { source: ImageTypes }) => {
    const { height, width } = useWindowDimensions();
    return (
        <Block
            alignItems='center'
            width={width}
            height={'100%'}
            color={'green'}
        >
            <Img
                source={'man_model'}
                style={[{ width, height: '100%' }]}
                resizeMode={'cover'}
            />
        </Block>
    )
}

export const OnboardingItem = memo(OnboardingItemComponent, isEqual);

