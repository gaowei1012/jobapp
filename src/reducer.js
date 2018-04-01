import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chatuser } from './redux/chat.redux'
// 合并 
export default combineReducers({user, chatuser})