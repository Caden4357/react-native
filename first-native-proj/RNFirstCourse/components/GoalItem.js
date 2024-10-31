import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
const GoalItem = ({ goal, deleteGoalHandler }) => {

    const deleteGoal = (id) => {
        deleteGoalHandler(id)
    }
    return (
        <View style={styles.goalItem}> 
            <Pressable 
                android_ripple={{ color: '#dddddd' }} 
                onPress={() => deleteGoal(goal.id)} 
                style={({pressed}) => pressed && styles.pressedItem}> 
                {/* style above is a work around for some sort of ripple type effect on ios its triggered whenever the item is pressed and we essentially get an event about it */}
                
                <Text style={styles.goalText}>{goal.text}</Text>
            </Pressable> 
        </View>
    )
}

export default GoalItem;
const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        backgroundColor: 'purple',
        borderRadius:6
    },
    pressedItem:{
        opacity:0.5
    },
    goalText: {
        color: 'white',
        padding:8
    }
});