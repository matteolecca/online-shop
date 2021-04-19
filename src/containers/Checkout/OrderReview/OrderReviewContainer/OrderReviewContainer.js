import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './OrderItem/OrderItem';
import classes from './OrderReviewContainer.module.css'
const OrderReviewContainer = props => {
    const style = props.opened ? classes.opened : classes.closed
    const {cart, subtotal, shipping} = props
    return (
        <div className={[classes.OrderReviewContainer, style].join(' ')}>
            <h2>Items</h2>
            <div className={classes.ItemsContainer}>
            {cart.map(p=><OrderItem key={p.ID + p.size} item={p}/>)}
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

const State = state =>{
    return {
        cart : state.cartReducer.products,
        subtotal : state.cartReducer.subtotal,
        shipping : state.cartReducer.shipping
    }
}

export default connect(State)(OrderReviewContainer);