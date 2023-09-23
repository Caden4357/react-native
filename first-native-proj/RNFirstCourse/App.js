import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.flexContainer}>
        <TextInput placeholder='Enter Your Goal' style={styles.textInput}/>
        <Button title='Add Goal'/>
      </View>

      <View>
        <Text>List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '80%',
    padding: 8
  },
  mainContainer: {
    padding: 50
  }
});
