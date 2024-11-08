import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';
import { Colors } from '@/constants/Colors';
import MainTitle from '../ui/MainTitle';
import Card from '../ui/Card';
import InstructionText from '../ui/InstructionText';

interface StartGameScreenProps {
    onPickNumber: (pickedNumber: number) => void;
}
const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
    const [input, setInput] = useState<string>('');

    const confirmNumberHandler = () => {
        const chosenNumber = parseInt(input);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        } else {
            onPickNumber(chosenNumber);
        }
    }
    const resetInputHandler = () => {
        setInput('');
    }
    return (
        <View style={styles.screenContainer}>
            <MainTitle title="Start a New Game" />
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    onChangeText={(text) => setInput(text)}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            title="Confirm"
                            onPress={confirmNumberHandler}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            title="Reset"
                            onPress={resetInputHandler}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center', 
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 1,
        marginBottom: 16,
        fontSize: 32,
        color: Colors.accent500,
        fontWeight: 'bold',
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

export default StartGameScreen;
