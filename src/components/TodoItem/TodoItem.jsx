import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../../redux/todoSlice";


const TodoItem = ({id, title, completed}) => {
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  }

  const handleCheckbox = () => {
    dispatch(toggleComplete({id, completed: !completed}));
  }
  
  return (
    <li key={id}>
        <span>{title}</span>
        <button onClick={handleDelete}>delete</button>
        <input 
          type="checkbox" 
          name="complete" 
          checked={completed}
          onClick={handleCheckbox}
        />
    </li>
  )
}

export default TodoItem;