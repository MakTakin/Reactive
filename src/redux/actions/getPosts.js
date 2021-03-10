import { appLoad, appLoading, fetchPostsFailed, fetchPostsSuccess } from './actions';
import { SERVER_URL } from '../../constants/constants';

export const getPosts = ( id ) =>  async (dispatch) => {
        dispatch(appLoading())
        try {
            const response = await fetch(`${SERVER_URL}posts?userId=${id}`)
            const posts = await response.json()
            dispatch(fetchPostsSuccess(posts))
            dispatch(appLoad())
        } catch (error) {
            dispatch(fetchPostsFailed(error))
        }
    }