import createSagaMiddleware from "@redux-saga/core";

// redux slices
import { configureStore } from "@reduxjs/toolkit";
import { AccountReducer } from "../reducers/account";
import { EditPostReducer } from "../reducers/edit";
import { FabReducer } from "../reducers/fab";
import { SystemReducer } from "../reducers/system";
import { PostReducer } from "../reducers/posts";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : {
        account : AccountReducer.reducer,
        posts : PostReducer.reducer,
        editPost : EditPostReducer.reducer,
        createPost : FabReducer.reducer,
        SystemReducer : SystemReducer.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;