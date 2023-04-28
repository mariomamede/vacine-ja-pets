import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation, Provider } from "react-native-paper";
import Home from "./src/pages/Home";
import Perfil from "./src/pages/Perfil";
import Vacina from "./src/pages/Vacina";
import Login from "./src/pages/Login";
import StartScreen from './src/screens/StartScreen'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createStackNavigator()

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", focusedIcon: "home", unfocusedIcon: "heart-outline" },
    { key: "vacina", focusedIcon: "needle" },
    { key: "perfil", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    vacina: Vacina,
    perfil: Perfil,
  });

  /*
  
  */

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={Vacina} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={Home} />
          <Stack.Screen name="Dashboard" component={Home} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

/**
 * 
 */