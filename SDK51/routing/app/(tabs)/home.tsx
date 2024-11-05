import { Link } from 'expo-router';
import { StyleSheet, View, Text} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Link href="/news" style={{
                color: 'blue',
                fontSize: 20,
                marginTop: 20
            }}>News</Link>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
