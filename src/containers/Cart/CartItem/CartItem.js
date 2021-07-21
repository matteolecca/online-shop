import React, { useState } from 'react';
import Button from '../../../component/Button/Button';
import classes from './CartItem.module.css'
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/slices/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
const CartItem = props => {
    const dispatch = useDispatch()
    const { item } = props
    const [removed, remove] = useState(false)
    const removedClass = removed ? classes.removed : null

    const removeFromCartHandler = (ID, size, price) =>{
        remove(true)
        setTimeout(() => {
            dispatch(removeFromCart({ID : ID, size : size, price : price}))
        }, 500);
    }
    return (
        <div className={[classes.CartItem, removedClass].join(' ')}>
            <div className={classes.imgContainer}>
            <img alt="item" src={item.image} />
            </div>
            <div className={classes.itemInfoContainer}>
                <div className={classes.itemInfo}>
                    <div className={classes.itemName}>{item.name}</div>
                    <label className={classes.itemSize}>Size {item.size}</label>
                </div>
                <div className={classes.itemInfo}>
                <label className={classes.itemPrice}>{item.quantity} X {item.price}$</label>
                </div>
            </div>
            <Button onclick={()=>removeFromCartHandler(item.ID, item.size, item.price)} transparent>X</Button>
        </div>
    );
};

const Actions = dispatch =>{
    return {
        removeFromCart : (ID, size,price)=> dispatch({type : actions.REMOVE_FROM_CART, ID : ID, size : size, price : price})
    }
}
export default connect(null, Actions) (CartItem);