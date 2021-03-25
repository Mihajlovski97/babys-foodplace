import {combineReducers} from 'redux';

import recipes from './recipe';
import auth from './auth';

export default combineReducers({
    recipes,
    auth
});