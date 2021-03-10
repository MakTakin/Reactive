import {combineReducers} from 'redux'
import {UsersReducer} from "./usersReducer";
import {PostsReducer} from "./postsReducer";
import {AppReducer} from "./appReducer";
import { ModalReducer } from './modalReducer';
export const rootReducer = combineReducers( {
    posts: PostsReducer,
    users: UsersReducer,
    app: AppReducer,
    modal: ModalReducer
})