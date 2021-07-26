import React from 'react';
import Input from '../../../component/Input copy/Input'
import classes from './CheckoutForm.module.scss'
import { inputValidator } from '../../../utils/InputValidator'
import Button from '../../../component/Button/Button';
const CheckoutForm = props => {
    const { group, title, inputs, setValue, valid, submit} = props

    const validityHandler = (inputValue, type, regex) => {
        setValue( group, inputValue, type, inputValidator(inputValue, regex))
    }
    const submitHandler=  e=>{
        e.preventDefault()
        submit()
    }

    return (
        <div  className={classes.CheckoutForm}>
            <h3>{title}</h3>
        <form onSubmit={submitHandler}>
            {
            Object.keys(inputs).map(key => {
                const Icon = inputs[key].icon
                return <Input 
                required
                key={inputs[key].id} 
                {...inputs[key]}
                onchange={validityHandler}
                ><Icon/></Input>
            })
            }
            {valid && <Button>Submit order</Button> } 
        </form>
        </div>
    );
};

export default (CheckoutForm);