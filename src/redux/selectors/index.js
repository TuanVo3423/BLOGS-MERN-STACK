export const postState$ = (state) => state.posts.data;
export const showModalState$ = (state) => state.createPost.isShowModalCreate;
export const ModalEditState$ = (state) => state.editPost;
export const systemState$ = (state) => state.SystemReducer;
export const isLoginState$ = (state) => state.posts.isError;
export const AccountState$ = (state) => state.account;