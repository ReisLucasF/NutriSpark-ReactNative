import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilo from '../src/estilo';




const Polloc3Screen = () => {
  const [sexo, setSexo] = useState('feminino');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [dobraTricipital, setDobraTricipital] = useState('');
  const [dobraSubescapular, setDobraSubescapular] = useState('');
  const [dobraAbdominal, setDobraAbdominal] = useState('');
  const [resultado, setResultado] = useState('');

  const calculatePercentualGorduraCorporal = () => {
    if (!altura || !idade || !dobraTricipital || !dobraSubescapular || !dobraAbdominal) {
      setResultado('Preencha todos os campos!');
      return;
    }

    const alturaEmCm = parseFloat(altura);
    const idadeEmAnos = parseInt(idade);
    const tricipitalEmMm = parseFloat(dobraTricipital);
    const subescapularEmMm = parseFloat(dobraSubescapular);
    const abdominalEmMm = parseFloat(dobraAbdominal);

    if (isNaN(alturaEmCm) || isNaN(idadeEmAnos) || isNaN(tricipitalEmMm) || isNaN(subescapularEmMm) || isNaN(abdominalEmMm)) {
      setResultado('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    // Cálculo do percentual de gordura corporal utilizando o método de Pollock 3
    // Note que esta é uma simplificação e não substitui métodos mais precisos realizados por profissionais da saúde.
    const dobrasCutaneas = tricipitalEmMm + subescapularEmMm + abdominalEmMm;
    let percentualGordura = 0;

    if (sexo === 'feminino') {
      percentualGordura = 0.097 * dobrasCutaneas - 0.0005 * Math.pow(dobrasCutaneas, 2) + 3.64;
    } else {
      percentualGordura = 0.097 * dobrasCutaneas - 0.00088 * Math.pow(dobrasCutaneas, 2) + 4.5;
    }

    Alert.alert('Resultado'`Seu percentual de gordura corporal é: ${percentualGordura.toFixed(2)}%.`);
  };

  return (
    <View style={Estilo.container}>
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
        onSubmitEditing={() => DobraTricipitalinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Dobra tricipital em mm"
        onChangeText={(text) => setDobraTricipital(text)}
        keyboardType="numeric"

        ref={(input) => (DobraTricipitalinput = input)}
        returnKeyType="next"
        onSubmitEditing={() => DobraSubescapularinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Dobra subescapular em mm"
        onChangeText={(text) => setDobraSubescapular(text)}
        keyboardType="numeric"

        ref={(input) => (DobraSubescapularinput = input)}
        returnKeyType="next"
        onSubmitEditing={() => DobraAbdominalinput.focus()}
      />
      <TextInput
        style={Estilo.input}
        placeholder="Dobra abdominal em mm"
        onChangeText={(text) => setDobraAbdominal(text)}
        keyboardType="numeric"

        ref={(input) => (DobraAbdominalinput = input)}
      />
      <TouchableOpacity style={Estilo.button} onPress={calculatePercentualGorduraCorporal}>
        <Text style={Estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>}
    </View>
  );
};

export default Polloc3Screen;
