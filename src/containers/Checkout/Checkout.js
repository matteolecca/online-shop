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
import { useSelector, useDispatch } from 'react-redux';
import { getCartState, getCartLength, resetCart } from '../../redux/slices/cart-slice';

const Checkout = props => {
    const { inputs, setValue, emailValid, addressValid, submitOrder, inserted, inserting, orderID, error } = checkoutFormHook()
    const { history } = props
    const dispatch = useDispatch()
    const [leaving, setLeaving] = useState(false)
    const nodeRef = React.useRef(null)
    const cartLength = useSelector(getCartLength)
    const { products } = useSelector(getCartState)

    useEffect(() => {
        if (orderID) {
            dispatch(resetCart())
            history.push(`/orders/${orderID}`)
        }
    }, [history, orderID, dispatch])


    useEffect(() => {
        if (cartLength <= 0) {
            setLeaving(true)
            setTimeout(() => {
                history.push('/')
            }, 500);
        }
    }, [cartLength, history])

    const submitFormHandler = () => {
        submitOrder(products)
    }

    return (
        <div className={classes.Checkout}>
            {leaving && <LoadingPage />}
            <OrderReview />
            <div className={classes.FormContainer}>
                <CheckoutForm title="User Info" group='userInfoForm' inputs={inputs.userInfoForm.inputs} setValue={setValue} />
                <CSSTransition nodeRef={nodeRef} mountOnEnter unmountOnExit in={emailValid} timeout={500} classNames="address-checkout">
                    <div ref={nodeRef} className="formContainer">
                        <CheckoutForm title="Shipping Info" group='shippingInfoForm' inputs={inputs.shippingInfoForm.inputs} setValue={setValue} />
                        <p className={classes.ErrorMessage}>{error ? 'Complete all the fields' : null}</p>
                    </div>
                </CSSTransition>
            </div>
            <div className={classes.ButtonsContainer}>
                <LinkButton path="/" transparent>Leave</LinkButton>
                {addressValid && <Button small={true} loading={inserting} onclick={submitFormHandler} fullwidth><span>Order</span></Button>}
            </div>
            {/* <PaymentForm/> */}
            {inserting && <LoadingPage />}
        </div>
    );
};




export default (withRouter(Checkout));