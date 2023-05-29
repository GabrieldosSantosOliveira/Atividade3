import LottieView from 'lottie-react-native';
import { FC } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Thermometer from '../animations/Thermometer.json';
import { Theme } from '../styles/Theme';
type Props = {
  handleClose: () => void;
  fahrenheit: number;
  kelvin: number;
  isModalOpen: boolean;
};
const { colors, fontSize, fonts, size } = Theme;
export const ShowModalResultDegree: FC<Props> = ({
  fahrenheit,
  handleClose,
  kelvin,
  isModalOpen,
}) => {
  return (
    <Modal transparent visible={isModalOpen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <LottieView
              source={Thermometer}
              autoPlay
              loop
              resizeMode="contain"
              style={styles.animation}
            />
            <View style={styles.box}>
              <Text style={styles.text}>Kelvin: {kelvin.toFixed(2)}</Text>
              <Text style={styles.text}>
                Fahrenheit: {fahrenheit.toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: {
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
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  animation: { position: 'relative', flex: 1 },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontFamily: fonts.Lexend[600],
    fontSize: fontSize[14],
  },
  button: {
    width: '100%',
    height: size[52],
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.inputBorder,
  },
  buttonText: {
    fontFamily: fonts.Lexend[600],
    fontSize: fontSize[14],
  },
});
