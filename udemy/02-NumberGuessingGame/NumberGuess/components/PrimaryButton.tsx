import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

interface PrimaryButtonProps {
    title: string;
}
const PrimaryButton = ({ title }: PrimaryButtonProps) => {
    const pressHandler = () => {
        console.log('pressed');
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler} 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer]: styles.buttonInnerContainer} 
                android_ripple={{ color: '#640233' }}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        overflow: 'hidden',
        margin:4,
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 3, // shadow on android
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    pressed:{
        opacity:0.75,

    }
})

export default PrimaryButton;
