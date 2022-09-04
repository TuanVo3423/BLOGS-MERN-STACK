import { createSlice } from '@reduxjs/toolkit';
import {INIT_STATE} from '../../constant/index';
const initialState = INIT_STATE.fab;
export const FabReducer = createSlice({
    name : 'fab',
    initialState,
    reducers : {
        showModalCreate : (state, action) => {
            state.isShowModalCreate = true;
        },
        HideModalCreate : (state, action) => {
            state.isShowModalCreate = false;

        }
    }
});