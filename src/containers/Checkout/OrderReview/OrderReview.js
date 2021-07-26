import React, { useState } from 'react';
import classes from './OrderReview.module.scss'
import OrderReviewBar from './OrderReviewBar/OrderReviewBar';
import OrderReviewContainer from './OrderReviewContainer/OrderReviewContainer';
const OrderReview = () => {
    const [opened, open] = useState(false)
    return (
        <div className={classes.OrderReview}>
            <div className={classes.container}>
                <OrderReviewBar open={open} opened={opened} />
                <OrderReviewContainer open={open} opened={opened} />
            </div>
        </div>
    );
};


export default OrderReview;