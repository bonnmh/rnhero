import React, { memo } from 'react'
import isEqual from 'react-fast-compare';
import { StyleSheet, Text, useWindowDimensions, View, ScrollView } from 'react-native';

import { moderateScale, scale } from '@common';
import { Block, Icon, Img, Screen, Spacer } from '@components';
import { AppTheme } from '@config/type';
import { textPresets } from '@library/components/Text/Text.presets';
import { useTheme } from '@react-navigation/native';
import { Image } from 'react-native-svg';
import { spacing } from '@theme/spacing';

const HomeComponent = () => {

    const { width } = useWindowDimensions();

    return (
        <Screen >
            <Block
                paddingHorizontal={spacing.page}
                justifyContent={'space-between'}
                direction={'row'}
                middle>
                <Icon icon={'search'} />
                <Block
                    direction={'row'}
                    middle
                    justifyContent={"space-around"}
                    borderWidth={1}
                    borderColor={'gray'}
                    borderRadius={spacing.huge}
                    paddingHorizontal={spacing.huge}
                    paddingVertical={spacing.tiny}>
                    <Text style={textPresets.linkMedium}>Man</Text>
                    <Spacer width={spacing.smaller} />
                    <Icon icon={'down'} size={spacing.small} />
                </Block>
                <Icon icon={'placeholder'} />
            </Block>
            <Block
                block >
                <Block block>
                    <Block
                        paddingTop={spacing.page}
                        paddingHorizontal={spacing.page}>
                        <Text style={textPresets.linkLarge}>
                            Hi, Alex!
                        </Text>
                        <Text style={[textPresets.linkLarge, { color: 'gray' }]}>
                            New collection from Vercase
                        </Text>
                    </Block>

                    <Block
                        marginRight={spacing.page}
                        marginLeft={spacing.page}
                        color={'pink'}
                        marginTop={spacing.page}
                        direction={'row'}
                        middle
                        overflow={'hidden'}
                        height={scale(180)}
                        borderRadius={spacing.small}>
                        <Block block>
                            <Img
                                source={'man_model'}
                                resizeMode={'cover'}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Block>
                        <Block
                            borderWidth={0.5}
                            borderColor={'gray'}
                            borderLeftWidth={spacing.none}
                            borderTopLeftRadius={spacing.none}
                            borderBottomLeftRadius={spacing.none}
                            height={'100%'}
                            paddingHorizontal={spacing.huge}
                            justifyContent={'center'}
                            borderRadius={spacing.small}>
                            <Icon icon={'next'} size={scale(20)} />
                        </Block>
                    </Block>
                    <Block
                        block
                        marginTop={spacing.small}
                        marginBottom={spacing.page}
                        color={'gray'}>
                        {/* <ScrollableTabView >
                        
                        </ScrollableTabView> */}
                    </Block>
                </Block>


            </Block>
            <Block>
                <Block
                    color={'black'}
                    middle
                    alignSelf={'center'}
                    borderRadius={spacing.massive}
                    paddingVertical={spacing.page}
                    justifyContent={'center'}
                    width={width - moderateScale(20) * 2}
                    direction={'row'}>
                    <Text style={[textPresets.textMedium, { color: 'white' }]}>
                        See all accessories
                    </Text>
                    <Spacer width={spacing.small} />
                    <Icon icon={'right'} size={scale(16)} color={'white'} />
                </Block>
            </Block>
        </Screen>
    )
}

export const Home = memo(HomeComponent, isEqual);
