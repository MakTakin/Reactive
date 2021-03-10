import { HIDE_MODAL, SHOW_MODAL } from '../actions/types';

const initiallState = {
    modalType: null,
    modalProps: {}
}

export const ModalReducer = (state = initiallState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: action.modalProps
            }

        case HIDE_MODAL:
            return initiallState

        default:
            return state
    }
}