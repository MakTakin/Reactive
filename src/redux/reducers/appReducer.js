import { APP_LOAD, APP_LOADING } from '../actions/types';

const initiallState = {
    loading: false,
}

export const AppReducer = (state = initiallState, action) => {
    switch (action.type) {
        case APP_LOADING:
            return {
                ...state,
                loading: true
            }

        case APP_LOAD:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}