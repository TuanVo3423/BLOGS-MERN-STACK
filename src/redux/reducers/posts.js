import {INIT_STATE} from '../../constant/index'
import {getType , getPosts , createPosts , updatePosts , deletePosts } from '../actions';
export default function postReducer(state = INIT_STATE.posts , action){
    switch(action.type){
        case getType(getPosts.getPostsRequest) : // case getPosts request
         {
            return {
                ...state,
                isLoading : true,
            }
        }
        case getType(getPosts.getPostsSuccess) : // case getPosts success
         {
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        }
        case getType(getPosts.getPostsFailure) : // case getPosts getPostFailure
        {
            return {
                ...state,
                isLoading :false,
            }
        }   

        case getType(createPosts.createPostsSuccess) : 
        {
            return {
                ...state,
                data : [...state.data , action.payload],
            }
        }
        case getType(updatePosts.updatePostsSuccess): 
        {
            return {
                ...state,
                data : state.data.map(post => post._id === action.payload._id ? action.payload : post),
            };
        }

        case getType(deletePosts.deletePostsSuccess): 
        {
            return {
                ...state,
                data : state.data.filter((post) => post._id !== action.payload),
            };
        }
        

        default : return state;
    }
    
}