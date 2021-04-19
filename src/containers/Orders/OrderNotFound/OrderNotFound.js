import React from 'react';
import classes from './OrderNotFound.module.css'
const OrderNotFound = () => {
    return (
        <div className={classes.OrderNotFound}>
            <div className={classes.imgContainer}>
                <img alt="" src="../not-found.png" />
            </div>
            <h2>Order not found</h2>
        </div>
    );
};

export default OrderNotFound;