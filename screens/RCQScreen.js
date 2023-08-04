import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilo from './src/estilo';


const RCQScreen = () => {
  const [cintura, setCintura] = useState('');
  const [quadril, setQuadril] = useState('');
  const [resultado, setResultado] = useState('');

  const calculateRCQ = () => {
    if (!cintura || !quadril) {
      setResultado('Preencha todos os campos!');
      return;
    }

    const cinturaEmCm = parseFloat(cintura);
    const quadrilEmCm = parseFloat(quadril);

    if (isNaN(cinturaEmCm) || isNaN(quadrilEmCm)) {
      setResultado('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    const rcq = cinturaEmCm / quadrilEmCm;

    let condicao = '';
    if (rcq >= 0.85 && rcq < 0.95) {
      condicao = 'Risco cardiovascular moderado';
    } else if (rcq >= 0.95) {
      condicao = 'Risco cardiovascular elevado';
    } else {
      condicao = 'Risco cardiovascular baixo';
    }

    Alert.alert('Resultado', `Relação Cintura-Quadril: ${rcq.toFixed(2)}.\n ${condicao}`);
  };

  return (
    <View style={Estilo.container}>
      <TextInput
        style={Estilo.input}
        placeholder="Circuferência da cintura em cm"
        onChangeText={(text) => setCintura(text)}
        keyboardType="numeric"

        returnKeyType="next"
        onSubmitEditing={() => quadrilinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Circuferência do quadril em cm"
        onChangeText={(text) => setQuadril(text)}
        keyboardType="numeric"

        ref={(input) => (quadrilinput = input)}
      />
      <TouchableOpacity style={Estilo.button} onPress={calculateRCQ}>
        <Text style={Estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>}
    </View>
  );
};

export default RCQScreen;
