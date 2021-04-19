import React from 'react';
import Spinner from '../Spinner/Spinner';
import classes from './Button.module.css'
const Button = props => {
    const { small } = props
    const style = props.transparent ? classes.transparent : null
    const fullwidth = props.fullwidth ? classes.fullwidth : null
    return (
        <button disabled={props.disabled || props.loading} onClick={props.onclick} className={[classes.Button,style, fullwidth].join(' ')}>
            {props.loading ? <Spinner small={small}/> : props.children}
        </button>
    );
};

export default Button;