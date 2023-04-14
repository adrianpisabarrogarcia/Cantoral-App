//import react native
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar, List } from 'react-native-paper';


const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

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
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Nombre canto"
                        description="Letra de la canción, previsualización de la canción, etc..."
                        onPress={() => { console.log('Pressed'); }}
                        left={props => <List.Icon {...props} icon="music" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>

            </ScrollView>
        </View>

    );
};

export default Search;