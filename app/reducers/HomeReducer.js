import {
    REQUEST_ALL_PEOPLE,
    RECEIVE_ALL_PEOPLE,
    REQUEST_PERSON_DETAILS,
    RECEIVE_PERSON_DETAILS
}
    from '../actions/Actions';

const initialState = {
    currentSWData: {},
    requestInProgress: false,
    loadingStatus: '',
    personData: {},
    loadingDetails: false
}

export function getSWCharacterInfo(state = initialState, action) {
    switch (action.type) {
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
        case REQUEST_PERSON_DETAILS:
            return Object.assign({}, state, {
                loadingDetails: action.loadingDetails,
                loadingStatus: action.loadingStatus
            })
            break;
        case RECEIVE_PERSON_DETAILS:
            return Object.assign({}, state, {
                personData: action.personData,
                loadingDetails: action.loadingDetails,
                loadingStatus: ''
            })
            break;
        default:
            return state
    }
}