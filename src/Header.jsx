import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';

const Header = ({ homeHeader }) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const info = () => {
        console.log('info');
    };

    if (homeHeader) {
        return (
            <Appbar.Header style={homeHeaderStyles.header}>
                <View style={homeHeaderStyles.viewHeader}>
                    <Image source={require('../assets/cantoral.png')} style={homeHeaderStyles.image} />
                    <View style={headerStyles.viewTitle}>
                        <Appbar.Content title="Cantoral Ria App" titleStyle={homeHeaderStyles.content} />
                    </View>
                </View>
            </Appbar.Header>
        );
    }

    return (
        <Appbar.Header style={headerStyles.header}>
            <Appbar.BackAction onPress={goBack} color='white' />
            <Appbar.Content title="Nombre del canto" titleStyle={headerStyles.content} />
            <Appbar.Action icon="information" onPress={info} color='white' />
        </Appbar.Header>
    );

};

const homeHeaderStyles = StyleSheet.create({
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