import Todo from "../Todo/";

const TodoList = function ({todos, onDelete, onEdit}) {

    const handleDelete = function (id) {
        onDelete(id)
    }

    const handleEdit = function (id) {
        onEdit(id)
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo task={todo} onEdit={handleEdit} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;