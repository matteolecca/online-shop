import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import classes from './OrderItems.module.css'
const OrderItems = props => {
    const { items } = props
    return (
        <div className={classes.OrderItemsContainer}>
            {items.map(p => <div key={p.ID} className={classes.OrderItem}><OrderItem p={p}></OrderItem></div>)}
        </div>
    );
};

export default OrderItems;