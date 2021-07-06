import { cryptoApi } from "../api/CoinGeckoAPI/base"

const GET_PRICE = 'crypto/GET_PRICE'

const initialState = {
    cryptocurrencies : [
    //     {
    //     id: '',Name: '', current_price: 0
    // }
]
}
const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRICE:
            return {...state, cryptocurrencies: action.payload}
        default:
            return state
    }
}
export const setPrice = (payload) => ({ type: GET_PRICE, payload })


export const getPrice = () => async (dispatch) => {
    let data = await cryptoApi.price()
    dispatch(setPrice(data.bitcoin.usd))
}
export const getCoinMarkets = () => async (dispatch) => {
    let data = await cryptoApi.coinMarkets()
    dispatch(setPrice(data))
}
export default cryptoReducer