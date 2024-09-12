import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
const GoalInput = ({ goals, setGoals }) => {
    const [goalText, setGoalText] = useState('');

    const handleGoalTextChange = (text) => {
        setGoalText(text);
    }
    const handleAddGoal = () => {
        setGoals(currentGoals => [...currentGoals, { text: goalText, id: Math.random().toString() }]); // ! key is a must for flatlist if you have an object with a key property flatlist will use that key to render the list automatically otherwise you have to provide a key extractor
        setGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter Your Goal' style={styles.textInput} onChangeText={handleGoalTextChange} value={goalText} />
            <Button title='Add Goal' onPress={handleAddGoal} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        width: '70%',
    },
});