import { useSelector } from "react-redux";


const CompletedCasesCounter = () => {

  const todos = useSelector((state) => 
      state.todos.filter((todo) => todo.completed === true)
  );

  console.log(todos);

  return (
    <h3>{todos.length}</h3>
  )
}


export default CompletedCasesCounter;