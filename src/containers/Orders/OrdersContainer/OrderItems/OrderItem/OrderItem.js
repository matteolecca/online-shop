import React from 'react';

const OrderItem = props => {
    const { p } = props
    return (
        <React.Fragment>
        <label>{p.name}</label>
        <label>{p.color}</label>
        <label>{p.quantity}</label>
        <label>{p.size}</label>
        <label>{p.price} $</label>
        </React.Fragment>
    )
};

export default OrderItem;