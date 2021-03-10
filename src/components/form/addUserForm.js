import React, { useState } from 'react'
import Form from './form/form';
import { newUser } from '../../redux/actions/newUser';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { appLoading, hideModal } from '../../redux/actions/actions';
import Loader from '../ui/loader';
import { ModalWindow } from '../ui/modalWindow';
import { CloseButton } from '../ui/buttons';
import close from '../../assets/images/close.png'

const AddUserForm = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const [user, setUser] = useState({
        id: uuid(),
        name: '',
        username: '',
        phone: '',
        email: '',
        address: {
            city: '',
            street: '',
            suite: ''
        },
        website: ''
    })

    const createUserFunc = (e) => {
        e.preventDefault()
        dispatch(appLoading())
        dispatch(newUser(user))
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
                            setUser={setUser}
                            user={user}
                            onSubmit={createUserFunc}
                        />
                    </div>
                </ModalWindow>
            }
        </>
    )
}
export default AddUserForm