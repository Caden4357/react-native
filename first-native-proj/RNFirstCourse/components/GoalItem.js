import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
const GoalItem = ({ goals }) => {
    return (
        <View style={styles.goalsContainer}>
            {/* Wrap a view around your scroll view with the stylings you want on the scroll container on that wrapper view otherwise the scrollview will base off of the up most parent */}
            {/* Dont use scroll view for lists though instead use flatlists */}
            {/* <ScrollView > */}
            <FlatList data={goals} renderItem={itemData => <Text style={styles.goalText}>{itemData.item.text}</Text>} keyExtractor={(item, index) => item.id} />
            {/* </ScrollView> */}
        </View>
    )
}

export default GoalItem;
const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
    },
    goalText: {
        margin: 10,
        backgroundColor: 'purple',
        color: 'white',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 16,
    }
});
