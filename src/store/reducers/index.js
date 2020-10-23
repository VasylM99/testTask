import { combineReducers } from 'redux';
import posts from './posts.reducers';
import users from './users.reducers'
const reducers = combineReducers({
    posts,
    users
});

export default reducers;