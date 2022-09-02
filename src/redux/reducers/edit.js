import {INIT_STATE} from '../../constant/index'
import {getType , showModalEdit ,HideModalEdit  } from '../actions';
export default function postReducer(state = INIT_STATE.edit , action){
    switch(action.type){
        case getType(showModalEdit) :
            console.log('showModalEdit' , action.payload);
            return {
                isShowEditModal : true,
                data : action.payload
            }
            case getType(HideModalEdit) :{
                return {
                    ...state,
                    isShowEditModal : false,
                    data : INIT_STATE.edit,
                }

            }
        
        default : return state;
    }
    
}