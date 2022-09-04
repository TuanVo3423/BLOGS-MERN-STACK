import { createSlice } from '@reduxjs/toolkit';
import {INIT_STATE} from '../../constant/index';
const initialState = INIT_STATE.posts;

export const PostReducer = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        getPostsRequest : (state, action) => {
            
        },
        getPostsSuccess : (state, action) => {
            state.isLoading = false;
            state.data = action.payload.posts;
        },
        getPostsFailure : (state, action) => {
            state.isError = false;
            state.isLoading = false;
        },
        createPostsRequest : (state, action) => {
            state.isLoading = true;
        },
        createPostsSuccess : (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        },
        createPostsFailure : (state, action) => {
            state.isLoading = true;
        },
        updatePostsRequest : (state, action) => {
            state.isLoading = true;
        },
        updatePostsSuccess : (state, action) => {
            state.isLoading = false;
            state.data = state.data.map(post => post._id === action.payload._id ? action.payload : post);
        },
        updatePostsFailure : (state, action) => {
            state.isLoading = true;
        },
        deletePostsRequest : (state, action) => {
            state.isLoading = true;
        },
        
        deletePostsSuccess : (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(post => post._id !== action.payload);
        },
        deletePostsFailure : (state, action) => {
            state.data = state.data.filter(post => post._id !== action.payload._id);
        }
    }
});