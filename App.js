import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as DefaultTheme } from 'react-native-paper';
import HomeScreen from './src/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider theme={theme}>
      <HomeScreen />
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