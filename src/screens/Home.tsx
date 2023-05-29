import { FC, useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input/Input';
import { Root } from '../components/Input/Root';
import { ShowModalResultDegree } from '../components/ShowModalResultDegree';
import { Theme } from '../styles/Theme';
const { fontSize, colors, fonts } = Theme;
export const Home: FC = () => {
  const [degree, setDegree] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const fahrenheit = Number(degree) * 1.8 + 32;
  const kelvin = Number(degree) + 273.15;
  const handleConverseTemperature = () => {
    if (typeof Number(degree) !== 'number' || isNaN(Number(degree))) {
      return Alert.alert('Informe um número valido');
    }
    setIsModalOpen(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>Star Converse</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Graus Kelvin</Text>
          <Root _focus={styles.inputFocus}>
            <Input
              placeholder="Graus Celsius"
              keyboardType="number-pad"
              onChangeText={setDegree}
              onSubmitEditing={handleConverseTemperature}
            />
          </Root>
        </View>
      </View>
      <Button text="Calcular" onPress={handleConverseTemperature} />
      <ShowModalResultDegree
        fahrenheit={fahrenheit}
        handleClose={() => setIsModalOpen(false)}
        kelvin={kelvin}
        isModalOpen={isModalOpen}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSize[24],
    fontFamily: fonts.Lexend[700],
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: fontSize[16],
    fontFamily: fonts.Lexend[600],
  },
  inputBox:{ gap: 20 },
  inputFocus: { borderWidth: 2 },
  main: { gap: 10, paddingTop: 30 },
});
