import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTriggerKey } from '../../redux/daw-Reducer';
import style from './daw.module.scss'

const AudioTrack = ({...props}) => {
    let audioContext = useSelector((state)=>state.app.audioContext)

    let oscillator = audioContext.createOscillator();
    const dispatch = useDispatch()
    const [FrequencyValue, setFrequencyValue] = useState(500)
   
   
    useEffect(()=>{
  
        oscillator.type = 'sine'; 
        oscillator.frequency.value = FrequencyValue;
        oscillator.connect(audioContext.destination)
        oscillator.start()
        oscillator.stop(audioContext.currentTime+1)
        return ()=>{
            oscillator.disconnect(audioContext.destination)
           
        }
    })
    let changingFrequencyValue = (e) =>{
        setFrequencyValue(e.currentTarget.value)
    }
    let onStop =() =>{
        oscillator.stop()
    }
    let onChangeOscillatorkey = (e) =>{
        dispatch(setTriggerKey({id: props.id,triggerKey: e.currentTarget.value}))
    }
    return <div className={style.AudioTrack} >
        <input type="range" min='400' max='2400' defaultValue={FrequencyValue} onChange={changingFrequencyValue} />
        <button onClick={onStop}>stop</button>
        <input type="text" maxLength='1' value={props.triggerKey} onChange={onChangeOscillatorkey}/>
 </div>
}

export default AudioTrack