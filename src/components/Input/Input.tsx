import { FC } from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

import { useInput } from '../../hooks/useInput';
import { Theme } from '../../styles/Theme';
const { colors, fonts, fontSize } = Theme;
export const Input: FC<TextInputProps> = ({ style, ...props }) => {
  const { setIsFocus } = useInput();
  return (
    <TextInput
      {...props}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholderTextColor={colors.inputPlaceholder}
      style={[styles.input, style]}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: fonts.Lexend[600],
    color: colors.black,
    fontSize: fontSize[14],
  },
});
