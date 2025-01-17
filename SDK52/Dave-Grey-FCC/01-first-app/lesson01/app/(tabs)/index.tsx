import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/iced-coffee.png')}
        style={styles.image}
      >
        <Text style={styles.headerText}>Coffee Shop</Text>
        <Link style={{marginHorizontal:'auto'}} href="/contact" asChild>
          <Pressable style={styles.bttn}>
            <Text style={styles.bttnText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
  },
  link: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4
  },
  bttn:{
    height:60,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6,
    justifyContent:'center',
  },
  bttnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  }
})
export default App;