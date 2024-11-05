import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface NumberOutputContainerProps {
    children: React.ReactNode;
}

const NumberOutputContainer = ({children}: NumberOutputContainerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor:Colors.accent500,
        borderRadius: 10,
        padding: 24,
        margin:24,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    text:{
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    }
})
export default NumberOutputContainer;   