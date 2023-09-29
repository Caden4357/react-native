import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const handleGoalTextChange = (text) => {
    setGoalText(text);
  }
  const handleAddGoal = () => {
    setGoals(currentGoals => [...currentGoals, goalText]);
    setGoalText('');
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter Your Goal' style={styles.textInput} onChangeText={handleGoalTextChange} value={goalText}/>
        <Button title='Add Goal' onPress={handleAddGoal}/>
      </View>

      <View style={styles.goalsContainer}>
        <Text style={{fontSize:20}}>List Of Goals:</Text>
        {goals?.map((goal, index) => <Text style={styles.goalText} key={index}>- {goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ! Since views are flex containers and the flex direction is column by default, we can use flex to control the height of the child containers
  appContainer: {
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:20,
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
  goalsContainer: {
    flex: 4,
  },
  goalText: {
    marginBottom: 0,
    // borderColor: 'black',
    // borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
  }
});
