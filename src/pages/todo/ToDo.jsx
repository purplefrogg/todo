import { connect, useSelector } from 'react-redux'
import style from './ToDo.module.scss'
import { ToDoAdd } from './ToDoAdd'
import { addTask, deleteTask, deleteAllTasks, editTask, completeTask } from '../../redux/todo-Reducer';
import { Task } from './Task';
import { useState } from 'react';


const ToDo = ({ ...props }) => {
    const tasks = useSelector((state) => state.todo.tasks)
    const [filter, setFilter] = useState('All')
    const changeFilterAll = (e) => {
        setFilter(e.currentTarget.value)
    }
    const onDeleteAllTasks = () => {
        props.deleteAllTasks()
    }
    let filteredTasks = filter === 'Completed' ? tasks.filter(task => task.completed === true) :
        filter === 'Incomplete' ? tasks.filter(task => task.completed === false) : tasks
    return (<div>
        <ToDoAdd addTask={props.addTask} />
        <button value='All' onClick={changeFilterAll}>all</button>
        <button value='Incomplete' onClick={changeFilterAll}>incomplete</button>
        <button value='Completed' onClick={changeFilterAll}>completed</button>
        <div className={style.Tasks}>
            {filteredTasks.map(task => <Task deleteTask={props.deleteTask} editTask={props.editTask}
                completeTask={props.completeTask} key={task.id} task={task} />)}
        </div>
        <button onClick={onDeleteAllTasks}>delete all</button>
    </div>)
}



export default connect(null,
    {
        addTask, deleteTask, deleteAllTasks,
        editTask, completeTask,
    })(ToDo)
