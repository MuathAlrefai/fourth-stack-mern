import React, {useState} from "react";
import '../css/style.css'

const TodoList = props => {

    const [todo, setTodo] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        props.setTodo(todo)
        setTodo("");
    }

    return (
    <form onSubmit={ handleSubmit }>
        <label>Todo List</label>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
    );
};

export default TodoList
