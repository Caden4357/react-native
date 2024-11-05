import { useState } from "react";
import StartGameScreen from "@/components/game/StartGameScreen";
import { Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "@/components/game/GameScreen";
import GameOver from "@/components/game/GameOver";
import { Colors } from "@/constants/Colors";
const StartPage = () => {
  const [userNumber, setUserNumber] = useState<number| null>(null);
  const [gameRounds, setGameRounds] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} setUserNumber={setUserNumber}/>;
  }
  if(gameOver){
    screen = <GameOver />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('../assets/images/background-dice.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
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