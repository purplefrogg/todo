import { useState } from 'react';

export const Task = ({id, text, deleteTask, editTask}) => {
    const onDelete = () => {
        deleteTask(id)
    }
    const onComplete = (e) => {
        // e.currentTarget.disabled = true
       
    }
    const [editMode, setEditMode] = useState(false)
    const [taskText, setTaskText] = useState(text)
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
        <input type='checkbox' onChange={onComplete}/>
        {editMode && 
        <input autoFocus={true} onBlur={deactivateEditMode} onChange={onTextChange}
        value={taskText}></input>}
        {!editMode && <span>{id + '. ' + text}</span>}
        <button onClick={activateEditMode}>edit</button>
        <button onClick={onDelete}>del</button>
    </div>)
}
