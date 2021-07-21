import React, { useState } from 'react';
import Button from '../../../component/Button/Button';
import SizesContainer from '../SizesContainer/SizesContainer';
import classes from './Product.module.css'
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/cart-slice';
import { useDispatch } from 'react-redux';
import { showPopup } from '../../../redux/slices/popup-slice'
const sizes = ['xs', 's', 'm', 'l']
const Product = props => {
    const dispatch = useDispatch()
    const [sizeSelected, selectSize] = useState(sizes[0])
    const { product } = props
    const URL = `product/${product.ID}`


    const addToCartHandler = () => {
        dispatch(showPopup({p : product}))
        dispatch(addToCart({ p : product, s : sizeSelected}))
    }
    return (
        <div className={classes.Product}>
            <NavLink to={URL}><img className={classes.productImage} src={product.image}alt="" /></NavLink>
                <div className={classes.ButtonsContainer}>
            <SizesContainer sizes={sizes} selectSize={selectSize} sizeSelected={sizeSelected}/>
            <Button transparent onclick={addToCartHandler}>Add to cart</Button>
            </div>
            <div className={classes.productInfo}>
                <label>{product.name}</label>
                <label>{product.price}$</label>
            </div>
        </div>
    );
};

const Actions = dispatch =>{
    return {
        addToCart : (product, size)=> dispatch({type : actions.ADD_TO_CART, product : product, size : size}),
        showPopup : (productName)=>dispatch({type: actions.SHOW_POPUP, message : `${productName} added to cart`})
    }
}

export default connect(null, Actions) (Product);