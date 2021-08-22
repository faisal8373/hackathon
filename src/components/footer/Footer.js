import { Typography } from '@material-ui/core';
import React from 'react';
import FooterList from './FooterList';
import useStyles from './FooterStyle';


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <FooterList />
            {/* <hr/> */}
            <div>
            <Typography>2021 Supermeal. All rights reserved. Terms & Conditions- Privacy Policy <br />
118, Rashid Minhas Road, Block 10-A, Gulshan-Iqbal, Karachi  |  +922134610877</Typography>
</div>
        </div>
    )
}

export default Footer
