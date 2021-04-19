import React from 'react';
import classes from './OrderCustomer.module.css'
const OrderCustomer = props => {
    const {customer, order, address} = props 
    console.log(order)
    return (
        <div className={classes.OrderCustomer}>
            <div className={classes.DataContainer} >
                <h3>Customer</h3>
            <label>{customer.name + " " + customer.surname}</label>
            <label style={{textTransform : 'lowercase'}}>{customer.email}</label>
            </div>
            <div className={classes.DataContainer}>
                <h3>Address</h3>
            <label>{address.address}</label>
            <label>{address.city}</label>
            <label>{address.postcode}</label>
            </div>
        </div>
    );
};

export default OrderCustomer;