import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native'; 
import Estilo from './src/estilo';


const PgcScreen = ({ navigation }) => {
  const goToPgcSimples = () => {
    navigation.navigate('PgcSimples');
  };

  const goToPolloc3 = () => {
    navigation.navigate('Polloc3');
  };

  const goToPolloc7 = () => {
    navigation.navigate('Polloc7');
  };


  return (<>
    <View style={Estilo.container}>
        <View style={Estilo.row}>
            {/* <TouchableOpacity style={Estilo.button} onPress={goToPgcSimples}>
                <Text style={Estilo.buttonText}>Calculo simples</Text>
            </TouchableOpacity> */}
        


            <TouchableOpacity style={Estilo.button} onPress={goToPolloc3}>
                <Text style={Estilo.buttonText}>Polloc3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Estilo.button} onPress={goToPolloc7}>
            <Text style={Estilo.buttonText}>Polloc7</Text>
        </TouchableOpacity>
        </View>

        
      
    </View>

    <View style={Estilo.Vimagem}>
        <Image style={Estilo.imagem} source={require('./src/img/fundobg.png')}  />
    </View>
  </>
  );
};

export default PgcScreen;
