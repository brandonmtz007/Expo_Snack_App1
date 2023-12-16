import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [resultado, setResultado] = useState('');

  Sumar = (valor1, valor2) => {
    if (!!valor1 && !!valor2) {
      const a = parseFloat(valor1);
      const b = parseFloat(valor2);
      const c = a + b;
      setResultado(a + '+' + b + '=' + c);
    } else setResultado('Error!!');
  };

  return (
    <View style={{ flex: 1, padding: 10, fontSize: 24 }}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: 'purple',
          borderRadius: 10,
          color: 'white',
          textAlign: 'center',
        }}>
        Suma de dos numeros
      </Text>

      <TextInput
        style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 2,
          backgroundColor: 'yellow',
          borderRadius: 10,
          fontWeight: 'bold',
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Valor 1"
        onChangeText={(text1) => setText1(text1)}
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 2,
          backgroundColor: 'yellow',
          borderRadius: 10,
          fontWeight: 'bold',
          padding: 5,
          marginTop: 5,
        }}
        placeholder="Valor 2"
        onChangeText={(text2) => setText2(text2)}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'blue',
          justifyContent: 'center',
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => {
          Sumar(text1, text2);
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlignVertical: 'center',
            textAlign: 'center',
            top: 12,
          }}>
          Sumar
        </Text>
      </TouchableOpacity>

      <Text style={{ padding: 10, fontSize: 32 }}>{resultado}</Text>
    </View>
  );
}
