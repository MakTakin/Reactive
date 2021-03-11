import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddUserForm from '../form/addUserForm';
import UpdateUserForm from '../form/updateUserForm';
import { changeActivateUser, hideModal } from '../../redux/actions/actions';
import { ModalWindow } from '../ui/modalWindow';
import { CloseButton } from '../ui/buttons';
import close from '../../assets/images/close.png';

const MODAL_COMPONENTS = {
    'ADD_USER': AddUserForm,
    'UPDATE_USER': UpdateUserForm
}

const Modal = () => {
    const dispatch = useDispatch()
    const type = useSelector(state => state.modal.type)
    const props = useSelector(state => state.modal.props)

    const SpecificModal = MODAL_COMPONENTS[type]

    const closeModal = (e, close = null) => {
        if (e.target.id == 'close' || e.keyCode === 27 || close) {
            dispatch(hideModal())
            dispatch(changeActivateUser(false))
        }
    }

    return (
        <>
            {type ?
                <ModalWindow
                    id='close'
                    onClick={closeModal}
                    onKeyDown={closeModal}
                >
                    <div>
                        <CloseButton
                            onClick={(e) => closeModal(e,'close')}
                        >
                            <img src={close} alt="close"/>
                        </CloseButton>
                        <SpecificModal {...props}/>
                    </div>
                </ModalWindow> :
                null
            }
        </>
    )
}
export default Modal