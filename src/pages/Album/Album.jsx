import { useEffect } from "react";
import { useState } from "react";


const Album = () => {
    const [FrequencyValue, setFrequencyValue] = useState(500)
    
    let audioCtx = new AudioContext();
    let oscillator = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    oscillator.frequency.value = FrequencyValue; // value in hertz
 
    oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
    //oscillator.start();
    useEffect(()=>{
        gainNode.connect(audioCtx.destination)  
    },[FrequencyValue])
    let changingFrequencyValue = (e) =>{
     
        gainNode.disconnect(audioCtx.destination)
      
        setFrequencyValue(e.currentTarget.value)
      
       
    }
    let onCreateAudioNode = () =>{
       
    }
       
   
    return <div>
        <button onClick={onCreateAudioNode}>create</button>
       
        <input type="range" min='400' max='2400' defaultValue={FrequencyValue} onChange={changingFrequencyValue} />
    </div>
}

export default Album