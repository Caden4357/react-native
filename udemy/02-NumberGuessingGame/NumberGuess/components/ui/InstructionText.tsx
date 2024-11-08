import { useState } from 'react';
import { StyleSheet, View, Text, StyleProp, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
interface InstructionTextProps { 
    children: React.ReactNode;
    style?: StyleProp<TextStyle>
}

const InstructionText = ({children, style}: InstructionTextProps) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontSize: 20,
    },
})
export default InstructionText;