import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, completeTask } from '../../redux/todo-Reducer';

export const Task = ({ task }) => {
    const dispatch = useDispatch()
    let  {text, id, completed} = task
    let [editMode, setEditMode] = useState(false)
    let [taskText, setTaskText] = useState(text)
    const onDelete = () => {
        dispatch(deleteTask(id))
    }
    const onComplete = (e) => {
        
        dispatch(completeTask(e.currentTarget.checked, id))
        }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        !taskText.trim() ? dispatch(deleteTask(id)) : dispatch(editTask(taskText, id))
        setEditMode(false)
    }
    const onTextChange = e => {
        setTaskText(e.currentTarget.value)
    }
    return (<div>
        <input type='checkbox' onChange={onComplete} defaultChecked={completed} />
        {editMode &&
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onTextChange}
                value={taskText}></input>}
        {!editMode && <>{id + '. ' + text}</>}
        <button onClick={activateEditMode}>edit</button>
        <button onClick={onDelete}>del</button>
    </div>)
}
