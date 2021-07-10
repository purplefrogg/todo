

const Cryptocurrency = ({id, symbol, current_price, currency}) => {
    return <div>{id} {symbol}/{currency} {current_price}</div>
}

export default Cryptocurrency