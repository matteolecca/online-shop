import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Topbar from '../../component/Topbar/Topbar';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import Orders from '../Orders/Orders';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Main.module.css'
import Checkout from '../Checkout/Checkout';
import Popup from '../../component/Popup/Popup';
import { connect } from 'react-redux';
import ErrorPage from '../ErrorPage/ErrorPage';
import OrdersContainer from '../Orders/OrdersContainer/OrdersContainer';
import mainImg from '../../img/main-img.jpg'

const Main = props => {
    const { error } = props.result
    const [sideDrawerOpened, openSideDrawer] = useState(false)
    const [cartOpened, openCart] = useState(false)

    const openSideDrawerHandler = () => {
        openSideDrawer(!sideDrawerOpened)
        openCart(false)
    }

    const openCartHandler = () => {
        openCart(!cartOpened)
        openSideDrawer(false)
    }
    return (
        <div className={classes.Main}>
            {error ? <ErrorPage />
                :

                <Switch>
                    <Route path="/" exact >
                        <React.Fragment>
                            <Topbar openCart={openCartHandler} sideOpened={sideDrawerOpened || cartOpened} onclick={openSideDrawerHandler} />
                            <SideDrawer onclick={openSideDrawerHandler} opened={sideDrawerOpened} />
                            <Cart onclick={openCartHandler} opened={cartOpened} />
                            <Home img={mainImg}/>
                        </React.Fragment>
                    </Route>
                    <Route path="/findorder/" exact render={props => <Orders {...props} />} ></Route>
                    <Route path="/findorder/:orderID" render={props => <Orders {...props} />} ></Route>
                    <Route path="/orders/:orderID" render={props => <OrdersContainer orderID={props.match.params.orderID} />} ></Route>
                    <Route path="/checkout" component={Checkout} />
                    <Redirect to="/"></Redirect>
                </Switch>}
            <Popup />

        </div>
    )
};

const State = state => {
    return {
        result: state.resultReducer
    }
}

export default connect(State)(Main);