//import react native
import React from 'react';
import { Searchbar, List } from 'react-native-paper';


const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Escribir número, título o texto..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ margin: 10 }}
        />

    );
};

export default Search;