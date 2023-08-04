import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Estilo from './src/estilo';


const NecessidadeDiariaAguaScreen = () => {
  const [peso, setPeso] = useState('');

  const calculateNecessidadeDiariaAgua = () => {
    if (!peso) {
      Alert.alert('Erro', 'Digite o peso!');
      return;
    }

    const pesoEmKg = parseFloat(peso);

    if (isNaN(pesoEmKg)) {
      Alert.alert('Erro', 'Valor inválido! Certifique-se de inserir um número válido.');
      return;
    }

    const necessidadeDiariaAgua = (pesoEmKg * 35)/1000;

    // Exibindo o resultado em um popup
    Alert.alert('Resultado', `Necessidade diária de água é: ${necessidadeDiariaAgua.toFixed(2)} L.`);
  };

  return (
    <View style={Estilo.container}>
      <TextInput
        style={Estilo.input}
        placeholder="Peso em kg"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={Estilo.button} onPress={calculateNecessidadeDiariaAgua}>
        <Text style={Estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NecessidadeDiariaAguaScreen;
