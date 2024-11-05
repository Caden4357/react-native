import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert} from 'react-native';
import MainTitle from '../ui/MainTitle';
import NumberOutputContainer from './NumberOutputContainer';
import PrimaryButton from '../ui/PrimaryButton';

interface GameScreenProps {
    userNumber: number;
    setUserNumber: (pickedNumber: number| null) => void;
}

function generateRandomBetween(min: number, max: number, exclude: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, setUserNumber}: GameScreenProps) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(() => {
        if(currentGuess == userNumber){
            
        }
    }, []);

    const nextGuessHandler = (direction: 'lower' | 'greater') => {
        if((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction == 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    }



    return (
        <View style={styles.screen}>
            <MainTitle title='Opponents Guess' />
            <NumberOutputContainer>{currentGuess}</NumberOutputContainer>
            <View>
                <Text>Higher OR Lower?</Text>
                <View>
                    <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'lower')} />
                </View>
                <View>
                    <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'greater')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#ddb52f",
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 12,
        width: '100%',
    }
})
export default GameScreen;
