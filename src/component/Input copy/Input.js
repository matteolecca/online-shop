import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './Input.module.css'
import { inputValidator } from '../../utils/InputValidator';
const Input = props => {
  const [valid, setValidity] = useState(false)
  const fullwidth = props.fullwidth ? classes.fullwidth : null

  const valueChangeHandler = (value, type) => {
    props.onchange(value, props.placeholder, type)
    setValidity(inputValidator(value, type))
  }

  return (
    <TextField
      className={fullwidth}
      value={props.value}
      onChange={(e) => valueChangeHandler(e.target.value, props.type)}
      error={props.valid ? false : !valid}
      label={props.placeholder}
      variant="outlined"
      type={props.type}
      id={props.placeholder}
      inputProps={props.pattern ? { pattern: "\\d*" } : {}}
      required={props.required}
    />
  );
};

export default Input;