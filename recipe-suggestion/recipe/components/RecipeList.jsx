import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Appearance, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '@/constants/Colors'
import { getRandomRecipes } from '@/lib/recipes'
const RecipeList = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        // console.log('HERE');
        const getRecipes = async () => {
            const data = await getRandomRecipes()
            console.log(data.recipes[0].image);
            setRecipes(data.recipes)
        }
        getRecipes()
    }, [])

    function viewRecipe(id) {
        if(!id) Alert.alert('something went wrong. Try again later');
        // navigate to view/cook recipe page
    }

    const FoodItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => viewRecipe(item.id)}>
                <View style={styles.foodItemContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.image
                        }}

                    />
                    <Text style={styles.foodItemText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={styles.title}>Popular Recipes</Text>
            {/* Not working atm */}
            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <FoodItem item={item} />}
                horizontal={true}
            />
        </View>
    );
}


export default RecipeList;

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        title: {
            color: theme.text,
            fontSize: 24,
            marginTop: 30,
        },
        foodItemContainer: {
            maxWidth: 220,
            borderRadius: 20,
            margin: 6,
            alignItems: 'center'
        },
        foodItemText: {
            color: theme.text
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: theme.text,
            borderWidth: 1,
            padding: 8,
        }
    })
}
