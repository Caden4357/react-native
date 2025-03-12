import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Search = () => {
    const [search, setSearch] = useState('')
    console.log(search);
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <AntDesign name="search1" size={24} color="white" />
                <TextInput
                    placeholder='Search Ingredients'
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.searchText}
                />
            </View>
        </View>
    )
}

export default Search;
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    searchBar: {
        paddingLeft:12,
        width: '80%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        flexDirection:'row',
        alignItems:'center'
    },
    searchText:{
        color:'white',
    }
})