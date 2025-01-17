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
  function resetGame() {
    setUserNumber(null);
    setGameRounds(0);
    setGameOver(false);
  }

  const onGameOver = () => {
    setGameOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (!gameOver && userNumber) {
    screen = <GameScreen userNumber={userNumber} setUserNumber={setUserNumber} onGameOver={onGameOver} />;
  }
  if(gameOver){
    screen = <GameOver resetGame={resetGame} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('../assets/images/background-dice.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* use safeArea view to avoid natural divets and unique shapes of phones */}
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