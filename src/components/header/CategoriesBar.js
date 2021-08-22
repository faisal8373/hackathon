import React from 'react'
import useStyles from './HeaderStyles'
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'

function CategoriesBar() {
    const classes = useStyles()
    return (
        <div className={classes.categoriesBar}>
           <Link> <Typography className={classes.options} display='inline'>Arabic</Typography></Link>
           <Link><Typography className={classes.options} display='inline'> Italian</Typography></Link>
           <Link> <Typography className={classes.options} display='inline'>Fast food</Typography></Link>
           <Link> <Typography className={classes.options} display='inline'>Sandwich</Typography></Link>
           <Link> <Typography className={classes.options} display='inline'>Vegetarian</Typography></Link>


        </div>
    )
}

export default CategoriesBar






