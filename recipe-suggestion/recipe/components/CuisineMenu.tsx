import { useState } from 'react';
import { View, Text, FlatList, Appearance, StyleSheet, Pressable, Alert } from 'react-native';
import { cuisines } from '@/constants/Cuisines'
import { Colors } from '@/constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import type { Theme } from '@/constants/Types';

type Cuisines = {
    item: string
}

const CuisineMenu = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)

    function getCuisine(cuisine: string){
        Alert.alert(`You chose: ${cuisine}`)
    }
    const Cuisine = ({ item }: Cuisines) => {
        return (
            <Pressable onPress={() => getCuisine(item)}>
                <View style={styles.list}>
                    <View style={styles.listImage}><FontAwesome6 name="bowl-food" size={24} /></View>
                    <Text style={styles.listText}>{item}</Text>
                </View>
            </Pressable>
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

function createStyles(theme:Theme, colorScheme: string) {
    return StyleSheet.create({
        list: {
            marginTop: 20,
            alignItems: 'center'
        },
        listImage: {
            backgroundColor: Colors.persimmon800,
            width: 70,
            padding: 20,
            margin: 10,
            borderRadius: 50,
            alignItems: 'center'
        },
        listText: {
            color: theme.text
        }
    })
}