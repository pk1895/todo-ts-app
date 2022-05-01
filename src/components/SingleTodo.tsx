import React, { useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todo from '../model/todo';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [edit, setEdit] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>("");

    const onEdit = () => {
        setEdit(true);
        setEditValue(todo.todo);
    }

    const onEditTodo = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        setTodos(todos.map((el) => (el.id === todo.id ? { ...todo, todo: editValue } : todo)));
        setEdit(false);
    }

    const onDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const onDone = (evt: React.MouseEvent<HTMLSpanElement>) => {
        setTodos(todos.map((el) => el.id === todo.id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    return (
        <form className="todos__single" onSubmit={(evt) => onEditTodo(evt)}>
            {edit ?
                <input ref={inputRef} value={editValue} className="todos__single--text" onChange={(e) => setEditValue(e.target.value)} />
                : todo.isDone ? <s className="todos__single--text">{todo.todo}</s> : <span className="todos__single--text">{todo.todo}</span>
            }

            <div>
                <span
                    className="icon"
                    onClick={onEdit}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={onDelete}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={(evt) => onDone(evt)}>
                    <MdDone />
                </span>
            </div>
        </form >
    )
}

export default SingleTodo;