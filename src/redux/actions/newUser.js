import { fetchСreateUser } from '../../api/createUser';
import { SERVER_URL } from '../../constants/constants';
import { addUser, appLoad, fetchUsersFailed, hideModal } from './actions';

export const newUser = (user) => async (dispatch) => {
    try {
        await fetchСreateUser(`${SERVER_URL}users`, user)
        dispatch(hideModal())
        dispatch(addUser(user))
        dispatch(appLoad())
    } catch (error) {
        console.log(error)
        dispatch(fetchUsersFailed(error))
    }
}