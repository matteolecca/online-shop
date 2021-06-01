import React  from 'react';
import HomeButton from '../../component/HomeButton/HomeButton';
import Searchbar from '../../component/SearchBar/Searchbar';
import classes from './Orders.module.css'
import OrdersContainer from './OrdersContainer/OrdersContainer';

const Orders = props => {
    const { orderID } = props.match.params
    return (
        <div className={classes.Orders}>
            <h1>Find your order</h1>
            <Searchbar {...props}/>
            <OrdersContainer orderID={orderID}/>
            <HomeButton home/>
        </div>
    );
};



export default (Orders);