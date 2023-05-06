import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';

const Header = ({ homeHeader }) => {

    const goBack = () => console.log('Went back');
    const handleSearch = () => console.log('Searching');


    if (homeHeader) {
        return (
            <Appbar.Header style={HomeHeaderStyles.header}>
                <View style={HomeHeaderStyles.viewHeader}>
                    <Image source={require('../assets/cantoral.png')} style={HomeHeaderStyles.image} />
                    <View style={headerStyles.viewTitle}>
                        <Appbar.Content title="Cantoral Ria App" titleStyle={HomeHeaderStyles.content} />
                    </View>
                </View>
            </Appbar.Header>
        );
    }

    return (
        <Appbar.Header style={headerStyles.header}>
            <Appbar.BackAction onPress={goBack} color='white' />
            <Appbar.Content title="Cantoral Ria App" titleStyle={headerStyles.content} />
            <Appbar.Action icon="magnify" onPress={handleSearch} color='white' />
        </Appbar.Header>
    );

};


const HomeHeaderStyles = StyleSheet.create({
    header: {
        backgroundColor: '#395479',
    },
    content: {
        color: 'white',
        alignSelf: 'center',
    },
    viewTitle: {
        padding: '10px'
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: 40,
        height: 40,
    }

});


const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#395479',
    },
    content: {
        color: 'white',
    }
});

export default Header;