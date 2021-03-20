import {combineReducers} from 'redux';
import gitReducer from './Git/git.reducer';

const rootReducer = combineReducers({
    git: gitReducer
});
export default rootReducer;
