import React, { useState } from 'react'
import Loader from '../ui/loader';
import Form from './form/form';
import { useDispatch, useSelector } from 'react-redux';
import { appLoading, hideModal } from '../../redux/actions/actions';
import { updateUser } from '../../redux/actions/updateUser';
import { ModalWindow } from '../ui/modalWindow';
import { CloseButton } from '../ui/buttons';
import close from '../../assets/images/close.png';

const UpdateUserForm = (redactUser) => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const activateUser = useSelector(state => state.users.activateUser)
    const [user, setUser] = useState(redactUser)

    const updateUserFunc = async (e) => {
        e.preventDefault()
        dispatch(appLoading())
        dispatch(updateUser(user))
    }

    return (
        <>
            {loading ?
                <Loader/> :
                <ModalWindow>
                    <div>
                        <CloseButton
                            onClick={() => dispatch(hideModal())}
                        >
                            <img src={close} alt=""/>
                        </CloseButton>
                        <Form
                            activateUser={!activateUser}
                            dispatch={dispatch}
                            setUser={setUser}
                            user={user}
                            onSubmit={updateUserFunc}
                        />
                    </div>
                </ModalWindow>
            }
        </>
    )
}
export default UpdateUserForm