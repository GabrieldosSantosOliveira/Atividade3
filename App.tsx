import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [value, setValue] = useState({ graus: "" });
  const [temperatura, setTemperatura] = useState({ kelvin: 0, fahrenheit: 0 });

  const handleInputChange = (number: number) => {
    setValue({ ...value, graus: number.toString() });
  };

  const calc = () => {
    let celsius = Number(value.graus);
    const fahrenheit = celsius / 1.8 + 32;
    const kelvin = celsius + 273;

    setTemperatura({ fahrenheit: fahrenheit, kelvin: kelvin });
  };
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <StatusBar style="auto" />
      <Text>Temperatura em Fahrenheit: {temperatura.fahrenheit}</Text>
      <Text>Temperatura em Kelvin: {temperatura.kelvin}</Text>

      <TextInput
        onChangeText={(e) => {
          handleInputChange(Number(e));
        }}
        keyboardType="numeric"
        placeholder="Graus"
        value={value.graus}
      />
      <Button
        onPress={() => {
          calc();
        }}
        title="Calcular temperatura"
        accessibilityLabel="Calcular Temperatura"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
