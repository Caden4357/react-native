import {View, Text, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const DetailsPage = () => {
    const { id } = useLocalSearchParams();
    console.log(id);
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Details Page' }} />
            <Text>Details Page</Text>
            <Text>Id: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DetailsPage;