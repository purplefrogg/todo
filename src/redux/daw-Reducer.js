const SET_AUDIOTRACK = 'daw/SET_AUDIOTRACK'

const initialState = {
    audioTracks: []
}

const dawReducer = ( state = initialState, action) => {
    switch(action.type){
        case SET_AUDIOTRACK:
            return {...state, audioTracks : [...state.audioTracks, action.payload]}
        default:
            return state
    }
}

export const setAudioTrack = (payload) => ({type: SET_AUDIOTRACK, payload})


export default dawReducer