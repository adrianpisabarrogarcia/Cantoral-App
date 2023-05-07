
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import SongScreen from './src/SongScreen';
import { Provider as DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const Stack = createStackNavigator();

const App = () => {


  return (
    <SafeAreaProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' headerMode='none' >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SongScreen" component={SongScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#395479',
    accent: 'green',
  },
  fonts: {
    ...DefaultTheme.fonts
  }
};


export default App;