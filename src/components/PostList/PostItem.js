import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {useDispatch} from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { Button, CardMedia, Popper } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { deletePosts,showModalEdit, updatePosts } from '../../redux/actions';

// moment(...values).format('HH:MM MMM DD, YYYY');

export default function PostItem({postsData}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {title , content , createdAt , likeCount , attachment} = postsData;
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClickAway = () => {
    setAnchorEl(null);
  }
  const id = open ? 'simple-popper' : undefined;
  // nó sẽ dispatch với payload là data của bài post hiện tại được like !!!
  const handleLikeClick = React.useCallback(() => {
      dispatch(updatePosts.updatePostsRequest({...postsData , likeCount : likeCount + 1 }));
  },[dispatch, likeCount, postsData]);

  const handleDelete = React.useCallback(() => {
    console.log('postsData._id : ',postsData._id)
    dispatch(deletePosts.deletePostsRequest(postsData._id));
  },[dispatch, postsData._id]);
  const handleEdit = React.useCallback(() => {
    dispatch(showModalEdit(postsData));
  },[dispatch, postsData]);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
        <ClickAwayListener onClickAway={handleClickAway}>
          <IconButton aria-describedby={id} onClick={handleClick} >
            <MoreVertIcon />
            <Popper id={id} open={open}  anchorEl={anchorEl}
            >
              <div style={{backgroundColor : 'white' , display : 'flex' , flexDirection : 'column', alignItems : 'center' , justifyContent : 'center', minWidth : '200px' , minHeight : '100px'}}>
                  <Button onClick={handleEdit} fullWidth>EDIT</Button>
                  <Button onClick={handleDelete} fullWidth>DELETE</Button>
              </div>
            </Popper>
          </IconButton>
        </ClickAwayListener>
        }
        title={title}
        subheader={moment(createdAt).format('HH:MM MMM DD, YYYY')}
      />
      <CardMedia
        component="img"
        height="194"
        image={attachment}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  onClick={handleLikeClick} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant='p'>{likeCount} likes</Typography>
      </CardActions>
    </Card>
  );
}
