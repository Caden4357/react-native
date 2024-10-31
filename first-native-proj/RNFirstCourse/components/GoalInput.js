import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal, Image } from 'react-native';
const GoalInput = ({ goals, setGoals, isVisible, setIsVisible }) => {
    const [goalText, setGoalText] = useState('');

    const handleGoalTextChange = (text) => {
        setGoalText(text);
    }
    const handleAddGoal = () => {
        setGoals(currentGoals => [...currentGoals, { text: goalText, id: Math.random().toString() }]); // ! key is a must for flatlist if you have an object with a key property flatlist will use that key to render the list automatically otherwise you have to provide a key extractor
        setGoalText('');
        setIsVisible(false);
    }
    return (
        <Modal visible={isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                    source={require('../assets/images/goal.png')} 
                    style={{width:200,height:200,marginBottom:20}}/>
                <TextInput placeholder='Enter Your Goal' style={styles.textInput} onChangeText={handleGoalTextChange} value={goalText} />
                <View style={styles.buttonContainer}>
                    <Button title='Add Goal' onPress={handleAddGoal} color={"#b180f0"}/>
                    <Button title='Cancel' onPress={() => setIsVisible(false)} color={"#f31282"} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        borderRadius: 6,
        padding: 16,
        marginRight: 8,
        width: '90%',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'50%',
        marginTop:20
    }
});