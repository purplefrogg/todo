import { useState } from 'react';

export const Task = ({ task, deleteTask, editTask, completeTask }) => {
    let  {text, id, completed} = task
    let [editMode, setEditMode] = useState(false)
    let [taskText, setTaskText] = useState(text)
    const onDelete = () => {
        deleteTask(id)
    }
    const onComplete = (e) => {
        
        completeTask(e.currentTarget.checked, id)
        }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        !taskText ? deleteTask(id) : editTask(taskText, id)
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
