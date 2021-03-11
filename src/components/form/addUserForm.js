import React, { useState } from 'react'
import Form from './form/form';
import { newUser } from '../../redux/actions/newUser';
import { appLoading } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const AddUserForm = () => {
    const dispatch = useDispatch()
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
        <Form
            setUser={setUser}
            user={user}
            onSubmit={createUserFunc}
        />
    )
}
export default AddUserForm