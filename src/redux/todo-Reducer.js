const ADD_TASK = "todo/ADD_TODO"
const DELETE_TASK = "todo/DELETE_TASK"
const EDIT_TASK = "todo/EDIT_TASK"
const initialState = {
    tasks: [{ id: 0, text: 'hello' }]
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, { id: 
                    state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 0 , ...action.task }]
            }
        case DELETE_TASK:
            return {
                ...state, tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        case EDIT_TASK:
           
            return {
                ...state, tasks: [...state.tasks.map(el => {if(el.id === action.id) return { id: el.id, text: action.text}
                return el})]
            }
        default:
            return state
    }
}
export const addTask = (task) => ({ type: ADD_TASK, task })
export const deleteTask = (id) => ({ type: DELETE_TASK, id })
export const editTask = (text, id) => ({ type: EDIT_TASK, text, id })

export default todoReducer