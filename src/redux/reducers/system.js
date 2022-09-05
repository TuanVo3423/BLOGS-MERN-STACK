import { createSlice } from '@reduxjs/toolkit';
import {INIT_STATE} from '../../constant/index';
const initialState = INIT_STATE.system;

export const SystemReducer = createSlice({
    name : 'system',
    initialState,
    reducers : {
        setIsLoading : (state,action) => {
            state.isLoading = true;
        },
        setStopLoading : (state,action) => {
            state.isLoading = false;
        },
        setMessage : (state,action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.isError = true;
        },
        setNoError : (state,action) => {
            state.isError = false;
        }
    }
});