import { connect, useSelector } from 'react-redux'
import style from './ToDo.module.scss'
import { ToDoAdd } from './ToDoAdd'
import { addTask, deleteTask, deleteAllTasks, editTask, completeTask } from '../../redux/todo-Reducer';
import { Task } from './Task';
import { useState } from 'react';
import { useEffect } from 'react';


const ToDo = ({ ...props }) => {
    const tasks = useSelector((state) => state.todo.tasks)
    useEffect(() => {
        localStorage.setItem('tasksLS', JSON.stringify(tasks))
    }, [tasks])
    const [filter, setFilter] = useState('All')
    const changeFilterAll = (e) => {
        setFilter(e.currentTarget.value)
    }
    const onDeleteAllTasks = () => {
        props.deleteAllTasks()
    }
    let filteredTasks = filter === 'Completed' ? tasks.filter(task => task.completed === true) :
        filter === 'Incomplete' ? tasks.filter(task => task.completed === false) : tasks
    return (<div className={style.todo}>
        <ToDoAdd addTask={props.addTask} />
        <div className={style.buttons}>
            <span>all
            <input type="radio" name="filter" defaultChecked='true' id="1" value='All'  onClick={changeFilterAll} /></span>
            <span>incomplete
            <input type="radio" name="filter" id="2" value='Incomplete' onClick={changeFilterAll}/></span> 
            <span>completed
            <input type="radio" name="filter" id="3" value='Completed' onClick={changeFilterAll}/>
           </span>
            
        </div>
        <div className={style.Tasks}>
            {filteredTasks && filteredTasks.map(task => <Task deleteTask={props.deleteTask} editTask={props.editTask}
                completeTask={props.completeTask} key={task.id} task={task} />)}
        </div>
        <div>
            <button>left</button>
            <button>right</button>
        </div>

        <button onClick={onDeleteAllTasks}>delete all</button>
    </div>)
}



export default connect(null,
    {
        addTask, deleteTask, deleteAllTasks,
        editTask, completeTask,
    })(ToDo)
