import style from './App.module.scss';
import { Header } from './components/header/Header';
import Todo from './pages/todo/ToDo'
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordGenerator from './pages/PasswordGenerator/PasswordGenerator';
import CryptoMarkets from './pages/crypto/CryptoPage';
import Daw from './pages/daw/Daw';
import Album from './pages/Album/Album';

const App = () => {
  const theme = useSelector((state) => state.app.theme)

  return (
    <div className={`${style.app} ${theme === 'dark' ? style.dark : style.light}`} >
      <Header />
      <div className={style.content}>
        <Routes>
          <Route path="/todo" exact element={<Todo />} />
          <Route path="/Cryptocurrency" element={<CryptoMarkets />}/>
          <Route path="/daw" element={<Daw />}></Route>
          <Route path="/album" element={<Album />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
          <Route path="/" element={<div>page not found!</div>}/>
        </Routes>
      </div>

    </div>
  );
}

const ProvidedApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </ Provider>
    </Router>
  );
}

export default ProvidedApp;
