import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

    const btnClasses = `${props.className ? classes.btn + ` ${props.className}` : classes['btn']}`;

    
    return(
        <button 
            className={btnClasses}
            onClick={props.onClick}
            >
            {props.children}
        </button>
    );

};

export default Button;