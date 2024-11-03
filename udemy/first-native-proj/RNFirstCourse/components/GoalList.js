import { View, Text, StyleSheet, FlatList } from 'react-native';
import GoalItem from './GoalItem';
const GoalList = ({ goals, setGoals }) => {


    const deleteGoalHandler = (id) => {
        setGoals(currentGoals => currentGoals.filter((goal) => goal.id !== id))
    }
    return (
        <View style={styles.goalsContainer}>
            {/* Wrap a view around your scroll view with the stylings you want on the scroll container on that wrapper view otherwise the scrollview will base off of the up most parent */}
            {/* Dont use scroll view for lists though instead use flatlists */}
            {/* <ScrollView > */}
            <FlatList data={goals} renderItem={itemData => <GoalItem goal={itemData.item} deleteGoalHandler={deleteGoalHandler} />} keyExtractor={(item, index) => item.id} />
            {/* </ScrollView> */}
        </View>
    )
}

export default GoalList;
const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
    }
});
