// import React, { useState } from 'react'
// import styled from 'styled-components'
// import Loader from '../ui/loader';
// import Form from '../form/form';
// import { v4 as uuid } from "uuid";
// import { useDispatch, useSelector } from 'react-redux';
// import { SERVER_URL } from '../../constants/constants';
// import { fetchNewUser} from '../../api/addUser';
// import { fetchUpdateUser } from '../../api/updateUser';
// import {
//     addFormUser,
//     addUser,
//     appLoad,
//     appLoading,
//     changeActivateUser,
//     fetchUsersFailed,
//     redactFormUser,
//     redactUser
// } from '../../redux/actions/actions';
// import { newUser } from '../../redux/actions/newUser';
// import { updateUser } from '../../redux/actions/updateUser';
//
// const ModalWindow = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0,0,0,0.7);
//     > div {
//         background: #fff;
//         margin: 10vh auto;
//         width: 70%;
//         height: 80%;
//         border-radius: 8px;
//         padding: 40px 20px 20px 20px;
//         box-shadow: 3px 5px 7px rgba(0,0,0,0.6);
//     }
// `
//
// const Modal = ({ editUser }) => {
//     const dispatch = useDispatch()
//     const editUserID = useSelector( state => state.users.users.find( user => user.id == editUser))
//     const loading = useSelector(state => state.app.loading)
//     const activateUser = useSelector(state => state.users.activateUser)
//
//     const closeModal = (e) => {
//         if (e.target.id == 'close') {
//             dispatch(redactFormUser(false))
//             dispatch(addFormUser(false))
//             dispatch(changeActivateUser(false))
//         }
//     }
//     const userObject = {
//         id: uuid(),
//         name: '',
//         username: '',
//         phone: '',
//         email: '',
//         address: {
//             city: '',
//             street: '',
//             suite: ''
//         },
//         website: ''
//     }
//
//     const userState = editUserID ? editUserID : userObject
//     const [user, setUser] = useState(userState)

    // const changeUser = (e) => {
    //     const editUser = { ...user }
    //     // переписать на switch
    //     if (e.target.name === 'street' || e.target.name === 'city' || e.target.name === 'suite') {
    //         editUser.address[e.target.name] = e.target.value
    //     }
    //     else {
    //         editUser[e.target.name] = e.target.value
    //     }
    //     setUser(editUser)
    // }

    // const newUser = async (e) => {
    //     e.preventDefault()
    //     dispatch(appLoading())
    //     try {
    //         await fetchNewUser(`${SERVER_URL}users`, user)
    //         dispatch(addFormUser(false))
    //         dispatch(addUser(user))
    //         dispatch(appLoad())
    //     } catch (error) {
    //         console.log(e)
    //         dispatch(fetchUsersFailed(error))
    //     }
    // }

    // const newUserFunc = (e) => {
    //     e.preventDefault()
    //     dispatch(appLoading())
    //     dispatch(newUser(user))
    // }
    //
    // const updateUserFunc = async (e) => {
    //     e.preventDefault()
    //     dispatch(appLoading())
    //     dispatch(updateUser(editUser, user))
    // }

//     return (
//         <>
//             { loading ?
//                 <Loader/> :
//                 <ModalWindow id='close' onClick={closeModal}>
//                     {editUser ?
//                         <Form
//                             changeUser={changeUser}
//                             user={user}
//                             activateUser={!activateUser}
//                             dispatch={dispatch}
//                             onSubmit={updateUserFunc}
//                         /> :
//                         <Form
//                             changeUser={changeUser}
//                             user={user}
//                             onSubmit={newUserFunc}
//                         />
//                     }
//                 </ModalWindow>
//             }
//         </>
//     )
// }
// export default Modal