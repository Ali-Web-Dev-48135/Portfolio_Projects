import React from 'react';

import classes from './Hamburger.module.css'
const Hamburger = props => {

    return(
        <button className={classes['hamburger']} onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )

};

export default Hamburger;