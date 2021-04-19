import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinkButton.module.css'

const NavLinkButton = props => {
    const style = props.transparent ? classes.transparent : null
    return (
        <NavLink onClick={props.onclick} className={[classes.NavLinkButton, style].join(' ')} to={props.path}>{props.children}</NavLink>
    )
}


export default NavLinkButton;