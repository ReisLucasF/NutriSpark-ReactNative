import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilo from './src/estilo';

const GastoEnergeticoBasalScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('feminino');
  const [resultado, setResultado] = useState('');

  const calculateGastoEnergeticoBasal = () => {
    if (!peso || !altura || !idade) {
      setResultado('Preencha todos os campos!');
      return;
    }

    const pesoEmKg = parseFloat(peso);
    const alturaEmCm = parseFloat(altura);
    const idadeEmAnos = parseInt(idade);

    if (isNaN(pesoEmKg) || isNaN(alturaEmCm) || isNaN(idadeEmAnos)) {
      setResultado('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    let tmb = 0;
    if (sexo === 'feminino') {
      tmb = 655 + 9.6 * pesoEmKg + 1.8 * alturaEmCm - 4.7 * idadeEmAnos;
    } else {
      tmb = 66 + 13.7 * pesoEmKg + 5 * alturaEmCm - 6.8 * idadeEmAnos;
    }
    
    // Exibindo o resultado em um popup
    Alert.alert('Resultado',`Gasto energético basal: ${tmb.toFixed(2)} calorias.`);
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
        placeholder="Altura em cm"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"

        ref={(input) => (alturainput = input)}
        returnKeyType="next"
        onSubmitEditing={() => idadeinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Idade"
        onChangeText={(text) => setIdade(text)}
        keyboardType="numeric"

        ref={(input) => (idadeinput = input)}
        returnKeyType="next"
      />
      <View style={Estilo.buttonGroup}>

        <TouchableOpacity
            style={[Estilo.buttongen, sexo === 'feminino' ? Estilo.selectedButton : null]}
            onPress={() => setSexo('feminino')}>

            <Text style={[Estilo.UnselectedButtonText, sexo === 'feminino' ? Estilo.selectedButtonText : null]}>Feminino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Estilo.buttongen, sexo === 'masculino' ? Estilo.selectedButton : null]}
          onPress={() => setSexo('masculino')}>

          <Text style={[Estilo.UnselectedButtonText, sexo === 'masculino' ? Estilo.selectedButtonText : null]}>Masculino</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={Estilo.button} onPress={calculateGastoEnergeticoBasal}>
        <Text style={Estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>}
    </View>
  );
};

export default GastoEnergeticoBasalScreen;
