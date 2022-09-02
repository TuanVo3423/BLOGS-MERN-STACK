import React from 'react';
import Header from '../components/Headers';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import EditPostModal from '../components/EditPostModal';
import {useDispatch, useSelector} from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Triangle } from 'react-loader-spinner';
import { showModal } from '../redux/actions';
import { isLoadingState$ } from '../redux/selectors';
function HomePage() {
  const isLoading = useSelector(isLoadingState$);
  console.log(isLoading);
  const dispatch = useDispatch();
  const handleOpenModal = React.useCallback(() => {
    dispatch(showModal());
  },[dispatch]);
  return (
    <React.Fragment>
        <Header />
      <PostList />
      <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{position : 'fixed' , top : '50%' , left : '50%'}}
          wrapperClassName=""
          visible={isLoading}
      />
      <CreatePostModal />
      <EditPostModal />
      <Fab color="primary" aria-label="add" sx={{position : 'absolute' , bottom : '-100%' , right : '0' }}  onClick={handleOpenModal} >
        <AddIcon />
      </Fab>
      </React.Fragment>
  )
}
export default HomePage;