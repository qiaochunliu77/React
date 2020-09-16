import {combineReducers} from 'redux';

import {reducer as mainReducer} from '../main/store/index';

export default combineReducers({
    main: mainReducer
})