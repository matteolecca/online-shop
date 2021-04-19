import React from 'react';
import classes from './OrderReviewBar.module.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from 'react-redux';
const OrderReviewBar = props => {
    const {opened, open, subtotal, shipping} = props
    const arrowStyle = opened ? classes.opened : classes.closed 
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
const State = state =>{
    return{
        subtotal : state.cartReducer.subtotal,
        shipping : state.cartReducer.shipping
    }
}
export default connect(State) (OrderReviewBar);