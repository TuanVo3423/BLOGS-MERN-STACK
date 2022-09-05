import React, { useEffect } from 'react';
import Header from '../components/Headers';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import EditPostModal from '../components/EditPostModal';
import {useDispatch, useSelector} from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { FabReducer } from '../redux/reducers/fab';
import { AccountState$ } from '../redux/selectors';
import { AccountReducer } from '../redux/reducers/account';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const {loginSuccess} = useSelector(AccountState$);
  // console.log('loginSuccess',loginSuccess);
  useEffect(() => {
    if(!loginSuccess){
      // set isLoginSuccess to false
      dispatch(AccountReducer.actions.loginFailure());
      history('/auth/login');
    }
  },[dispatch, history, loginSuccess]);
  const handleOpenModal = React.useCallback(() => {
    dispatch(FabReducer.actions.showModalCreate());
  },[dispatch]);
  return (
    <React.Fragment>
     <div>
     <Header />
      <PostList />
      <CreatePostModal />
      <EditPostModal />
      <Fab color="primary" aria-label="add" sx={{position : 'fixed' , bottom : '10%' , right : '10%' }}  onClick={handleOpenModal} >
        <AddIcon />
      </Fab>
     </div>
      </React.Fragment>
  )
}
export default HomePage;