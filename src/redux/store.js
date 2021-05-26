import { createStore, combineReducers } from "redux";
import todoReducer from "./todo-Reducer";


const rootReducer = combineReducers({
    todo: todoReducer
})
const store = createStore(rootReducer)
window.store = store
export default store
