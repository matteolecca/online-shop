import React, { createRef, lazy, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Topbar from '../../component/Topbar/Topbar';
import Home from '../Home/Home';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Main.module.css'
import Popup from '../../component/Popup/Popup';
import { Suspense } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const Cart = lazy(() => import('../Cart/Cart'))
const Orders = lazy(() => import('../Orders/Orders'))
const OrdersContainer = lazy(() => import('../Orders/OrdersContainer/OrdersContainer'))
const Checkout = lazy(() => import('../Checkout/Checkout'))

const Main = props => {
    const [sideDrawerOpened, openSideDrawer] = useState(false)
    const [cartOpened, openCart] = useState(false)
    const routeRef = createRef()
    const location = useLocation()
    const openSideDrawerHandler = () => {
        openSideDrawer(!sideDrawerOpened)
        openCart(false)
    }

    const openCartHandler = () => {
        openCart(!cartOpened)
        openSideDrawer(false)
    }
    const fallbackComponent = <div></div>
    return (
        <div className={classes.Main}>
            <TransitionGroup>
                <CSSTransition nodeRef={routeRef} key={location.key} classNames='route' timeout={500} >
                    <div ref={routeRef}>
                        <Switch>
                            <Route path="/" exact >
                                <React.Fragment>
                                    <Topbar openCart={openCartHandler} sideOpened={sideDrawerOpened || cartOpened} onclick={openSideDrawerHandler} />
                                    <SideDrawer onclick={openSideDrawerHandler} opened={sideDrawerOpened} />
                                    <Suspense fallback={fallbackComponent}><Cart onclick={openCartHandler} opened={cartOpened} /></Suspense>
                                    <Home />
                                </React.Fragment>
                            </Route>
                            <Route path="/findorder/" exact render={props => <Suspense fallback={fallbackComponent}><Orders {...props} /></Suspense>} ></Route>
                            <Route path="/findorder/:orderID" render={props => <Suspense fallback={fallbackComponent}><Orders {...props} /></Suspense>} ></Route>
                            <Route path="/orders/:orderID" render={props => <Suspense fallback={fallbackComponent}> <OrdersContainer orderID={props.match.params.orderID} /></Suspense>} ></Route>
                            <Route path="/checkout" ><Suspense fallback={fallbackComponent}><Checkout /></Suspense></Route>
                            <Redirect to="/"></Redirect>
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Popup />
        </div>
    )
};



export default (Main);