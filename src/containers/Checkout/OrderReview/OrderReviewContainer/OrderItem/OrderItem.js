import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './OrderItem.module.scss'
import * as actions from '../../../../../redux/actions'
import Button from '../../../../../component/Button/Button';
import { removeFromCart } from '../../../../../redux/slices/cart-slice';
import { useDispatch } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const OrderItem = props => {
    const dispatch = useDispatch()
    const { item } = props
    const [removed, remove] = useState(false)
    const style = removed ? classes.removed : null

    const removeFromCartHandler = (ID, size, price) => {
        remove(true)
        setTimeout(() => {
            dispatch(removeFromCart({ ID: ID, size: size, price: price }))
        }, 500);
    }
    return (
        <div className={[classes.OrderItem, style].join(' ')}>
            <div className={classes.imgDesc}>
                <img alt="" src={item.image} />
                <div className={classes.itemDesc}>
                    <label>{item.name}</label>
                    <label>{item.description}</label>
                </div>
            </div>
            <label>{item.size}</label>
            <label>{item.quantity}</label>
            <div className={classes.Item}>
                <label>{item.price}$</label>
            </div>
            <Button onclick={() => removeFromCartHandler(item.ID, item.size, item.price)} transparent><HighlightOffIcon/></Button>
        </div>
    );
};
const Actions = dispatch => {
    return {
        removeFromCart: (ID, size, price) => dispatch({ type: actions.REMOVE_FROM_CART, ID: ID, size: size, price: price })
    }
}
export default connect(null, Actions)(OrderItem);