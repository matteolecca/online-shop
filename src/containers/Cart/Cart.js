import React from 'react';
import Backdrop from '../../component/Backdrop/Backdrop';
import classes from './Cart.module.css'
import TransitionCSS from 'react-transition-group/CSSTransition';
import { connect } from 'react-redux';
import Button from '../../component/Button/Button';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import Recap from './Recap/Recap';
import NavLinkButton from '../../component/NavLinkButton/NavLinkButton';

const Cart = props => {
    const status = props.opened ? classes.opened : classes.closed
    const nodeRef = React.useRef(null)
    const { products, } = props.cart

    return (
        <TransitionCSS nodeRef={nodeRef} in={props.opened} timeout={500} mountOnEnter unmountOnExit>
            <React.Fragment>
                <div ref={nodeRef} className={[classes.Cart, status].join(' ')}>
                    <div className={classes.CartContainer}>
                        <div className={classes.topBar}>
                            <h2>Cart({products.length})</h2>
                            <Button onclick={props.onclick} transparent>Close</Button>
                        </div>
                        <ProductsContainer products={products} />
                        {products.length > 0 ?
                            <React.Fragment>
                                <Recap shipping={props.cart.shipping} subtotal={props.cart.subtotal} />
                                <div className={classes.ButtonContainer}>
                                    <NavLinkButton onclick={props.onclick} transparent path="/checkout">Checkout</NavLinkButton>
                                </div>
                            </React.Fragment>
                            :
                            null}

                    </div>
                </div>
                <Backdrop onclick={props.onclick} opened />
            </React.Fragment>
        </TransitionCSS>

    );
};

const State = state => {
    return {
        cart: state.cartReducer
    }
}
export default connect(State)(Cart);