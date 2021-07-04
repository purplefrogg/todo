const ADD_TASK = "todo/ADD_TODO"
const DELETE_TASK = "todo/DELETE_TASK"
const DELETE_ALL_TASKS = "todo/DELETE_ALL_TASK"
const EDIT_TASK = "todo/EDIT_TASK"
const COMPLETE_TASK = "todo/COMPLETE_TASK"

const initialState = {
    tasks: [{ id: 1, text: 'hello', completed: false }],
   
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {
                    id:
                        state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1, ...action.task, completed: false
                }]
            }
        case DELETE_TASK:
            return {
                ...state, tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        case DELETE_ALL_TASKS:
            return {
                ...state, tasks: []
            }
        case EDIT_TASK:
            return {
                ...state, tasks: [...state.tasks.map(el => {
                    if (el.id === action.id) return { id: el.id, text: action.text }
                    return el
                })]
            }
        case COMPLETE_TASK:
            return {
                ...state, tasks: [...state.tasks.map(el => {
                    if (el.id === action.id) return { id: el.id, text: el.text, completed: action.completed }
                    return el
                })]
            }
        default:
            return state
    }
}
export const addTask = (task) => ({ type: ADD_TASK, task })
export const deleteTask = (id) => ({ type: DELETE_TASK, id })
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS })
export const editTask = (text, id) => ({ type: EDIT_TASK, text, id })
export const completeTask = (completed, id) => ({ type: COMPLETE_TASK, completed, id })

export default todoReducer