import { Pressable, StyleSheet, Text, View, Appearance } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useSession } from '@/context/ctx';
import Search from '@/components/Search';
import CuisineMenu from '@/components/CuisineMenu';
import RecipeList from '@/components/RecipeList';
import { useTheme } from '@/context/theme';
export default function Index() {
    const { colorScheme, toggleColorScheme } = useTheme();
    const { signOut } = useSession();
    return (
        <View className='flex-1 dark:bg-zinc-900 bg-white pt-12 p-3'>
            <StatusBar style='light' />
            <Search />
            <CuisineMenu/>
            <RecipeList/>
            <Pressable onPress={signOut}>
                <Text className='dark:text-white'>Sign Out</Text>
            </Pressable>
        </View>
    );
}
