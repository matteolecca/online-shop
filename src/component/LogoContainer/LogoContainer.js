import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/t-shirts.svg'
import classes from './LogoContainer.module.scss'
const LogoContainer = () => {
    return (
        <NavLink to='/' className={classes.logoContainer}>
            <div className={classes.logo}>
                <img alt='' src={logo} />
                <span>Online Shop</span>
            </div>
        </NavLink>
    );
};

export default LogoContainer;