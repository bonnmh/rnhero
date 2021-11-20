import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text, useWindowDimensions, View, Animated } from 'react-native';
import FImage from 'react-native-fast-image';

import { moderateScale, scale } from '@common';
import { Block, Icon, ImageRemote, Img, Screen, Spacer } from '@components';
import { AppTheme } from '@config/type';
import { textPresets } from '@library/components/Text/Text.presets';
import { useTheme } from '@react-navigation/native';
import { spacing } from '@theme/spacing';
import { TabSectionList } from '@library/components';
import { mockPlaceDetails } from './mocks-data';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverPhotoContainer: {
        maxHeight: 225,
    },
    coverPhoto: {
        width: '100%',
        height: '100%',
    },
    tabBar: {
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tabItem: {
        borderColor: '#ddd',
        borderBottomWidth: 2,
        height: 50,
        backgroundColor: 'pink',
    },
    tabText: {
        padding: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionHeaderText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 10,
        height: 50
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#ddd',
    },
    sectionList: {
        marginTop: 50,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
});


const HomeComponent = () => {

    const { width } = useWindowDimensions();

    // state
    const { colors }: AppTheme = useTheme();

    const [scrollY] = React.useState(new Animated.Value(0));

    const coverTranslateY = scrollY.interpolate({
        inputRange: [-4, 0, 10],
        outputRange: [-2, 0, 3],
    });

    const coverScale = scrollY.interpolate({
        inputRange: [-200, 0],
        outputRange: [2, 1],
        extrapolateRight: 'clamp',
    });

    const tabBarOpacity = scrollY.interpolate({
        inputRange: [50, 225],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

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
                        color={'white'}
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
                        paddingHorizontal={spacing.page}
                    >
                        <TabSectionList
                            style={styles.sectionList}
                            sections={mockPlaceDetails.dishSection || []}
                            keyExtractor={(item) => item.title}
                            stickySectionHeadersEnabled={false}
                            scrollToLocationOffset={5}
                            tabBarStyle={styles.tabBar}
                            ItemSeparatorComponent={() => <View style={styles.divider} />}
                            renderTab={({ title, isActive }) => {
                                const borderBottomColor = isActive ? 'black' : 'transparent';
                                return (
                                    <View style={[styles.tabItem, { borderBottomColor }]}>
                                        <Text
                                            style={[
                                                styles.tabText,
                                                { color: isActive ? 'black' : 'gray' },
                                            ]}>
                                            {title}
                                        </Text>
                                    </View>
                                );
                            }}
                            renderSectionHeader={({ section }) => (
                                <Text style={styles.sectionHeaderText}>{section.title}</Text>
                            )}
                            renderItem={({ item }) => {
                                return (
                                    <Block
                                        height={100}
                                        width={'100%'}
                                        color={colors.background}
                                        alignItems={'center'}
                                        direction={'row'}
                                    >
                                        <FImage
                                            source={{ uri: 'https://b-f10-zpc.zdn.vn/6945473794579405800/61a003b3f4f73fa966e6.jpg' }}
                                            style={{
                                                height: '90%',
                                                aspectRatio: 1,
                                                borderRadius: spacing.small
                                            }}
                                        />
                                        <Block
                                            padding={spacing.small}
                                            height={'100%'}>
                                            <Text>{item.title}</Text>
                                            <Text>{item.description}</Text>
                                        </Block>
                                    </Block>
                                );
                            }}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: {
                                                y: scrollY,
                                            },
                                        },
                                    },
                                ],
                                {
                                    useNativeDriver: true,
                                },
                            )}
                        />
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
