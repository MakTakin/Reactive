import { fetchUpdateUser } from '../../api/updateUser';
import { SERVER_URL } from '../../constants/constants';
import {
    appLoad,
    changeActivateUser,
    fetchUsersFailed, hideModal,
    redactUser
} from './actions';

export const updateUser = (user) => async (dispatch) => {
    try {
        await fetchUpdateUser(`${SERVER_URL}users/${user.id}`, user)
        dispatch(hideModal())
        dispatch(redactUser(user))
        dispatch(appLoad())
        dispatch(changeActivateUser(false))
    } catch (error) {
        console.log(error)
        dispatch(fetchUsersFailed(error))
    }
}

