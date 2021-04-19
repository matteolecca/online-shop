import React from 'react';
import Input from '../../../component/Input copy/Input'
import classes from './CheckoutForm.module.css'
import { inputValidator } from '../../../utils/InputValidator'
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';
const CheckoutForm = props => {
    const { title, inputs} = props

    const validityHandler = (inputValue, type, regex) => {
        props.setValue(inputValue, type, inputValidator(inputValue, regex))
    }

    return (
        <div  className={classes.CheckoutForm}>
            <h3>{title}</h3>
        <form >
            {inputs.map(i => {
                const Icon = i.icon
                return <Input 
                onchange={validityHandler}
                fullwidth={i.fullwidth} 
                key={i.id} 
                type={i.type} 
                placeholder={i.placeholder}><Icon/></Input>
            })
            }
        </form>
        </div>
    );
};

const Action = dispatch =>{
    return {
        setValue : (value, valueType, valid) => dispatch({ type : actions.SET_VALUE, value : value, valueType : valueType, valid : valid})
    }
}
export default connect(null, Action) (CheckoutForm);