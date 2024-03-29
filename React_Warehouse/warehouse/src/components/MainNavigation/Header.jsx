import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {

    return(
        <header className={classes['main-header']}>{props.children}</header>
    );

};

export default Header;