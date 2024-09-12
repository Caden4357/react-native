import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [goals, setGoals] = useState([]);
  
  return (
    <View style={styles.appContainer}>
      <GoalInput goals={goals} setGoals={setGoals}/>
      <GoalItem goals={goals}/>
    </View>
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
