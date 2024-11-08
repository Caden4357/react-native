import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GameOver = () => {
    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default GameOver;