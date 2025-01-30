import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function Index() {
  const [todo, setTodo] = useState('')


  const addTodo = () => {
    console.log('Add Todo');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
          style={styles.input}
          placeholderTextColor={'white'}
        />
        <Pressable style={styles.bttnContainer} onPress={addTodo}>
          <Text style={styles.bttnText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#151718'
  },
  inputContainer:{
    flexDirection:'row',
    gap:8
  },
  bttnContainer:{
    width:50,
    borderWidth:1,
    borderColor:'white',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bttnText:{
    color:'white'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor:'white',
    color:'white',
    padding:10,
    marginLeft:10,
    fontSize:18
  }
})