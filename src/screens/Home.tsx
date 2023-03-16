import { FC, useState } from 'react';
import { Alert, Modal, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input/Input';
import { Root } from '../components/Input/Root';
import { Result } from '../components/Result';
import { Theme } from '../styles/Theme';
export const Home: FC = () => {
  const [degree, setDegree] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { fontSize, colors, fonts } = Theme;
  const fahrenheit = Number(degree) * 1.8 + 32;
  const kelvin = Number(degree) + 273.15;
  const handleConverseTemperature = () => {
    if (typeof Number(degree) !== 'number' || isNaN(Number(degree))) {
      return Alert.alert('Informe um número valido');
    }
    setIsModalOpen(true);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: colors.background,
      }}
    >
      <View style={{ gap: 10, paddingTop: 30 }}>
        <Text
          style={{
            fontSize: fontSize[24],
            fontFamily: fonts.Lexend[700],
            textAlign: 'center',
          }}
        >
          Star Converse
        </Text>
        <Root _focus={{ borderWidth: 2 }} style={{ marginTop: 60 }}>
          <Input
            placeholder="Graus Celsius"
            keyboardType="number-pad"
            onChangeText={setDegree}
            onSubmitEditing={handleConverseTemperature}
          />
        </Root>
      </View>
      <Button text="Calcular" onPress={handleConverseTemperature} />
      <Modal transparent visible={isModalOpen}>
        <Result
          fahrenheit={fahrenheit}
          handleClose={() => setIsModalOpen(false)}
          kelvin={kelvin}
        />
      </Modal>
    </View>
  );
};
