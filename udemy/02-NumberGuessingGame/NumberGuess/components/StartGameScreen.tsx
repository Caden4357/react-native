import {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PrimaryButton from './PrimaryButton';

const StartGameScreen = () => {
    const [input, setInput] = useState('');

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
                    <PrimaryButton title="Confirm" />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Reset" />
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
        backgroundColor: '#4e0329',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 1,
        marginBottom: 16,
        fontSize: 32,
        color: '#ddb52f',
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
