import React from 'react';
import Backdrop from '../../component/Backdrop/Backdrop';
import classes from './Cart.module.scss'
import TransitionCSS from 'react-transition-group/CSSTransition';
import Button from '../../component/Button/Button';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import Recap from './Recap/Recap';
import NavLinkButton from '../../component/NavLinkButton/NavLinkButton';
import {  useSelector } from 'react-redux';
import { getCartState } from '../../redux/slices/cart-slice';

const Cart = props => {
    const status = props.opened ? classes.opened : classes.closed
    const nodeRef = React.useRef(null)
    const { products,shipping, subtotal } = useSelector(getCartState)

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
                        {products.length > 0 &&
                            <React.Fragment>
                                <Recap shipping={shipping} subtotal={subtotal} />
                                <div className={classes.ButtonContainer}>
                                    <NavLinkButton onclick={props.onclick} transparent path="/checkout">Checkout</NavLinkButton>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
                <Backdrop onclick={props.onclick} opened />
            </React.Fragment>
        </TransitionCSS>

    );
};


export default (Cart);