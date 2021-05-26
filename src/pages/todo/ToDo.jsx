import { connect, useDispatch } from 'react-redux'

import { ToDoAdd } from './ToDoAdd'
import { addTask, deleteTask, editTask } from '../../redux/todo-Reducer';
import { useReducer, useState } from 'react';


const ToDo = (props) => {
    return (<div>
        <ToDoAdd addTask={props.addTask} />
        {props.tasks.map(task => <Task deleteTask={props.deleteTask} editTask={props.editTask}
        key={task.id} id={task.id} text={task.text}/>)}
    </div>)
}
const Task = ({id, text, deleteTask, editTask}) => {
    const onDelete = () => {
        deleteTask(id)
    }
    const [editMode, setEditMode] = useState(false)
    const [taskText, setTaskText] = useState(text)
    const activateEditMode = () => {
        setEditMode(true)

    }
    const deactivateEditMode = () => {
        editTask(taskText, id)
        setEditMode(false)
    }
    const onTextChange = e => {
        setTaskText(e.currentTarget.value)
    }
    return (<div>
        {editMode && 
        <input autoFocus={true} onBlur={deactivateEditMode} onChange={onTextChange}
        value={taskText}></input>}
        {!editMode && <div>{id} {text}</div>}
        <button onClick={activateEditMode}>edit</button>
        <button onClick={onDelete}>del</button>
    </div>)
}
let mapStateToProps = state => {
    return {

        tasks: state.todo.tasks
    }
}


export default connect(mapStateToProps, { addTask, deleteTask, editTask })(ToDo)
