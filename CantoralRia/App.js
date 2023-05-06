import React from 'react';
import Search from './src/Search';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as DefaultTheme } from 'react-native-paper';
import Header from './src/Header';

const App = () => {
  return (
    <SafeAreaProvider theme={theme}>
      <Header homeHeader={true} />
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