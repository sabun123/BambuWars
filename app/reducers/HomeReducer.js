import { APP_START } from '../actions/Actions';

const initialState = {
    started: false
}

function startApp(state, action) {
    switch (action) {
        case APP_STARTED:
            return Object.assign({}, state, {
                started: action.started
            })
        default:
            return state
    }
}