import { useDispatch, useSelector } from 'react-redux'
import style from './ToDo.module.scss'
import { ToDoAdd } from './ToDoAdd'
import { Task } from './Task';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteAllTasks } from '../../redux/todo-Reducer';


const ToDo = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.todo.tasks)
    useEffect(() => {
        localStorage.setItem('tasksLS', JSON.stringify(tasks))
    }, [tasks])
    const [filter, setFilter] = useState('All')
    const changeFilterAll = (e) => {
        setFilter(e.currentTarget.value)
    }
    const onDeleteAllTasks = () => {
        dispatch(deleteAllTasks())
    }
    let filteredTasks = filter === 'Completed' ? tasks.filter(task => task.completed === true) :
        filter === 'Incomplete' ? tasks.filter(task => task.completed === false) : tasks
    return (<div className={style.todo}>
        <ToDoAdd />
        <div className={style.buttons}>
            <span>
                <label htmlFor="1">all</label>
                <input type="radio" name="filter" defaultChecked='true' id="1" value='All' onClick={changeFilterAll} />
            </span>
            <span>
                <label htmlFor="2">incomplete</label>
                <input type="radio" name="filter" id="2" value='Incomplete' onClick={changeFilterAll} />
            </span>
            <span>
                <label htmlFor="3">completed</label>
                <input type="radio" name="filter" id="3" value='Completed' onClick={changeFilterAll} />
            </span>

        </div>
        <div className={style.Tasks}>
            {filteredTasks && filteredTasks.map(task => <Task key={task.id} task={task} />)}
        </div>
        <div>
            <button>left</button>
            <button>right</button>
        </div>

        <button onClick={onDeleteAllTasks}>delete all</button>
    </div>)
}



export default ToDo
