import React, { useState } from 'react';
import classes from './Input.module.css'
import { inputValidator } from '../../utils/InputValidator'

const Input = props => {
    const [valid, setValidity] = useState(false)
    const style = valid ? classes.valid : classes.invalid
    const fullwidth = props.fullwidth ? classes.fullwidth : null

    const valueChangeHandler = (value, type ) =>{
        props.onchange(value, props.placeholder, type)
        setValidity(inputValidator(value, type))
    }


    return (
        <div className={[classes.Input, style, fullwidth].join(' ')}>
            {props.children}
            <input
                required
                onChange={(e) => valueChangeHandler(e.target.value, props.type)}
                type={props.type}
                className={classes.Input}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;

