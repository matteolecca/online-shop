import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './OrderItem/OrderItem';
import classes from './OrderReviewContainer.module.css'
import { getCartLength, getCartState } from '../../../../redux/slices/cart-slice';
import { useSelector } from 'react-redux';
const OrderReviewContainer = props => {
    const style = props.opened ? classes.opened : classes.closed

    const { products, subtotal, shipping } = useSelector(getCartState)
    return (
        <div className={[classes.OrderReviewContainer, style].join(' ')}>
            <h2>Items</h2>
            <div className={classes.ItemsContainer}>
            {products.map(p=><OrderItem key={p.ID + p.size} item={p}/>)}
            </div>
            <h2>Total</h2>
            <div className={classes.PriceContainer}>
                <label><strong>Items</strong></label>
                <label>{subtotal}$</label>
            </div>
            <div className={classes.PriceContainer}>
                <label><strong>Shipping</strong></label>
                <label>{shipping}$</label>
            </div>
            <div className={classes.PriceContainer}>
                <label><strong>Total</strong></label>
                <label>{subtotal + shipping}$</label>
            </div>
        </div>
    );
};



export default (OrderReviewContainer);