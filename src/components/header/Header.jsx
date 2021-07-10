import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/app-Reducer'
import { Clock } from '../clock/Clock'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { setCurrency } from '../../redux/crypto-Reducer'


export const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.app.theme)
    const currency = useSelector((state) => state.crypto.currency)
    const onChangeTheme = () => {
        theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))
    }
    const onChangeCurrency = () => {
        currency === 'usd' ? dispatch(setCurrency('rub')) : dispatch(setCurrency('usd'))
    }
    return (<nav className={style.Header}>
        <Clock className={style.clock + ' ' + style.item} />
        <div className={style.menu + ' ' + style.item}>
            <ul>
                
                <li>menu
                    <ul className="dropdown" aria-label="submenu">
                        <li><NavLink to="/PasswordGenerator">Password Generator</NavLink></li>
                        <li><NavLink to="/todo">todo</NavLink></li>
                         <li><NavLink to="/Cryptocurrency">crypto</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
        <button onClick={onChangeCurrency}>{currency}</button>
        <button onClick={onChangeTheme} className={style.item + ' ' + style.btn}>
            {theme === 'light' ? '🌞' : '🌛'}</button>
    </nav>)
}
