import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Todo } from '@/constants/Todo';
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <View style={styles.container}>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718'
  },
})