import { Typography } from '@material-ui/core';
import React from 'react';
import salad from '../../assets/salaad-home.png'
import useStyles from './SearchStyle';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import{Link} from 'react-router-dom';
import appScreen from '../../assets/supermeal-app-screen.png';


function SearchComponent() {
    const classes = useStyles()
    return (
        <div className={classes.searchComponent}>
            <div className={classes.saladPlate}>
           <img className={classes.salad} src={salad} alt='Salad plate' width='400' height='400'/> 
           </div>
<div className={classes.search}>
           <Typography variant='h4' display='inline'>Super Discounts</Typography>
           <Typography variant='h5'>up to 30% cashback on all orders</Typography>
           
            </div>
            <div className={classes.searchInput}>
            <input
              placeholder="Search location…"
              className={classes.input}/>
              <Button className={classes.btn} variant="contained" color="secondary">Search</Button>
              </div>
              <div className={classes.app}>
           <Typography display='inline' variant='h4'>Get App</Typography>
    <Typography display='inline' variant='h4'color='secondary' className={classes.getApp}>
            <Link><AndroidOutlinedIcon /></Link>
            
            <Link><PhoneIphoneOutlinedIcon /></Link>
            </Typography>
              </div>
<div className={classes.appPic} >
    <img src={appScreen} alt='App Screen' width='250' height='400'/>
</div>

           </div>
        
    )
}

export default SearchComponent
