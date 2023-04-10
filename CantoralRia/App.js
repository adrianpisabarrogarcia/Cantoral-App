import React from 'react';
import Header from './src/Header';
import Search from './src/Search';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as DefaultTheme } from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaProvider theme={theme}>
      <Header />
      <Search />
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