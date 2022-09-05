import { createSlice } from '@reduxjs/toolkit';
import {INIT_STATE} from '../../constant/index'
const initialState = INIT_STATE.edit;

export const EditPostReducer = createSlice({
    name : 'edit',
    initialState,
    reducers : {
        showModalEdit : (state, action) => {
            state.isShowEditModal = true;
            state.data = action.payload;
        },
        HideModalEdit : (state, action) => {
            state.isShowEditModal = false;
            state.data = initialState;

        }
    }
});