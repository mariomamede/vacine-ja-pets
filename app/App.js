import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import Vacina from './src/pages/Vacina';
import Login from './src/pages/Login';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', focusedIcon: 'home', unfocusedIcon: 'heart-outline'},
    { key: 'vacina', focusedIcon: 'needle' },
    { key: 'perfil', focusedIcon: 'account' },
  ]);
  
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    vacina: Vacina,
    perfil: Perfil,
  
  });

  /*
  
  */

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

