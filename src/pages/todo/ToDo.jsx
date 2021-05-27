import { connect } from 'react-redux'

import { ToDoAdd } from './ToDoAdd'
import { addTask, deleteTask, deleteAllTasks, editTask, completeTask, changeFilter} from '../../redux/todo-Reducer';
import { Task } from './Task';
import { useState } from 'react';


const ToDo = ({tasks, ...props}) => {
    const [filter, setFilter] = useState('All')
    const changeFilterAll = (e) =>{
        setFilter(e.currentTarget.value)
    }
    const onDeleteAllTasks = () => {
        props.deleteAllTasks()
    }
    console.log('asdas')
    let filteredTasks = filter === 'Completed' ? tasks.filter(task => task.completed === true) :
    filter === 'Incomplete' ? tasks.filter(task => task.completed === false) : tasks
    return (<div>
        <ToDoAdd addTask={props.addTask} />
        <button value='All' onClick={changeFilterAll}>all</button>
        <button value='Incomplete' onClick={changeFilterAll}>incomplete</button>
        <button value='Completed' onClick={changeFilterAll}>completed</button>
        
        {filteredTasks.map(task => <Task deleteTask={props.deleteTask} editTask={props.editTask} 
        completeTask={props.completeTask} key={task.id} task={task}/>)}
        <button onClick={onDeleteAllTasks}>delete all</button>
        
    </div>)
}
let mapStateToProps = state => {
    return {
        tasks: state.todo.tasks,
        filter: state.todo.filter
    }
}


export default connect(mapStateToProps,
    { addTask, deleteTask, deleteAllTasks,
    editTask, completeTask, changeFilter})(ToDo)
