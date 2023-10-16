import {combineReducers} from 'redux';
import authReducer from './modules/auth'

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;