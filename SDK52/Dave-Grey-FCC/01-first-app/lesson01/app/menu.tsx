import { useState } from 'react';
import { StyleSheet, View, Text, Image, Appearance, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { FlatList, ScrollView } from 'react-native';
import {MENU_ITEMS} from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
const MenuScreen = () => {
    const colorScheme = Appearance.getColorScheme(); // get users preferred color scheme
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView // use safe area view on mobile devices scroll view on web



    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id-1]}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme:string, colorScheme:string) {
    return StyleSheet.create({})
}
const styles = StyleSheet.create({})
export default MenuScreen;