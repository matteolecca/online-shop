import React from 'react';
import { FullLineElement, MenuElement } from './MenuElement/MenuElement';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import classes from './SideMenu.module.css'
const SideMenu = () => {
    return (
        <React.Fragment>
        <div className={classes.SideMenu}>
            <MenuElement type="trousers" />
            <MenuElement type="hoodies" />
            <MenuElement type="shirts" />
            <MenuElement type="t-shirts" />
            </div>
            <div className={classes.FullLineContainer}>
                <FullLineElement type="account"><PersonIcon /></FullLineElement>
                <FullLineElement type="shipping"><LocalShippingIcon /></FullLineElement>
                <FullLineElement type="returns"><MarkunreadMailboxIcon /></FullLineElement>
        </div>
        </React.Fragment>
    );
};

export default SideMenu;