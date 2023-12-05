import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';

import Agendamentos from './components/telas/Agendamentos';
import Agencias from './components/telas/Agencias';
import CarrosDisponiveis from './components/telas/CarrosDisponiveis';
import TelaInicial from './components/telas/TelaInicial';
import Pagamento from './components/telas/Pagamento';
import ConfirmaPagamento from './components/telas/ConfirmaPagamento';
import ConfirmarAgendamentos from './components/telas/ConfirmarAgendamento';

const Stack = createNativeStackNavigator();

import Menu from './components/telas/Menu';

function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Baloo2-SemiBold': require('./assets/fonts/Baloo2-SemiBold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Menu navigation={navigation} />,
        }}>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Agendamentos" component={Agendamentos} />
        <Stack.Screen name="Agencias" component={Agencias} />
        <Stack.Screen name="Carros Disponiveis" component={CarrosDisponiveis} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Confirma Pagamento" component={ConfirmaPagamento} />
        <Stack.Screen name="Confirma Agendamento" component={ConfirmarAgendamentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
