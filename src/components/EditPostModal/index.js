import React from 'react';
import { Button, FormGroup, FormLabel, Modal, TextareaAutosize, TextField, Typography } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { ModalEditState$ } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { updatePosts,  HideModalEdit } from '../../redux/actions';

export default function EditPostModal() {
    const editValueAVailable = useSelector(ModalEditState$);
    const {data} = editValueAVailable;
    const [isFirst,setIsFirst] = React.useState();
    const [dataValue,setDataValue] = React.useState({
        title: '',
        content: '',
        attachment : '',
    });
    // minh muon nhap xong 1 cai , cai kia kh mat data 
    const handleOnchangeTitle = (e) => {
        setIsFirst(false);
        setDataValue({...dataValue , title : e.target.value , content : data.content})
    }
    const handleOnchangeContent = (e) => {
        setIsFirst(false);
        setDataValue({...dataValue , content : e.target.value })
    }
    // console.log('isFirst' , isFirst);
    React.useEffect(() => {
        setIsFirst(true);
    },[]);
    console.log('dataValue' , dataValue);
    console.log('editValueAVailable' , data);
    const dispatch = useDispatch();
    const onClose = React.useCallback(() => {
        setIsFirst(true);
        dispatch(HideModalEdit());
    },[dispatch]);

    const handleSubmit = React.useCallback(() => {
        dispatch(updatePosts.updatePostsRequest({...data , title : dataValue.title , content : dataValue.content , attachment : dataValue.attachment}));
        onClose();
    },[data, dataValue.attachment, dataValue.content, dataValue.title, dispatch, onClose]);

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
    const {isShowEditModal} = editValueAVailable;
  return (
    <div>
        <Modal open={isShowEditModal} onClose={onClose}>
             <FormGroup sx={style}>
                <Typography variant='h5' align='center'>EDIT POST</Typography>
                <FormLabel>
                    <TextField fullWidth label='Enter title' variant='standard' value={isFirst ? data.title : dataValue.title} onChange={handleOnchangeTitle} />
                </FormLabel>
                <TextareaAutosize
                    minRows={10}
                    placeholder="Enter your content..."
                    style={{ width: '100%' , margin : '10px 0' , border: '1px solid #000' }}
                    value={isFirst ? data.content : dataValue.content}
                    onChange={handleOnchangeContent}
                />
                <FileBase64 accept='image/*' multiple={false} type='file' onDone={({ base64 }) => setDataValue({...dataValue,attachment : base64})} />
                <div>
                <Button onClick={handleSubmit} sx={{marginTop : '20px' , width : '100%'}} variant="contained" >SAVE CHANGE</Button>
                </div>
             </FormGroup>
             
        </Modal>
    </div>
  )
}
