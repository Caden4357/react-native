import { useState } from 'react';
import { View, Text, FlatList, Appearance, StyleSheet } from 'react-native';
import { cuisines } from '@/constants/Cuisines'
import { Colors } from '@/constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const CuisineMenu = (props) => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)



    const Cuisine = ({ item }) => {
        return (
            <View style={styles.list}>
                <View style={styles.listImage}><FontAwesome6 name="bowl-food" size={24} /></View>
                <Text style={styles.listText}>{item}</Text>
            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={cuisines}
                renderItem={({ item }) => <Cuisine item={item} />}
                keyExtractor={item => item}
                horizontal={true}
            />
        </View>
    )
}

export default CuisineMenu;
function createStyles(theme, colorScheme) {


    return StyleSheet.create({
        list: {
            marginTop: 20,
            alignItems:'center'
        },
        listImage: {
            backgroundColor: Colors.persimmon800,
            width: 70,
            padding: 20,
            margin: 10,
            borderRadius: 50,
            alignItems:'center'
        },
        listText:{
            color:theme.text
        }
    })
}