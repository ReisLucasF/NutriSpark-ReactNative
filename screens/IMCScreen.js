import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Estilo from './src/estilo';

const IMCScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [result, setResult] = useState('');

  const calculateIMC = () => {
    if (!peso || !altura) {
      setResult('Preencha o peso e a altura!');
      return;
    }

    const pesoEmKg = parseFloat(peso);
    const alturaEmCm = parseFloat(altura);

    if (isNaN(pesoEmKg) || isNaN(alturaEmCm)) {
      setResult('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    const alturaEmMetros = alturaEmCm / 100;
    const imc = parseInt(pesoEmKg / Math.pow(alturaEmMetros, 2))

    let classification = '';
    if (imc < 18.5) {
      classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classification = 'Peso ideal';
    } else if (imc >= 25 && imc < 29.9) {
      classification = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classification = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classification = 'Obesidade grau 2';
    } else {
      classification = 'Obesidade grau 3';
    }

    Alert.alert('Resultado',`O IMC é:  ${imc.toFixed(2)}.\n Classificação: ${classification}`);
  };

  return (
    <View style={Estilo.container}>
      <TextInput
        style={Estilo.input}
        placeholder="Peso em kg"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"

        returnKeyType="next"
        onSubmitEditing={() => alturainput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Altura em centímetros"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"

        ref={(input) => (alturainput = input)}
      />
      <TouchableOpacity style={Estilo.button} onPress={calculateIMC}>
        <Text style={Estilo.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {result !== '' && <Text style={Estilo.resultText}>{result}</Text>}
    </View>
  );
};



export default IMCScreen;