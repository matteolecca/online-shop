import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './OrderItem.module.css'
import * as actions from '../../../../../redux/actions'
import Button from '../../../../../component/Button/Button';
const OrderItem = props => {
    const { item } = props
    const [removed, remove] = useState(false)
    const style = removed ? classes.removed : null
    const removeFromCartHandler = (ID, size, price) =>{
        remove(true)
        setTimeout(() => {
            props.removeFromCart(ID,size,price)
        }, 500);
    }
    return (
        <div className={[classes.OrderItem,style].join(' ')}>
            <div className={classes.Item}>
                <img alt="" src={item.image} />
                <div className={classes.ItemInfo}>
                    <label>{item.name} x {item.quantity}</label>
                    <label>{item.size}</label>
                    <label>{item.color}</label>
                </div>
            </div>
            <div className={classes.Item}>
                <label>{item.price}$</label>
            <Button onclick={()=>removeFromCartHandler(item.ID, item.size, item.price)} transparent>X</Button>
            </div>
        </div>
    );
};
const Actions = dispatch =>{
    return {
        removeFromCart : (ID, size,price)=> dispatch({type : actions.REMOVE_FROM_CART, ID : ID, size : size, price : price})
    }
}
export default connect(null,Actions) (OrderItem);