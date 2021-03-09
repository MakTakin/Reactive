import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from '../actions/types';

const initiallState = {
    posts: []
}

export const PostsReducer = (state = initiallState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }

        case FETCH_POSTS_FAILED:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}