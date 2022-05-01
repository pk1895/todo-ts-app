import React from 'react'
import Todo from "../model/todo";
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    return (
        <div>
            <ul>
                {todos.map(todo =>
                    <SingleTodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos} />
                )}
            </ul>
        </div>
    )
}

export default TodoList;