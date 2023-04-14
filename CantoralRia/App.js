import React from 'react';
import Search from './src/Search';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as DefaultTheme } from 'react-native-paper';
import HomeHeader from './src/Header/HomeHeader';

const App = () => {
  return (
    <SafeAreaProvider theme={theme}>
      <HomeHeader />
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