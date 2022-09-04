import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { AccountReducer } from '../redux/reducers/account';

export default function Reigster() {
  const [dataInput, setDataInput] = useState({
    username : '',
    password : '',
  });
  const handleOnchangeNameInput = (e) => {
    setDataInput({
      ...dataInput,
      username : e.target.value,
    });
  }
  const handleOnchangePassWordInput = (e) => {
    setDataInput({
      ...dataInput,
      password : e.target.value,
    });
  }
  const dispatch = useDispatch();
  const handleRegister = React.useCallback(() => {
    dispatch(AccountReducer.actions.registerRequest(dataInput));
  },[dataInput, dispatch])
  return (
    <div style={{width : '50%' , margin : 'auto' , textAlign : 'center'}}>
        <h1>REGISTER FORM</h1>
        <div>
        <TextField fullWidth label="Name" placeholder="Type in here…" variant="outlined" onChange={handleOnchangeNameInput} />
        <TextField fullWidth label="Password" placeholder="Type in here…" variant="outlined" onChange={handleOnchangePassWordInput} />
        <Button onClick={handleRegister} sx={{marginTop : '10px'}} variant="contained">REGISTER</Button>
        <Link to={'/auth/login'}>
        <Button fullWidth sx={{marginTop : '10px'}} variant="contained">LOGIN</Button>
        </Link>
        </div>
    </div>
  )
}
