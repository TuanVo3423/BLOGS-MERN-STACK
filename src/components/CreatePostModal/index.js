import React from 'react';
import { Button, FormGroup, FormLabel, Modal, TextareaAutosize, TextField, Typography } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { showModalState$ } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { FabReducer } from '../../redux/reducers/fab';
import { PostReducer } from '../../redux/reducers/posts';

export default function CreatePostModal() {
    const [data,setData] = React.useState({
        title: '',
        content : '',
        attachment : '',
    });
    const dispatch = useDispatch();
    const onClose = React.useCallback(() => {
        dispatch(FabReducer.actions.HideModalCreate());
        setData({
            title: '',
            content : '',
            attachment : '',
        })
    },[dispatch]);

    const handleSubmit = React.useCallback(() => {
        dispatch(PostReducer.actions.createPostsRequest(data));
        onClose();
    },[data, dispatch, onClose]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const isShow = useSelector(showModalState$);
  return (
    <div>
        <Modal open={isShow} onClose={onClose}>
             <FormGroup sx={style}>
                <Typography variant='h5' align='center'>CREATE NEW POSTS</Typography>
                <FormLabel>
                    <TextField fullWidth label='Enter title' variant='standard' value={data.title} onChange={(e) => setData({...data , title : e.target.value})} />
                </FormLabel>
                <TextareaAutosize
                    minRows={10}
                    placeholder="Enter your content..."
                    style={{ width: '100%' , margin : '10px 0' , border: '1px solid #000' }}
                    value={data.content}
                    onChange={(e) => setData({...data , content : e.target.value})}
                />
                <FileBase64 accept='image/*' multiple={false} type='file' onDone={({ base64 }) => setData({...data,attachment : base64})} />
                <div>
                <Button onClick={handleSubmit} sx={{marginTop : '20px' , width : '100%'}} variant="contained" >SUBMIT</Button>
                </div>
             </FormGroup>
             
        </Modal>
    </div>
  )
}
