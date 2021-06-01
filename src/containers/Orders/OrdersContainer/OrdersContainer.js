import React, { useEffect } from 'react';
import classes from './OrdersContainer.module.css'
import Spinner from '../../../component/Spinner/Spinner'
import ItemsTopBar from '../ItemsTopBar/ItemsTopBar';
import OrderItems from './OrderItems/OrderItems';
import OrderCustomer from './OrderCustomer/OrderCustomer';
import OrderNotFound from '../OrderNotFound/OrderNotFound';
import NavLinkButton from '../../../component/NavLinkButton/NavLinkButton';
import orderHook from '../../../hooks/order-hook'
const OrdersContainer = props => {
    const { fetchOrder, orderID } = props
    const { loading, orderOverview, loadOrder, error, errorMessage } = orderHook()
    
    useEffect(() => {
        if (orderID) loadOrder(orderID)
    }, [fetchOrder, orderID, loadOrder])

    let Order = null
    if (orderOverview) {
        Order = <React.Fragment>
            <div className="ordernr">
                <h1>Your Order</h1>
                <h2>{orderOverview.order.ID}</h2>
            </div>
            <h2>Status: confirmed</h2>
            <h2 style={{ marginTop: '50px' }}>Items</h2>
            <ItemsTopBar />
            <OrderItems items={orderOverview.products} />
            <div className={classes.OrderPrice} ><h3>Total</h3><label>{orderOverview.order.total}$</label></div>
            <OrderCustomer customer={orderOverview.customer} address={orderOverview.address} />
            <NavLinkButton path="/">Home</NavLinkButton>
        </React.Fragment>
    }
    return (
        <div className={classes.OrdersContainer}>
            {loading ? <div className={classes.SpinnerContainer}><Spinner message="Loading order..." absolutepos dark big /></div> : !orderID ? null : error ? <OrderNotFound>{errorMessage}</OrderNotFound> : Order}
        </div>
    );
};


export default (OrdersContainer);