import React from 'react';
import {TextField, Button, Typography} from '@material-ui/core';
import useStyles from './SignupStyle';
import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles();
    function ctaHandle(){

    }
    return (
        <div className={classes.signup}>
            <Typography variant='h3' color='primary'>User Login</Typography>
           <TextField id="standard-basic2" label="Email" value={email} onChange={e => setEmail(e.target.value)}/><br /><br /><br />
            <TextField id="basic" label="Password" value={password}onChange={e => setPassword(e.target.value)}/><br /><br /><br />
           
            
            
<Button color='primary' variant='contained' onClick={ctaHandle}>Sign up</Button>
        </div>
    )
}

export default Login
