import logo from './logo.svg';
import './App.css';

export default function TodoApp() {
  return (
    <div className="Container">
       <Header message="Todo List" />
       <TodoForm />
       <TodoList />

    </div>
  );
}

 
