import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilo from '../src/estilo';

const PgcSimplesScreen = () => {
  const [sexo, setSexo] = useState('feminino');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [circunferenciaPescoco, setCircunferenciaPescoco] = useState('');
  const [circunferenciaQuaril, setCircunferenciaQuaril] = useState('');
  const [circunferenciaCintura, setCircunferenciaCintura] = useState('');
  const [resultado, setResultado] = useState('');

  const calculatePercentualGorduraCorporal = () => {
    if (!altura || !circunferenciaPescoco || !circunferenciaQuaril || !circunferenciaCintura || !idade) {
      setResultado('Preencha todos os campos!');
      return;
    }

    const alturaEmCm = parseFloat(altura);
    const circunferenciaEmCmCintura = parseFloat(circunferenciaCintura);
    const circunferenciaEmCmQuaril = parseFloat(circunferenciaQuaril);
    const circunferenciaEmCmPescoco = parseFloat(circunferenciaPescoco);
    const idadeEmAnos = parseInt(idade);

    if (isNaN(alturaEmCm) || isNaN(circunferenciaCintura) || isNaN(circunferenciaPescoco) || isNaN(circunferenciaQuaril) || isNaN(idadeEmAnos)) {
      setResultado('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    let percentualGordura = 0;
    if (sexo === 'feminino') {
      percentualGordura = 163.205 * (Math.log10(circunferenciaEmCmCintura + circunferenciaQuaril - circunferenciaEmCmPescoco)) - 97.684 * (Math.log10(alturaEmCm)) - 78.387;
    } else {
      percentualGordura = 86.010 * (Math.log10(circunferenciaEmCmCintura - circunferenciaEmCmPescoco)) - 70.041 * (Math.log10(alturaEmCm)) + 36.76;
    }

    setResultado(`Seu percentual de gordura corporal é: ${percentualGordura.toFixed(2)}%.`);
  };

  return (
    <View style={Estilo.container}>
      <View style={Estilo.buttonGroup}>
        <TouchableOpacity
          style={[Estilo.buttongen, sexo === 'feminino' ? Estilo.selectedButton : null]}
          onPress={() => setSexo('feminino')}
        >
          <Text style={[Estilo.UnselectedButtonText, sexo === 'feminino' ? Estilo.selectedButtonText : null]}>
            Feminino
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Estilo.buttongen, sexo === 'masculino' ? Estilo.selectedButton : null]}
          onPress={() => setSexo('masculino')}
        >
          <Text style={[Estilo.UnselectedButtonText, sexo === 'masculino' ? Estilo.selectedButtonText : null]}>
            Masculino
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={Estilo.input}
        placeholder="Idade"
        onChangeText={(text) => setIdade(text)}
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
        onSubmitEditing={() => CircunferenciaCintura.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Circuferência da cintura em cm"
        onChangeText={(text) => setCircunferenciaCintura(text)}
        keyboardType="numeric"
        ref={(input) => (CircunferenciaCintura = input)}
        returnKeyType="next"
        onSubmitEditing={() => CircunferenciaPescoco.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Circuferência do pescoço em cm"
        onChangeText={(text) => setCircunferenciaPescoco(text)}
        keyboardType="numeric"
        ref={(input) => (CircunferenciaPescoco = input)}
        returnKeyType="next"
        onSubmitEditing={() => CircunferenciaQuarilinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Circuferência do quaril em cm"
        onChangeText={(text) => setCircunferenciaQuaril(text)}
        keyboardType="numeric"
        ref={(input) => (CircunferenciaQuarilinput = input)}
      />
      <TouchableOpacity style={Estilo.button} onPress={calculatePercentualGorduraCorporal}>
        <Text style={Estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>}
    </View>
  );
};

export default PgcSimplesScreen;
