import React from 'react';
import Input from '../../../component/Input copy/Input'
import classes from './CheckoutForm.module.css'
import { inputValidator } from '../../../utils/InputValidator'
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';
const CheckoutForm = props => {
    const { group, title, inputs, setValue} = props

    const validityHandler = (inputValue, type, regex) => {
        setValue( group, inputValue, type, inputValidator(inputValue, regex))
    }

    return (
        <div  className={classes.CheckoutForm}>
            <h3>{title}</h3>
        <form >
            {
            Object.keys(inputs).map(key => {
                const Icon = inputs[key].icon
                return <Input 
                key={inputs[key].id} 
                {...inputs[key]}
                onchange={validityHandler}
                ><Icon/></Input>
            })
            }
        </form>
        </div>
    );
};

export default (CheckoutForm);