import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';
import { Colors } from '@/constants/Colors';

interface StartGameScreenProps {
    onPickNumber: (pickedNumber: number) => void;
}
const StartGameScreen = ({onPickNumber}: StartGameScreenProps) => {
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
        <View style={styles.inputContainer}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, // shadow on android
        shadowColor: 'black', // shadow on ios
        shadowOffset: { width: 0, height: 2 }, // shadow on ios
        shadowRadius: 6, // shadow on ios
        shadowOpacity: 0.26, // shadow on ios
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
