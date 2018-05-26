import { combineReducers } from 'redux';

import { getSWCharacterInfo} from './HomeReducer';

const rootReducer = combineReducers({
    getSWCharacterInfo: getSWCharacterInfo
})

export default rootReducer;