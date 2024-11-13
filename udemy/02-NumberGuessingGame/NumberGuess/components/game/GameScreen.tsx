import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MainTitle from '../ui/MainTitle';
import NumberOutputContainer from './NumberOutputContainer';
import PrimaryButton from '../ui/PrimaryButton';
import Card from '../ui/Card';
import InstructionText from '../ui/InstructionText';
import {Ionicons} from '@expo/vector-icons';
interface GameScreenProps {
    userNumber: number;
    setUserNumber: (pickedNumber: number | null) => void;
    onGameOver: () => void;
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
const GameScreen = ({ userNumber, setUserNumber, onGameOver }: GameScreenProps) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(() => {
        console.log('currentGuess', currentGuess);
        if (currentGuess == userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]); // a good rule of thumb is to add all the dependencies that are used in the useEffect function

    const nextGuessHandler = (direction: 'lower' | 'greater') => {
        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction == 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
    }



    return (
        <View style={styles.screen}>
            <MainTitle title='Opponents Guess' />
            <NumberOutputContainer>{currentGuess}</NumberOutputContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher OR Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
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
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    buttonContainer: {
        flex: 1
    }
})
export default GameScreen;
