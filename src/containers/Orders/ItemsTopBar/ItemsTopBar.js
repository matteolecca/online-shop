import React from 'react';
import classes from './ItemsTopBar.module.css'
const ItemsTopBar = () => {
    return (
        <div className={classes.ItemsTopBar}>
            <label>Name</label>
            <label>Color</label>
            <label>Quantity</label>
            <label>Size</label>
            <label>Price</label>
        </div>
    );
};

export default ItemsTopBar;