import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import plus from '../../images/plus.png';
import cl from './TodoForm.module.css';

const TodoForm = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAdd = () => {
    if (value) {
      dispatch(addTodo({
        title: value,
      }))
    }
    setValue('');
  }

  return (
    <div className={cl.form__wrap}>
      <input 
        className={cl.form__input}
        type="text" 
        placeholder="add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <button className={cl.form__btn} onClick={onAdd}>
        <img src={plus} alt="add" />
      </button>
    </div>
  )
}
export default TodoForm;