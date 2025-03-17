import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Appearance, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '@/constants/Colors'
import { getRandomRecipes } from '@/lib/recipes'
import Loading from './Loading';
const RecipeList = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getRecipes = async () => {
            try {
                const data = await getRandomRecipes()
                console.log(data.recipes[0].image);
                setRecipes(data.recipes);
                setLoading(false)
            }
            catch (err) {
                Alert.alert('There was an issue fetching recipes')
                setLoading(false)
            }
        }
        getRecipes();
    }, [])

    function viewRecipe(id) {
        if (!id) Alert.alert('something went wrong. Try again later');
        // navigate to view/cook recipe page next
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

    if (loading) {

        return (
            <View>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    }
    return (
        <View>
            <Text style={styles.title}>Popular Recipes</Text>

            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <FoodItem item={item} />}
                horizontal={true}
            />
        </View>
    )
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
