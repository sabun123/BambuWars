import { 
    APP_START,
    REQUEST_STARSHIP,
    RECEIVE_STARSHIP
 } 
from '../actions/Actions';

const initialState = {
    started: false,
    currentSWData: {}
}

export function startApp(state = initialState, action) {
    switch (action) {
        case APP_STARTED:
            return Object.assign({}, state, {
                started: action.started
            })
            break;
        default:
            return state
    }
}

export function getSWCharacterInfo(state = initialState, action) {
    switch(action) {
        case REQUEST_STARSHIP:
            return state;
            break;
        case RECEIVE_STARSHIP:
            return Object.assign({}, state, {
                currentSWData: action.shipInfo
            })
            break;
        default:
            return state
    }
}