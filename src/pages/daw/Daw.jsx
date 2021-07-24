import { useDispatch, useSelector } from "react-redux";
import AudioTrack from "./AudioTrack";
import {setAudioTrack} from '../../redux/daw-Reducer'
import style from './daw.module.scss'
import thrill from './thrill-pill-egor-krid-morgenshtern-grustnaya-pesnya-mp3.mp3'

const Daw = () =>{
  const audioTracks = useSelector((state) => state.daw.audioTracks)
  const dispatch = useDispatch()
  let onLoadAudio = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      
      reader.onload = (e) => {
        dispatch(setAudioTrack(e.target.result))
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  const dates = [true, false, true, true]
  const play = () => {
  }
  let mappedAudioTracks = audioTracks.map((audioTrack) => <AudioTrack data={audioTrack}/>)
    return <div className={style.Daw}>
        <input type="file" onInput={onLoadAudio} />
        {mappedAudioTracks}
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <button onClick={play}>play</button>
    </div>
}

export default Daw