import StartGameScreen from "@/components/StartGameScreen";
import { Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const StartPage = () => {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('../assets/images/background-dice.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}
export default StartPage;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
})