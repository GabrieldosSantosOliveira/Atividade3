import { FC, ReactNode } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

import { InputProvider } from '../../contexts/InputContext';
import { useInput } from '../../hooks/useInput';
import { Theme } from '../../styles/Theme';
type Props = ViewProps & {
  children: ReactNode;
  _focus?: ViewProps['style'];
};
const { colors, size } = Theme;

const RootBase: FC<Props> = ({ children, style, _focus, ...props }) => {
  const { isFocus } = useInput();
  return (
    <View {...props} style={[styles.root, style, isFocus ? _focus : {}]}>
      {children}
    </View>
  );
};
export const Root: FC<Props> = ({ children, ...props }) => {
  return (
    <InputProvider>
      <RootBase {...props}>{children}</RootBase>
    </InputProvider>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.inputBackground,
    height: size[52],
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.inputBorder,
    gap: 10,
    paddingHorizontal: 10,
  },
});
