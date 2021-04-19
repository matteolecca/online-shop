import React from 'react';
import classes from './MenuElement.module.css'
export const MenuElement = props => {
    return (
        <div className={classes.MenuElement}>
            <img alt="" src={"./icons/" + props.type + ".svg"}/>
            <label>{props.type}</label>
        </div>
    );
};

export const FullLineElement = props =>{
    return (
        <div className={classes.FullLineElement}>
            {props.children}
            <label>{props.type}</label>
        </div>
    );
}
