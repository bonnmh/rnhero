import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Text, View } from 'react-native';

import { Block, Screen } from '@components';
import { AppTheme } from '@config/type';
import { useTheme } from '@react-navigation/native';

const HomeComponent = () => {

  const { colors }: AppTheme = useTheme();

  // render
  return (
    <Screen backgroundColor={colors.primary}>
      <Block
        block
        color={colors.primary}>
        <Text>124</Text>
      </Block>
    </Screen>
  );
};

export const Home = memo(HomeComponent, isEqual);
