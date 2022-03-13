import update from 'immutability-helper';

const SET_AUDIOTRACK = 'daw/SET_AUDIOTRACK'
const SET_TRIGGER_KEY = 'daw/SET_TRIGGER_KEY'
const TOGGLE_IS_TRIGGER = 'daw/TOGGLE_IS_TRIGGER'

const initialState = {
    audioTracks: []
}

const dawReducer = ( state = initialState, action) => {
    switch(action.type){
        case SET_AUDIOTRACK:
            return {...state, audioTracks : [...state.audioTracks, {
                id: state.audioTracks.length ? state.audioTracks[state.audioTracks.length - 1].id + 1 : 1
                , ...action.payload, triggerKey: 'q'}]}
        case SET_TRIGGER_KEY:
            return {...state, audioTracks: [...state.audioTracks.map((el)=>{
                if(el.id === action.payload.id)
                    return {...el, triggerKey: action.payload.triggerKey}
                return el
            })]}
        case TOGGLE_IS_TRIGGER:
            let t = state.audioTracks.filter((audioTrack)=>audioTrack.triggerKey === action.payload)
            let newarr = [...state.audioTracks]
            newarr[t[0].id-1].triggered= true
            update(state.audioTracks, {$set:state.audioTracks[t[0].id-1].triggered=true})
            if(t.length===0) return {...state}
            else return {...state
            }

        default:
            return state
    }
}

export const setAudioTrack = (payload) => ({type: SET_AUDIOTRACK, payload})
export const setToggleIsTrigger = (payload) => ({type: TOGGLE_IS_TRIGGER, payload})
export const setTriggerKey = (payload) => ({type: SET_TRIGGER_KEY, payload})


export default dawReducer