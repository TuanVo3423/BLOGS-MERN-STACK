import React from 'react'
import PostItem from './PostItem'
import { Grid } from '@mui/material'
import {useDispatch , useSelector} from 'react-redux';
import { postState$ } from '../../redux/selectors';
import * as actions from '../../redux/actions';
export default function PostList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  },[dispatch]);
  const posts = useSelector(postState$);
  // console.log('posts[]',posts);
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
