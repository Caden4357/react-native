import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
interface CardProps {
    children: React.ReactNode;
}
const Card = ({children}: CardProps) => {
    return (
        <View style={styles.inputContainer}>
            {children}
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
})
export default Card;