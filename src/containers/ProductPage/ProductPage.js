import React from 'react';
import { connect } from 'react-redux';
import classes from './ProductPage.module.css'
const ProductPage = props => {
    return (
        <div className={classes.ProductContainer}>
            <div>
            <h1 className={classes.ProductName}>{"None"}</h1>
            </div>
        </div>
    );
};

const State = state =>{
    return {
        products : state.productsReducer
    }
}

export default connect(State) (ProductPage);