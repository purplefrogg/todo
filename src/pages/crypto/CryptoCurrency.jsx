

const Cryptocurrency = ({id, symbol, current_price, currency}) => {
    return <div>{symbol} {id}  {current_price}  {currency}</div>
}

export default Cryptocurrency