import { FC } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TouchableOpacityProps & {
  text: string;
};
export const Button: FC<Props> = ({ text, ...props }) => {
  const { colors, size, fonts, fontSize } = Theme;
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          height: size[52],
          width: '100%',
          backgroundColor: colors.button,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: fonts.Lexend[600],
            fontSize: fontSize[20],
            color: colors.white,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
