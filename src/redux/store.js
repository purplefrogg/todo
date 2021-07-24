import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./app-Reducer";
import cryptoReducer from "./crypto-Reducer";
import todoReducer from "./todo-Reducer";
import thunkMiddleware from 'redux-thunk'; 
import dawReducer from "./daw-Reducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer,
    crypto: cryptoReducer,
    daw: dawReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store
export default store
