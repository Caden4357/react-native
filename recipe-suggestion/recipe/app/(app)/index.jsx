import { Pressable, StyleSheet, Text, View, Appearance } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useSession } from '@/context/ctx';
import Search from '@/components/Search';
import { Colors } from '@/constants/Colors'
import CuisineMenu from '@/components/CuisineMenu';

export default function Index() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const { signOut } = useSession();
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Search />
            <CuisineMenu/>
            <Pressable onPress={signOut}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    );
}
function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:theme.background,
            paddingTop:50
        }
    })
}
