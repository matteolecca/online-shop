import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import classes from './ProductsContainer.module.scss'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ProductsContainer = props => {
    const { products } = props
    const [showed, show] = useState(false)
    let component =
        <div className={classes.emptyCart}>
            <div className={classes.emptyCartContaier}>
                <img src="empty-cart.png" alt="" />
                <div>There are no items yet</div>
            </div>
        </div>

    if (products.length > 0 && products.length <= 3) {
        component = 
        <div className={classes.ProductsContainer}> 
        {products.map(p => {
            return <CartItem item={p} key={p.ID + p.size} />
        })}
        </div>
    }

    if (products.length > 3 && !showed) {
        component =
            <div className={classes.ProductsContainer}>
                {products.map((p, index) => {
                    if (index <= 2) return <CartItem item={p} key={p.ID + p.size} />
                    else return  null
                })}
                <div onClick={() => show(true)} className={classes.expandButton}>
                    <label>Expand</label>
                    <ArrowDownwardIcon />
                </div>
            </div>
    }
    if (products.length > 3 && showed) {
        component =
            <div className={classes.ProductsContainer}>
                {products.map(p => {
                    return <CartItem item={p} key={p.ID + p.size} />
                })}
                <div onClick={() => show(false)} className={classes.expandButton}>
                    <label>Reduce</label>
                    <ArrowUpwardIcon />
                </div>
            </div>
    }
    return component
};

export default ProductsContainer;