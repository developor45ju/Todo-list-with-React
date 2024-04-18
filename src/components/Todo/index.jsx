import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';

const Todo = function ({task, onDelete, onEdit}) {
    
    return (
        <acticle key={task.id} className="toDo__card">
            <h1>{task.name}</h1>
            <FontAwesomeIcon icon={faPen} onClick={onEdit} />
            <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
        </acticle>
    )
}

export default Todo;