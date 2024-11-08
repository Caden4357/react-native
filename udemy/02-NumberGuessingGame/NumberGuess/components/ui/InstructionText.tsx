import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
interface InstructionTextProps { 
    children: React.ReactNode;
}

const InstructionText = ({children}: InstructionTextProps) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontSize: 20,
    },
})
export default InstructionText;