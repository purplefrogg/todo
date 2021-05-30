import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/app-Reducer'
import { Clock } from '../clock/Clock'
import style from './../../App.module.scss'

export const Header = () => {
    const theme = useSelector((state) => state.app.theme)
    const dispatch = useDispatch()
    const onChangeTheme = () => {
        theme === 'dark' ? dispatch(changeTheme('light')) :  dispatch(changeTheme('dark'))
    }
    return (<div className="Header">
        <Clock />
        <button onClick={onChangeTheme} className={theme === 'light' ? style.dark : style.light}>
            {theme === 'light' ? 'dark' : 'light'}</button>
    </div>)
}
