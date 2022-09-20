
import {takeLatest , call , put} from 'redux-saga/effects';
import { PostReducer } from '../reducers/posts';
import { SystemReducer } from '../reducers/system';
import { AccountReducer } from '../reducers/account';
import Cookies from 'universal-cookie';
import * as api from '../../api';
function* fetchPostSaga(action){
    
    try {
        yield put(SystemReducer.actions.setIsLoading());
        const accessToken = action.payload;
        console.log(accessToken);
        // const cookies = new Cookies();
        // const cookie = cookies.get('token');
        // console.log('cookie: ' + cookie);
        const posts = yield call(api.fetchPosts,accessToken);
        // console.log('post',posts.data);
        // put này dùng để dispatch 1 actions
        yield put(PostReducer.actions.getPostsSuccess(posts.data));
        yield put(AccountReducer.actions.setSuccessState(posts.data));
        yield put(SystemReducer.actions.setStopLoading());
    } catch (error) {
        console.log(error.response);
        yield put(AccountReducer.actions.setFailState()); // no back to login page 
        yield put(SystemReducer.actions.setMessage(error.response.data));
        yield put(SystemReducer.actions.setStopLoading());
    }
}

function* createPostSaga(action){
    try {
        // request post method to save into db
        yield put(SystemReducer.actions.setIsLoading());
        const post = yield call(api.createPosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        yield put(PostReducer.actions.createPostsSuccess(post.data));
        yield put(SystemReducer.actions.setStopLoading());
    } catch (error) {
        console.error(error);
        yield put(SystemReducer.actions.setMessage(error));
    }
}

function* updatePostSaga(action){
    try {
        // request put method to update into the db
        yield put(SystemReducer.actions.setIsLoading());
        const updatedPost = yield call(api.updatePosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        yield put(PostReducer.actions.updatePostsSuccess(updatedPost.data));
        yield put(SystemReducer.actions.setStopLoading());
    } catch (error) {
        console.error(error);
        yield put(SystemReducer.actions.setMessage(error));
    }
}

function* deletePostSaga(action){
    try {
        // request put method to delete by ID
        yield put(SystemReducer.actions.setIsLoading());
        const deletedPost = yield call(api.deletePosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        yield put(PostReducer.actions.deletePostsSuccess(deletedPost.data));
        yield put(SystemReducer.actions.setStopLoading());
    } catch (error) {
        console.error(error);
        yield put(SystemReducer.actions.setMessage(error));
    }
}

function* postSaga(){
    yield takeLatest(PostReducer.actions.getPostsRequest ,fetchPostSaga );  
    yield takeLatest(PostReducer.actions.createPostsRequest ,createPostSaga); 
    yield takeLatest(PostReducer.actions.updatePostsRequest ,updatePostSaga); 
    yield takeLatest(PostReducer.actions.deletePostsRequest ,deletePostSaga); 
}

export default postSaga;