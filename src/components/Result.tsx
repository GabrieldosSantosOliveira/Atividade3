import LottieView from 'lottie-react-native';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Thermometer from '../animations/Thermometer.json';
import { Theme } from '../styles/Theme';
type Props = {
  handleClose: () => void;
  fahrenheit: number;
  kelvin: number;
};
export const Result: FC<Props> = ({ fahrenheit, handleClose, kelvin }) => {
  const { colors, fontSize, fonts, size } = Theme;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          width: '80%',
          height: 250,
          borderRadius: 12,
          backgroundColor: colors.inputBackground,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <LottieView
            source={Thermometer}
            autoPlay
            loop
            resizeMode="contain"
            style={{ position: 'relative', flex: 1 }}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.Lexend[600],
                fontSize: fontSize[14],
              }}
            >
              Kelvin: {kelvin.toFixed()}
            </Text>
            <Text
              style={{
                fontFamily: fonts.Lexend[600],
                fontSize: fontSize[14],
              }}
            >
              Fahrenheit: {fahrenheit.toFixed()}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: size[52],
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 1,
            borderColor: colors.inputBorder,
          }}
          onPress={handleClose}
        >
          <Text
            style={{
              fontFamily: fonts.Lexend[600],
              fontSize: fontSize[14],
            }}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
