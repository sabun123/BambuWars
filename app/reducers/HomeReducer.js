import { 
    APP_START,
    REQUEST_STARSHIP,
    RECEIVE_STARSHIP,
    REQUEST_ALL_PEOPLE,
    RECEIVE_ALL_PEOPLE
 } 
from '../actions/Actions';

const initialState = {
    started: false,
    currentSWData: {},
    requestInProgress: false
}

export function getSWCharacterInfo(state = initialState, action) {
    switch(action.type) {
        case APP_START:
            return Object.assign({}, state, {
                started: action.started
            })
            break;
        case REQUEST_STARSHIP:
            return state;
            break;
        case RECEIVE_STARSHIP:
            return Object.assign({}, state, {
                currentSWData: action.shipInfo
            })
            break;
        case REQUEST_ALL_PEOPLE:
            return Object.assign({}, state, {
                requestInProgress: true
            })
            break;
        case RECEIVE_ALL_PEOPLE:
            return Object.assign({}, state, {
                requestInProgress: false,
                currentSWData: action.peopleData
            })
            break;
        default:
            return state
    }
}