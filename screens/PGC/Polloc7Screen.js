import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,  ScrollView, KeyboardAvoidingView } from 'react-native';
import Estilo from '../src/estilo';



const Polloc7Screen = () => {
  const [sexo, setSexo] = useState('feminino');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [dobras, setDobras] = useState({
    tricipital: '',
    subescapular: '',
    abdominal: '',
    suprailíaca: '',
    coxa: '',
    panturrilha: '',
    peitoral: '',
  });
  const [resultado, setResultado] = useState('');

  const calculatePercentualGorduraCorporal = () => {
    if (!altura || !idade || !dobras.tricipital || !dobras.subescapular || !dobras.abdominal || !dobras.suprailíaca || !dobras.coxa || !dobras.panturrilha || !dobras.peitoral) {
      setResultado('Preencha todos os campos!');
      return;
    }

    const alturaEmCm = parseFloat(altura);
    const idadeEmAnos = parseInt(idade);
    const dobrasMedidas = Object.values(dobras).map(dobra => parseFloat(dobra));

    if (isNaN(alturaEmCm) || isNaN(idadeEmAnos) || dobrasMedidas.some(isNaN)) {
      setResultado('Valores inválidos! Certifique-se de inserir números válidos.');
      return;
    }

    // Cálculo do percentual de gordura corporal utilizando o método de Pollock 7
    // Note que esta é uma simplificação e não substitui métodos mais precisos realizados por profissionais da saúde.
    const somaDobras = dobrasMedidas.reduce((total, dobra) => total + dobra, 0);
    let percentualGordura = 0;

    if (sexo === 'feminino') {
      percentualGordura = 0.097 * somaDobras - 0.0004 * Math.pow(somaDobras, 2) + 0.000082 * Math.pow(somaDobras, 3) - 76.76;
    } else {
      percentualGordura = 0.128 * somaDobras - 0.0016 * Math.pow(somaDobras, 2) + 0.000088 * Math.pow(somaDobras, 3) - 94.42;
    }

    Alert.alert('Resultado',`Seu percentual de gordura corporal é: ${percentualGordura.toFixed(2)}%.`);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
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
            onSubmitEditing={() => alturaInput.focus()}
          />
          <TextInput
            ref={(input) => (alturaInput = input)}
            style={Estilo.input}
            placeholder="Altura em cm"
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => tricipitalInput.focus()}
          />
          <Text style={Estilo.txtM}>Dobras de pele (em mm):</Text>
          <TextInput
            ref={(input) => (tricipitalInput = input)}
            style={Estilo.input}
            placeholder="Tricipital"
            onChangeText={(text) => setDobras({ ...dobras, tricipital: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => subescapularInput.focus()}
          />
          <TextInput
            ref={(input) => (subescapularInput = input)}
            style={Estilo.input}
            placeholder="Subescapular"
            onChangeText={(text) => setDobras({ ...dobras, subescapular: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => abdominalInput.focus()}
          />
          <TextInput
            ref={(input) => (abdominalInput = input)}
            style={Estilo.input}
            placeholder="Abdominal"
            onChangeText={(text) => setDobras({ ...dobras, abdominal: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => suprailíacaInput.focus()}
          />
          <TextInput
            ref={(input) => (suprailíacaInput = input)}
            style={Estilo.input}
            placeholder="Suprailíaca"
            onChangeText={(text) => setDobras({ ...dobras, suprailíaca: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => coxainput.focus()}
          />
          <TextInput
            ref={(input) => (coxainput = input)}
            style={Estilo.input}
            placeholder="Coxa"
            onChangeText={(text) => setDobras({ ...dobras, coxa: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => panturrilhainput.focus()}
          />
          <TextInput
            ref={(input) => (panturrilhainput = input)}
            style={Estilo.input}
            placeholder="Panturrilha"
            onChangeText={(text) => setDobras({ ...dobras, panturrilha: text })}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => peitoralinput.focus()}
          />
          <TextInput
            ref={(input) => (peitoralinput = input)}
            style={Estilo.input}
            placeholder="Peitoral"
            onChangeText={(text) => setDobras({ ...dobras, peitoral: text })}
            keyboardType="numeric"
          />
          <TouchableOpacity style={Estilo.button} onPress={calculatePercentualGorduraCorporal}>
            <Text style={Estilo.buttonText}>Calcular</Text>
          </TouchableOpacity>
          {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default Polloc7Screen;
