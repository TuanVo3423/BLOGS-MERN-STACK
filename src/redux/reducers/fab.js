import {INIT_STATE} from '../../constant/index'
import {getType , showModal , hideModal } from '../actions';
export default function postReducer(state = INIT_STATE.fab , action){
    switch(action.type){
        case getType(showModal) : // case showModal
         {
            return {
                isShowModal : true,
            }
        }
        case getType(hideModal) : // case hideModal
         {
            return {
                isShowModal : false,
            }
        }
        
        default : return state;
    }
    
}