import React from 'react';
import styles from '../../counter/Counter.module.css';

const Button = (props) => (
    <button
        className={styles.button}
        onClick = {props.added}
        type={props.type}>
            {props.children} 
    </button>
)

export default Button;
