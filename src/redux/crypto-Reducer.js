import { cryptoApi } from "../api/CoinGeckoAPI/base"

const SET_CRYPTOMARKETS = 'crypto/SET_CRYPTOMARKETS'
const SET_CURRENCY = 'crypto/SET_CURRENCY'
const initialState = {
    cryptocurrencies : [
    //     {
    //     id: '',Name: '', current_price: 0
    // }
],
 currency: 'usd'
}
const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CRYPTOMARKETS:
            return {...state, cryptocurrencies: action.payload}
        case SET_CURRENCY:
            return {...state, currency: action.payload}
        default:
            return state
    }
}
export const setCryptoMarkets = (payload) => ({ type: SET_CRYPTOMARKETS, payload })
export const setCurrency = (payload) => ({ type: SET_CURRENCY, payload })



export const getCoinMarkets = () => async (dispatch, getState) => {
    let data = await cryptoApi.coinMarkets(getState().crypto.currency)
    dispatch(setCryptoMarkets(data))
}
export default cryptoReducer