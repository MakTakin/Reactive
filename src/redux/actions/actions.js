import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    APP_LOADING,
    APP_LOAD,
    FETCH_POSTS_FAILED,
    FETCH_POSTS_SUCCESS,
    ADD_USER,
    ADD_FORM_USER,
    REDACT_USER,
    REDACT_FORM_USER,
    CHANGE_ACTIVATE_USER
} from './types';

export const appLoading = () => {
    return {
        type: APP_LOADING,
    }
}

export const appLoad = () => {
    return {
        type: APP_LOAD,
    }
}

export const fetchUsersSuccess = ( users ) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailed = ( error ) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

export const fetchPostsSuccess = ( posts ) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailed = ( error ) => {
    return {
        type: FETCH_POSTS_FAILED,
        payload: error
    }
}

export const redactFormUser = ( status ) => {
    return {
        type: REDACT_FORM_USER,
        payload: status
    }
}
export const addFormUser = ( status ) => {
    return {
        type: ADD_FORM_USER,
        payload: status
    }
}

export const addUser = ( user ) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const redactUser = ( user ) => {
    return {
        type: REDACT_USER,
        payload: user,
        id: user.id
    }
}

export const changeActivateUser = ( status ) => {
    return {
        type: CHANGE_ACTIVATE_USER,
        payload: status
    }
}
