import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';



const HomeHeader = () => {
    return (
        <Appbar.Header style={headerStyles.header}>
            <View style={headerStyles.viewHeader}>
                <Image source={require('../../assets/cantoral.png')} style={headerStyles.image} />
                <View style={headerStyles.viewTitle}>
                    <Appbar.Content title="Cantoral Ria App" titleStyle={headerStyles.content} />
                </View>
            </View>
        </Appbar.Header>
    );
};

const headerStyles = StyleSheet.create({
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

export default HomeHeader;