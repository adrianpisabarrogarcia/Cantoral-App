//import react native
import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Search = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const songItems = Array(10).fill(null);

    const handlePress = (songId) => () => {
        navigation.navigate('SongScreen', { songId });
    };

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                placeholder="Escribir número, título o texto..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ margin: 10 }}
            />
            <ScrollView style={{ height: '100%' }}>
                <List.Section>
                    {songItems.map((item, index) => ( // Iterar sobre el array y crear un List.Item para cada elemento
                        <List.Item
                            key={`song-id ${index}`}
                            title="Nombre canto"
                            description="Letra de la canción, previsualización de la canción, etc..."
                            onPress={handlePress("hola")}
                            left={props => <List.Icon {...props} icon="music" />}
                            right={props => <List.Icon {...props} icon="chevron-right" />}
                        />
                    ))}
                </List.Section>

            </ScrollView>
        </View>

    );
};

export default Search;