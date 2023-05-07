import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Header';
import Search from './Search';

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <Header homeHeader={true} />
            <Search />
        </SafeAreaProvider>
    );
}


export default HomeScreen;