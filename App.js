import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import IMCScreen from './screens/IMCScreen';
import NecessidadesCaloricasScreen from './screens/NecessidadesCaloricasScreen';
import GastoEnergeticoBasalScreen from './screens/GastoEnergeticoBasalScreen';
import NecessidadeDiariaAguaScreen from './screens/NecessidadeDiariaAguaScreen';
import RCQScreen from './screens/RCQScreen';
import PgcScreen from './screens/PgcScreen';
import PgcSimplesScreen from './screens/PGC/PgcSimplesScreen';
import Polloc3Screen from './screens/PGC/Polloc3Screen';
import Polloc7Screen from './screens/PGC/Polloc7Screen';


import Estilo from './screens/src/estilo';




const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={Estilo.central}>
      <NavigationContainer style={Estilo.nav}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calculos nutricionais' }} />
          <Stack.Screen name="IMC" component={IMCScreen} options={{ title: 'Calculadora de IMC' }} />
          <Stack.Screen
            name="NecessidadesCaloricas"
            component={NecessidadesCaloricasScreen}
            options={{ title: 'Necessidades Calóricas' }}
          />
          <Stack.Screen
            name="GastoEnergeticoBasal"
            component={GastoEnergeticoBasalScreen}
            options={{ title: 'Gasto Energético Basal' }}
          />
          <Stack.Screen
            name="RCQ"
            component={RCQScreen}
            options={{ title: 'Relação Cintura Quadril' }}
          />
          <Stack.Screen
            name="NecessidadeDiariaAgua"
            component={NecessidadeDiariaAguaScreen}
            options={{ title: 'Necessidade Diária de Água' }}
          />
          <Stack.Screen
            name="PGC"
            component={PgcScreen}
            options={{ title: 'Percentual de Gordura Corporal' }}
          />
          <Stack.Screen name="PgcSimples" component={PgcSimplesScreen} options={{ title: 'PgcSimples' }} />
          <Stack.Screen name="Polloc3" component={Polloc3Screen} options={{ title: 'Polloc3' }} />
          <Stack.Screen name="Polloc7" component={Polloc7Screen} options={{ title: 'Polloc7' }} />
        </Stack.Navigator>
      </NavigationContainer>      
    </View>
  );
};

export default App;
