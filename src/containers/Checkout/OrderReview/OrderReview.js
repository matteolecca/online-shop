import React, { useState } from 'react';
import classes from './OrderReview.module.css'
import OrderReviewBar from './OrderReviewBar/OrderReviewBar';
import OrderReviewContainer from './OrderReviewContainer/OrderReviewContainer';
const OrderReview = () => {
    const [opened, open] = useState(false)
    return (
        <div className={classes.OrderReview}>
            <OrderReviewBar open={open} opened={opened}/>
            <OrderReviewContainer open={open} opened={opened}/>
        </div>
    );
};


export default OrderReview;