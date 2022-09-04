import {all, fork} from 'redux-saga/effects';
import postSaga from './postsSaga';
import accountSaga from './accountSaga';

function* rootSaga() {
    yield all([
        fork(accountSaga),
        fork(postSaga),
    ])
}
export default rootSaga;
