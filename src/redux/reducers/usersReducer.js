import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    ADD_USER,
    REDACT_USER,
    CHANGE_ACTIVATE_USER
} from '../actions/types';

const initiallState = {
    users: [],
    error: '',
    activateUser: false
}

export const UsersReducer = (state = initiallState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }

        case FETCH_USERS_FAILED:
            return {
                ...state,
                error: action.payload,
            }

        case CHANGE_ACTIVATE_USER:
            return {
                ...state,
                activateUser: action.payload,
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case REDACT_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? action.payload : user)
            }

        default:
            return state
    }
}