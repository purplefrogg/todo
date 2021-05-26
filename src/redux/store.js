import { createStore, combineReducers } from "redux";
import todoReducer from "./todo-Reducer";


const rootReducer = combineReducers({
    todo: todoReducer
})
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store
export default store
