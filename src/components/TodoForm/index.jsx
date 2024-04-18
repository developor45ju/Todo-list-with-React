import { useState } from "react";

const TodoForm = function ({addTask}) {
    console.log(addTask);
    const [task, setTask] = useState('');

    const handleChange = function (e) {
        setTask(e.target.value);
    }

    const handleSubmit = function (e) {
        e.preventDefault();
        addTask(task);
        setTask('');
    }

    return (
        <form id="todo__form" onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange}/>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default TodoForm;