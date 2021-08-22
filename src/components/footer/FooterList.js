import { Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './FooterStyle';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import blogger from '../../assets/blogger.png'

function FooterList() {
    const classes = useStyles()
    return (
        <div >
            <div className={classes.list1}>
            <ul className={classes.list}>
            <li><Typography variant='h5' color='primary'>Super Meal</Typography></li>
           <li> <Typography variant='p' >Home</Typography></li>
           <li><Typography variant='p' >I am a Resturant</Typography></li>
           <li><Typography variant='p' >Blog</Typography></li>
            </ul>
            </div>
            <div className={classes.list2}>
                <ul className={classes.list}>
            <li><Typography variant='h5' color='primary'>Need Help</Typography></li>
           <li> <Typography variant='p' >Contact Us</Typography></li>
           <li><Typography variant='p' >Referral FAQs</Typography></li>
           <li><Typography variant='p' >FAQs</Typography></li>
            </ul>
            </div>
            <div className={classes.list3}>
                <ul className={classes.list}>
            <li><Typography variant='h5' color='primary'>Ppoular Restaurants</Typography></li>
           <li> <Typography variant='p' >Golden Apple Bahadurabad</Typography></li>
           <li><Typography variant='p' >Red Apple PECHS</Typography></li>
           <li><Typography variant='p' >Student Biryani</Typography></li>
           <li><Typography variant='p' >Pizza Mix</Typography></li>
           <li><Typography variant='p' >Red Apple DHA</Typography></li>

            </ul>
            </div>
            <div className={classes.list4}>
                <ul className={classes.list}>
            <li><Typography variant='h5' color='primary'>Ppoular Cuisines</Typography></li>
           <li> <Typography variant='p' >Drinks</Typography></li>
           <li><Typography variant='p' >Appetizers</Typography></li>
           <li><Typography variant='p' >Fast Food</Typography></li>
           <li><Typography variant='p' >Sandwich</Typography></li>
           <li><Typography variant='p' >Pizza</Typography></li>
           <li><Typography variant='p' >BBQ</Typography></li>
           <li><Typography variant='p' >Pakistani</Typography></li>
           <li><Typography variant='p' >Salads</Typography></li>




            </ul>
            </div>
            <div className={classes.list5}>
                <ul className={classes.list}>
            <li><Typography variant='h5' color='primary'>Order Food Online</Typography></li>
           <li> <p><Typography variant='p' >An online food ordering website <br/>for delivery, collection and executive <br/>dine-in. Order your favorite meal<br/> online from hundreds of restaurants <br/>in Pakistan.</Typography></p></li>
           <li><Typography variant='p' >Follow us on</Typography></li>
           <li>
               <br />
               <img src={facebook} alt='Facebook' width='70' height='50'/>
               <img src={twitter} alt='Twitter' width='50' height='50' />
               <img src={instagram} alt='Instagram' width='50' height='50' />
               <img src={blogger} alt='Blogger' width='50' height='50' />

           </li>
         

            </ul>
            </div>
        </div>
    )
}

export default FooterList
