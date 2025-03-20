import type { Href } from 'expo-router';
import type { ColorScheme, Theme } from '@/constants/Types';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Appearance, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '@/constants/Colors'
import { getRandomRecipes } from '@/lib/recipes'
import { useRecipes } from '@/context/recipe';
import { router } from 'expo-router';

type Item = {
    id: string,
    title: string,
    image: string
}
type FoodItem = {
    item:Item
}

const RecipeList = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const { recipes, setRecipes, loading, setLoading } = useRecipes();

    useEffect(() => {
        const getRecipes = async () => {
            try {
                setLoading(true);
                const data = await getRandomRecipes()
                setRecipes(data.recipes);
                setLoading(false)
            }
            catch (err) {
                Alert.alert('There was an issue fetching recipes')
                setLoading(false)
            }
        }
        getRecipes();
    }, [setRecipes, setLoading])

    function viewRecipe(id: string) {
        if (!id) Alert.alert('something went wrong. Try again later');
        // navigate to view/cook recipe page next
        router.push(`/recipe/${id}` as Href);
    }

    const FoodItem = ({ item }: FoodItem) => {
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

function createStyles(theme: Theme, colorScheme: ColorScheme) {
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
