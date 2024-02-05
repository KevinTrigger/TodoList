import CompletedCasesCounter from '../../components/CompletedCasesCounter/CompletedCasesCounter';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import cl from './Main.module.css';

const Main = () => {
  return (
    <main className={cl.main}>
      <div className={cl.main__container}>
        <TodoForm />
        <TodoList />
        <CompletedCasesCounter />
      </div>
    </main>
  )
}

export default Main;