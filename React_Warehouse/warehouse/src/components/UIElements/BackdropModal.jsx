import React from "react";
import ReactDOM from "react-dom";

import classes from './BackdropModal.module.css';

const BackDropModal = (props) => {

    const content = (<div className={classes['backdrop-modal']} onClick={props.onClick ? props.onClick : null}></div>);

    return ReactDOM.createPortal(content, document.getElementById("backdrop-modal"));

};

export default BackDropModal;