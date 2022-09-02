import { createActions , createAction } from "redux-actions";

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess : (payload) => payload,
    getPostsFailure : (err) => err,
});
export const createPosts = createActions({
    createPostsRequest: (payload) => payload,
    createPostsSuccess : (payload) => payload,
    createPostsFailure : (err) => err,
});

export const updatePosts = createActions({
    updatePostsRequest: (payload) => payload,
    updatePostsSuccess : (payload) => payload,
    updatePostsFailure : (err) => err,
});

export const deletePosts = createActions({
    deletePostsRequest: (payload) => payload,
    deletePostsSuccess : (payload) => payload,
    deletePostsFailure : (err) => err,
});
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

export const showModalEdit = createAction((payload) => payload);
export const HideModalEdit = createAction('HIDE_EDIT_POST_MODAL');

export const getType = (reduxAction) => {
    return reduxAction().type;
}


//  các actions sẽ return về 1 object {
//     type : 'name of each action',
        // payload : paload,
// }
