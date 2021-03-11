import React, { useState } from 'react'
import Form from './form/form';
import { useDispatch, useSelector } from 'react-redux';
import { appLoading } from '../../redux/actions/actions';
import { updateUser } from '../../redux/actions/updateUser';

const UpdateUserForm = (redactUser) => {
    const dispatch = useDispatch()
    const activateUser = useSelector(state => state.users.activateUser)
    const [user, setUser] = useState(redactUser)

    const updateUserFunc = async (e) => {
        e.preventDefault()
        dispatch(appLoading())
        dispatch(updateUser(user))
    }

    return (
        <Form
            activateUser={!activateUser}
            dispatch={dispatch}
            setUser={setUser}
            user={user}
            onSubmit={updateUserFunc}
        />
    )
}
export default UpdateUserForm