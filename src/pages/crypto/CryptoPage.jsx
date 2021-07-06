import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getCoinMarkets } from "../../redux/crypto-Reducer"

const Cryptocurrency = () => {
    const cryptocurrencies = useSelector((state) => state.crypto.cryptocurrencies)
  
    return <div>
        {cryptocurrencies.map((coin) => {return <div>{`${coin.id} ${coin.symbol}/usdt ${coin.current_price}`}  </div>})}
    </div>
} 
export const CryptoPage = (dispatch) =>{
    useEffect( () => {
        dispatch(getCoinMarkets())
        setInterval(() => {
            dispatch(getCoinMarkets())
        }, 60000)
    }, [])
}
export default Cryptocurrency