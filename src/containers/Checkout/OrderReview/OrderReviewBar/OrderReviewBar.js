import React from 'react';
import classes from './OrderReviewBar.module.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartState } from '../../../../redux/slices/cart-slice';
const OrderReviewBar = props => {
    const {opened, open,} = props
    const arrowStyle = opened ? classes.opened : classes.closed 
    const { subtotal, shipping } = useSelector(getCartState)
    return (
        <div onClick={()=>open(!opened)} className={classes.OrderReviewBar}>
            <div className={classes.OrderReviewContainer}>
                <div>
                    Order Review
                </div>
                <div className={classes.ExpandContainer}>
                    <label>{subtotal + shipping}$</label>
                <ArrowForwardIosIcon  onClick={()=>open(!opened)} className={[classes.ArrowButton,arrowStyle].join(' ')} />
            </div>
            </div>

        </div>
    );
};

export default  (OrderReviewBar);