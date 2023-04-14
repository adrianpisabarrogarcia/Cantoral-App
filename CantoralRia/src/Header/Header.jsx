import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HomeHeader = () => {

    const goBack = () => console.log('Went back');
    const handleSearch = () => console.log('Searching');

    return (
        <Appbar.Header style={headerStyles.header}>
            <Appbar.BackAction onPress={goBack} color='white' />
            <Appbar.Content title="Cantoral Ria App" titleStyle={headerStyles.content} />
            <Appbar.Action icon="magnify" onPress={handleSearch} color='white' />
        </Appbar.Header>
    );

};




const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#395479',
    },
    content: {
        color: 'white',
    }
});

export default HomeHeader;