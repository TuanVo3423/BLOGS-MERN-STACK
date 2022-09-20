import {INIT_STATE} from '../../constant/index'
import { createSlice } from '@reduxjs/toolkit';
const initialState = INIT_STATE.account;
export const AccountReducer = createSlice({
    name : 'account',
    initialState,
    reducers : {
        registerRequest : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        registerSuccess : (state, action) => {
            state.isError = false;
            state.AccessToken = action.payload.accesstoken;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        registerFailure : (state, action) => {
            state.isError = true;
        },
        loginRequest : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        loginSuccess : (state, action) => {
            state.loginSuccess = true;
            state.isError = false;
            state.AccessToken = action.payload.accesstoken;
            state.userID = action.payload._id;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        loginFailure : (state, action) => {
            state.loginSuccess = false;
            state.isError = true;
        },
        setSuccessState : (state, action) => {
            state.loginSuccess = true;
            state.userID = action.payload.id;
            state.username = action.payload.username;
        },
        setFailState : (state, action) => {
            state.loginSuccess = false;
        },
        signOutRequest : (state, action) => {
            
        },
        signOutSuccess : (state, action) => {
            state.AccessToken = null;
        }
    }
});