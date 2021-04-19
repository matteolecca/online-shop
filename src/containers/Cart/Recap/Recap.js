import React from 'react';
import classes from './Recap.module.css'
const Recap = props => {
    console.log(props)
    return (
        <div className={classes.Recap}>
        <h3>Recap</h3>
        <div>
            <label>Subtotal</label><label>{props.subtotal}$</label>
        </div>
        <div>
            <label>Shipping</label><label>{props.shipping}$</label>
        </div>
        <div>
            <label>Total</label><label>{props.subtotal + props.shipping}$</label>
        </div>
    </div>
    );
};




export default (Recap);