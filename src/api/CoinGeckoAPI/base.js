import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
})

export const cryptoApi = ({
    price() {return instance.get(`/simple/price?ids=bitcoin&vs_currencies=usd`).then(res => res.data)},
    coinMarkets() {
        return instance.get(`/coins/markets?vs_currency=usd`).then(res => res.data)
    }
})