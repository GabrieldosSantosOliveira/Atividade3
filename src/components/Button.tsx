import { FC } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TouchableOpacityProps & {
  text: string;
};
const { colors, size, fonts, fontSize } = Theme;
export const Button: FC<Props> = ({ text, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Lexend[600],
    fontSize: fontSize[20],
    color: colors.white,
  },
  button: {
    height: size[52],
    width: '100%',
    backgroundColor: colors.button,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
