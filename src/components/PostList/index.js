import React from 'react'
import PostItem from './PostItem'
import { Grid } from '@mui/material'
import {useDispatch , useSelector} from 'react-redux';
import { AccountState$, postState$ } from '../../redux/selectors';
import { PostReducer } from '../../redux/reducers/posts';
export default function PostList() {
  const dispatch = useDispatch();
  const {AccessToken} = useSelector(AccountState$);
  const posts = useSelector(postState$);
  React.useEffect(() => {
      dispatch(PostReducer.actions.getPostsRequest(AccessToken));
  },[AccessToken, dispatch]);
  console.log('AccessToken : ',AccessToken);
  return (
        <Grid sx={{marginTop : '10px'}} container spacing={2} alignItems='stretch'>
              {posts.map(post => (
                <Grid key={post._id} item sm={6} xs={12}>
                    <PostItem postsData={post} />
              </Grid>
              ))}
        </Grid>
  )
}
