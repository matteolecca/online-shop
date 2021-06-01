import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import OrderReview from './OrderReview/OrderReview';

import Button from '../../component/Button/Button';
import LinkButton from '../../component/NavLinkButton/NavLinkButton';
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../redux/actions'
import classes from './Checkout.module.css'
// import PaymentForm from './PaymentForm/PaymentForm';
import LoadingPage from '../LoadingPage/LoadingPage';
import checkoutFormHook from '../../hooks/checkout-form-hook'
import { withRouter } from 'react-router';


const Checkout = props => {
    const {inputs} = checkoutFormHook()
    const { cart, order, error, success, orderID, loading, history, resetOrder, valid } = props
    const [emailValid, setEmailValid] = useState(false)
    const nodeRef = React.useRef(null)

    useEffect(() => {
        if (success && orderID) {
            history.push(`/orders/${orderID}`)
        }
        return () => resetOrder()
    }, [history, orderID, success, resetOrder])

    useEffect(() => {
        if (order.email.valid) {
            setEmailValid(true)
        }
    }, [order.email.valid])

    useEffect(() => {
        if (cart.length <= 0) history.push('/')
    }, [cart.length, history])

    const submitFormHandler = () => {
         props.sendOrder(order, cart)
    }

    return (
        <React.Fragment>
            <h1>Checkout</h1>
            <OrderReview />
            <div className={classes.FormContainer}>
                <CheckoutForm title="User Info" inputs={inputs.userInfoForm} />
                <CSSTransition nodeRef={nodeRef} mountOnEnter unmountOnExit in={emailValid} timeout={500} classNames="address-checkout">
                    <div ref={nodeRef} className="formContainer">
                        <CheckoutForm title="Shipping Info" inputs={inputs.shippingInfoForm} />
                        <p className={classes.ErrorMessage}>{error ? 'Complete all the fields' : null}</p>
                    </div>
                </CSSTransition>
            </div>
            <div className={classes.ButtonsContainer}>
                <LinkButton path="/" transparent>Leave</LinkButton>
                {valid ? <Button small={true} loading={loading} onclick={submitFormHandler} fullwidth><span>Order</span></Button> : null}
            </div>
            {/* <PaymentForm/> */}
            {loading ? <LoadingPage /> : null}
        </React.Fragment>
    );
};

const State = state => {
    return {
        cart: state.cartReducer.products,
        order: state.orderReducer.inputs,
        error: state.orderReducer.error,
        success: state.orderReducer.success,
        loading: state.orderReducer.loading,
        orderID: state.orderReducer.orderID,
        valid : state.orderReducer.valid
    }
}

const Actions = dispatch => {
    return {
        // validateForm: (order) => dispatch({ type: actions.CHECK_VALIDITY_FORM, order: order }),
        sendOrder: (order, cart) => dispatch({ type: actions.SEND_ORDER, order: order, cart: cart }),
        resetOrder: () => dispatch({ type: actions.RESET_ORDER }),
    }
}

export default connect(State, Actions)(withRouter(Checkout));