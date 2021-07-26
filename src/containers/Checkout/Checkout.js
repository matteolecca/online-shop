import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import OrderReview from './OrderReview/OrderReview';
import { CSSTransition } from 'react-transition-group'
import classes from './Checkout.module.scss'
// import PaymentForm from './PaymentForm/PaymentForm';
import LoadingPage from '../LoadingPage/LoadingPage';
import checkoutFormHook from '../../hooks/checkout-form-hook'
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getCartState, resetCart, getCartLength } from '../../redux/slices/cart-slice';
import LogoContainer from '../../component/LogoContainer/LogoContainer';

const Checkout = props => {
    const { inputs, setValue, emailValid, addressValid, submitOrder, inserting, orderID, error } = checkoutFormHook()
    const { history } = props
    const dispatch = useDispatch()
    const [leaving, setLeaving] = useState(false)
    const nodeRef = React.useRef(null)
    const { products } = useSelector(getCartState)
    const cartLength = useSelector(getCartLength)
    const formHeight = emailValid ? classes.maxHeight : classes.minHeight

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
        <div >
            {leaving && <LoadingPage />}
           <LogoContainer/>
            <div className={classes.Checkout}>
                <OrderReview />
                < >
                    <div className={[classes.FormContainer, formHeight].join(' ')}>
                        <CheckoutForm title="User Info" group='userInfoForm' inputs={inputs.userInfoForm.inputs} setValue={setValue} />
                        <CSSTransition nodeRef={nodeRef} mountOnEnter unmountOnExit in={emailValid} timeout={500} classNames="address-checkout">
                            <div ref={nodeRef} className="formContainer">
                                <CheckoutForm submit={submitFormHandler} valid={addressValid} title="Shipping Info" group='shippingInfoForm' inputs={inputs.shippingInfoForm.inputs} setValue={setValue} />
                                <p className={classes.ErrorMessage}>{error ? 'Complete all the fields' : null}</p>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className={classes.ButtonsContainer}>
                        {/* {addressValid && <Button small={true} loading={inserting} onclick={submitFormHandler} fullwidth><span>Order</span></Button>} */}
                    </div>
                </>
            </div>
            {/* <PaymentForm/> */}
            {inserting && <LoadingPage />}
        </div>
    );
};




export default (withRouter(Checkout));