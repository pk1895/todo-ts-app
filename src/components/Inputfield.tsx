import React from 'react'
import "./style.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    onAddTodo: (evt: React.FormEvent<HTMLFormElement>) => void
}

const Inputfield: React.FC<Props> = ({ todo, setTodo, onAddTodo }) => {

    const onSetTodo = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(evt.target.value);
    }

    return (
        <form onSubmit={(evt) => { onAddTodo(evt) }} className="input">
            <input
                className="input__box"
                type="text"
                value={todo}
                placeholder="Enter a task..."
                onChange={(evt) => onSetTodo(evt)}></input>
            <button type='submit' className="input_submit">Go</button>
        </form>
    )
}

export default Inputfield