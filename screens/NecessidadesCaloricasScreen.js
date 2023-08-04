import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,  ScrollView, KeyboardAvoidingView } from 'react-native';
import Estilo from './src/estilo';

const NecessidadesCaloricasScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('feminino');
  const [nivelAtividade, setNivelAtividade] = useState('moderadamente_ativo'); // Valor padrão é moderadamente ativo
  const [objetivo, setObjetivo] = useState('manter'); // Valor padrão é manter
  const [resultado, setResultado] = useState('');

  const calculateNecessidadesCaloricas = () => {
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

    // Fator de atividade
    const fatoresAtividade = {
      sedentario: 1.2,
      levemente_ativo: 1.375,
      moderadamente_ativo: 1.55,
      muito_ativo: 1.725,
      extremamente_ativo: 1.9,
    };

    const fatorAtividade = fatoresAtividade[nivelAtividade];
    const necessidadesCaloricas = tmb * fatorAtividade;

    // Definir os valores de acordo com o objetivo selecionado
    let valorMin = 0;
    let valorMax = 0;
    if (objetivo === 'manter') {
      valorMin = necessidadesCaloricas - 100;
      valorMax = necessidadesCaloricas + 100;
    } else if (objetivo === 'perder') {
      valorMin = necessidadesCaloricas - 500;
      valorMax = necessidadesCaloricas - 100;
    } else if (objetivo === 'ganhar') {
      valorMin = necessidadesCaloricas + 100;
      valorMax = necessidadesCaloricas + 500;
    }

    Alert.alert('Resultado',`Necessidades calóricas: Entre ${valorMin.toFixed(2)} e ${valorMax.toFixed(2)} calorias.`);
    };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
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

          <View style={Estilo.buttonGroupV}>
            <TouchableOpacity
              style={[Estilo.buttongenv, nivelAtividade === 'sedentario' ? Estilo.selectedButtonv : null]}
              onPress={() => setNivelAtividade('sedentario')}>
              <Text style={[Estilo.UnselectedButtonTextv, nivelAtividade === 'sedentario' ? Estilo.selectedButtonTextv : null]}>Sedentário</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Estilo.buttongenv, nivelAtividade === 'levemente_ativo' ? Estilo.selectedButtonv : null]}
              onPress={() => setNivelAtividade('levemente_ativo')}>
              <Text style={[Estilo.UnselectedButtonTextv, nivelAtividade === 'levemente_ativo' ? Estilo.selectedButtonTextv : null]}>
                Levemente Ativo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Estilo.buttongenv, nivelAtividade === 'moderadamente_ativo' ? Estilo.selectedButtonv : null]}
              onPress={() => setNivelAtividade('moderadamente_ativo')}>
              <Text style={[Estilo.UnselectedButtonTextv, nivelAtividade === 'moderadamente_ativo' ? Estilo.selectedButtonTextv : null]}>
                Moderadamente Ativo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Estilo.buttongenv, nivelAtividade === 'muito_ativo' ? Estilo.selectedButtonv : null]}
              onPress={() => setNivelAtividade('muito_ativo')}>
              <Text style={[Estilo.UnselectedButtonTextv, nivelAtividade === 'muito_ativo' ? Estilo.selectedButtonTextv : null]}>Muito Ativo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Estilo.buttongenv, nivelAtividade === 'extremamente_ativo' ? Estilo.selectedButtonv : null]}
              onPress={() => setNivelAtividade('extremamente_ativo')}>
              <Text style={[Estilo.UnselectedButtonTextv, nivelAtividade === 'extremamente_ativo' ? Estilo.selectedButtonTextv : null]}>
                Extremamente Ativo
              </Text>
            </TouchableOpacity>
          </View>

        <View style={Estilo.buttonGroup}>
          <TouchableOpacity
            style={[Estilo.buttongen3, objetivo === 'manter' ? Estilo.selectedButton3 : null]}
            onPress={() => setObjetivo('manter')}>
            <Text style={[Estilo.UnselectedButtonText3, objetivo === 'manter' ? Estilo.selectedButtonText3 : null]}>Manter Peso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Estilo.buttongen3, objetivo === 'perder' ? Estilo.selectedButtonv : null]}
            onPress={() => setObjetivo('perder')}>
            <Text style={[Estilo.UnselectedButtonText3, objetivo === 'perder' ? Estilo.selectedButtonText3 : null]}>Perder Peso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Estilo.buttongen3, objetivo === 'ganhar' ? Estilo.selectedButtonv : null]}
            onPress={() => setObjetivo('ganhar')}>
            <Text style={[Estilo.UnselectedButtonText3, objetivo === 'ganhar' ? Estilo.selectedButtonText3 : null]}>Ganhar Peso</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Estilo.button} onPress={calculateNecessidadesCaloricas}>
          <Text style={Estilo.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {/* {resultado !== '' && <Text style={Estilo.resultText}>{resultado}</Text>} */}

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NecessidadesCaloricasScreen;
  
