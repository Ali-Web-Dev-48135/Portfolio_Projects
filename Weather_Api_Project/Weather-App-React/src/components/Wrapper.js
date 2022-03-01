import React from "react";
import styles from './Wrapper.module.css';
const Wrapper = (props) => {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Wrapper;