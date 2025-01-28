import { useState } from 'react';
import { StyleSheet, View, Text, Image, Appearance, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { FlatList, ScrollView } from 'react-native';
import {MENU_ITEMS} from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
const MenuScreen = () => {
    const colorScheme = Appearance.getColorScheme(); // get users preferred color scheme
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView // use safe area view on mobile devices scroll view on web

    const seperatorComponent = <View style={styles.seperator}/>


    // const headerComponent = <Text>Top of List</Text>
    const footerComponent = <Text style={styles.footerText}>End of Menu</Text>


    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={seperatorComponent}
                // ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyle={styles.footer}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem={({item}) => (
                    <View style={styles.row}> 
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.mainItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text  style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id-1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme:any, colorScheme:any) {
    return StyleSheet.create({
        contentContainer:{
            paddingTop:10,
            paddingBottom:10,
            paddingHorizontal:12,
            backgroundColor:theme.background
        },
        row:{
            flexDirection:'row',
            width:'100%',
            maxWidth:600,
            height:100,
            marginBottom:10,
            borderStyle:'solid',
            borderColor: colorScheme === 'dark'? 'papaywhip': '#000',
            borderWidth:1,
            borderRadius:20,
            overflow:'hidden',
            marginHorizontal:'auto'
        },
        menuTextRow:{
            width:'65%',
            paddingTop:10,
            paddingLeft:10,
            paddingRight:5,
            flexGrow:1,
        },
        menuItemTitle:{
            fontSize:18,
            textDecorationLine:'underline'
        },
        menuItemText:{
            color:theme.text
        },
        menuImage:{
            width:100,
            height:100
        },
        seperator:{
            height:1,
            backgroundColor:colorScheme === 'dark' ? 'papayawhip': '#000',
            width:'50%',
            maxWidth:300,
            marginHorizontal:'auto',
            marginBottom:10
        },
        footer:{
            marginHorizontal:'auto',
        },
        footerText:{
            color:'white'
        }
    })
}
export default MenuScreen;