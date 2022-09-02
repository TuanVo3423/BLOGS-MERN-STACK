import { combineReducers } from "redux";
import posts from './posts';
import fab from './fab';
import edit from './edit';
export default combineReducers({
    posts,
    fab,
    edit,
})