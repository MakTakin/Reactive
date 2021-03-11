import { HIDE_MODAL, SHOW_MODAL } from '../actions/types';

const initiallState = {
    type: null,
    props: {}
}

export const ModalReducer = (state = initiallState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                type: action.modalType,
                props: action.modalProps
            }

        case HIDE_MODAL:
            return initiallState

        default:
            return state
    }
}