import { appLoad, appLoading, fetchUsersFailed, fetchUsersSuccess } from './actions';
import { SERVER_URL } from '../../constants/constants';

export const getUsers = () => async (dispatch) => {
        dispatch(appLoading())
        try {
            const response = await fetch(`${SERVER_URL}users`)
            const users = await response.json()
            dispatch(fetchUsersSuccess(users))
            dispatch(appLoad())
        } catch (error) {
            dispatch(fetchUsersFailed(error))
        }
    }