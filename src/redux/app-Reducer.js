const CHANGE_THEME = 'app/CHANGE_THEME'

const initialState = {
   theme: 'light'
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, theme: action.payload}
        default:
            return state
    }
}
export const changeTheme = (payload) => ({ type: CHANGE_THEME, payload })
export default appReducer