import { connect } from 'react-redux'

import { ToDoAdd } from './ToDoAdd'
import { addTask, deleteTask, editTask } from '../../redux/todo-Reducer';
import { Task } from './Task';


const ToDo = (props) => {
    return (<div>
        <ToDoAdd addTask={props.addTask} />
        
        {props.tasks.map(task => <Task deleteTask={props.deleteTask} editTask={props.editTask}
        key={task.id} id={task.id} text={task.text}/>)}
    </div>)
}
let mapStateToProps = state => {
    return {

        tasks: state.todo.tasks
    }
}


export default connect(mapStateToProps, { addTask, deleteTask, editTask })(ToDo)
