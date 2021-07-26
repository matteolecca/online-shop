import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import classes from './OrderReviewContainer.module.scss'
import {  getCartState } from '../../../../redux/slices/cart-slice';
import { useSelector } from 'react-redux';
import NavLinkButton from '../../../../component/NavLinkButton/NavLinkButton'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const OrderReviewContainer = props => {
    const style = props.opened ? classes.opened : classes.closed

    const { products, subtotal, shipping } = useSelector(getCartState)
    return (
        <div className={[classes.OrderReviewContainer, style].join(' ')}>
            <h2>Shopping cart</h2>
            <OrderDataRow />
            <div className={classes.ItemsContainer}>
                {products.map(p => <OrderItem key={p.ID + p.size} item={p} />)}
            </div>
            <div className={classes.priceReview}>
                <NavLinkButton path="/" transparent>
                    <ArrowBackIos />
                    <span>Continue shopping</span>
                </NavLinkButton>
                <div className={classes.priceContainer}>
                    <div className={classes.priceContainerItem}>
                        <div className={classes.price}>
                            <label><strong>Subtotal:</strong></label>
                            <label>{subtotal}$</label>
                        </div>
                        <div className={classes.price}>
                            <label><strong>Shipping:</strong></label>
                            <label>{shipping}$</label>
                        </div>
                    </div>
                    <div className={classes.priceContainerItem}>
                        <div className={classes.price}>
                            <label><strong>Total:</strong></label>
                            <label>{subtotal + shipping}$</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OrderDataRow = () => {
    return (
        <div className={classes.OrderDataRow}>
            <label>Product</label>
            <label>Size</label>
            <label>Quantity</label>
            <label>TotalPrice</label>
        </div>
    )
}

export default (OrderReviewContainer);