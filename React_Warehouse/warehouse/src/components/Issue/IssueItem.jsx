import React from 'react';

import IssueInput from './IssueInput';
import classes from './IssueItem.module.css';

const IssueItem = props => {

    

    return(
        <React.Fragment>
            <li

                className={classes['issue-item']}>
                <p>{props.name}</p>
                <p>Qty: {props.qty}</p>
                <p>${props.price}</p>
                <IssueInput
                    id={props.id} 
                    className={classes}
                    qty={props.qty}
                    itemAdder={props.itemAdder}
                    />
            </li>
        </React.Fragment>

    );
};

export default IssueItem;