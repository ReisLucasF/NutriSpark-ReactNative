import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Estilo from './src/estilo';


const HomeScreen = ({ navigation }) => {
  const goToIMC = () => {
    navigation.navigate('IMC');
  };

  const goToNecessidadesCaloricas = () => {
    navigation.navigate('NecessidadesCaloricas');
  };

  const goToGastoEnergeticoBasal = () => {
    navigation.navigate('GastoEnergeticoBasal');
  };

  const goToRCQ = () => {
    navigation.navigate('RCQ');
  };

  const goToNecessidadeDiariaAgua = () => {
    navigation.navigate('NecessidadeDiariaAgua');
  };

  const goToPGC = () => {
    navigation.navigate('PGC');
  };

  return (<>
    <View style={Estilo.container}>
        <View style={Estilo.row}>
            <TouchableOpacity style={Estilo.button} onPress={goToIMC}>
                <Text style={Estilo.buttonText}>Calcular IMC</Text>
            </TouchableOpacity>
        


            <TouchableOpacity style={Estilo.button} onPress={goToNecessidadesCaloricas}>
                <Text style={Estilo.buttonText}>Necessidades Calóricas</Text>
            </TouchableOpacity>
        </View>

        <View style={Estilo.row}>
            <TouchableOpacity style={Estilo.button} onPress={goToGastoEnergeticoBasal}>
                <Text style={Estilo.buttonText}>Gasto Energético Basal</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={Estilo.button} onPress={goToRCQ}>
                <Text style={Estilo.buttonText}>Relação Cintura-Quadril</Text>
            </TouchableOpacity>

        </View>
            

        <View style={Estilo.row}>
            <TouchableOpacity style={Estilo.button} onPress={goToNecessidadeDiariaAgua}>
                <Text style={Estilo.buttonText}>Necessidade Diária de Água</Text>
            </TouchableOpacity>

            {/* Teste de PGC detalhado */}
            <TouchableOpacity style={Estilo.button} onPress={goToPGC}>
                <Text style={Estilo.buttonText}>Percentual de Gordura Corporal</Text>
            </TouchableOpacity>
        </View>
        
    </View>

    <View style={Estilo.Vimagem}>
        <Image style={Estilo.imagem} source={require('./src/img/fundobg.png')}  />
    </View>
  </>
  );
};

export default HomeScreen;
