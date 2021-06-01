import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './OrderNotFound.module.css'
const OrderNotFound = () => {
    return (
        <div className={classes.OrderNotFound}>
            <div className={classes.imgContainer}>
                <img alt="" src="../not-found.png" />
            </div>
            <p>Sorry, we are unable to find your order... <br/> Try again or<NavLink to="/">make a new one</NavLink></p>
        </div>
    );
};

export default OrderNotFound;