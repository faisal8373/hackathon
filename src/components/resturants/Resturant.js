import React from 'react';
import useStyles from './ResturantStyle';
import SingleResturant from './SingleResturant';
import RestaurantCard from './RestaurantCard';
import { Typography } from '@material-ui/core';

function Resturant() {
    const classes = useStyles()
    const resturant = [{
        name: 'Folk and Knives',
        address: 'Kohinoor',
        category: 'Fast Foods',
        city: 'Faisalabad',
        phone: 1234567,
        email: 'folkandknives@gmail.com'
    },
    {
        name: 'Salt and Paper',
        address: 'Kohinoor',
        category: 'Pakistani',
        city: 'Faisalabad',
        phone: 87654321,
        email: 'saltandpaper@gmail.com'
    }];
    console.log('resturant',resturant[0])
    return (
        <div className={classes.main}>
            <Typography variant='h3'>Restaurants and Their Products</Typography>
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
<RestaurantCard />
            {/* {
                resturant.map((item, index) => {
                    return <SingleResturant data = {item} />
                })
            } */}
        </div>
    )
}

export default Resturant
