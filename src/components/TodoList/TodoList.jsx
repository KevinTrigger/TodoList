import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {

  const todoList = useSelector((state) => state.todos)

  return (
    <ul>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
          ))}
      </ul>
  )
}
export default TodoList;