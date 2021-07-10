import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCoinMarkets } from "../../redux/crypto-Reducer"
import Cryptocurrency from "./CryptoCurrency"

const CryptoMarkets = () => {
    const cryptocurrencies = useSelector((state) => state.crypto.cryptocurrencies)
    const dispatch = useDispatch()
    const currency = useSelector((state) => state.crypto.currency)
    
    useEffect(() => {
        dispatch(getCoinMarkets())
        const updateMarkets = setInterval(() => {
            dispatch(getCoinMarkets())
        }, 60000)
        return () =>{clearInterval(updateMarkets)}
    }, [currency, dispatch])

    return <div>
        {cryptocurrencies.map((coin) => {return <Cryptocurrency key={coin.id} id={coin.id} symbol={coin.symbol} 
        currency={currency} current_price ={coin.current_price} />})}
    </div>
} 

export default CryptoMarkets