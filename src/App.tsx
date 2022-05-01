import { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import TodoList from "./components/TodoList";
import Todo from "./model/todo"

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }

  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <Inputfield todo={todo} setTodo={setTodo} onAddTodo={onAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
