import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './SignupStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {AddUserAction} from '../../store/actions/AddUserAction'

function Signup() {
    const store = useSelector(store => store)
    console.log('store', store.AddUserReducer)
    const classes = useStyles()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const dispatch = useDispatch()
    function ctaHandle(){
        if(userName === '' || password === '' || city === '' || email === '' || mobile === ''){
            alert('One of the required field is left blank')
        }else{
            let user = {
                userName,
                password,
                city,
                email,
                mobile,
            }
            dispatch(AddUserAction(user))
            setUserName('');
            setPassword('');
            setCity('');
            setEmail('');
            setMobile('');
            alert('Data added to firebase')
        }
    
    }
    return (
        <div className={classes.signup}>
            <Typography variant='h3' color='primary'>User Signup</Typography>
            <TextField id="standard" label="Name" value={userName} onChange={e => setUserName(e.target.value)} /><br /><br /><br />
            <TextField id="basic" label="Password" value={password}onChange={e => setPassword(e.target.value)}/><br /><br /><br />
            <TextField id="standard-basic1" label="City" value={city} onChange={e => setCity(e.target.value)}/><br /><br /><br />
            <TextField id="standard-basic2" label="Email" value={email} onChange={e => setEmail(e.target.value)}/><br /><br /><br />
            <TextField id="standard-basic3" label="Mobile" value={mobile} onChange={e => setMobile(e.target.value)}/><br /><br /><br />
<Button color='primary' variant='contained' onClick={ctaHandle}>Sign up</Button>
        </div>
    )
}

export default Signup
