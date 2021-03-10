import React from 'react'
import { useSelector } from 'react-redux';
import AddUserForm from '../form/addUserForm';
import UpdateUserForm from '../form/updateUserForm';

const MODAL_COMPONENTS = {
    'ADD_USER': AddUserForm,
    'UPDATE_USER': UpdateUserForm
}

const ModalTest = () => {
    const modalType = useSelector(state => state.modal.modalType)
    const modalProps = useSelector(state => state.modal.modalProps)

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return (
        <>
            {modalType ?
                <SpecificModal {...modalProps} /> :
                null
            }
        </>
    )
}
export default ModalTest