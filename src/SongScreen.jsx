//import react native
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


const SongScreen = ({ itemId }) => {

    console.log(itemId)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ height: '100%' }}>
                <Text style={songStyles.text}>Resultados de búsqueda</Text>
            </ScrollView>
        </View>
    );
};

const songStyles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    }
});

export default SongScreen;