import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Todo } from '@/constants/Todo';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoList = ({todos, setTodos}: any) => {

    const toggleTodo = (id: string) => {
        setTodos(todos.map((todo: Todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        }))
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo:Todo) => todo.id !== id))
    }

    const Todo = ({ todo, id, isComplete }: Todo) => (
        <TouchableOpacity onPress={() => toggleTodo(id)}>
            <View style={styles.todoContainer}>
                <Text style={[styles.todoText, isComplete ? styles.completedText : '']}>{todo}</Text>
                <AntDesign name="delete" size={24} color="red" onPress={() => deleteTodo(id)} />
            </View>
        </TouchableOpacity>
    )
    const seperatorComponent = <View style={styles.seperator} />
    return (
        <View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <Todo todo={item.todo} id={item.id} isComplete={item.isComplete} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={seperatorComponent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    todoText: {
        color: 'white',
        fontSize: 22,
        marginLeft: 8,
        marginBottom: 8
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'rgb(64,64,65)'
    },
    seperator: {
        height: 1,
        width: '100%',
        marginHorizontal: 'auto',
        marginBottom: 10,
        backgroundColor: 'white'
    },
})
export default TodoList;