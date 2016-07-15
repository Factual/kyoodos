import { combineReducers } from 'redux'
import kyoodos from './kyoodos'
import users from './users'
import groups from './groups'

let rootReducer = combineReducers({
    kyoodos,
    users,
    groups
})
export default rootReducer
