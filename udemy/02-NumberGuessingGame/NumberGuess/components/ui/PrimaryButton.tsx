import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
}
const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer]: styles.buttonInnerContainer} 
                android_ripple={{ color: Colors.primary600 }}
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
        backgroundColor: Colors.primary500,
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
