import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCoinMarkets } from "../../redux/crypto-Reducer"
import Cryptocurrency from "./CryptoCurrency"
import { setCurrency } from '../../redux/crypto-Reducer'


const CryptoMarkets = (props) => {
    const cryptocurrencies = useSelector((state) => state.crypto.cryptocurrencies)
    const dispatch = useDispatch()
    const currency = useSelector((state) => state.crypto.currency)
    
    const onChangeCurrency = () => {
        currency === 'usd' ? dispatch(setCurrency('rub')) : dispatch(setCurrency('usd'))
    }
    useEffect(() => {
        dispatch(getCoinMarkets())
        const updateMarkets = setInterval(() => {
            dispatch(getCoinMarkets())
        }, 60000)
        return () =>{clearInterval(updateMarkets)}
    }, [currency, dispatch])
    console.log(props.location)
    return <div>
        <button onClick={onChangeCurrency}>{currency}</button>
        {cryptocurrencies.map((coin) => {return <Cryptocurrency key={coin.id} id={coin.id} symbol={coin.symbol} 
        currency={currency} current_price ={coin.current_price} />})}
        <div style={{color: 'red'}}>All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.</div>
    </div>
} 

export default CryptoMarkets