import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Todo } from '@/constants/Todo';
import * as Crypto from 'expo-crypto'

const TodoForm = ({ todos, setTodos }: any) => {
    const [todo, setTodo] = useState<string>('')


    const addTodo = async () => {
        if (todo.length < 1) {
            Alert.alert('Todo cannot be blank')
        } else {
            const id: string = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA512, new Date().toString())
            let newTodo: Todo = {
                id,
                todo,
                isComplete: false
            }
            setTodos([...todos, newTodo])
            setTodo('')
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add a new todo"
                onChangeText={(text) => setTodo(text)}
                value={todo}
                style={styles.input}
                placeholderTextColor={'white'}
            />
            <Pressable style={styles.bttnContainer} onPress={addTodo}>
                <Text>Add</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 20
    },
    bttnContainer: {
        width: 50,
        borderWidth: 1,
        borderColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        padding: 10,
        marginLeft: 10,
        fontSize: 18
    },
})
export default TodoForm;