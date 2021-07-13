import { useEffect } from "react"
import { useState } from "react"


const PasswordGenerator = () => {
    const [generatedPass, setGeneratedPass] = useState( sessionStorage.getItem('generatedPassLS') || '')
    const [PasswordLength, setPasswordLength] = useState(sessionStorage.getItem('passwordLengthLS') || 5)
    const generatingPassword = () => {
        const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let res = []
        for(let i = 0; i < PasswordLength; i++){
            res.push(str[Math.round(Math.random()*100 % str.length)])
        }
        setGeneratedPass(res.join(''))  
    }
    useEffect(() => {
        sessionStorage.setItem('generatedPassLS', generatedPass)
        sessionStorage.setItem('passwordLengthLS', PasswordLength)
    }, [generatedPass, PasswordLength])
    const changingPassLength = (e) =>{
        setPasswordLength(e.currentTarget.value)
    }
    const onCopy =  (e) => {
        navigator.clipboard.writeText(e.currentTarget.value)      
    }
    return <div>
        <input type="range" min='5' max='20' defaultValue={PasswordLength} onChange={changingPassLength} />
        {generatedPass}
        <br></br>
        <button onClick={onCopy} value={generatedPass}>copy</button>
        <button onClick={generatingPassword}>generate</button>
    </div>
}

export default PasswordGenerator