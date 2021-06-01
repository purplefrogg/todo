import style from './App.module.scss';
import { Header } from './components/header/Header';
import Todo from './pages/todo/ToDo'
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';


const App = () => {
  const theme = useSelector((state) => state.app.theme)
  return (
      <div className={`${style.app} ${theme === 'dark' ? style.dark : style.light}`}>
        <Header className={style.header}/>
        <Todo />
        
      </div>
  );
}

const ProvidedApp = () => {
  return (
    <Provider store={store}>
     <App />
    </ Provider>
  );
}

export default ProvidedApp;
