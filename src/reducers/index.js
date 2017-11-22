import { combineReducers } from 'redux'
import { count } from './count'
import { user } from './user'

const Reducers = combineReducers({
    count,
    user
});

export default Reducers
