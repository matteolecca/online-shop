import React, {  useEffect, useState } from 'react';
import classes from './Topbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartLength } from '../../redux/slices/cart-slice';
import { useSelector } from 'react-redux';
const Topbar = props => {
    const [transparent, setTransparent] = useState(true)
    const style = !transparent || props.sideOpened ? classes.solid : null
    const length = useSelector(getCartLength)
    useEffect(()=>{
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                setTransparent(false)
            }
            else if (window.scrollY < 100) {
                setTransparent(true)
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return ()=> window.removeEventListener('scroll', scrollHandler)
    }, [])
    

    return (
        <div className={[classes.Topbar, style].join(' ')}>
            <div className={classes.ButtonsContainer}>
            <MenuIcon className={classes.MenuIcon} onClick={props.onclick} />
            <div className={classes.cart} >
                <Badge  badgeContent={length} color="primary">
                    <ShoppingCartRoundedIcon  onClick={props.openCart} />
                </Badge>
                <NavLink to="findorder"><SearchIcon/></NavLink>
            </div>
            </div>
        </div>
    );
};




export default  (Topbar);