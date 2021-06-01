import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/app-Reducer'
import { Clock } from '../clock/Clock'
import style from './Header.module.scss'

export const Header = () => {
    const theme = useSelector((state) => state.app.theme)
    const dispatch = useDispatch()
    const onChangeTheme = () => {
        theme === 'dark' ? dispatch(changeTheme('light')) : dispatch(changeTheme('dark'))
    }
    return (<div className={style.Header}>
        
        <Clock className={style.clock} />
        <button onClick={onChangeTheme} className={style.btn + ' ' + style.dark}>
            {theme === 'light' ? '🌞' : '🌛'}</button>
    </div>)
}
