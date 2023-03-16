import { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Theme } from '../styles/Theme';
export const Loading: FC = () => {
  const { colors } = Theme;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" color={colors.button} />
    </View>
  );
};
