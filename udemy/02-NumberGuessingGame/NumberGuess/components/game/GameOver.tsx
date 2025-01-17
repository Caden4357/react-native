import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MainTitle from '../ui/MainTitle';
import { Colors } from '../../constants/Colors';
import PrimaryButton from '../ui/PrimaryButton';

interface GameOverProps {
    resetGame: () => void;
}

const GameOver = ({resetGame}:GameOverProps) => {
    return (
        <View style={styles.screen}>
            <MainTitle title='Game Over'></MainTitle>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>0</Text> rounds to guess the number <Text style={styles.highlight}>0</Text></Text>
            <PrimaryButton onPress={resetGame}>NEW GAME</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:24
    },
    imageContainer: {
        borderRadius: 200,
        height: 300,
        width: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    }, 
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center'
    },
    highlight: {
        color: Colors.primary800,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold'
    }
})
export default GameOver;