import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';

interface MainTitleProps {
    title: string;
    textColor?: string;
}
const MainTitle = ({title,textColor}: MainTitleProps) => {
    return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color:Colors.accent500,
        textAlign: 'center',
        borderColor: Colors.accent500,
        borderWidth: 2,
        padding: 12,
        width: '100%',
    }
})
export default MainTitle;