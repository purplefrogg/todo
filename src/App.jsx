import style from './App.module.scss';
import { Header } from './components/header/Header';
import Todo from './pages/todo/ToDo'
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PasswordGenerator from './pages/PasswordGenerator/PasswordGenerator';
import CryptoMarkets from './pages/crypto/CryptoPage';
import DAW from './pages/DAW/DAW';

const App = () => {
  const theme = useSelector((state) => state.app.theme)
  return (
    <div className={`${style.app} ${theme === 'dark' ? style.dark : style.light}`}>
      <Header />
      <div className={style.content}>
        <Switch>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/Cryptocurrency" component={CryptoMarkets}></Route>
          <Route path="/DAW" component={DAW}></Route>
          <Route path="/PasswordGenerator" component={PasswordGenerator}></Route>
          <Route path="/"><div>page not found!</div></Route>
        </Switch>
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
