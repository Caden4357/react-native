import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.bgMain}>
      <View style={styles.topContainer}>
        <Image source={require('./assets/nurty.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 50 }}><AntDesign name="google" size={24} color="black" /> Login with Google</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}><FontAwesome name="facebook-square" size={24} color="black" /> Login with Facebook</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 100,
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 2
  },
  bottomContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // gap: 20,
    // marginTop: 50,
  },
  bgMain: {
    backgroundColor: '#b4b4b4',
    minHeight: '100%',
  },
});
