import {combineReducers} from 'redux'
import {UsersReducer} from "./usersReducer";
import {PostsReducer} from "./postsReducer";
import {AppReducer} from "./appReducer";
export const rootReducer = combineReducers( {
    posts: PostsReducer,
    users: UsersReducer,
    loading: AppReducer
})