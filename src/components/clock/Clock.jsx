import { useEffect, useState } from 'react'


export let Clock = () => {
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        let newDate = new Date()
        setInterval(() => {
            newDate = new Date()
            setDate(newDate)
        }, 1000)
    }, [])
    return (<div>
        {date.toLocaleTimeString()}
    </div>)
}
