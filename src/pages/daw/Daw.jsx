import { useDispatch, useSelector } from "react-redux";
import AudioTrack from "./AudioTrack";
import {setAudioTrack, setToggleIsTrigger} from '../../redux/daw-Reducer'
import style from './daw.module.scss'


const Daw = () =>{

 
  const audioTracks = useSelector((state) => state.daw.audioTracks)
  const dispatch = useDispatch()
  let onLoadAudio = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      
      reader.onload = (e) => {
        dispatch(setAudioTrack(e.target.result))
      };
      reader.readAsDataURL(event.target.files[0])
    }
    
  }
  let onCreateAudioTrack = () =>{
    
    dispatch(setAudioTrack())
  }
  let triggerAudioTrack = (e) =>{
    dispatch(setToggleIsTrigger(e.key))
  } 
  let inTriggerAudioTrack = (e) =>{
    console.log(e.key)

  }
  let mappedAudioTracks = audioTracks.map((props) => <AudioTrack key={props.id} {...props}/>)
    return <div className={style.Daw} tabIndex="0" autoFocus onKeyDown={triggerAudioTrack}
     onKeyUp={inTriggerAudioTrack}>
        <input type="file" onInput={onLoadAudio} />
        {mappedAudioTracks}
       
       <button onClick={onCreateAudioTrack}>create</button>
    </div>
}

export default Daw