import {takeLatest , call , put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';
function* fetchPostSaga(action){
    try {
        const posts = yield call(api.fetchPosts);
        // put này dùng để dispatch 1 actions
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action){
    try {
        // request post method to save into db
        const post = yield call(api.createPosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        yield put(actions.createPosts.createPostsSuccess(post.data));
    } catch (error) {
        console.error(error);
        yield put(actions.createPosts.createPostsFailure(error));
    }
}

function* updatePostSaga(action){
    try {
        // request put method to update into the db
        const updatedPost = yield call(api.updatePosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        console.log( 'updatedPost : ',updatedPost.data);
        yield put(actions.updatePosts.updatePostsSuccess(updatedPost.data));
    } catch (error) {
        console.error(error);
        yield put(actions.updatePosts.updatePostsFailure(error));
    }
}

function* deletePostSaga(action){
    try {
        // request put method to delete by ID
        const deletedPost = yield call(api.deletePosts , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        console.log( 'deletedPost-ID : ',deletedPost.data);
        yield put(actions.deletePosts.deletePostsSuccess(deletedPost.data));
    } catch (error) {
        console.error(error);
        yield put(actions.deletePosts.deletePostsFailure(error));
    }
}
function* mySaga() {
    // check if user dispatch action with type getPostRequest => saga will do fetchPostSaga above
    yield takeLatest(actions.getPosts.getPostsRequest ,fetchPostSaga ); 
    yield takeLatest(actions.createPosts.createPostsRequest ,createPostSaga); 
    yield takeLatest(actions.updatePosts.updatePostsRequest ,updatePostSaga); 
    yield takeLatest(actions.deletePosts.deletePostsRequest ,deletePostSaga); 
}
export default mySaga;
