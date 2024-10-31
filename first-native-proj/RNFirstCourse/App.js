import { useState } from 'react';
import { Button, StyleSheet, View, StatusBar } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';
export default function App() {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsVisible(true);
  }


  return (
    <>
      <StatusBar barStyle="light" backgroundColor="#311b6b" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' onPress={startAddGoalHandler} color={"#a065ec"} />
        {
          isVisible && <GoalInput goals={goals} setGoals={setGoals} setIsVisible={setIsVisible} isVisible={isVisible} />
        }
        <GoalList goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // ! Since views are flex containers and the flex direction is column by default, we can use flex to control the height of the child containers
  appContainer: {
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 16,
  }
});
