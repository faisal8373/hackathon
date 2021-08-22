import React from 'react';
import logo from '../../assets/logo.png'
import useStyles from './HeaderStyles';
import Drawer from './Drawer';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom'

function LogoBar() {
    const classes = useStyles()
    return (
        <div className={classes.logoContainer}>
            <span className={classes.menu}>
            <Drawer /></span>
            <Link to='/'><span className={classes.logo}>
            <img src={logo} alt='Super Meal Logo' />
            </span></Link>
            <span className={classes.textMargin}>
<Link><Typography className={classes.options} display='inline'>I am a Resturant</Typography></Link>
<Link><Typography className={classes.options} display='inline'>About Us</Typography></Link>
<Link to='/signup'><Button className={classes.btn} variant="contained" color="primary">Sign Up</Button></Link>
<Link to='/login'><Button className={classes.btn} variant="contained" color="secondary">Login</Button></Link>
<span className={classes.cartSpan}>
<ShoppingCartOutlinedIcon  className={classes.cartSpan}/>
</span>
            </span>
        </div>
    )
}

export default LogoBar
