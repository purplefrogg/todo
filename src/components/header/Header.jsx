import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/app-Reducer'
import { Clock } from '../clock/Clock'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.app.theme)
  
    const onChangeTheme = () => {
        theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))
    }

    return (<nav className={style.Header}>
        <Clock className={style.clock + ' ' + style.item} />
        <div className={style.menu + ' ' + style.item}>
            <ul>
                
                <li>menu
                    <ul className="dropdown" aria-label="submenu">
                        <li><NavLink to="/PasswordGenerator">Password Generator</NavLink></li>
                        <li><NavLink to="/todo">todo</NavLink></li>
                        <li><NavLink to="/daw">daw</NavLink></li>
                        <li><NavLink to="/Cryptocurrency">crypto</NavLink></li>
                        <li><NavLink to="/Album">Album</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <button onClick={onChangeTheme} className={style.item + ' ' + style.btn}>
            {theme === 'light' ? '🌞' : '🌛'}</button>
    </nav>)
}
